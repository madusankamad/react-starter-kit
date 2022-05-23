import React, { ReactElement } from 'react';
import { ProviderProps } from './commonTypes';
import { UserContextProvider, useUserContext } from './userContext';
import { ThemeContextProvider } from './themeContext';
import { EntitlementContextProvider, useEntitlementContext } from './entitlementContext';
import CssBaseline from '@mui/material/CssBaseline';

export const RootContext = ({ children }: ProviderProps): ReactElement => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <EntitlementContextProvider>
          <>
            <CssBaseline />
            {children}
          </>
        </EntitlementContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};

export const StoreResetter = React.memo(() => {
  console.log('Store Resetter');
  const userContext = useUserContext();
  const entitlementContext = useEntitlementContext();
  userContext.dispatch('RESET_USER_STORE');
  entitlementContext.dispatch('RESET_ENTITLEMENTS');

  return <>Resetter</>;
});
