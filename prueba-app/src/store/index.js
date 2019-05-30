import { createStore, combineReducers } from 'redux';
import palabraReducer from './palabra/reducer';

const reducers = combineReducers({
    palabraReducer      // este es el nombre del reducer que se usa para modificar la store
});

const store = createStore(
    reducers,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;