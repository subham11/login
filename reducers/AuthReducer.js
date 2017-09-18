import {
	EMAIL_CHANGED,
  PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	NETWORK_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
	user: '',
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
		case LOGIN_USER_SUCCESS:
			return { ...state, user: action.payload, error: ''};
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authnetiction Failed!', password: ''};
		case NETWORK_FAILED:
			return { ...state, error: action.payload, password: ''};
		default:
			return state;
	}
};
