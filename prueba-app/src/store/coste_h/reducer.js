const initalState = {coste_h: 40};

// action es el valor devuelto por el action
//  action.payload será el valor que quiero añadir, borrar, etc

export default (state = initalState, action) => {
    if (action.type === 'CALCULA') {
        return {
            ...state, // devuelve todo lo que había en el state
            coste_h: action.payload
        }
    }

    return state;
};

export const selectCostH = state => state.costeReducerH.coste_h;