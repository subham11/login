import {
	EMAIL_CHANGED,
  PASSWORD_CHANGED,
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	NETWORK_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
	user: '',
	error: '',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
		case LOGIN_USER:
			return { ...state, loading:true, error: '' }
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload, error: '', loading:false };
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authnetiction Failed!', password: '', loading:false };
		case NETWORK_FAILED:
			return { ...state, error: action.payload.message, password: '', loading:false };
		default:
			return state;
	}
};
