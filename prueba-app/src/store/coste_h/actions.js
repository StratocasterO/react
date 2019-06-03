// Las acciones siempre tienen la estructura { type, payload }

export const enviarCosteH = (coste_h) => {
    return {
        type: 'CALCULA',
        payload: coste_h
    }
};