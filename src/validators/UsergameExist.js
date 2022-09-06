const { Usergame } = require('../database/models/index');

const UserGameExist = async (req, res, next) => {
   // Recibo las id de user y game

   const idGame = req.body.idGame;
   const idUser = req.userId;

   // Busco si ya existe esa compra

   const userGame = await Usergame.findOne({
       where: {
           idGame,
           idUser
       }
   });
   if (userGame) {
       return res.status(404).json({ msg: 'Ya compraste este juego' });
   }else
   {
         next();
   }
  };

module.exports = {
    UserGameExist
} 