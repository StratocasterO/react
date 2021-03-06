import React, { useRef } from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {postJson} from '../http/index';
import '../App.css';
import {modificarToken} from '../store/token/actions';

function App_login({history,modificarToken}) {
    const pass = useRef('');
    const user = useRef('');

    const fetchToken = _ => {
        let u = user.current.value
        let p = pass.current.value

        postJson('/login', {userName: u, password:p})
        .then(res => {
            console.log(res);
            modificarToken(res.token);
            history.replace('/login');
        });
    }

    return (
        <div className="App">
                <div className="login">
                    <input type="text" ref={user} className="user" placeholder="Username" /><br />
                    <input type="password" ref={pass} className="user" placeholder="Password" /><br />
                    <button onClick={fetchToken}>Enviar</button><br /><br/>
                    <NavLink to="/login">Acceder a la página</NavLink>
                </div>
        </div>
    );
};

export default connect(null, { modificarToken })(App_login);