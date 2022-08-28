const { Game } = require('../../database/models/index');

const findGamesByCategory = async (req,res) => {
    const id = req.params.id
    let games = await Game.findAll({ where: { idCategory: id } });
    // Si obtengo un array vacio, es porque no hay juegos de esa categoria
    // Puse el .length porque sino me daba error
    if (games.length > 0) { 
        return res.status(200).json({games, 'msg':'Encontrados correctamente'})
    } else {
        // Si no hay juegos de esa categoria, devuelvo un 404
        return res.status(404).json({'msg':'No hay datos'})
    }
};

const findGamesByDeveloper = async (req,res) => {
    const id = req.params.id
    let games = await Game.findAll({ where: { idDeveloper: id } });
    // Si obtengo un array vacio, es porque no hay juegos de esa categoria
    // Puse el .length porque sino me daba error
    if (games.length > 0) { 
        return res.status(200).json({games, 'msg':'Encontrados correctamente'})
    } else {
        // Si no hay juegos de esa categoria, devuelvo un 404
        return res.status(404).json({'msg':'No hay datos'})
    }
};

module.exports = {
    findGamesByCategory,
    findGamesByDeveloper
};