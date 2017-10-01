import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATED
} from '../actions/types';

const INITIAL_STATE = {
  name:'',
  phone:'',
  shift:'Monday'
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]:action.payload.value };
    case EMPLOYEE_CREATED:
      return INTIAL_STATE;
    default:
      return state;
  }
};
