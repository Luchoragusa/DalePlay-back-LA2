const Router = require('express');
const router = Router();
const middleware = require('../../validators/middleware');
const { findGameByCategory } = require('../../controllers/models/game.controller');
const {getAll, getOne, createOne, deleteOne, updateOne} = require('../../controllers/generic.controller');
const { game } = require('../../database/models/index');

// Genericas
router.get('/', getAll(game)); // muestra todos
router.get('/:id', getOne(game)); // muestra uno
router.post('/', createOne(game)); // crea uno
router.delete('/:id', deleteOne(game)); // borra uno
router.patch('/:id', updateOne(game)); // actualiza uno

//Especificas
// router.get('/category/:id', findGameByCategory); // busca por categoria

module.exports = router;