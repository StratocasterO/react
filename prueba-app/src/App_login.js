import React, {useRef,useContext} from 'react';
import './App.css';
import {AppContext} from './context/provider'
import {postJson} from './http/index'

function App_login() {
    const pass = useRef('');
    const user = useRef('');
    const [state,setState] = useContext(AppContext);

    const fetchToken = _ => {
        let u = user.current.value;
        let p = pass.current.value;

        postJson('/login', {userName: u, password:p})
        .then(res => {
            console.log(res);
            setState(res);
        });
    };

    return(
        <div className="App">
                <div className="login">
                    <input type="text" ref={user} className="user" placeholder="Username" /><br />
                    <input type="password" ref={pass} className="user" placeholder="Password" /><br />
                    <button onClick={fetchToken}>Enviar</button><br /><br/>
                </div>
        </div>
    );
};

export default App_login;