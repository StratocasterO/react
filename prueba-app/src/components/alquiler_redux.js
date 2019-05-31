import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { enviarCosteA } from '../store/coste_a/actions';

const CosteAlquilerR = (props, { enviarCosteA }) => {
    let coste = props.noches * 40;

    if (props.noches > 6) coste = coste - 50;
    else if (props.noches > 2) coste = coste - 20;

    enviarCosteA(coste.current.value); // no se lanza

    return (
        <p>
            El coste del coche de alquiler es de {coste} €.
        </p>
    );
};

export default connect(null, { enviarCosteA })(CosteAlquilerR); // el primer parámetro lee la store (null = no lo hace), el segundo modifica la store