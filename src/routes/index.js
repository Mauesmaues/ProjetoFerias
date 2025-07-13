const express = require('express');
const metricsController = require('../controllers/metricsController');

const router = express.Router();

// Exemplo de rota para buscar métricas
router.get('/metrics', metricsController.getMetrics);

module.exports = router;
