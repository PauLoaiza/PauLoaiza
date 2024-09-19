import React, { useState } from 'react';

const Form = ({ onAddRecord }) => {
  const [remitente, setRemitente] = useState({
    nombre: '',
    ciudad: '',
    estado: '',
    domicilio: '',
    cp: '',
    telefono: ''
  });

  const [destinatario, setDestinatario] = useState({
    nombre: '',
    ciudad: '',
    estado: '',
    domicilio: '',
    cp: '',
    telefono: ''
  });

  const [mercancia, setMercancia] = useState({
    descripcion: '',
    peso: '',
    largo: '',
    ancho: '',
    alto: '',
    fechaSalida: '',
    fechaLlegada: '',
    precio: ''
  });

  const handleInputChange = (e, setStateFunc) => {
    setStateFunc(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      onAddRecord({ remitente, destinatario, mercancia });
      limpiarFormulario();
    } else {
      alert("Por favor, rellene todos los campos correctamente.");
    }
  };

  const validarFormulario = () => {
    return (
      Object.values(remitente).every(field => field !== '') &&
      Object.values(destinatario).every(field => field !== '') &&
      Object.values(mercancia).every(field => field !== '')
    );
  };

  const limpiarFormulario = () => {
    setRemitente({ nombre: '', ciudad: '', estado: '', domicilio: '', cp: '', telefono: '' });
    setDestinatario({ nombre: '', ciudad: '', estado: '', domicilio: '', cp: '', telefono: '' });
    setMercancia({ descripcion: '', peso: '', largo: '', ancho: '', alto: '', fechaSalida: '', fechaLlegada: '', precio: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <h2>Datos del Remitente</h2>
        <label>Nombre Completo:</label>
        <input type="text" name="nombre" value={remitente.nombre} onChange={(e) => handleInputChange(e, setRemitente)} required />

        {/* Campos de Remitente */}
        {/* ... */}

      </section>

      {/* Formulario para destinatario y mercancía */}
      
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Form;
