const { User } = require('../../database/models/index');
const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');
const { EmailIsUniqueB } = require('../../validators/EmailIsUnique');


const update = async (req,res) => { // Ver como trabajar el update por parametros, pq capaz no quiero actualizar TODO
    const params = req.body;
    const id = req.params.id;
    let u = await User.findByPk(id);
    if (u) {
        let email = u.email;
        // Valido para cambiar el correo
        if (u.email != params.email){ // El mail del body es distinto al del usuario
            console.log("Voy a validar el email")
            const emailUnique = await EmailIsUniqueB(req, res); // Valido si ese mail lo tiene otro usuario

            if (emailUnique){
                email = params.email; // Si el correo es distinto al de la db y no esta en uso, guardo el nuevo
            }else{
                return res.status(404).json({msg:"El mail ya fue registrado"})
            }
        }
        // Hago el update
        u.update({
            name: params.name || u.name,
            surname: params.surname || u.surname,
            idRole: params.idRole || u.idRole,
            email: email
        }).then(u => {
          res.status(201).json({u, 'msg':'Editado correctamente'})
        })
    } else {
        return res.status(404).json({msg:"Usuario no encontrado"})
    }
};

// Video de login y registro con JWT

const register =  async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10); // tomo la pw que me llega, la encripto y la guardo en el campo password
    const u = await User.create(req.body);
    if (u) {
        return res.status(200).json({'msg':'Creado correctamente', u})
    } else {
        return res.status(404).json({'msg':'No se recibieron los datos'})
    }
}

const login = async (req, res) => {
    //Comprobar email en DB
    const u = await User.findOne({ where: { email: req.body.email } });
    if(u){
        // El mail esra en la db
        if(bcrypt.compareSync(req.body.password, u.password)){
            // Creo el token
            let token = createToken(u);
            // Guardo el token en la cookie
            res.cookie('jwt', token, { httpOnly: true, secure: true });
            return res.status(200).json({token})
        } else {
            return res.status(404).json({'msg':'Email y/o contraseña incorrectos'})
        }
    }else{
        // Email no se encontro en la DB
        return res.status(404).json({'msg':'Email y/o contraseña incorrectos'})
    }
}

// const logOut = async (req, res, next) => {
//     //Eliminar cookie jwt
//     res.clearCookie('jwt')
//     //Redirigir a la vista de login
//     return res.redirect('/login')
// };

const createToken = (u) => {
    const payload = {
        userId: u.id,
        email: u.email,
        role: u.idRole,
        createdAt: moment().unix(),
        expiredAt: moment().add(30, 'minutes').unix()
    }
    return jwt.encode(payload, process.env.HASH_KEY) // poner una frease secreta en el .env
}

module.exports = {
    register,
    update,
    login,
//    logOut
};