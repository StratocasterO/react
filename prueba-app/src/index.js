import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App_costes_redux';                 // importa aquí la app que quieres cargar !!!
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import store from './store';

const Application = () => (
    // provider envolviendo a la app para usar Redux
    <Provider store={store}>        
        <App />
    </Provider>
);

ReactDOM.render(<Application/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();