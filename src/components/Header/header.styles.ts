import { SxProps, Theme } from '@mui/material';

export const styles: Record<string, SxProps<Theme>> = {
  appBarBase: {
    position: 'fixed',
    padding: 0.6,
    zIndex: 1300,
    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
  },

  appBarTransparent: {
    backgroundColor: 'transparent',
    color: '#fff',
    boxShadow: 'none',
  },

  appBarScrolled: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },

  toolbar: {
    justifyContent: 'space-between',
  },

  menuButton: {
    display: {
      xs: 'flex',
      md: 'none',
    },
    fontSize: '2rem',
  },

  title: {
    fontWeight: 'bold',
    textAlign: {
      xs: 'center',
      md: 'left',
    },
    paddingLeft: {
      xs: 0,
      md: 5,
    },
  },

  navLinks: {
    display: {
      xs: 'none',
      md: 'flex',
    },
    gap: 1,
  },

  navButton: {
    textTransform: 'none',
    fontSize: '0.9rem',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#e73131',
    },
  },

  drawerContent: {
    width: 250,
    padding: 2,
  },

  langSwitcher: {
    display: 'flex',
    alignItems: 'center',
  },
};
