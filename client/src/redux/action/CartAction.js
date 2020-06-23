import Axios from 'axios';
import { API_URL } from '../../support/API_URL';
import {
    CART_START,
    CART_SUCCESS,
    CART_FINISH,
    CART_FAILED,
} from '../Types';

const token = localStorage.getItem('token');

export const getCart = (id) => {
    return async dispatch => {
        dispatch({
            type: CART_START,
        });
        try {
            let headers = {
                headers : {
                    'Authorization': `Bearer ${token}`,
                },
            };
            let res = await Axios.get(`${API_URL}/cart/get-cart/${id}`, headers);
            dispatch({
                type: CART_SUCCESS,
                payload: res.data.data,
            });
            dispatch({
                type: CART_FINISH,
            });
        } catch {
            dispatch({
                type: CART_FAILED,
            });
        }
    };
};