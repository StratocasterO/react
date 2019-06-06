import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/provider'
import { getJson } from '../http/index';
import '../App.css';

const Content = () => {
    const [userData, setUserData] = useState(null);
    const [state,setState] = useContext(AppContext);

    useEffect(() => {
        getJson('/user-data', '', {headers: {accesstoken: state.token}})
            .then(setUserData)
    }, [state]);

    console.log(userData);

    return (
        <div className="App">
            {!userData && (
                <div style={{ backgroundColor: 'red', color: 'white', padding: '40px', width: '300px', fontWeight: 'bold', margin: '30px auto' }}>Contenido reestringido</div>
            )}
            {userData && (
                <div style={{ margin: '25px auto' }}>
                    {'La ID del usuario es ' + userData.idRecuperadaDeLaBaseDeDatos} <br /><br />
                    <img src="http://pablomonteserin.es/wp-content/uploads/2015/11/pablo-monteserin.jpg" width="400px" alt="Pablo Monteserín" />
                </div>
            )}
        </div>
    );
}

export default Content;