import React, { useRef, useState } from 'react';
import './App.css';
import CosteAlquilerR from './components/alquiler_redux';
import CosteHotelR from './components/hotel_redux';
import CosteGuardado from './components/coste_redux'

function App() {
    let input = useRef(null);
    const [noches, setCost] = useState(1); // valor por defecto

    const cost = _ => {
        setCost(input.current.value);
    };

    return (
        <div className="App">
            <p>Introduce el número de noches: <input type="text" ref={input} defaultValue="1" onChange={cost} /></p>
            <CosteHotelR noches={noches} />
            <CosteAlquilerR noches={noches} />
            <CosteGuardado />
        </div>
    );
};

export default App;