import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App_login';                 // importa aquí la app que quieres cargar !!!
import Content from './components/content_login_context'
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';    // provider de Redux
import store from './store';

import MyProvider from './context/provider';    // provider de Context

// const Application = () => (
//     // provider envolviendo a la app para usar Redux
//     <Provider store={store}>        
//         <App />
//     </Provider>
// );

const Application = () => (
    // provider envolviendo a la app para usar Context
    <MyProvider>        
        <App />
        <Content />
    </MyProvider>
);

ReactDOM.render(<Application/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();