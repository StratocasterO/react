import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App_login from '../components/login';
import ContenidoRestringido from '../components/content_login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            { /*El atributo exact significa que ese nodo no afecta a sus descendientes.
             Si no lo ponemos, al escribir /login, accederíamos igualmente a Home */}    
            <Route exact path="/" component={App_login} />
            <Route path="/login" component={ContenidoRestringido} />
             { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la 
            ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}    
            <Route path="*" component={() => <div>404</div> } />
        </Switch>
    </BrowserRouter>
);

export default Routes;