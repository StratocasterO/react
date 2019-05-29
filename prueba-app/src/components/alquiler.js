import React, {useRef, useState} from 'react'

const CosteAlquiler = (props) => {
    let coste = props.noches * 40;

    if(props.noches > 6) coste = coste - 50;
    else if(props.noches > 2) coste = coste - 20;

    return (
        <p>
            El coste del coche de alquiler es de {coste} €.
        </p>
    );
};

export default CosteAlquiler;