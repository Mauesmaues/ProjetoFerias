const Metrics = require('../models/metrics');

// Exemplo de controller para buscar métricas
exports.getMetrics = async (req, res) => {
  try {
    const metrics = await Metrics.find();
    res.json(metrics);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar métricas' });
  }
};
