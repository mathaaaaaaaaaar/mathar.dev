import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';

import emailIcon from '../../icons/email.svg';
import githubIcon from '../../icons/github.svg';
import instagramIcon from '../../icons/instagram.svg';
import linkedinIcon from '../../icons/linkedin.svg';
import phoneIcon from '../../icons/phone.svg';
import twitterIcon from '../../icons/twitter.svg';

function ContactInfo() {
    return (
        <Container className='contact-info-container py-1 px-4 mx-auto my-3'>
            <h4 className='contact-info-title'>Contact Info:</h4>
            <Row className='my-2'>
                <Col xs={3}>
                    <img src={emailIcon} width='15px' height='15px' />
                </Col>
                <Col xs="9">
                    <a href="mailto: shaik.mathar99@gmail.com">
                        shaik.mathar99@gmail.com
                    </a>
                </Col>
            </Row>
            <Row className='mb-2'>
                <Col xs={3}>
                    <img src={phoneIcon} width='15px' height='15px' />
                </Col>
                <Col xs="9">
                    <a href="tel:+918056509105">
                        +91 80565 09105
                    </a>
                </Col>
            </Row>
            <Row className='mb-2'>
                <Col xs={3}>
					<a href='https://www.instagram.com/mathaaaaaaaaaaaaaaaaaaaaaaaaar/' target='_blank'>
						<img src={instagramIcon} width='15px' height='15px' />
					</a>
				</Col>
				<Col xs={3}>
					<a href='https://github.com/mathaaaaaaaaaar' target='_blank'>
						<img src={githubIcon} width='15px' height='15px' />
					</a>
				</Col>
				<Col xs={3}>
					<a href='https://twitter.com/mathaaaaaaaaaar' target='_blank'>
						<img src={twitterIcon} width='15px' height='15px' />
					</a>
				</Col>
				<Col xs={3}>
					<a href='https://www.linkedin.com/in/shaikmathar/' target='_blank'>
						<img src={linkedinIcon} width='15px' height='15px' />
					</a>
				</Col>
            </Row>
        </Container>
    )
}

export default ContactInfo;