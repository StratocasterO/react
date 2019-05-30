import React,{ useRef } from 'react';
import { connect } from "react-redux";
import { modificaPalabra } from '../store/palabra/actions';


const Form = ({ modificaPalabra }) => {
    const palabraRef = useRef('');

    return (
        <form onSubmit={e => {
            e.preventDefault(); // para que no recargue la página
            modificaPalabra(palabraRef.current.value);
        }}>
            <input style={{width: 200 + 'px'}} ref={palabraRef} type="text" placeholder="La palabra" />
            <button type="submit">Copia la palabra</button><br/><br/>
        </form>
    );
};

export default connect(null, {modificaPalabra})(Form); // el primer parámetro lee la store (null = no lo hace), el segundo modifica la store