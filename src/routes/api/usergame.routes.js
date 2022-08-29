const Router = require('express');
const router = Router();
const middleware = require('../../validators/middleware');
const { Usergame } = require('../../database/models/index');
const {getAll, createOne, deleteOne} = require('../../controllers/generic.controller');

// Genericas
router.get('/', getAll(Usergame)); // muestra todos
router.post('/', /*middleware.policy,*/ createOne(Usergame)); // crea uno
router.delete('/:id', middleware.policy, deleteOne(Usergame)); // borra uno


module.exports = router;