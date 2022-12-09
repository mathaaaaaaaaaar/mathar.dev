import React from 'react';

import { Container } from 'react-bootstrap';

import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
  return (
    <Container className='contact-page-container mx-auto my-4'>
      <h2 className='my-3'>Don't Hesitate to Reach Out!</h2>
      <ContactForm />
      <ContactInfo />
    </Container>
  );
};
  
export default Contact;