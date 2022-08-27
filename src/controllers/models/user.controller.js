const { User } = require('../../database/models/index');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');

const update = async (req,res) => { // Ver como trabajar el update por parametros, pq capaz no quiero actualizar TODO
    const params = req.body;
    const id = req.params.id;
    let user = await User.findByPk(id);
    if (id) {
        user.update({
            name: params.name || user.name,
            surname: params.surname || user.surname,
            email: params.email || user.email,
            idRole: params.idRole || user.idRole
        }).then(user => {
          res.status(201).json({status:201,user, 'msg':'Editado correctamente'})
        })
    } else {
        return res.status(404).json({msg:"Usuario no encontrado"})
    }
};

// Video de login y registro con JWT

const register =  async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10); // tomo la pw que me llega, la encripto y la guardo en el campo password
    const user = await User.create(req.body);
    if (user) {
        return res.status(200).json({'status':200, user, 'msg':'Creado correctamente'})
    } else {
        return res.status(404).json({'msg':'No se recibieron los datos'})
    }
}

const login = async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } });
    if(user){
        const validPassword = bcrypt.compareSync(req.body.password, user.password);
        if(validPassword){
            return res.status(200).json({'status':200, msg: createToken(user) })
        } else {
            return res.status(404).json({'msg':'Email y/o contraseña incorrectos'})
        }
    }else{
        return res.status(404).json({'msg':'Email y/o contraseña incorrectos'})
    }
}

const createToken = (user) => {
    const payload = {
        userId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    }
    return jwt.encode(payload, 'secretKey') // poner una frease secreta en el .env
}

module.exports = {
    register,
    update,
    login
};