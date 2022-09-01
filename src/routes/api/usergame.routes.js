const Router = require('express');
const router = Router();
const { policy } = require('../../validators/middleware');
const { Usergame } = require('../../database/models/index');
const { createOne, deleteOne} = require('../../controllers/generic.controller');
const { getAll, create } = require('../../controllers/models/usergame.controller');
const { UserGameExist } = require('../../validators/UsergameExist');

// Genericas
router.get('/', getAll ); // muestra todos
router.post('/:id', policy, UserGameExist, create); // crea uno
router.delete('/:id', policy, deleteOne(Usergame)); // Ver como hacer el borrado

// No les hago validacion porque los datos que vienen del front son seleccionados y no ingreados manualemnte por el usuario

module.exports = router;