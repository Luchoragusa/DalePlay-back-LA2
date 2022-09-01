const Router = require('express');
const router = Router();
const { policy } = require('../../validators/middleware');
const { Usergame } = require('../../database/models/index');
const { deleteOne} = require('../../controllers/generic.controller');
const { create } = require('../../controllers/models/usergame.controller');
const { UserGameExist } = require('../../validators/UsergameExist');

// Genericas
// router.get('/', getAll ); // muestra todos
router.post('/:id', policy, UserGameExist, create); // crea uno
router.delete('/:id', policy, deleteOne(Usergame)); // Ver como hacer el borrado


module.exports = router;