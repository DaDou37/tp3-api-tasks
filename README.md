## Projet

Projet d'api en Node + express en binome 

## structure du fichier server.js

J'ai tout d'abord initialisé un projet (npm init), installer express et mettre dans mon package.json un start 
"start": "node src/server.js". 

J'ai fait un stockage en mêmoire dans un tableau pour simuler une base de donnée.
Puis j'ai mit en place mes différentes méthode http dans rest (GET,POST,PUT,DELETE) 

Pour commencer: 
1) GET /tasks qui Récupère la liste complète des tâches. 
2) Puis POST /tasks - Ajoute une nouvelle tâche.
3) PUT /tasks/:id - Modifie une tâche spécifique.
4) DELETE /tasks/:id - Supprime une tâche spécifique.

Pour finir j'ai du mettre ce projet sur github .

## Versionning 

Le but de l'exercice est de récuperer le projet d'un binome, de le cloner et de faire une modification. Pour ma part j'ai du mettre sur le projet de mon binome un filtre de status ( completed ou incompleted). Pour finir, Une fonctionnalité ajoutée par le binôme avec une pull request fusionnée. 
