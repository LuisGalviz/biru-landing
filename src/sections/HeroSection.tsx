import React from 'react';
import PropTypes from 'prop-types';

const HeroSection = ({ title }: { title: string }) => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeroSection;
