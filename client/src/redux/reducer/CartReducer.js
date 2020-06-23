import {
    CART_START,
    CART_SUCCESS,
    CART_FINISH,
    CART_FAILED,
} from '../Types';

const INITIAL_STATE = {
    cartList: [],
    loading: false,
};

export const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CART_START:
            return {
                ...state,
                loading: true,
            };
        case CART_SUCCESS:
            return {
                ...state,
                cartList: action.payload,
                loading: false,
            };
        case CART_FINISH:
            return {
                ...state,
                loading: false,
            };
        case CART_FAILED:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};