// Las acciones siempre tienen la estructura { type, payload }

export const modificaPalabra = (palabra) => {
    return {
        type: 'MODIFY_WORD',
        payload: palabra
    }
};