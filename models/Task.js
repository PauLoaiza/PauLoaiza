const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String
  },
  estado: {
    type: String,
    enum: ['pendiente', 'en progreso', 'completada'],
    default: 'pendiente'
  },
  fechaInicio: {
    type: Date
  },
  fechaFin: {
    type: Date
  },
  asignadaA: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  proyecto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  }
});

module.exports = mongoose.model('Task', taskSchema);
