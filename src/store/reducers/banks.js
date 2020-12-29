import * as actionTypes from '../actions/action-types';

const initialState = {
  banks: [],
  error: null,
  isLoading: false
}

const fetchBanksStart = (state, action) => {
  return {
    ...state,
    error: null,
    isLoading: true,
  };
};

const fetchBanksSuccess = (state, action) => {
  return {
    ...state,
    error: null,
    isLoading: false,
    banks: action.banks
  };
};

const fetchBanksFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    isLoading: false,
  };
};

/*
  Banks Reducer
*/
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch Accounts
    case actionTypes.FETCH_BANKS_START:
      return fetchBanksStart(state, action);
    case actionTypes.FETCH_BANKS_SUCCESS:
      return fetchBanksSuccess(state, action);
    case actionTypes.FETCH_BANKS_FAIL:
      return fetchBanksFail(state, action);
    default:
      return state;
  }
};

export default reducer;
