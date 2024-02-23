import {
  Button,
  Form,
} from 'react-bootstrap';

function NewsletterSignup() {
  
      return (
        <Form>
            <Form.Group className="mb-3" controlId='newsletterSignupFormEmail'>
              <Form.Text>Sign up for the monthly newsletter to read about new technologies!</Form.Text>
              <br />
              <Form.Label>Email Address</Form.Label>
              <div className='newsletter-form-submit'>
                  <Form.Control type='email' placeholder='john@xyz.com' className='newsletter-form-email me-2' />
                  <Button type='submit' className='newsletter-form-submit-button'>Submit</Button>
              </div>
            </Form.Group>
        </Form>
      );
  };
  
  export default NewsletterSignup;