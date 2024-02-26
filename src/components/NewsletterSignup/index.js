import React, { useState } from 'react';

import axios from 'axios';
import {
  Button,
  Form,
} from 'react-bootstrap';

const NewsletterSignup = () => {
  const [email, setEmail] = useState();

  const subscribeUser = () => {
    const data = { email };
    axios.post('http://localhost:8080/subscribe-newsletter', data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId='newsletterSignupFormEmail'>
        <Form.Text>Sign up for the monthly newsletter to read about new technologies!</Form.Text>
        <br />
        <Form.Label>Email Address</Form.Label>
        <div className='newsletter-form-submit'>
        <Form.Control type='email' placeholder='john@xyz.com' className='newsletter-form-email me-2' onChange={(e) => setEmail(e.target.value)} />
        <Button type='submit' className='newsletter-form-submit-button' onClick={(e) => { e.preventDefault(); subscribeUser(); }}>Submit</Button>
        </div>
      </Form.Group>
    </Form>
  );
};
  
  export default NewsletterSignup;