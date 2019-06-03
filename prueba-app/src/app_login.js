import React,{useState, useEffect, getJson, selectToken} from 'react';
// import {connect} from 'react-redux';

const ContenidoRestringido = ({ accessToken }) => { 
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        console.log(accessToken)
        getJson('/user-data', '', { headers: { accessToken } }).then(setUserData);
    },[]);

    return (
        <div>
            <p>Contenido reestringido</p>
            {userData && (
                <div>{userData.idRecuperadaDeLaBaseDeDatos}</div>
            )}
        </div>
    );
}

const App = _ => {
    return(<ContenidoRestringido />);
}

// const mapStateToProps = state => {
//     return{
//         accessToken: selectToken(state),
//     }
// }

export default App; // connect(mapStateToProps)(ContenidoRestringido);