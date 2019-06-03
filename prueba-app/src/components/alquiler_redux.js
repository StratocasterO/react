import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { enviarCosteA } from '../store/coste_a/actions';

const CosteAlquilerR = ({ enviarCosteA, noches }) => {
    let coste_a = noches * 40;

    if (noches > 6) coste_a = coste_a - 50;
    else if (noches > 2) coste_a = coste_a - 20;

    useEffect(() => {
        enviarCosteA(coste_a);
    }, [noches]);

    return (
        <p>
            El coste del coche de alquiler es de {coste_a} €.
        </p>
    );
};

CosteAlquilerR.defaultProps = {
    noches: 1
}

export default connect(null, { enviarCosteA })(CosteAlquilerR); // el primer parámetro lee la store (null = no lo hace), el segundo modifica la store