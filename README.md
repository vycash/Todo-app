
# Application de Gestion des Tâches

Ce projet est une application de gestion de tâches développée avec React Native dans le cadre d'un projet Académique. Elle permet aux utilisateurs de créer, modifier, supprimer et suivre leurs tâches quotidiennes de manière efficace.

## Fonctionnalités
- Création, modification et suppression de tâches.
- Marquer les tâches comme terminées ou non terminées.
- Barre de progression pour visualiser le pourcentage des tâches réalisées.
- Interface utilisateur agréable et intuitive.
- Utilisation d'une API GraphQL pour la récupération des données.
- Utilisation d'une base de données MongoDB pour la pérsistance et stockage des données

## API utilisée
- L'application utilise l'API GraphQL fournie par l'établissement universitaire.
- pour pouvoir utiliser cette application en dehors du domaine universitaire il faut modifier le fichier API/apiUrl
- l'api que vous allez fournir, doit assurer les fonctionnalitées suivantes:
  - se loger et créer des utilisateurs
  - récupérer des TodoListes et des todoItems
  - transferer la création et la modification des entrées à la base de données MongoDB Neo4j

Pour modifier l'URL de l'API, mettez à jour le fichier `apiUrl`.

## Prérequis
Avant de commencer, assurez-vous d'avoir les éléments suivants installés :
- **Node.js**
- **npm** (Node Package Manager)
- **Expo CLI**

## Installation
1. **Clonez ce dépôt** sur votre machine locale :
   ```bash
   git clone https://github.com/vycash/Todo-app.git
   ```

2. **Accédez au répertoire du projet** :
   ```bash
   cd Application-Gestion-Taches
   ```

3. **Installez les dépendances** :
   ```bash
   npm install
   ```

4. **Lancez le projet** :
   ```bash
   npm run start
   ```
