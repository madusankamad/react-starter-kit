import React, { ReactElement } from 'react';
import { ProviderProps } from './commonTypes';
import { UserContextProvider } from './userContext';
import { ThemeContextProvider } from './themeContext';
import { EntitlementContextProvider } from './entitlementContext';
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
