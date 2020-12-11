import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.scss';

const Footer = () => {
  return (
    <section className='footer'>
      <Container>
        <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
      </Container>
    </section>
  );
};

export default Footer;
