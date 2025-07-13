const express = require('express');
const metricsController = require('../controllers/metricsController');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI || "mongodb+srv://mauesCODE:814739Vm@@clustermicrosaas.ar7ak8v.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMicroSaas";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function runMongoConnection() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error("Erro ao conectar no MongoDB Atlas:", err);
  } finally {
    await client.close();
  }
}

runMongoConnection().catch(console.dir);

const router = express.Router();

// Exemplo de rota para buscar métricas
router.get('/metrics', metricsController.getMetrics)

module.exports = router;
