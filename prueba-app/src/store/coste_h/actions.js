// Las acciones siempre tienen la estructura { type, payload }

export const enviarCosteH = (coste_h) => {
    return {
        type: 'CALCULAR',
        payload: coste_h
    }
};