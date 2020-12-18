import * as actionTypes from './action-types';
import axiosLocal from '../../axios-local';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, email, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userEmail: email,
    userId: userId
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      user: {
        email: email,
        password: password,
      },
    };
    axiosLocal
      .post('/users/sign_in', authData)
      .then((response) => {
        localStorage.setItem('userEmail', response.data.email);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId);
        dispatch(authSuccess(response.data.token, response.data.email));
      })
      .catch((err) => {
        dispatch(authFail(err.data));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const userEmail = localStorage.getItem('userEmail');
      const userId = localStorage.getItem('userId');
      dispatch(authSuccess(token, userEmail, userId));
    }
  };
};
