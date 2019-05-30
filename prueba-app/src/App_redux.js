import React from 'react';
import './App.css';
import Form from './components/form';
import PalabraGuardada from './components/palabra'

function App() {
    // recoge datos y pinta el resultado con redux:
	return (
		<div className="App">
            <br/><br/>
			<Form />
            <PalabraGuardada />
		</div>
	);
};
	
export default App;