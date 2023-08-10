const express = require('express');
const app = express();
const port = 3000;

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur notre application de redirection !');
});

// URL de redirection - vous pouvez le configurer selon vos besoins
app.get('/redirect', (req, res) => {
  // Traitement de la logique de redirection ici...
  // Par exemple, récupérer des données de la requête (req.query) et faire des actions spécifiques.
  res.send('Vous avez été redirigé ici !');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
