const Router = require('express');
const router = Router();
const middleware = require('../../validators/middleware');
const { findGamesByCategory, findGamesByDeveloper, findGamesByUser } = require('../../controllers/models/game.controller');
const {getAll, getOne, createOne, deleteOne, updateOne} = require('../../controllers/generic.controller');
const { Game } = require('../../database/models/index');
const { validateGame } = require('../../validators/input');

// Genericas
router.get('/', getAll(Game)); // muestra todos
router.get('/:id', getOne(Game)); // muestra uno
router.post('/', middleware.policy, validateGame, createOne(Game)); // crea uno
router.delete('/:id', /*middleware.policy,*/ deleteOne(Game)); // borra uno
router.patch('/:id', /*middleware.policy,*/ updateOne(Game)); // actualiza uno

//Especificas
router.get('/category/:id', findGamesByCategory); // Te devuelve todos los juegos de esa categoria
router.get('/developer/:id', findGamesByDeveloper); // Te devuelve todos los juegos de esa categoria
router.get('/user/:id', middleware.checkToken, findGamesByUser); // Te devuelve todos los juegos que tiene el usuario

module.exports = router;