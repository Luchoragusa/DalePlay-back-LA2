const Router = require('express');
const router = Router();
const { policy, checkToken } = require('../../validators/middleware');
const { findGamesByCategory, findGamesByDeveloper, findGamesByUser, getOne, getAll } = require('../../controllers/models/game.controller');
const { createOne, deleteOne, updateOne} = require('../../controllers/generic.controller');
const { Game } = require('../../database/models/index');
const { validateGame } = require('../../validators/input');

// Genericas
router.get('/', getAll); // muestra todos
router.post('/', policy, validateGame, createOne(Game)); // crea uno
router.delete('/:id', policy, deleteOne(Game)); // borra uno
router.patch('/:id', policy, validateGame, updateOne(Game)); // actualiza uno

// Especificas
router.get('/:id', getOne); // muestra uno
router.get('/category/:id', findGamesByCategory); // Te devuelve todos los juegos de esa categoria
router.get('/developer/:id', findGamesByDeveloper); // Te devuelve todos los juegos de esa categoria
router.get('/user/:id', checkToken, findGamesByUser); // Te devuelve todos los juegos que tiene el usuario

module.exports = router;