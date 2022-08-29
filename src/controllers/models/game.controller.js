const { Game, Category, Developer, User, Usergame } = require('../../database/models/index');

const findGamesByCategory = async (req,res) => {
    const id = req.params.id
    if(await Category.findByPk(id)) {
        // La categoria existe en la DB
        let games = await Game.findAll({ where: { idCategory: id } });
        // Si obtengo un array vacio, es porque no hay juegos de esa categoria
        // Puse el .length porque sino me daba error
        if (games.length > 0) { 
            return res.status(200).json({games, 'msg':'Encontrados correctamente'})
        } else {
            // Si no hay juegos de esa categoria, devuelvo un 404
            return res.status(404).json({'msg':'No hay juegos para esa categoria'})
        }
    }else{
        // La categoria no existe en la DB
        return res.status(404).json({'msg':'La categoria no existe en la DB'})
    }
};

const findGamesByDeveloper = async (req,res) => {
    const id = req.params.id
    if(await Developer.findByPk(id)) {
        // El developer existe en la DB
        let games = await Game.findAll({ where: { idDeveloper: id } });
        // Si obtengo un array vacio, es porque no hay juegos de ese developer
        // Puse el .length porque sino me daba error
        if (games.length > 0) { 
            return res.status(200).json({games, 'msg':'Encontrados correctamente'})
        } else {
            // Si no hay juegos de esa developer, devuelvo un 404
            return res.status(404).json({'msg':'No hay juegos para ese developer'})
        }
    }else{
        // El developer no existe en la DB
        return res.status(404).json({'msg':'El developer no existe en la DB'})
    }
};

const findGamesByUser = async (req,res) => {
    const id = req.userId
    console.log(id)
    if(await User.findByPk(id)) {
        // El usuario existe en la DB
        let usergames = await Usergame.findAll({ where: { idUser: id } });
        // Si obtengo un array vacio, es porque no hay juegos comprados por ese usuario
        // Puse el .length porque sino me daba error
        if (usergames.length > 0) { 
            // Tengo un array de objetos con los juegos comprados por el usuario
            let games = [];
            await usergames.forEach(element => {

                // De esta forma me devuelve una promesa

                let game = Game.findByPk(element.idGame);
                console.log(game);

                // De estar forma me devuelve los datos por separado

                // Game.findByPk(element.idGame).then(game => {
                //     console.log("Los datos del juego son: " + game.name);
                //     games.push(game);
                // });
            });
            console.log(games);

            return res.status(200).json({games, 'msg':'Encontrados correctamente'})
        } else {
            // Si no hay juegos de ese usuario, devuelvo un 404
            return res.status(404).json({'msg':'No hay juegos para ese usuario'})
        }
    }else{
        // El usuario no existe en la DB
        return res.status(404).json({'msg':'El usuario no existe en la DB'})
    }
};

module.exports = {
    findGamesByCategory,
    findGamesByDeveloper,
    findGamesByUser
};