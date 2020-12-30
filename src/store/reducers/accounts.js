import * as actionTypes from '../actions/action-types';

const initialState = {
  accounts: [],
  error: null,
  isLoading: false,
};

/*
  Fetch Accounts Reducer
*/
const fetchAccountsStart = (state, action) => {
  return {
    ...state,
    error: null,
    isLoading: true,
  };
};

const fetchAccountsSuccess = (state, action) => {
  return {
    ...state,
    error: null,
    isLoading: false,
    accounts: action.accounts
  };
};

const fetchAccountsFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    isLoading: false,
  };
};

/*
  Create Account Reducer
*/
const createAccountStart = (state, action) => {
  return {
    ...state,
    error: null,
    isLoading: true,
  };
};

const createAccountSuccess = (state, action) => {
  return {
    ...state,
    accounts: state.accounts.concat(action.account),
    error: null,
    isLoading: false,
  };
};

const createAccountFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    isLoading: false,
  };
};

/*
  Accounts Reducer
*/
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch Accounts
    case actionTypes.FETCH_ACCOUNTS_START:
      return fetchAccountsStart(state, action);
    case actionTypes.FETCH_ACCOUNTS_SUCCESS:
      return fetchAccountsSuccess(state, action);
    case actionTypes.FETCH_ACCOUNTS_FAIL:
      return fetchAccountsFail(state, action);

    // Create Account
    case actionTypes.CREATE_ACCOUNT_START:
      return createAccountStart(state, action);
    case actionTypes.CREATE_ACCOUNT_SUCCESS:
      return createAccountSuccess(state, action);
    case actionTypes.CREATE_ACCOUNT_FAIL:
      return createAccountFail(state, action);

    default:
      return state;
  }
};

export default reducer;
