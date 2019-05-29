import React, {useRef, useState} from 'react'

const CosteHotel = (props) => {
    let coste = props.noches * 40;

    return (
        <p>
            El coste del hotel es de {coste} €.
        </p>
    );
};

export default CosteHotel;