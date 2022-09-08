const Router = require('express');
const router = Router();
const { policy } = require('../../validators/middleware');
const {getAll, getOne, createOne, deleteOne, updateOne} = require('../../controllers/generic.controller');
const { Developer } = require('../../database/models/index');
const { validateDeveloper } = require('../../validators/input');
const { findGamesByDeveloper } = require('../../controllers/models/game.controller');

// Genericas
router.get('/', getAll(Developer)); // muestra todos
router.get('/:id', getOne(Developer)); // muestra uno
router.post('/', policy, validateDeveloper, createOne(Developer)); // crea uno
router.delete('/:id', policy,  deleteOne(Developer)); // borra uno
router.patch('/:id', policy, validateDeveloper, updateOne(Developer)); // actualiza uno

// Especificas
router.get('/:id/games', findGamesByDeveloper); // Te devuelve todos los juegos de esa categoria

module.exports = router;