const express = require('express');
const app = express();

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur notre application de redirection !');
});

// URL de redirection - vous pouvez le configurer selon vos besoins
app.get('/redirect', (req, res) => {
  res.send('Vous avez été redirigé ici !');
});

// Notez que nous ne lançons pas le serveur ici. 
// Nous exportons simplement l'application pour que Vercel puisse la gérer.
module.exports = app;
