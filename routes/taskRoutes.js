const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Crear una nueva tarea
router.post('/', async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: 'Error al crear la tarea', error: err });
  }
});

// Obtener todas las tareas
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().populate('asignadaA proyecto');
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ message: 'Error al obtener las tareas', error: err });
  }
});

// Obtener una tarea por ID
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate('asignadaA proyecto');
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ message: 'Error al obtener la tarea', error: err });
  }
});

// Actualizar una tarea
router.put('/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: 'Error al actualizar la tarea', error: err });
  }
});

// Eliminar una tarea
router.delete('/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.status(200).json({ message: 'Tarea eliminada correctamente' });
  } catch (err) {
    res.status(400).json({ message: 'Error al eliminar la tarea', error: err });
  }
});

module.exports = router;
