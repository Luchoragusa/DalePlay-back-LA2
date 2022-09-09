const Router = require('express');
const router = Router();
const { Usergame } = require('../../database/models/index');
const { deleteOne} = require('../../controllers/generic.controller');
const { create } = require('../../controllers/models/usergame.controller');
const { UserGameExist } = require('../../validators/UsergameExist');

// Genericas
router.delete('/:id', deleteOne(Usergame)); // Ver como hacer el borrado

// Especificas
router.post('/', UserGameExist, create); // crea uno

module.exports = router;