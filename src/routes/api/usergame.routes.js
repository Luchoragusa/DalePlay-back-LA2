const Router = require('express');
const router = Router();
const middleware = require('../../validators/middleware');
const { userGame } = require('../../database/models/index');
const {getAll, createOne, deleteOne} = require('../../controllers/generic.controller');
const { findByIdUser } = require('../../controllers/models/usergame.controller');

// Genericas
router.get('/', getAll(userGame)); // muestra todos
router.post('/', middleware.policy, createOne(userGame)); // crea uno
router.delete('/:id', middleware.policy, deleteOne(userGame)); // borra uno

// especificas
router.get('/user/:id', findByIdUser); // muestra un listado de juegos que tiene el usuario
router.get('/game/:id'); // muestra un listado de usuarios que tienen el juego

module.exports = router;