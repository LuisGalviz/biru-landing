import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e73131',
      contrastText: '#fff',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
    text: {
      primary: '#111',
      secondary: '#555',
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', 'sans-serif'`,
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      textTransform: 'uppercase',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      textTransform: 'uppercase',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0',
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000',
        },
      },
    },
  },
});

export default theme;
