import React from 'react';
import {connect} from 'react-redux';
import {selectCostH} from '../store/coste_h/reducer';
import {selectCostA} from '../store/coste_a/reducer';

const CosteGuardado = ({ coste }) => (
	<p>El coste total del viaje es de {coste} €.</p>
);

// Cada vez que se ejecuta una acción, se ejecutará también una llamada a todas las funciones mapStateToProps de mi aplicación.
// Por tanto, usaremos esta función para recuperar la parte del esta que nos interesa.

function mapStateToProps(state) {       // usamos una funcion para acceder a la palabra para que nos dé un error en caso de fallar
    
    let coste = selectCostH(state) + selectCostA(state)

    return {
        coste: coste
    }
}

// La función connect, vincula el componente PalabraAlmacenada con la store.
// Para ello, utilizamos la función mapStateToProps cuyo parámetro state representa la store. 
// En este caso no usamos acciones (el segundo parámetro).

export default connect(mapStateToProps)(CosteGuardado); // el primer parámetro del connect lee de la store