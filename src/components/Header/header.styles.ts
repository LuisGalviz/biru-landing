// components/Header/header.styles.ts
import { SxProps, Theme } from '@mui/material';

export const appBar: SxProps<Theme> = {
  backgroundColor: 'transparent',
  padding: 0.6,
  boxShadow: 'none',
};

export const toolbar: SxProps<Theme> = {
  justifyContent: 'space-between',
};

export const menuButton: SxProps<Theme> = {
  display: {
    xs: 'flex',
    md: 'none',
  },
  fontSize: '2rem',
};

export const title: SxProps<Theme> = {
  fontWeight: 'bold',
  textAlign: {
    xs: 'center',
    md: 'left',
  },
  paddingLeft: {
    xs: 0,
    md: 5,
  },
};

export const navLinks: SxProps<Theme> = {
  display: {
    xs: 'none',
    md: 'flex',
  },
  gap: 1,
};

export const navButton: SxProps<Theme> = {
  textTransform: 'none',
  fontSize: '0.9rem',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#e73131',
  },
};

export const drawerContent: SxProps<Theme> = {
  width: 250,
  padding: 2,
};

export const langSwitcher: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
};
