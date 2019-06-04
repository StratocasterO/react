import { createStore, combineReducers } from 'redux';
import palabraReducer from './palabra/reducer';
import costeReducerA from './coste_a/reducer';
import costeReducerH from './coste_h/reducer';
import tokenReducer from './token/reducer';

const reducers = combineReducers({
    palabraReducer,     // este es el nombre del reducer que se usa para modificar la store
    costeReducerA,
    costeReducerH,
    tokenReducer
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // para usar la extension de Chrome 
);

export default store;