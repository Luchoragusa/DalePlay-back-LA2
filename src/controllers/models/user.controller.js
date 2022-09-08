const { User, Role } = require('../../database/models/index');
const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');
const { EmailIsUniqueB } = require('../../validators/EmailIsUnique');
const externalApi = require('../../helpers/externalApi');


const getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: { id },
            attributes: { exclude: ['password', 'idRole'] },
            include: [{model: Role}]
        });
        if (!user) {
            return res.status(404).json({ msg: 'Usuario no encontrado' });
        } else {
            // Econtro el usuario en la db
            const seed = user.seed;
            const url = await externalApi(seed);

            // Devuelvo todos los datos y la url de la imagen
            let u = user.dataValues;
            u.image = url;

            return res.status(200).json(u);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const getAll = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password', 'idRole'] },
            include: [{model: Role}]
        });
        if (!users) {
            return res.status(404).json({ msg: 'Usuarios no encontrados' });
        } else {
            const usersArray = [];
            const promises = users.map(async (user) => {
                const seed = user.seed;
                const url = await externalApi(seed);

                // Devuelvo todos los datos y la url de la imagen
                user.dataValues.image = url;

                usersArray.push(user);
            });
            // Espero a que se resuelvan todas las promesas
            await Promise.all(promises);
            return await res.status(200).json(usersArray);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const update = async (req,res) => {
    try{
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
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

const register =  async (req, res) => {
    try{
        req.body.password = bcrypt.hashSync(req.body.password, 10); // tomo la pw que me llega, la encripto y la guardo en el campo password
        const u = await User.create(req.body);
        if (u) {
            return res.status(200).json({'msg':'Creado correctamente', u})
        } else {
            return res.status(404).json({'msg':'No se recibieron los datos'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const login = async (req, res) => {
    try{
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
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
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
    getOne,
    getAll,
    register,
    update,
    login,
//    logOut
};