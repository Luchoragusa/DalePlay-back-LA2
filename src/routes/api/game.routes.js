const Router = require('express');
const router = Router();
const { policy, checkToken } = require('../../validators/middleware');
const { getOne, getAll, deleteOne } = require('../../controllers/models/game.controller');
const { createOne, updateOne} = require('../../controllers/generic.controller');
const { Game } = require('../../database/models/index');
const { validateGame } = require('../../validators/input');

// Genericas
router.post('/', policy, validateGame, createOne(Game)); // crea uno
router.patch('/:id', policy, validateGame, updateOne(Game)); // actualiza uno

// Especificas
router.get('/', getAll); // muestra todos
router.get('/:id', getOne); // muestra uno
router.delete('/:id', policy, deleteOne); // borra uno

module.exports = router;