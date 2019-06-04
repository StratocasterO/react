import React,{useState, useEffect} from 'react';
import {selectToken} from '../store/token/reducer'
import {connect} from 'react-redux';
import {getJson} from '../http/index'
import '../App.css';

const ContenidoRestringido = ({ accessToken }) => { 
    const [userData, setUserData] = useState(null);

    useEffect(() => {
		if(accessToken){
			getJson('/user-data', '', {headers: {accessToken}})
			.then(setUserData);
		}
    });

    return (
        <div className="App">
            {!userData && (
                <p>Contenido reestringido</p>
            )}
            {userData && (
                <div>{'La ID del usuario es' + userData.idRecuperadaDeLaBaseDeDatos}</div>
            )}
        </div>
    );
}

const mapStateToProps = state => {
    return{
        accessToken: selectToken(state),
    }
}

export default connect(mapStateToProps)(ContenidoRestringido);