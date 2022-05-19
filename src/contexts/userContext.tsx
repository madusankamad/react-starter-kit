import React, { createContext, ReactElement, useReducer, useContext } from 'react';
import { UserIntf, INITIAL_USER_STATE, userReducer } from './reducer/userReducer';
import { ProviderProps } from './commonTypes';

interface UserContextTypes extends UserIntf {
  dispatch: (props: any) => void;
}

//const UserContext = createContext<Partial<UserContextTypes>>({});
const UserContext = createContext<UserContextTypes>({
  ...INITIAL_USER_STATE,
  dispatch: (_args: any) => console.log('init dispatch', _args)
});

export const UserContextProvider = ({ children }: ProviderProps): ReactElement => {
  const [userState, dispatch] = useReducer(userReducer, INITIAL_USER_STATE);
  return (
    <UserContext.Provider
      value={{
        ...userState,
        dispatch
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
