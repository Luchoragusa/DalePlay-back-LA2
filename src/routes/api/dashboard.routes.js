const Router = require('express');
const router = Router();
const { policy } = require('../../validators/middleware');
const { metrics } = require('../../controllers/models/dashboard.controller');

// Genericas

// Especificas
router.get('/', metrics); // Obtiene las 4 metricas

module.exports = router;