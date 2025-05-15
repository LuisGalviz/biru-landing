'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Button, Fade, Stack, MobileStepper } from '@mui/material';
import { styles } from './heroSection.styles';
import PropTypes from 'prop-types';

const images = [
  { label: 'Primera', src: '/images/slider/01.avif' },
  { label: 'Segunda', src: '/images/slider/02.avif' },
  { label: 'Tercera', src: '/images/slider/03.avif' },
];

// const HeroSection = ({ title }: { title: string }) => {
const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  const handleNext = () => {
    setShow(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setShow(true);
    }, 200);
  };

  const handleBack = () => {
    setShow(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
      setShow(true);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box id="home" component="section" sx={styles.root}>
      <Fade in={show} timeout={500}>
        <Box
          key={images[index].label}
          sx={{
            ...styles.slide,
            backgroundImage: `url(${images[index].src})`,
          }}
        >
          <Typography variant="h2" sx={styles.title}>
            {images[index].label}
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="inherit" onClick={handleBack}>
              Anterior
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              Siguiente
            </Button>
          </Stack>
        </Box>
      </Fade>

      <MobileStepper
        steps={images.length}
        position="static"
        activeStep={index}
        nextButton={<></>}
        backButton={<></>}
        sx={styles.stepper}
      />
    </Box>
  );
};

HeroSection.prototypes = {
  title: PropTypes.string,
};

export default HeroSection;
