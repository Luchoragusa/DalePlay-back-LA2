const Router = require('express');
const router = Router();
const { policy, checkToken } = require('../../validators/middleware');
const {register, update, login, logOut } = require('../../controllers/models/user.controller');
const { User } = require('../../database/models/index');
const {getAll, getOne, deleteOne} = require('../../controllers/generic.controller');
const { validateLogin, validateRegister } = require('../../validators/auth');
const { EmailIsUnique } = require('../../validators/EmailIsUnique');

// Genericas
router.get('/', checkToken, getAll(User)); // muestra todos
router.get('/:id', checkToken, getOne(User)); // muestra uno
router.delete('/:id', checkToken, policy, deleteOne(User)); // borra uno

//  Especificas
router.post('/register', validateRegister, EmailIsUnique, register); // Registrar un usuario en la DB
router.post('/login', validateLogin, login); // crea uno
router.patch('/:id', checkToken, policy, EmailIsUnique, update); // actualiza uno
// router.post('/logout', checkToken, logOut); // cierra sesion

module.exports = router;
