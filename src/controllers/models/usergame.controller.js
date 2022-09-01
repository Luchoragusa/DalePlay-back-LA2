const { Usergame, Game, User } = require('../../database/models/index');

// const getAll = async (req, res) => {
//     const userGames = await Usergame.findAll({
//         include: [
//             {
//                 model: 'Game',
//                 attributes: ['idGame', 'name', 'image']
//             },
//             {
//                 model: 'User',
//                 attributes: ['idUser', 'name', 'surname']      
//             }
//         ]
//     });
//     res.status(200).json({ userGames });
// };

const create = async (req, res) => {
    // Recibo las id de user y game
    const idGame = req.params.id;
    const idUser = req.userId;

    const ug = await Usergame.create({idGame, idUser});
    if (ug) {
        res.status(200).json({ msg: 'Compra realizada con exito' });
    } else {
        res.status(404).json({ msg: 'No se pudo realizar la compra' });
    }
};

module.exports = {
    create
};