const { User } = require('../database/models/index');

const EmailIsUnique = async (req, res, next) => {
  const user = await User.findOne({ where: { email: req.body.email } })
  console.log(user)
  if (user) {
      //Email ya esta en la DB
      return res.status(400).json({msg: "El email ingresado ya se encuentra en uso"})
    }else{
      next()
    }
  };

module.exports = {
  EmailIsUnique
} 