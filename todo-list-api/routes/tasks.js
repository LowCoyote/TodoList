const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Route pour récupérer toutes les tâches
router.get('/', (req, res) => {
    Task.find()
        .then((tasks) => {
            res.status(200).json(tasks);
        })
        .catch(() => {
            res.status(500).json({ error: 'Erreur lors de la récupération des tâches' });
        });
});

// Route pour créer une nouvelle tâche
router.post('/', (req, res) => {
    const newTask = new Task({
        title: req.body.title,
        description: req.body.description
    });

    newTask.save()
        .then(() => {
            res.status(201).json({ message: 'Tâche créée avec succès' });
        })
        .catch(() => {
            res.status(500).json({ error: 'Erreur lors de la création de la tâche' });
        });
});

// Route pour récupérer une tâche par son ID
router.get('/:id', (req, res) => {
    const taskId = req.params.id;
    Task.findById(taskId)
        .then((task) => {
            if (task) {
                res.status(200).json(task);
            } else {
                res.status(404).json({ error: 'Tâche non trouvée' });
            }
        })
        .catch(() => {
            res.status(500).json({ error: 'Erreur lors de la récupération de la tâche' });
        });
});

// Route pour mettre à jour une tâche par son ID
router.put('/:id', (req, res) => {
    const taskId = req.params.id;
    Task.findByIdAndUpdate(taskId, req.body, { new: true })
        .then((task) => {
            if (task) {
                res.status(200).json(task);
            } else {
                res.status(404).json({ error: 'Tâche non trouvée' });
            }
        })
        .catch(() => {
            res.status(500).json({ error: 'Erreur lors de la mise à jour de la tâche' });
        });
});

// Route pour supprimer une tâche par son ID
router.delete('/:id', (req, res) => {
    const taskId = req.params.id;
    Task.findByIdAndDelete(taskId)
        .then((task) => {
            if (task) {
                res.status(200).json({ message: 'Tâche supprimée avec succès' });
            } else {
                res.status(404).json({ error: 'Tâche non trouvée' });
            }
        })
        .catch(() => {
            res.status(500).json({ error: 'Erreur lors de la suppression de la tâche' });
        });
});

module.exports = router;
