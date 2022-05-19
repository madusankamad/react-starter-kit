import React, { ReactElement, createContext, useContext, useState } from 'react';
import { ProviderProps } from './commonTypes';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme, THEME_TYPES } from '../theme';
import { darkColors, lightColors } from '../theme/colors';

const getTheme = (themeName: string) => {
  switch (themeName) {
    case THEME_TYPES.dark:
      return { initial: darkColors, material: darkTheme };
    case THEME_TYPES.light:
      return { initial: lightColors, material: lightTheme };
    default:
      return { initial: lightColors, material: lightTheme };
  }
};

interface ThemeContextTypes {
  activeTheme: string;
  setTheme: (themeName: string) => void;
}

const ThemeContext = createContext<ThemeContextTypes>({
  activeTheme: THEME_TYPES.light,
  setTheme: (_args: any) => console.log('init dispatch', _args)
});

export const ThemeContextProvider = ({ children }: ProviderProps): ReactElement => {
  const [theme, setTheme] = useState(THEME_TYPES.light);
  const { material: materialTheme } = getTheme(theme);
  return (
    <ThemeContext.Provider
      value={{
        activeTheme: theme,
        setTheme
      }}
    >
      <ThemeProvider theme={materialTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
