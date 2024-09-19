const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String
  },
  fechaInicio: {
    type: Date,
    required: true
  },
  fechaFin: {
    type: Date
  },
  usuariosAsignados: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  tareas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }]
});

module.exports = mongoose.model('Project', projectSchema);
