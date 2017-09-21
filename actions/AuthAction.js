import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  NETWORK_FAILED
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

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

      axios.get('http://localhost:8000/login?user='+ email +'&pwd=' + password)
        .then(response =>
          isValidUser(response,
          dispatch,
          email)).catch(error => networkFailed(dispatch, error));
    };
};

const isValidUser = (response, dispatch, user) => {
  if(response.data[0]['valid'] === 1){
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
    });
    Actions.employee();
  }
  else {
    loginUserFail(dispatch);
  }
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const networkFailed = (dispatch, error) => {
  dispatch({ type: NETWORK_FAILED,
    payload: error
  });
};
