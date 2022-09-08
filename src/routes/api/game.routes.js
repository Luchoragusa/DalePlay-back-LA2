const Router = require('express');
const router = Router();
const { policy, checkToken } = require('../../validators/middleware');
const { findGamesByDeveloper, findGamesByUser, getOne, getAll } = require('../../controllers/models/game.controller');
const { createOne, deleteOne, updateOne} = require('../../controllers/generic.controller');
const { Game } = require('../../database/models/index');
const { validateGame } = require('../../validators/input');

// Genericas
router.post('/', policy, validateGame, createOne(Game)); // crea uno
router.delete('/:id', policy, deleteOne(Game)); // borra uno
router.patch('/:id', policy, validateGame, updateOne(Game)); // actualiza uno

// Especificas
router.get('/', getAll); // muestra todos
router.get('/:id', getOne); // muestra uno

module.exports = router;