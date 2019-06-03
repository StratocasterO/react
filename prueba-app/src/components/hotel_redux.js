import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { enviarCosteH } from '../store/coste_h/actions';

const CosteHotelR = ({ enviarCosteH, noches }) => {
    let coste = noches * 40;

    useEffect(() => {
        enviarCosteH(coste);
    }, [noches]);

    return (
        <p>
            El coste del hotel es de {coste} €.
        </p>
    );
};

CosteHotelR.defaultProps = {
    noches: 1
}

export default connect(null, { enviarCosteH })(CosteHotelR); // el primer parámetro lee la store (null = no lo hace), el segundo modifica la store