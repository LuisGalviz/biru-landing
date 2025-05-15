import { SxProps, Theme } from '@mui/material';

export const styles: Record<string, SxProps<Theme>> = {
  root: {
    marginTop: '70vh',
    paddingY: { xs: 6, md: 10 },
    backgroundColor: '#f9f9f9',
    scrollMarginTop: '8vh',
  },
  title: {
    fontWeight: 700,
    fontSize: { xs: '2rem', md: '2.5rem' },
    textAlign: 'center',
    mb: 4,
  },
  description: {
    fontSize: { xs: '1rem', md: '1.2rem' },
    textAlign: 'center',
    lineHeight: 1.7,
    color: '#444',
  },
};
