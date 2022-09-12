const Router = require('express');
const router = Router();
const { policy, checkToken } = require('../../validators/middleware');
const { getOne, getAll, deleteOne } = require('../../controllers/models/game.controller');
const { createOne, updateOne} = require('../../controllers/generic.controller');
const { Game } = require('../../database/models/index');
const { validateGame } = require('../../validators/input');

// Genericas
router.post('/', checkToken, policy, validateGame, createOne(Game)); // crea uno
router.patch('/:id', checkToken, policy, validateGame,  updateOne(Game)); // actualiza uno

// Especificas
router.get('/', getAll); // muestra todos
router.get('/:id', checkToken, getOne); // muestra uno
router.delete('/:id', checkToken, policy, deleteOne); // borra uno

module.exports = router;