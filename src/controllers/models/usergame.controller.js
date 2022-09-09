const { Usergame, Game, User } = require('../../database/models/index');
const { sendPurchasenEmail } = require('../../helpers/sendEmail');

const create = async (req, res) => {
    try{
        // Recibo las id de user y game
        const idGame = req.body.idGame;;
        const idUser = req.userId;

        const ug = await Usergame.create({idGame, idUser});
        if (ug) {
            const game = await Game.findByPk(idGame);
            const user = await User.findByPk(idUser);
            sendPurchasenEmail(user, game);
            res.status(200).json({ msg: 'Compra realizada con exito' });
        } else {
            res.status(404).json({ msg: 'No se pudo realizar la compra' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

module.exports = {
    create
};