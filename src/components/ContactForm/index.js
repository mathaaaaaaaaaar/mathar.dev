import React, { useState } from 'react';

import axios from 'axios';
import {
  Button,
  Form,
} from 'react-bootstrap';

const ContactForm = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [reason, setReason] = useState();
    const [message, setMessage] = useState();

    const submitContactForm = () => {
        const data = { firstName, lastName, email, reason, message };
        axios.post('http://localhost:8080/contact-form-submit', data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <Form className='contact-info-container py-1 px-4 mx-auto my-3'>
            <div className='contact-form-name-group my-3'>
                <Form.Group className="w-100" controlId="contactFirstName">
                    <Form.Label className='contact-name-label'>First Name</Form.Label>
                    <Form.Control className='contact-name me-auto' onChange={(e) => setFirstName(e.target.value)} />
                </Form.Group>
                <Form.Group className="w-100" controlId="contactLastName">
                    <Form.Label className='contact-name-label'>Last Name</Form.Label>
                    <Form.Control className='contact-name ms-auto' onChange={(e) => setLastName(e.target.value)} />
                </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="contactEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactOptions">
                <Form.Label>How Can I Help?</Form.Label>
                <Form.Select onChange={(e) => setReason(e.target.value)}>
                    <option>Select an option</option>
                    <option value='tutor'>Tutoring</option>
                    <option value='mentor'>Mentorship</option>
                    <option value='other'>Other</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => setMessage(e.target.value)} />
            </Form.Group>
            <Button type='submit' className='mb-3 contact-form-submit-button' onClick={(e) => {e.preventDefault(); submitContactForm();}}>Submit</Button>
        </Form>
    )
}

export default ContactForm;