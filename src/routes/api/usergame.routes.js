const Router = require('express');
const router = Router();
const { policy } = require('../../validators/middleware');
const { Usergame } = require('../../database/models/index');
const {getAll, createOne, deleteOne} = require('../../controllers/generic.controller');

// Genericas
router.get('/', getAll(Usergame)); // muestra todos
router.post('/', policy,  createOne(Usergame)); // crea uno
router.delete('/:id', policy, deleteOne(Usergame)); // borra uno

// No les hago validacion porque los datos que vienen del fron son seleccionados y no ingreados manualemnte por el usuario

module.exports = router;