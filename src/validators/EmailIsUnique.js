const { user } = require('../database/models/index');

const EmailIsUnique = async (req, res, next) => {
  let email = req.body.email

  user.findOne({
    where:{email:email}
  }).then(u =>{
    if (u) {
      //Email invalido
      return res.status(400).json({msg: "El email ingresado ya se encuentra en uso"})
    }else{
      next()
    }
  }).catch(err => {
    //Fallo al buscar el email en la base de datos
    return res.status(500).json(err.message)
  })
};

module.exports = {
  EmailIsUnique
} 