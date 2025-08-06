require('dotenv').config();
console.log("MONGO_URI =", process.env.MONGO_URI);

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Middleware pour JSON
app.use(express.json());

// ✅ Connexion à MongoDB — variable corrigée !
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connecté à MongoDB'))
.catch(err => console.error('❌ Erreur MongoDB :', err));

// Route de test
app.get('/', (req, res) => {
  res.send('Le serveur fonctionne 🚀');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`🟢 Serveur lancé sur http://localhost:${port}`);
});
