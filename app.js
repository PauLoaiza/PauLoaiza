import React, { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';

const App = () => {
  const [records, setRecords] = useState([]);

  const handleAddRecord = (newRecord) => {
    setRecords([...records, newRecord]);
  };

  return (
    <div className="App">
      <h1>Registro de Remisiones</h1>
      <Form onAddRecord={handleAddRecord} />
      <Table records={records} />
    </div>
  );
};

export default App;
