import React from 'react';

const year = new Date().getFullYear();

const Footer = () => (
  <section>
    <footer className="footer">
        By <a href="https://linkedin.com/in/joaquim-medeiros" target="_blank" rel="noopener noreferrer">Joaquim</a>. For Philips with <span role="img" aria-label="love">❤️</span>{ year }
    </footer>
  </section>
);

export default Footer;