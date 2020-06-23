import {
    PROFILE_START,
    PROFILE_SUCCESS,
    PROFILE_FINISH,
    PROFILE_FAILED,
} from '../Types';

const INITIAL_STATE = {
    id: 0,
    profile: [],
    loading: false,
};

export const ProfileReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PROFILE_START:
            return {
                ...state,
                loading: true,
            };
        case PROFILE_SUCCESS:
            return {
                ...state,
                ...action.payload,
                loading: false,
            };
        case PROFILE_FINISH:
            return {
                ...state,
                loading: false,
            };
        case PROFILE_FAILED:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};