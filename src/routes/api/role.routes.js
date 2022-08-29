const Router = require('express');
const router = Router();
const { policy } = require('../../validators/middleware');
const {getAll, getOne, createOne, deleteOne, updateOne} = require('../../controllers/generic.controller');
const { Role } = require('../../database/models/index');
const { validateRole } = require('../../validators/input');

// Genericas
router.get('/', getAll(Role)); // muestra todos
router.get('/:id', getOne(Role)); // muestra uno
router.post('/', policy, validateRole, createOne(Role)); // crea un role
router.delete('/:id', policy,  deleteOne(Role)); // borra uno
router.patch('/:id', policy, validateRole, updateOne(Role)); // actualiza uno

module.exports = router;