import React, {useRef,useState,useEffect} from 'react';
import './App.css';
import Componente1 from './components/Componente1';
import Componente2 from './components/Componente2';


function App() {
	const numero = useRef('');
	const [num,setNumero] = useState('');
	const [name,setName] = useState('');

	const mostrar = _ => {
		console.log(numero.current.value);
		setNumero(numero.current.value);
	}
	
	let url = 'https://swapi.co/api/people/' + num

	useEffect(()=>{
		fetch(url)
            .then(res => res.json())
            .then(res => setName(res.name));
	},[url])

	return (
		<div className="App">
			<input type="text" style={{margin: "0 10px"}} ref={numero} placeholder="Número del 1 al 100" /><button onClick={mostrar}>Enviar</button>
			<p>El valor introducido es: {num}</p>
			<Componente1 />
			<Componente2 num={num}/>
			<p style={{fontStyle: "italic"}}>El personaje recuperado de la API de Star Wars es {name}</p>
		</div>
	);
}

export default App;