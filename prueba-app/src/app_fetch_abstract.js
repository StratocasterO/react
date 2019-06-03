import React, { useEffect, useState } from 'react';
import {getJson} from './http/index';

const App = _ => {
    const [pokemon, setPokemonState] = useState({});

    useEffect(() => {
        getJson('/pokemon/17', {}).then(res => {
            setPokemonState(res);
        });
    }, []);

    return <p>{pokemon.name}</p>
}

export default App;