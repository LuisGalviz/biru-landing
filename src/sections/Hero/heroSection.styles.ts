import { SxProps, Theme } from '@mui/material';

export const styles: Record<string, SxProps<Theme>> = {
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '70vh',
    overflow: 'hidden',
    zIndex: 0,
  },
  slide: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    fontWeight: 'bold',
    textShadow: '2px 2px 6px rgba(0,0,0,0.6)',
    mb: 4,
  },
  stepper: {
    position: 'absolute',
    bottom: 16,
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'transparent',
  },
};
