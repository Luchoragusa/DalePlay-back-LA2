const Router = require('express');
const router = Router();
const middleware = require('../../validators/middleware');
const { findGameByCategory } = require('../../controllers/models/game.controller');
const {getAll, getOne, createOne, deleteOne, updateOne} = require('../../controllers/generic.controller');
const { Game } = require('../../database/models/index');

// Genericas
router.get('/', getAll(Game)); // muestra todos
router.get('/:id', getOne(Game)); // muestra uno
router.post('/', createOne(Game)); // crea uno
router.delete('/:id', deleteOne(Game)); // borra uno
router.patch('/:id', updateOne(Game)); // actualiza uno

//Especificas
router.get('/category/:id', findGameByCategory); // busca por categoria

module.exports = router;