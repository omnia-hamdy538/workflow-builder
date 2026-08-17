# Workflow Builder

A visual workflow builder built with React and React Flow.
It allows users to create and connect different nodes to represent a conversation or automation flow.

## Project Overview

This project is a frontend prototype for building workflows visually instead of defining them manually in code.

Users can add nodes, connect them together, move them around the canvas, and view the workflow structure as JSON.

### Example Workflow

User Message → AI Agent → Condition → Reply / Human Handoff

## Features

* Create and display workflow nodes
* Connect nodes using edges
* Drag and reposition nodes
* Zoom and pan across the workflow
* Custom node types
* Delete nodes and connections
* View the workflow as JSON
* Interactive workflow canvas
* Responsive interface

## Technologies Used

* React.js
* React Flow (`@xyflow/react`)
* JavaScript
* Tailwind CSS
* Vite

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd YOUR_PROJECT_FOLDER
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

The application will then be available on the local development server.

## Project Structure

```text
src/
├── components/
├── App.jsx
├── main.jsx
└── ...
```

## How It Works

The workflow is represented using two main concepts:

* **Nodes:** Represent steps or actions in the workflow.
* **Edges:** Represent the connections between the nodes.

React Flow is responsible for the visual workflow editor, while the application manages the workflow data and node interactions.

## Future Improvements

* Add more node types
* Add a drag-and-drop node panel
* Add node configuration forms
* Save and load workflows
* Connect the workflow with a backend
* Add workflow execution logic

## Status

This project is currently a frontend prototype focused on the visual workflow-building experience.
