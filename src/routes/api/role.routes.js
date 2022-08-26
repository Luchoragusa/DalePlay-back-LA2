const Router = require('express');
const router = Router();
const middleware = require('../../validators/middleware');
const { } = require('../../controllers/role.controller');
const {getAll, getOne, createOne, deleteOne, updateOne} = require('../../controllers/generic.controller');
const { Role } = require('../../database/models/index');

// Genericas
router.get('/', middleware.checkToken, getAll(Role)); // muestra todos
router.get('/:id', middleware.checkToken, getOne(Role)); // muestra uno
router.post('/', middleware.checkToken, middleware.policy, createOne(Role)); // crea uno
router.delete('/:id', middleware.checkToken, middleware.policy, deleteOne(Role)); // borra uno
router.patch('/:id', middleware.checkToken, middleware.policy, updateOne(Role)); // actualiza uno

module.exports = router;