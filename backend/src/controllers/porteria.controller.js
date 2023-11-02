import React, { useState, useEffect } from 'react';

const App = () => {
  const [documento, setDocumento] = useState('');
  const [aprendiz, setAprendiz] = useState(null);
  const [entrada, setEntrada] = useState(null);
  const [salida, setSalida] = useState(null);

  // Simulación de una base de datos
  const database = {
    aprendices: [
      {
        documento: "12345",
        nombre: "Juan",
        apellidos: "Pérez",
        ficha: "A123",
        formacion: "Programación",
        foto: "URL de la foto"
      },
      // Otros aprendices...
    ]
  };

  const buscarAprendiz = () => {
    const foundAprendiz = database.aprendices.find(aprendiz => aprendiz.documento === documento);
    if (foundAprendiz) {
      setAprendiz(foundAprendiz);
      setEntrada(new Date());
      setSalida(null);
    } else {
      setAprendiz(null);
    }
  };

  const registrarSalida = () => {
    setSalida(new Date());
  };

  return (
    <div>
      <h1>Registro de Aprendices</h1>
      <label>Ingrese el número de documento:</label>
      <input type="text" value={documento} onChange={(e) => setDocumento(e.target.value)} />
      <button onClick={buscarAprendiz}>Buscar</button>

      {aprendiz && entrada && (
        <div>
          <h2>Información del Aprendiz</h2>
          <img src={aprendiz.foto} alt={aprendiz.nombre} />
          <p>Nombre: {aprendiz.nombre} {aprendiz.apellidos}</p>
          <p>Ficha: {aprendiz.ficha}</p>
          <p>Formación: {aprendiz.formacion}</p>
          <p>Fecha de Entrada: {entrada.toLocaleString()}</p>

          {salida ? (
            <p>Fecha de Salida: {salida.toLocaleString()}</p>
          ) : (
            <button onClick={registrarSalida}>Registrar Salida</button>
          )}
        </div>
      )}
    </div>
  );
};

export default App;

