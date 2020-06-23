import {
  API_REPORT_START,
  GET_REVENUE,
  MOST_BIDDER,
  MOST_POPULAR_CTG,
  TOTAL_SELL,
  WEEKLY_BID,
  API_REPORT_FAILED
} from '../Types';

const INNITIAL_STATE = {
  revenue: 0,
  month: [],
  totalTrx: 0,
  mostBidder: [],
  totalBid: [],
  popularCtg: [],
  countCtg: [],
  totalSell: 0,
  day: [],
  count: [],
  error: false,
  loading: false
};

export const reportReducer = (state = INNITIAL_STATE, action) => {
  switch(action.type){
    case API_REPORT_START :
      return {
        ...state,
        loading: true
      };
    case GET_REVENUE :
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case MOST_BIDDER :
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case MOST_POPULAR_CTG :
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case TOTAL_SELL :
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case WEEKLY_BID :
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case API_REPORT_FAILED :
      return {
        ...state,
        loading: false,
        error: true
      };
    default : return state;
  }
};