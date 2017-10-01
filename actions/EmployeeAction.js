import axios from 'axios';
import {
  EMPLOYEE_UPDATE,
  CREATE_EMPLOYEE,
  EMPLOYEE_CREATED,
  EMPLOYEE_CREATED_FAILED
  } from './types';

export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  console.log(name, phone, shift);

  return (dispatch) => {
    dispatch({ type: CREATE_EMPLOYEE });

    axios.post('http://localhost:8000/employee/', {
    name: name,
    phone: phone,
    shift: shift
  })
  .then(response => IsUserCreated(response, dispatch, name))
  .catch(error => networkFailed(dispatch, error));
  };
};

const IsUserCreated = (response, dispatch) => {
  console.log(response.data.insertId);
  if(response.data.insertId > 0){
    dispatch({
      type: EMPLOYEE_CREATED,
      payload: name
    });
  }
  else {
    createUserFail(dispatch);
  }
};

const createUserFail = (dispatch) => {
  dispatch({ type: EMPLOYEE_CREATED_FAILED });
};

const networkFailed = (dispatch, error) => {
  dispatch({ type: NETWORK_FAILED,
    payload: error
  });
};
