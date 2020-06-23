import Axios from 'axios';
import { API_URL } from '../../support/API_URL';

import {
  API_REPORT_START,
  GET_REVENUE,
  MOST_BIDDER,
  MOST_POPULAR_CTG,
  TOTAL_SELL,
  WEEKLY_BID,
  API_REPORT_FAILED
} from '../Types';

export const GetRevenue = month => {
  return async dispatch => {
    dispatch({
      type: API_REPORT_START
    });
    try {
      let res = await Axios.get(`${API_URL}/report/get-revenue/${month}`);
      dispatch({
        type: GET_REVENUE,
        payload: {
          revenue: res.data.revenue,
          month: res.data.month,
          totalTrx: res.data.totTrx
        }
      })
    } catch(err) {
      console.log(err);
      dispatch({
        type: API_REPORT_FAILED,
        payload: err
      });
    }
  };
};

export const MostBidder = month => {
  return async dispatch => {
    dispatch({
      type: API_REPORT_START
    });
    try {
      let res = await Axios.get(`${API_URL}/report/most-bidder/${month}`);
      dispatch({
        type: MOST_BIDDER,
        payload: {
          mostBidder: res.data.mostBidder,
          totalBid: res.data.totalBid
        }
      });
    } catch(err) {
      console.log(err);
      dispatch({
        type: API_REPORT_FAILED,
        payload: err
      });
    }
  };
};

export const MostPopularCtg = month => {
  return async dispatch => {
    dispatch({
      type: API_REPORT_START
    });
    try {
      let res = await Axios.get(`${API_URL}/report/popular-ctg/${month}`);
      dispatch({
        type: MOST_POPULAR_CTG,
        payload: {
          popularCtg: res.data.mostPopular,
          countCtg: res.data.count
        }
      });
    } catch(err) {
      console.log(err);
      dispatch({
        type: API_REPORT_FAILED,
        payload: err
      });
    }
  };
};

export const TotalSell = month => {
  return async dispatch => {
    dispatch({
      type: API_REPORT_START
    });
    try {
      let res = await Axios.get(`${API_URL}/report/total-sell/${month}`);
      dispatch({
        type: TOTAL_SELL,
        payload: {
          totalSell: res.data.totalSell
        }
      });
    } catch(err) {
      dispatch({
        type: API_REPORT_FAILED,
        payload: err
      });
    }
  };
};

export const WeeklyBid = month => {
  return async dispatch => {
    dispatch({
      type: API_REPORT_START
    });
    try {
      let res = await Axios.get(`${API_URL}/report/weekly-bid/${month}`);
      dispatch({
        type: WEEKLY_BID,
        payload: {
          day: res.data.day,
          count: res.data.count
        }
      });
    } catch(err) {
      dispatch({
        type: API_REPORT_FAILED,
        payload: err
      });
    }
  };
};