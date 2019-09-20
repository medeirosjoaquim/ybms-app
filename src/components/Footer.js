import React from 'react';

const year = new Date().getFullYear();

const Footer = () => (
  <section>
    <footer className="footer">
        Made by Joaquim Medeiros &copy; { year }
    </footer>
  </section>
);

export default Footer;