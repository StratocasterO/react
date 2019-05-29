import React from 'react';
import './App.css';
import datos from './datos.json'

function App() {
    return (
        <div className="App">
            <ol>
                {/* map hace lo mismo que el forEach a un array (index va de 0 hasta el tamaño del array) */}
                {datos.map((dato, index) => {
                    return <li key={index}>Nombre: {dato.nombre}, edad: {dato.edad}</li>
                })}
            </ol>
        </div>
    );
};

export default App;