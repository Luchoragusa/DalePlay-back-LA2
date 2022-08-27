const Router = require('express');
const router = Router();
const middleware = require('../../validators/middleware');
const { category } = require('../../database/models/index');
const {getAll, getOne, createOne, deleteOne, updateOne} = require('../../controllers/generic.controller');

// Genericas
router.get('/', getAll(category)); // muestra todos
router.get('/:id', middleware.checkToken, getOne(category)); // muestra uno
router.post('/', middleware.checkToken, middleware.policy, createOne(category)); // crea uno
router.delete('/:id', middleware.checkToken, middleware.policy, deleteOne(category)); // borra uno
router.patch('/:id', middleware.checkToken, middleware.policy, updateOne(category)); // actualiza uno

module.exports = router;