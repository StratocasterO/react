import React, { useState, useEffect } from 'react';
import { selectToken } from '../store/token/reducer'
import { connect } from 'react-redux';
import { getJson } from '../http/index'
import '../App.css';

const ContenidoRestringido = ({ accessToken }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (accessToken) {
            getJson('/user-data', '', { headers: { accessToken } })
                .then(setUserData);
        }
    }, [accessToken]);

    return (
        <div className="App">
            {!userData && (
                <div style={{ backgroundColor: 'red', color: 'white', padding: '40px', width: '300px', fontWeight: 'bold', margin: '30px auto' }}>Contenido reestringido</div>
            )}
            {userData && (
                <div style={{ margin: '25px auto' }}>
                    {'La ID del usuario es ' + userData.idRecuperadaDeLaBaseDeDatos} <br/><br/>
                    <img src="http://pablomonteserin.es/wp-content/uploads/2015/11/pablo-monteserin.jpg" width="400px" alt="Pablo Monteserín" />
                </div>

            )}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        accessToken: selectToken(state),
    }
}

export default connect(mapStateToProps)(ContenidoRestringido);