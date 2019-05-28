import React, {useRef, useState} from 'react';
import './App.css';

function App() {
	// define las referencias:
	let celsius = useRef(null);
	let fahren = useRef(null);
	let eur = useRef(null);
	let usd = useRef(null);
	let a = useRef(null);
	let b = useRef(null);

	// define las funciones que actualizan los estados:
	const [f, setF] = useState(0);   
	const [c, setC] = useState(32);   
	const [u, setU] = useState(0);   
	const [e, setE] = useState(0);   
	const [s, setS] = useState(0);   

	const ctof = () => {
		console.log(celsius.current.value*9/5+32);
		setF(celsius.current.value*9/5+32);
	};
	
	const ftoc = () => {
		console.log((fahren.current.value-32)*5/9);
		setC((fahren.current.value-32)*5/9);
	};
	
	const eurtousd = () => {
		console.log(eur.current.value*1.12);
		setU(eur.current.value*1.12);
	};
	
	const usdtoeur = () => {
		console.log((usd.current.value/1.12).toFixed(2));
		setE((usd.current.value/1.12).toFixed(2));
	};
	
	const rectangleArea = () => {
		console.log(a.current.value*b.current.value);
		setS(a.current.value*b.current.value);
	};
	
	return (
		<div className="App">
			<br/><br/>
			Devuelve los valores por la consola y los pinta en el documento: <br/><br/>
			Introduce los grados Celsius <input type="text" ref={celsius} defaultValue="0"/>--><span>{f}ºF</span><button onClick={ctof}>Convertir a Fahrenheit</button><br/><br/>
			Introduce los grados Fahrenheit<input type="text" ref={fahren} defaultValue="0"/>--><span>{c}ºC</span><button onClick={ftoc}>Convertir a Celsius</button><br/><br/>
			Introduce los EUR<input type="text" ref={eur} defaultValue="0"/>--><span>{u}USD</span><button onClick={eurtousd}>Convertir a USD</button><br/><br/>
			Introduce los USD<input type="text" ref={usd} defaultValue="0"/>--><span>{e}EUR</span><button onClick={usdtoeur}>Convertir a EUR</button><br/><br/>
			Introduce los lados del rectángulo<input type="text" ref={a} defaultValue="0"/><input type="text" ref={b} defaultValue="0"/>--><span>{s}</span><button onClick={rectangleArea}>Calcula el area</button>
		</div>
	);
};
	
export default App;