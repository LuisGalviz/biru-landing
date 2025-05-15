// utils/getHeaderSx.ts
import { SxProps, Theme } from '@mui/material';
import { styles } from '@/components/Header/header.styles';

export function getHeaderSx(scrolled: boolean): SxProps<Theme> {
  return {
    ...styles.appBarBase,
    ...(scrolled ? styles.appBarScrolled : styles.appBarTransparent),
  } as SxProps<Theme>;
}
