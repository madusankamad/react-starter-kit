import { createTheme } from '@mui/material/styles';
import { THEME_LIGHT, THEME_DARK } from './themeConfig';

export const THEME_TYPES = {
  dark: 'dark',
  light: 'light'
};

export const darkTheme = createTheme(THEME_DARK);

export const lightTheme = createTheme(THEME_LIGHT);
