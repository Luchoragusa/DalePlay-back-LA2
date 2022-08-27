const Router = require('express');
const router = Router();
const middleware = require('../../validators/middleware');
const {getAll, getOne, createOne, deleteOne, updateOne} = require('../../controllers/generic.controller');
const { Developer } = require('../../database/models/index');

// Genericas
router.get('/', getAll(Developer)); // muestra todos
router.get('/:id', getOne(Developer)); // muestra uno
router.post('/', createOne(Developer)); // crea uno
router.delete('/:id', deleteOne(Developer)); // borra uno
router.patch('/:id', updateOne(Developer)); // actualiza uno


module.exports = router;