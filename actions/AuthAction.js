import axios from 'axios';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
		type: EMAIL_CHANGED,
		payload: text
	}
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}
//console.log(response.data[0]['valid'])
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    axios.get('http://127.0.0.1:8000/login?user='+ email +'&pwd=' + password)
      .then(response =>
        isValidUser(response.data[0]['valid'],
        dispatch,
        email));
      //.then(response => console.log(response));
      //.catch(error => networkFailed(dispatch, error)));
		  //.then((response) => isValidUser(response.data[0]['valid'], dispatch, email)
      //.catch(error => loginUserFail(dispatch)));
    };
};

const isValidUser = (loginValue, dispatch, user) => {
  if(loginValue === 1){
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
    });
  }
  else {
    loginUserFail(dispatch);
  }
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const networkFailed = (dispatch, error) => {
  console.log(error);
  dispatch({ type: NETWORK_FAILED, payload:error });
};
