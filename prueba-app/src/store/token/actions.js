// Las acciones siempre tienen la estructura { type, payload }

export const modificarToken = (token) => {
    return {
        type: 'modifyToken',
        payload: token
    }
};