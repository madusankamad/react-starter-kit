import { RESET_USER_STORE, SET_USER_ID, INIT_USER_STORE } from '../actions/userActions';
import { ActionIntf } from '../commonTypes';

export interface UserIntf {
  isLoggedin: boolean;
  userId: string;
  theme: string;
  userName: string;
}

export const INITIAL_USER_STATE = {
  isLoggedin: false,
  userId: '',
  theme: 'light',
  userName: ''
};

export const userReducer = (_state: UserIntf, _action: ActionIntf) => {
  const { type, data } = _action;
  switch (type) {
    case INIT_USER_STORE:
      return { ...INITIAL_USER_STATE, ...data };
    case RESET_USER_STORE:
      return { ...INITIAL_USER_STATE };
    case SET_USER_ID:
      return { ..._state, userId: data.userId };
    default:
      return { ...INITIAL_USER_STATE };
  }
};
