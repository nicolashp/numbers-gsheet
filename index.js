const express = require('express');
const app = express();

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur notre application de redirection !');
});

// URL de redirection
app.get('/redirect', (req, res) => {
  const requisitionId = req.query.requisition_id;
  if (requisitionId) {
    res.send(`
      <html>
        <body>
          <script>
            // Utilisez window.postMessage pour envoyer le requisition_id à la fenêtre parente
            window.parent.postMessage({ type: 'REQUISITION_ID', data: '${requisitionId}' }, '*');
          </script>
        </body>
      </html>
    `);
  } else {
    res.send('Erreur : requisition_id manquant dans l\'URL.');
  }
});

// Exportez l'application pour Vercel
module.exports = app;
