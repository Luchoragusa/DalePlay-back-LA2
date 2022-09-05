const Router = require('express');
const router = Router();
const { policy } = require('../../validators/middleware');
const { Contact } = require('../../database/models/index');
const { create } = require('../../controllers/models/contact.controller');
const {getAll, getOne, deleteOne} = require('../../controllers/generic.controller');

// Genericas
router.get('/', getAll(Contact)); // muestra todos
router.get('/:id', getOne(Contact)); // muestra uno
router.delete('/:id', policy, deleteOne(Contact)); // borra uno

// Especificas
router.post('/', create); // crea uno

module.exports = router;