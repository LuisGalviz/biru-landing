'use client';

import { Box, Typography, Container } from '@mui/material';
import { styles } from './aboutSection.styles';

export default function AboutSection() {
  return (
    <Box id="about" component="section" sx={styles.root}>
      <Container maxWidth="md">
        <Typography variant="h3" sx={styles.title}>
          Sobre Nosotros
        </Typography>
        <Typography variant="body1" sx={styles.description}>
          Somos una empresa comprometida con la innovación y la excelencia. Nuestra misión es
          ofrecer soluciones impactantes que conecten a las personas con el futuro, combinando
          creatividad, tecnología y propósito.
        </Typography>
      </Container>
    </Box>
  );
}
