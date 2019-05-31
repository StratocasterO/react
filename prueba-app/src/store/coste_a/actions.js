// Las acciones siempre tienen la estructura { type, payload }

export const enviarCosteA = (coste_a) => {
    return {
        type: 'CALCULAR',
        payload: coste_a
    }
};