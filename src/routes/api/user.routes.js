const Router = require('express');
const router = Router();
const middleware = require('../../validators/middleware');
const {register, update, login } = require('../../controllers/models/user.controller');
const { User } = require('../../database/models/index');
const {getAll, getOne, deleteOne} = require('../../controllers/generic.controller');
const { validateLogin, validateRegister } = require('../../validators/auth');
const { EmailIsUnique } = require('../../validators/EmailIsUnique');

// Genericas
router.get('/', middleware.checkToken, getAll(User)); // muestra todos
router.get('/:id', middleware.checkToken, getOne(User)); // muestra uno
router.delete('/:id', middleware.checkToken, middleware.policy, deleteOne(User)); // borra uno

//  Especificas
router.post('/register', validateRegister, EmailIsUnique, register); // Registrar un usuario en la DB
router.post('/login', validateLogin, login); // crea uno
router.patch('/:id', middleware.checkToken, middleware.policy, EmailIsUnique,update); // actualiza uno


module.exports = router;
