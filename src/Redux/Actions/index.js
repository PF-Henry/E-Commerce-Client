//*** DEFINICIÓN DE CONSTANTES ***//
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';


//*** DEFINICIÓN DE FUNCIONES ***//
export const getAllProducts = () => {
    return async function(dispatch) {
        try {
            return dispatch({
                type: GET_ALL_PRODUCTS,
                payload: data
            })
        } catch (error) {
            return dispatch({
                type: SET_ERROR,
                payload: data
            })
        }
    }
};