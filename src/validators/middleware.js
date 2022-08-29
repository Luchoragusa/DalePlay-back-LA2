const jwt = require('jwt-simple');
const moment = require('moment');
const { User } = require('../database/models/index');
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
            payload = jwt.decode(userToken, "secretKey");
        } catch (err) {
            return res.status(401).json({msg:"No autorizado 2 " + err})
        }

        if(payload.expiredAt <= moment().unix()) {
            return res.status(401).json({msg:"Sesion expirada"})
        }

        console.log('Ya paso el token');

        req.userId = payload.userId; // Le seteo la id a la "sesion" en "req.userId" entontes se que este es el usuariuo y puedo validar si es admin o no
        
        (req, res, next) => {
            validateResult(req, res, next)
        }
    }
];

const policy = [ 
    async (req, res, next) => { // esta funcion es para los roles de los usuarios, esto se analiza antes de hacer algo 
        const user = await User.findOne({ where: { id: req.userId } }); // creo q falla pq no esta conectado con la db
        if (user.idRole == 1){
            req.isAdmin = true;
            console.log('Es admin');
        } else {
            res.status(401).json({msg:"No autorizado, tenes que ser admin"})
        }
        (req, res, next) => {
            validateResult(req, res, next)
        }
    }
];

module.exports = {
    checkToken,
    policy
}