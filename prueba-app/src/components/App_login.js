import React, { useRef } from 'react';
import {NavLink} from 'react-router-dom';
import {postJson} from '../http/index';
import '../App.css';
import {modificarToken} from '../store/token/actions';

function App_login() {
    const pass = useRef('');
    const user = useRef('');

    const fetchToken = _ => {
        postJson('/login', {user:user.current.value, pass:pass.current.value})
        .then(res => {
            modificarToken(res);
        });
    }

    return (
        <div className="App">
                <div className="login">
                    <input type="text" ref={user} className="user" placeholder="Username" /><br />
                    <input type="text" red={pass} className="user" placeholder="Password" /><br />
                    <button onClick={fetchToken}>Enviar</button><br /><br/>
                    <NavLink to="/login">Acceder a la página</NavLink>
                </div>
        </div>
    );
};

export default App_login;