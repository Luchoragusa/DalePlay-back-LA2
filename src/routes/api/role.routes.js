const Router = require('express');
const router = Router();
const middleware = require('../../validators/middleware');
const {getAll, getOne, createOne, deleteOne, updateOne} = require('../../controllers/generic.controller');
const { Role } = require('../../database/models/index');

// Genericas
router.get('/', getAll(Role)); // muestra todos
router.get('/:id', getOne(Role)); // muestra uno
router.post('/', /*middleware.policy,*/ createOne(Role)); // crea un role
router.delete('/:id', /*middleware.policy,*/ deleteOne(Role)); // borra uno
router.patch('/:id', /*middleware.policy,*/ updateOne(Role)); // actualiza uno

module.exports = router;