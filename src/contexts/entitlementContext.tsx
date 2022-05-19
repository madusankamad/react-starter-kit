import { createContext, ReactElement, useReducer, useContext } from 'react';
import { ProviderProps } from './commonTypes';

import {
  EntitlementIntf,
  INITIAL_ENTITLEMENT_STATE,
  entitlementReducer
} from './reducer/entitlementReducer';

interface EntlContextTypes extends EntitlementIntf {
  dispatch: (props: any) => void;
}

const EntitlementContext = createContext<EntlContextTypes>({
  ...INITIAL_ENTITLEMENT_STATE,
  dispatch: (_args: any) => console.log('init dispatch', _args)
});

export const EntitlementContextProvider = ({ children }: ProviderProps): ReactElement => {
  const [entitlementState, dispatch] = useReducer(entitlementReducer, INITIAL_ENTITLEMENT_STATE);
  return (
    <EntitlementContext.Provider
      value={{
        ...entitlementState,
        dispatch
      }}
    >
      {children}
    </EntitlementContext.Provider>
  );
};

export const useEntitlementContext = () => useContext(EntitlementContext);
