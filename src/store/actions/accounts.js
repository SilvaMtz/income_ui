import * as actionTypes from './action-types';
import axiosApi from '../../axios-api';

/*
  Accounts Fetch Action creators
*/
export const fetchAccountsStart = () => {
  return {
    type: actionTypes.FETCH_ACCOUNTS_START,
  };
};

export const fetchAccountsSuccess = (accounts) => {
  return {
    type: actionTypes.FETCH_ACCOUNTS_SUCCESS,
    accounts: accounts
  };
};

export const fetchAccountsFail = (error) => {
  return {
    type: actionTypes.FETCH_ACCOUNTS_FAIL,
    error: error
  };
};

export const fetchAccounts = (userId, token) => {
  return (dispatch) => {
    dispatch(fetchAccountsStart());
    const accountsData = {
      accounts: {
        user_id: userId,
      },
    };
    const authHeaders = {
      Authorization: `Bearer ${token}`,
    };
    axiosApi
      .get('/accounts', accountsData, { headers: authHeaders })
      .then((response) => {
        console.log(response);
        // localStorage.setItem('userAccounts', response.data.accounts);
        dispatch(fetchAccountsSuccess(response.data.accounts));
      })
      .catch((err) => {
        dispatch(fetchAccountsFail(err.data));
      });
  };
};

/*
  Accounts Creation Action creators
*/
export const createAccountStart = () => {
  return {
    type: actionTypes.CREATE_ACCOUNT_START,
  };
};

export const createAccountSuccess = (account) => {
  return {
    type: actionTypes.CREATE_ACCOUNT_SUCCESS,
    account: { ...account },
  };
};

export const createAccountFail = (error) => {
  return {
    type: actionTypes.CREATE_ACCOUNT_FAIL,
  };
};

export const createAccount = (userId, token, payload) => {
  return (dispatch) => {
    dispatch(createAccountStart());
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const accountData = {
      account: {
        user_id: userId,
        balance: payload.balance,
        category: payload.category,
        name: payload.name,
        bank_id: payload.bankId,
        base_currency: payload.baseCurrency
      },
    };
    axiosApi
      .post('/accounts', accountData, { headers: headers })
      .then((response) => {
        dispatch(createAccountSuccess(response.data));
      })
      .catch((err) => {
        dispatch(createAccountFail(err.data));
      });
  };
};
