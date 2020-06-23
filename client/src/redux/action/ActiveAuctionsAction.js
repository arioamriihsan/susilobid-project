import Axios from 'axios';
import { API_URL } from '../../support/API_URL';
import {
    AUCTION_START,
    AUCTION_SUCCESS,
    AUCTION_FINISH,
    AUCTION_FAILED,
} from '../Types';

const token = localStorage.getItem('token');

export const getAuction = () => {
    return async dispatch => {
        dispatch({
            type: AUCTION_START,
        });
        try {
            let headers = {
                headers : {
                    'Authorization': `Bearer ${token}`
                },
            };
            let res = await Axios.get(`${API_URL}/bid/view-auction`, headers);
            console.log(res.data.data);
            dispatch({
                type: AUCTION_SUCCESS,
                payload: res.data.data,
                count: res.data.count,
            });
            dispatch({
                type: AUCTION_FINISH,
            });
        } catch (err) {
            dispatch({
                type: AUCTION_FAILED,
            });
        }
    };
};