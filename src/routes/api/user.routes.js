const Router = require('express');
const router = Router();
const middleware = require('../../validators/middleware');
const {register, update, login } = require('../../controllers/user.controller');
const { User } = require('../../database/models/index');
const {getAll, getOne, deleteOne} = require('../../controllers/generic.controller');
const { validateEmail, validatePassword } = require('../../validators/auth');

// Genericas
router.get('/', middleware.checkToken, getAll(User)); // muestra todos
router.get('/:id', middleware.checkToken, getOne(User)); // muestra uno
router.delete('/:id', middleware.checkToken, middleware.policy, deleteOne(User)); // borra uno

//  Especificas
router.post('/register', validateEmail, validatePassword, register); // logearse
router.post('/login', validateEmail, validatePassword,login); // crea uno
router.patch('/:id', middleware.checkToken, middleware.policy, update); // actualiza uno


module.exports = router;
