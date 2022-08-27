const Router = require('express');
const router = Router();
const middleware = require('../../validators/middleware');
const {getAll, getOne, createOne, deleteOne, updateOne} = require('../../controllers/generic.controller');
const { role } = require('../../database/models/index');

// Genericas
router.get('/', middleware.checkToken, getAll(role)); // muestra todos
router.get('/:id', middleware.checkToken, getOne(role)); // muestra uno
router.post('/', middleware.checkToken, middleware.policy, createOne(role)); // crea uno
router.delete('/:id', middleware.checkToken, middleware.policy, deleteOne(role)); // borra uno
router.patch('/:id', middleware.checkToken, middleware.policy, updateOne(role)); // actualiza uno

module.exports = router;