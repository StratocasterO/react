const initalState = {token: ''};

// action es el valor devuelto por el action
//  action.payload será el valor que quiero añadir, borrar, etc

export default (state = initalState, action) => {
    if (action.type === 'modifyToken') {
        return {
            ...state, // devuelve todo lo que había en el state
            token: action.payload
        }
    }

    return state;
};

export const selectToken = state => state.tokenReducer.token