import React, { useRef, useState } from 'react';
import './App.css';
import CosteAlquiler from './components/alquiler';
import CosteHotel from './components/hotel';

function App() {
    let input = useRef(null);
    const [noches, setCost] = useState(1); // valor por defecto

    const cost = _ => {
        setCost(input.current.value);
    };

    return (
        <div className="App">
            <p>Introduce el número de noches: <input type="text" ref={input} defaultValue="1" onChange={cost} /></p>
            <CosteHotel noches={noches} />
            <CosteAlquiler noches={noches} />
        </div>
    );
};

export default App;