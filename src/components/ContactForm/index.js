import {
  Button,
  Form,
} from 'react-bootstrap';

function ContactForm() {
    return (
        <Form className='contact-info-container py-1 px-4 mx-auto my-3'>
            <div className='contact-form-name-group my-3'>
                <Form.Group className="w-100" controlId="contactFirstName">
                    <Form.Label className='contact-name-label'>First Name</Form.Label>
                    <Form.Control className='contact-name me-auto' />
                </Form.Group>
                <Form.Group className="w-100" controlId="contactLastName">
                    <Form.Label className='contact-name-label'>Last Name</Form.Label>
                    <Form.Control className='contact-name ms-auto' />
                </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="contactEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactOptions">
                <Form.Label>How Can I Help?</Form.Label>
                <Form.Select>
                    <option>Select an option</option>
                    <option value="1">Tutoring</option>
                    <option value="2">Mentorship</option>
                    <option value="3">Other</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button type='submit' className='mb-3'>Submit</Button>
        </Form>
    )
}

export default ContactForm;