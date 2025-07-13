const mongoose = require('mongoose');

const MetricsSchema = new mongoose.Schema({
  campaignId: String,
  clicks: Number,
  impressions: Number,
  cost: Number,
  date: Date,
  // Adicione outros campos conforme necessário
});

module.exports = mongoose.model('Metrics', MetricsSchema);
