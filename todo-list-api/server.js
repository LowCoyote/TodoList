const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(express.json());


let todoLists = [];

// Route to get all todoLists
app.get('/todolists', (req, res) => {
    res.status(200).json(todoLists);
});

// Route to get a todoLists
app.get('/todolists/:id', (req, res) => {
    const { id } = req.params;
    const todoList = todoLists.find((t) => t.id === id);

    if (!todoList) {
        return res.status(404).json({ error: 'TodoList not found' });
    }

    res.status(200).json(todoList);
});

// Route to create a new todoList
app.post('/todolists', (req, res) => {
    const todoList = {
        id: uuidv4(),
        name: req.body.name,
        tasks: req.body.tasks,
    };
    todoLists.push(todoList);
    res.status(201).json(todoList);
});

// Route to update a todoList
app.put('/todolists/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const todoList = todoLists.find((t) => t.id === id);

    if (!todoList) {
        return res.status(404).json({ error: 'TodoList not found' });
    }

    Object.assign(todoList,body)
    res.status(200).json(todoList);
});

// Route to delete a todoList
app.delete('/todolists/:id', (req, res) => {
    const { id } = req.params;

    const todoListIndex = todoLists.findIndex(t => t.id === id);
    if (todoListIndex === -1) {
        return res.status(404).json({ error: 'TodoList not found' });
    }

    todoLists.splice(todoListIndex, 1);
    res.status(204).send();
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
