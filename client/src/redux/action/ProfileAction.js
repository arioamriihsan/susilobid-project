import Axios from 'axios';
import { API_URL } from '../../support/API_URL';
import {
    PROFILE_START,
    PROFILE_SUCCESS,
    PROFILE_FINISH,
    PROFILE_FAILED,
} from '../Types';

const token = localStorage.getItem('token');

export const getProfile = () => {
    return async dispatch => {
        dispatch({
            type: PROFILE_START,
        });
        try {
            let headers = {
                headers : {
                    'Authorization': `Bearer ${token}`,
                },
            };
            let res = await Axios.get(`${API_URL}/profile/get-profile`, headers);
            dispatch({
                type: PROFILE_SUCCESS,
                payload: res.data.data,
            });
            dispatch({
                type: PROFILE_FINISH,
            });
        } catch (err) {
            dispatch({
                type: PROFILE_FAILED,
            });
        }
    };
};

export const editProfile = (id, formInput) => {
    return async dispatch => {
        dispatch({
            type: PROFILE_START,
        });
        try {
            let headers = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            };
            let res = await Axios.patch(`${API_URL}/profile/edit-profile/${id}`, formInput, headers);
            dispatch({
                type: PROFILE_SUCCESS,
                payload: res.data.data,
            });
            dispatch({
                type: PROFILE_FINISH,
            });
        } catch (err) {
            dispatch({
                type: PROFILE_FAILED,
            });
        }
    };
};