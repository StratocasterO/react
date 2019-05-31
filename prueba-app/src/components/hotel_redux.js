import React from 'react';
import { connect } from "react-redux";
import { enviarCosteH } from '../store/coste_h/actions';

const CosteHotelR = (props, {enviarCosteH}) => {
    let coste = props.noches * 40;

    enviarCosteH(coste.current.value);

    return (
        <p>
            El coste del hotel es de {coste} €.
        </p>
    );
};

export default connect(null, {calcularCoste})(CosteHotelR); // el primer parámetro lee la store (null = no lo hace), el segundo modifica la store