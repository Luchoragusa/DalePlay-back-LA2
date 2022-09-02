const Router = require('express');
const router = Router();
const { create } = require('../../controllers/models/contact.controller');


router.post('/', create); // crea uno

module.exports = router;