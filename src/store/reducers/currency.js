/*
  Currency Reducer
  This Reducer, in the future, is intended to be polling and fetching the
  actual value on each currency against the App's base currency.
  (The base currency on the App is TBD, most likely USD)
*/
const initialState = {
  currencyList: [

  ],
  error: null,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  state = {
    ...state,
    currencyList: [
      {
        id: 0,
        name: 'USD',
      },
      {
        id: 1,
        name: 'MXN',
      },
      {
        id: 2,
        name: 'CAD',
      },
      {
        id: 3,
        name: 'EUR',
      },
      {
        id: 4,
        name: 'GBP',
      },
    ],
  };
  return state;
};

export default reducer;
