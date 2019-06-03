import React, { useEffect, useState } from 'react';

const App = () => {
    const [name, setName] = useState(null)

    useEffect(() => {
        fetch('https://swapi.co/api/people/1') // hacemos la petición get
            .then(res => res.json()) // cuando hayamos terminado (then) parseamos a json la respuesta de la petición
            .then(res => setName(res.name)); // cuando hayamos terminado (then) actualizamos el estado nombre
    }, []); //Debemos usar los [] para que la petición sólo se ejecute cuando el componente se monte. De lo contrario se ejecutaría en cada render. Si ponemos una variable de estado dentro de los [], la petición se ejecutárá cada vez que esa variable cambie.
    return <p>{name}</p>;
}

export default App;