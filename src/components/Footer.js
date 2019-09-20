import React from 'react';

const year = new Date().getFullYear();

const Footer = () => (
  <section>
    <footer className="footer">
        By Joaquim For Philips with ❤️  { year }
    </footer>
  </section>
);

export default Footer;