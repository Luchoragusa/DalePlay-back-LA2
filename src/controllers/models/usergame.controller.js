const { userGame, game } = require('../../database/models/index');

const findByIdUser = async (req,res) => {
    const id = req.params.id
    let usergames = await userGame.findAll({ where: { idUser: id } });
    if (usergames) {
        let games = []
        // usergames seria un array con las id de los juegos que tiene el usuario
        usergames.forEach(g => {
            games = game.findOne({ where: { id: g.idGame } })
        });
        if(games){
            return res.status(200).json({'status':200, games, 'msg':'Encontrados correctamente'})
        }
    } else {
        return res.status(404).json({'msg':'No hay datos'})
    }
};





module.exports = {
    findByIdUser
};