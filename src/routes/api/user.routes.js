const Router = require('express');
const router = Router();
const { policy, checkToken } = require('../../validators/middleware');
const {register, update, login, logOut, getOne, getAll } = require('../../controllers/models/user.controller');
const { User } = require('../../database/models/index');
const {deleteOne} = require('../../controllers/generic.controller');
const { validateLogin, validateRegister } = require('../../validators/auth');
const { EmailIsUnique } = require('../../validators/EmailIsUnique');

// Genericas
router.delete('/:id', checkToken, policy, deleteOne(User)); // borra uno

//  Especificas
router.get('/', checkToken, getAll); // muestra todos
router.get('/:id', checkToken, getOne); // muestra uno
router.post('/register', validateRegister, EmailIsUnique, register); // Registrar un usuario en la DB
router.post('/login', validateLogin, login); // crea uno
router.patch('/:id', checkToken, policy, update); // actualiza uno
// router.post('/logout', checkToken, logOut); // cierra sesion

module.exports = router;
