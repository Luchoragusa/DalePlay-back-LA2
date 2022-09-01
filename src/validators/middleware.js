const jwt = require('jwt-simple');
const moment = require('moment');
const { User, Role } = require('../database/models/index');
const { validateResult } = require('../helpers/validateHelper');

const checkToken = [ 
    async (req, res, next) => {
        if (!req.headers['user-token']) {
            return res.status(401).json({msg:"Es necesario incluir el token en la cabecera"})
        }
        const userToken = req.headers['user-token'];

        if (userToken === "null") {
            return res.status(401).json({msg:"No autorizado 1"})
        }

        let payload = {};

        try{
            payload = jwt.decode(userToken, process.env.HASH_KEY);
        } catch (err) {
            return res.status(401).json({msg:"No autorizado 2 " + err})
        }

        if(payload.expiredAt <= moment().unix()) {
            return res.status(401).json({msg:"Sesion expirada"})
        }

        console.log('Token validado correctamente!');
        next();
        req.userId = payload.userId; // Le seteo la id a la "sesion" en "req.userId" entontes se que este es el usuariuo y puedo validar si es admin o no

        // (req, res, next) => {
        //     console.log('Hace el next');
        //     validateResult(req, res, next)
        // }
    }
];

const policy = [ 
    async (req, res, next) => { // esta funcion es para los roles de los usuarios, esto se analiza antes de hacer algo 
        // Traigo el rol de Admin
        const role = await Role.findOne({ where: { name: 'Admin' } });
        // Traigo el usuario que esta haciendo la peticion
        const user = await User.findOne({ where: { id: req.userId } });
        // Si el rol del usuario es Admin, continua
        if (user.idRole == role.id){
            req.isAdmin = true;
            console.log('Es admin');
        } else {
            res.status(401).json({msg:"No autorizado, tenes que ser admin"})
        }
        // (req, res, next) => {
        //     validateResult(req, res, next)
        // }
        next();
    }
];

module.exports = {
    checkToken,
    policy
}