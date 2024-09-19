import React from 'react';

const Table = ({ records }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Remitente</th>
          <th>Destinatario</th>
          <th>Mercancía</th>
          {/* Otros campos */}
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr key={index}>
            <td>{record.remitente.nombre}</td>
            <td>{record.destinatario.nombre}</td>
            <td>{record.mercancia.descripcion}</td>
            {/* Otros campos */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
