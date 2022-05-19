import HelveticaNeue from '../assets/fonts/HelveticaNeueCyr-Light.woff2';

const TYPO = {
  typography: {
    fontFamily: 'Helvetica Neue'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Helvetica Neue';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${HelveticaNeue}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    }
  }
};

export const THEME_LIGHT = {
  ...TYPO,
  palette: {
    type: 'light',
    primary: {
      main: 'rgba(25, 25, 25, 0.96);',
      contrastText: '#ffffff'
    },
    secondary: {
      main: 'rgba(25, 25, 25, 0.06)',
      contrastText: 'rgba(25, 25, 25, 0.8)'
    },
    background: {
      default: '#F2F2F2',
      paper: '#ffffff'
    },
    text: {
      primary: '#191919',
      secondary: 'rgba(25, 25, 25, 0.8)',
      hint: 'rgba(25, 25, 25, 0.56)',
      disabled: 'rgba(25, 25, 25, 0.56)'
    }
  }
};

export const THEME_DARK = {
  ...TYPO,
  palette: {
    type: 'dark',
    primary: {
      main: 'rgba(255, 255, 255, 0.12)',
      contrastText: '#ffffff'
    },
    secondary: {
      main: 'rgba(255, 255, 255, 0.12)',
      contrastText: '#ffffff'
    },
    background: {
      default: '#111111',
      paper: '#262626'
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(242, 242, 242, 0.56)',
      hint: 'rgba(25, 25, 25, 0.56)',
      disabled: 'rgba(25, 25, 25, 0.56)'
    }
  }
};
