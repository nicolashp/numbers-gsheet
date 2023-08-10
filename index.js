const express = require('express');
const app = express();

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur notre application de redirection !');
});

// URL de redirection
app.get('/redirect', (req, res) => {
  res.send('Vous avez été redirigé ici !');
});

// Exportez l'application pour Vercel
module.exports = app;
