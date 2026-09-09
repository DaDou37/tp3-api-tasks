const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Stockage en mémoire
let tasks = [
    {"id": 1,  "title": "Apprendre Express","completed": false},
    {"id": 2,  "title": "Créer une API REST","completed": false},
    {"id": 3,  "title": "Tester l'API","completed": false}

];
let nextId = 4;

// POST /tasks - Ajoute une nouvelle tâche
app.post('/tasks', (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Le champ "title" est requis' });
  }

  const newTask = {
    id: nextId++,
    title,
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// GET /tasks - Récupère la liste complète des tâches
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// PUT /tasks/:id - Modifie une tâche spécifique
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));

  if (!task) {
    return res.status(404).json({ error: 'Tâche non trouvée' });
  }

  const { title, completed } = req.body;
  task.title = title ?? task.title;
  task.completed = completed ?? task.completed;

  res.json(task);
});

// DELETE /tasks/:id - Supprime une tâche spécifique
app.delete('/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Tâche non trouvée' });
  }

  tasks.splice(index, 1);
  res.status(204).send();
});

// Patach /tasks/:id/completed - Mise à jour des tâches
app.patch('/tasks/:id/completed', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find (t => t.id === id);

    if (!task) {
      return res.status(404).json({ error: 'Tâche non trouvée'});
    }

    if (req.body && req.body.completed !== undefined) {
      task.completed = req.body.completed;
    } else {
      task.completed = !task.completed;
    }

    res.json(task);
});


app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});