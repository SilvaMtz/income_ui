import * as actionTypes from './action-types';
import axiosApi from '../../axios-api';

/*
  Fetch Bank Entities
*/
export const fetchBanksStart = () => {
  return {
    type: actionTypes.FETCH_BANKS_START,
  };
};

export const fetchBanksSuccess = (banks) => {
  return {
    type: actionTypes.FETCH_BANKS_SUCCESS,
    banks: banks
  };
};

export const fetchBanksFail = (error) => {
  return {
    type: actionTypes.FETCH_BANKS_FAIL,
    error: error
  };
};

export const fetchBanks = () => {
  return (dispatch) => {
    dispatch(fetchBanksStart());
    axiosApi
      .get('/banks')
      .then((response) => {
        // localStorage.setItem('banks', response.data);
        dispatch(fetchBanksSuccess(response.data));
      })
      .catch((err) => {
        dispatch(fetchBanksFail(err.data));
      });
  };
};
