import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS
  } from '../actionTypes';
  
  const initialState = {
    isAuthenticated: false,
    loading: false,
    error: null
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return { ...state, loading: true, error: null };
      case LOGIN_SUCCESS:
        return { ...state, isAuthenticated: true, loading: false, error: null };
      case LOGIN_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case LOGOUT_SUCCESS:
        return { ...state, isAuthenticated: false, loading: false, error: null };
      default:
        return state;
    }
  };
  
  export default userReducer;
  