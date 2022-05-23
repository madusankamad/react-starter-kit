import React, { createContext, ReactElement, useReducer, useContext } from 'react';
import { UserIntf, INITIAL_USER_STATE, userReducer } from './reducer/userReducer';
import { ProviderProps } from './commonTypes';
import { INIT_USER_STORE, RESET_USER_STORE } from './actions/userActions';

interface UserContextTypes extends UserIntf {
  dispatch: (props: any) => void;
  initUser: (props: any) => void;
  resetUser: (props: any) => void;
}

//const UserContext = createContext<Partial<UserContextTypes>>({});
const UserContext = createContext<UserContextTypes>({
  ...INITIAL_USER_STATE,
  dispatch: (_args: any) => console.log('init dispatch', _args),
  initUser: (_args: any) => console.log('initUser', _args),
  resetUser: () => console.log('resetUser')
});

export const UserContextProvider = ({ children }: ProviderProps): ReactElement => {
  const [userState, dispatch] = useReducer(userReducer, INITIAL_USER_STATE);
  const actions = {
    resetUser: () => dispatch({ type: RESET_USER_STORE }),
    initUser: (_userData: any) => dispatch({ type: INIT_USER_STORE, data: _userData })
  };
  return (
    <UserContext.Provider
      value={{
        ...userState,
        ...actions,
        dispatch
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
