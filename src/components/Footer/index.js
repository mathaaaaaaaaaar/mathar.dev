import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';

import NewsletterSignup from '../NewsletterSignup';

function Footer() {

    return (
        <Container className='footer-container' fluid>
            <Row className='px-4 py-4 justify-content-md-center'>
                <Col xs={6}>
                    <NewsletterSignup />
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;