import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <span 
          className="hero-intro" 
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          Hi, my name is
        </span>

        <h1 
          className="hero-name" 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          Al Ghieth Melhem.
        </h1>

        <h2 
          className="hero-subtitle" 
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          I build dynamic web app.
        </h2>

        <p 
          className="hero-description" 
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          I'm a front-end developer specializing in building modern, accessible, 
          and responsive digital interfaces. Currently, I focus on crafting clean 
          user experiences and high-performance web products.
        </p>

        <div 
          className="hero-cta-wrapper" 
          data-aos="fade-up" 
          data-aos-delay="500"
        >
          <a href="#projects" className="hero-cta-button">
            Check out my work!
          </a>
        </div>
      </div>
    </section>
  );
}