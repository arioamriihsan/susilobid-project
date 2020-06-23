import {
    AUCTION_START,
    AUCTION_SUCCESS,
    AUCTION_FINISH,
    AUCTION_FAILED,
} from '../Types';

const INITIAL_STATE = {
    count: 0,
    bidList: [],
    loading: false,
};

export const ActiveAuctionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUCTION_START:
            return {
                ...state,
                loading: true,
            };
        case AUCTION_SUCCESS:
            return {
                ...state,
                bidList: action.payload,
                count: action.count,
                loading: false,
            };
        case AUCTION_FINISH:
            return {
                ...state,
                loading: false,
            };
        case AUCTION_FAILED:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};