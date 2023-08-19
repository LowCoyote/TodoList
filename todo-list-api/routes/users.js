const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Route pour récupérer tous les utilisateurs
router.get('/', (req, res) => {
    User.find()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch(() => {
            res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
        });
});

// Route pour créer un nouvel utilisateur
router.post('/', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    // Enregistrez le nouvel utilisateur dans la base de données
    newUser.save()
        .then(() => {
            res.status(201).json({ message: 'Utilisateur créé avec succès' });
        })
        .catch(() => {
            res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
        });
});

// Route pour la connexion de l'utilisateur
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Logique pour vérifier l'existence de l'utilisateur dans la base de données
    User.findOne({ email, password })
        .then((user) => {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'Utilisateur non trouvé' });
            }
        })
        .catch(() => {
            res.status(500).json({ error: 'Erreur lors de la vérification de l\'utilisateur' });
        });
});

// Route pour récupérer un utilisateur par son ID
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    // Logique pour récupérer un utilisateur par son ID depuis la base de données
    User.findById(userId)
        .then((user) => {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'Utilisateur non trouvé' });
            }
        })
        .catch(() => {
            res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
        });
});

// Route pour mettre à jour un utilisateur par son ID
router.put('/:id', (req, res) => {
    const userId = req.params.id;
    // Logique pour mettre à jour un utilisateur par son ID dans la base de données
    User.findByIdAndUpdate(userId, req.body, { new: true })
        .then((user) => {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'Utilisateur non trouvé' });
            }
        })
        .catch(() => {
            res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'utilisateur' });
        });
});

// Route pour supprimer un utilisateur par son ID
router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    // Logique pour supprimer un utilisateur par son ID de la base de données
    User.findByIdAndDelete(userId)
        .then((user) => {
            if (user) {
                res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
            } else {
                res.status(404).json({ error: 'Utilisateur non trouvé' });
            }
        })
        .catch(() => {
            res.status(500).json({ error: 'Erreur lors de la suppression de l\'utilisateur' });
        });
});

module.exports = router;
