import React, {useRef, useState} from 'react';
import './App.css';
import Funciones from './components/props';

function App() {
	// define las referencias:
	let celsius = useRef(null);
	let fahren = useRef(null);
	let eur = useRef(null);
	let usd = useRef(null);
	let a = useRef(null);
    let b = useRef(null);
    
    // define las funciones que actualizan los estados:
    const [f, setF] = useState((32.00.toFixed(2)));   
	const [c, setC] = useState(-17.78);
	const [u, setU] = useState((0).toFixed(2));   
	const [e, setE] = useState((0).toFixed(2));   
	const [s, setS] = useState(0);   
    
    const ctof = () => {
		console.log((celsius.current.value*9/5+32).toFixed(2));
		setF((celsius.current.value*9/5+32).toFixed(2));
	};
	
	const ftoc = () => {
		console.log(((fahren.current.value-32)*5/9).toFixed(2));
		setC(((fahren.current.value-32)*5/9).toFixed(2));
	};
	
	const eurtousd = () => {
		console.log((eur.current.value*1.12).toFixed(2));
		setU((eur.current.value*1.12).toFixed(2));
	};
	
	const usdtoeur = () => {
		console.log((usd.current.value/1.12).toFixed(2));
		setE((usd.current.value/1.12).toFixed(2));
	};
    
    const rectangleArea = () => {
        console.log(a.current.value*b.current.value);
        setS(a.current.value*b.current.value);
    };
    
    // usa props para pintar los resultados:
	return (
		<div className="App">
			<br/><br/>
			Devuelve los valores por la consola y los pinta en el documento: <br/><br/>
			Introduce los grados Celsius <input type="text" ref={celsius} defaultValue="0"/>--><Funciones res={f} opt="1"/>
            <button onClick={ctof}>Convertir a Fahrenheit</button><br/><br/>

			Introduce los grados Fahrenheit<input type="text" ref={fahren} defaultValue="0"/>--><Funciones res={c} opt="2"/>
            <button onClick={ftoc}>Convertir a Celsius</button><br/><br/>

			Introduce los EUR<input type="text" ref={eur} defaultValue="0"/>--><Funciones res={u} opt="3"/>
            <button onClick={eurtousd}>Convertir a USD</button><br/><br/>

			Introduce los USD<input type="text" ref={usd} defaultValue="0"/>--><Funciones res={e} opt="4"/>
            <button onClick={usdtoeur}>Convertir a EUR</button><br/><br/>

			Introduce los lados del rectángulo<input type="text" ref={a} defaultValue="0"/><input type="text" ref={b} defaultValue="0"/>--><Funciones res={s} opt="5"/>
            <button onClick={rectangleArea}>Calcula el area</button>
		</div>
	);
};
	
export default App;