const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Crear un nuevo proyecto
router.post('/', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: 'Error al crear el proyecto', error: err });
  }
});

// Obtener todos los proyectos
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().populate('usuariosAsignados tareas');
    res.status(200).json(projects);
  } catch (err) {
    res.status(400).json({ message: 'Error al obtener los proyectos', error: err });
  }
});

// Obtener un proyecto por ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate('usuariosAsignados tareas');
    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ message: 'Error al obtener el proyecto', error: err });
  }
});

// Actualizar un proyecto
router.put('/:id', async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProject) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.status(200).json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: 'Error al actualizar el proyecto', error: err });
  }
});

// Eliminar un proyecto
router.delete('/:id', async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.status(200).json({ message: 'Proyecto eliminado correctamente' });
  } catch (err) {
    res.status(400).json({ message: 'Error al eliminar el proyecto', error: err });
  }
});

module.exports = router;
