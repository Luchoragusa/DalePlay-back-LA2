const { User } = require('../database/models/index');

const EmailIsUnique = async (req, res, next) => {
  const user = await User.findOne({ where: { email: req.body.email } })
  if (user) {
      //Email ya esta en la DB
      return res.status(400).json({msg: "El email ingresado ya se encuentra en uso"})
    }else{
      next()
    }
  };

  const EmailIsUniqueB = async (req, res, next) => {
    const user = await User.findOne({ where: { email: req.body.email } })
    if (user) {
        //Email ya esta en la DB
        return false;
      }else{
        return true;
      }
    };

module.exports = {
  EmailIsUnique,
  EmailIsUniqueB
} 

