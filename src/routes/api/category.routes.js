const Router = require('express');
const router = Router();
const { policy } = require('../../validators/middleware');
const { Category } = require('../../database/models/index');
const {getAll, getOne, createOne, deleteOne, updateOne} = require('../../controllers/generic.controller');
const { validateCategory } = require('../../validators/input');

// Genericas
router.get('/', getAll(Category)); // muestra todos
router.get('/:id', getOne(Category)); // muestra uno
router.post('/', policy, validateCategory, createOne(Category)); // crea uno
router.delete('/:id', policy, deleteOne(Category)); // borra uno
router.patch('/:id', policy, validateCategory, updateOne(Category)); // actualiza uno

module.exports = router;
