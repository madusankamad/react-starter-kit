import React, { ReactElement, createContext, useContext, useState, useEffect } from 'react';
import { ProviderProps } from './commonTypes';
import { ThemeProvider } from '@mui/material/styles';

import MuiContainer from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import CssBaseline from '@mui/material/CssBaseline';

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

// ----------------- Supportive Component for storybook
const ThemeToggle = ({ children }: ProviderProps): ReactElement => {
  const { activeTheme, setTheme } = useThemeContext();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  useEffect(() => {
    if (checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [checked]);
  return (
    <>
      <CssBaseline />
      <MuiContainer maxWidth={'lg'}>
        <FormControl component="fieldset" variant="standard">
          <FormControlLabel
            control={
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label={`Turn on ${checked ? 'Light' : 'Dark'} mode`}
          />
        </FormControl>
      </MuiContainer>
      <MuiContainer maxWidth={'lg'} sx={{ marginTop: '70px' }}>
        <>{children}</>
      </MuiContainer>
    </>
  );
};

export const ThemeForStorybook = ({ children }: ProviderProps): ReactElement => {
  return (
    <ThemeContextProvider>
      <ThemeToggle>{children}</ThemeToggle>
    </ThemeContextProvider>
  );
};
