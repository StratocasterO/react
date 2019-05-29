import React, {useRef, useState} from 'react'

const Funciones = (props) => {
    // uso los props para pintar los resultados calculados por App_props_js:
    return (
        <span className="none">
        {props.opt == 1 && (
            <span>{props.res}ºF</span>
        )}
        {props.opt == 2 && (
            <span>{props.res}ºC</span>
        )}
        {props.opt == 3 && (
            <span>{props.res}USD</span>
        )}
        {props.opt == 4 && (
            <span>{props.res}EUR</span>
        )}
        {props.opt == 5 && (
            <span>{props.res}</span>
        )}
        </span>
	);
};

export default Funciones;