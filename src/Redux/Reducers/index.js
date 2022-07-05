import {
    GET_ALL_PRODUCTS,
} from "../Actions";

const initialState = {
    products: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }

        default:
            return state;
    }
}

export default rootReducer;