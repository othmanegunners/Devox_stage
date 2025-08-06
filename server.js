// server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware pour JSON
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(' Connecté à MongoDB'))
.catch(err => console.error(' Erreur MongoDB :', err));

// Route de test
app.get('/', (req, res) => {
  res.send('Le serveur fonctionne 🚀');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`🟢 Serveur lancé sur http://localhost:${port}`);
});
