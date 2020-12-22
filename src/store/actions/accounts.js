import * as actionTypes from './action-types';
import axiosApi from '../../axios-api';

export const fetchAccountsStart = () => {
  return {
    type: actionTypes.FETCH_ACCOUNTS_START,
  };
};

export const fetchAccountsSuccess = (token, email, userId) => {
  return {
    type: actionTypes.FETCH_ACCOUNTS_SUCCESS,
    token: token,
    userEmail: email,
    userId: userId,
  };
};

export const fetchAccountsFail = (error) => {
  return {
    type: actionTypes.FETCH_ACCOUNTS_FAIL,
  };
};

export const fetchAccounts = (userId) => {
  // return (dispatch) => {
  //   dispatch(authStart());
  //   const authData = {
  //     accounts: {
  //       user_id: userId,
  //     },
  //   };
  //   axiosApi
  //     .get('/accounts', authData)
  //     .then((response) => {
  //       localStorage.setItem('userEmail', response.data.email);
  //       localStorage.setItem('token', response.data.token);
  //       localStorage.setItem('userId', response.data.userId);
  //       dispatch(authSuccess(response.data.token, response.data.email));
  //     })
  //     .catch((err) => {
  //       dispatch(authFail(err.data));
  //     });
  // };
};

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
      },
    };
    axiosApi
      .post('/accounts', accountData)
      .then((response) => {
        console.log(response.data);
        // dispatch(createAccountSuccess(response.data));
      })
      .catch((err) => {
        dispatch(createAccountFail(err.data));
      });
  };
};
