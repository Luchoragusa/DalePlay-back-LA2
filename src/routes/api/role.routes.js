const Router = require('express');
const router = Router();
const { policy, checkToken } = require('../../validators/middleware');
const {getAll, getOne, createOne, deleteOne, updateOne} = require('../../controllers/generic.controller');
const { Role } = require('../../database/models/index');
const { validateRole } = require('../../validators/input');

// La validacion del token la hago aca pq no puedo registrar el 1 usuario sin antes tener los roles cargados

// Genericas
router.get('/', checkToken, getAll(Role)); // muestra todos
router.get('/:id', checkToken, getOne(Role)); // muestra uno
router.post('/', validateRole, createOne(Role)); // crea un role
router.delete('/:id', policy,  checkToken, deleteOne(Role)); // borra uno
router.patch('/:id', policy, checkToken, validateRole, updateOne(Role)); // actualiza uno

module.exports = router;