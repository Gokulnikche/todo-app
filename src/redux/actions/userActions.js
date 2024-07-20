import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS
  } from '../actionTypes';
  
  export const loginUser = ({ username, password }) => {
    return dispatch => {
      dispatch({ type: LOGIN_REQUEST });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === 'test' && password === 'password') {
            dispatch({ type: LOGIN_SUCCESS });
            resolve();
          } else {
            const error = 'Invalid credentials';
            dispatch({ type: LOGIN_FAILURE, payload: error });
            reject(new Error(error));
          }
        }, 1000);
      });
    };
  };
  
  export const logoutUser = () => {
    return dispatch => {
      dispatch({ type: LOGOUT_SUCCESS });
    };
  };
  