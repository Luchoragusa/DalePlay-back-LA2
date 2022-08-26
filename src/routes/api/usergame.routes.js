const Router = require('express');
const router = Router();
const middleware = require('../../validators/middleware');
const { } = require('../../controllers/role.controller');
const {getAll, createOne, deleteOne} = require('../../controllers/generic.controller');
const { findByIdUser } = require('../../controllers/usergame.controller');

// Genericas
router.get('/', middleware.checkToken, getAll(Role)); // muestra todos
router.post('/', middleware.checkToken, middleware.policy, createOne(Role)); // crea uno
router.delete('/:id', middleware.checkToken, middleware.policy, deleteOne(Role)); // borra uno

// especificas
router.get('/user/:id', middleware.checkToken, findByIdUser); // muestra uno
router.get('/game/:id', middleware.checkToken,); // muestra uno

module.exports = router;