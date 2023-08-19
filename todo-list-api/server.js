const express = require('express');
require('./db');
const app = express();
const cors = require('cors');
const usersRoutes = require('./routes/users');
const tasksRoutes = require('./routes/tasks');
const port = 8080;

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());
app.use(cors({origin: 'http://localhost:5173'}));
// Utilisez les routes pour les utilisateurs et les tâches
app.use('/api/users', usersRoutes);
app.use('/api/tasks', tasksRoutes);

// Définissez d'autres middlewares et routes si nécessaire

// Démarrez le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
