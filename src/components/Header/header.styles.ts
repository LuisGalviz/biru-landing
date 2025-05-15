// components/Header/header.styles.ts
import { SxProps, Theme } from '@mui/material';

export const appBar: SxProps<Theme> = {
  backgroundColor: 'white',
  color: 'black',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

export const toolbar: SxProps<Theme> = {
  justifyContent: 'space-between',
};

export const menuButton: SxProps<Theme> = {
  display: {
    xs: 'flex',
    md: 'none',
  },
};

export const title: SxProps<Theme> = {
  flexGrow: 1,
  fontWeight: 'bold',
  textAlign: {
    xs: 'center',
    md: 'left',
  },
};

export const navLinks: SxProps<Theme> = {
  display: {
    xs: 'none',
    md: 'flex',
  },
  gap: 2,
};

export const drawerContent: SxProps<Theme> = {
  width: 250,
  padding: 2,
};

export const langSwitcher: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  marginLeft: 'auto',
};
