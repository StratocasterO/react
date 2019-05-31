const initalState = {coste_a: 40};

// action es el valor devuelto por el action
//  action.payload será el valor que quiero añadir, borrar, etc

export default (state = initalState, action) => {
    if (action.type === 'CALCULAR') {
        return {
            ...state, // devuelve todo lo que había en el state
            coste_a: action.payload
        }
    }

    return state;
};

export const selectCostA = state => state.costeReducerA.coste_a;