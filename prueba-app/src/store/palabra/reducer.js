const initalState = {palabra: ''};

// action es el valor devuelto por el action
//  action.payload será el valor que quiero añadir, borrar, etc

export default (state = initalState, action) => {
    if (action.type === 'MODIFY_WORD') {
        return {
            ...state, // devuelve todo lo que había en el state
            palabra: action.payload
        }
    }

    return state;
};

export const selectActiveWord = state => state.palabraReducer.palabra;