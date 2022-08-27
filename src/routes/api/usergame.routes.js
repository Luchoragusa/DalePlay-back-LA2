const Router = require('express');
const router = Router();
const middleware = require('../../validators/middleware');
const { userGame } = require('../../database/models/index');
const {getAll, createOne, deleteOne} = require('../../controllers/generic.controller');
const { findByIdUser } = require('../../controllers/usergame.controller');

// Genericas
router.get('/', middleware.checkToken, getAll(userGame)); // muestra todos
router.post('/', middleware.checkToken, middleware.policy, createOne(userGame)); // crea uno
router.delete('/:id', middleware.checkToken, middleware.policy, deleteOne(userGame)); // borra uno

// especificas
router.get('/user/:id', middleware.checkToken, findByIdUser); // muestra uno
router.get('/game/:id', middleware.checkToken); // muestra uno

module.exports = router;