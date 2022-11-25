import React from 'react';

import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';

import githubIcon from '../../icons/github.svg';
import instagramIcon from '../../icons/instagram.svg';
import linkedinIcon from '../../icons/linkedin.svg';
import twitterIcon from '../../icons/twitter.svg';

function SocialButtonsBar() {
	return <div>
		<Container fluid>
			<Row className='socialMediaBar justify-content-center'>
				<Col xs={1}>
					<a href='https://www.instagram.com/mathaaaaaaaaaaaaaaaaaaaaaaaaar/' target='_blank'>
						<img src={instagramIcon} width='30px' height='30px' />
					</a>
				</Col>
				<Col xs={1}>
					<a href='https://github.com/mathaaaaaaaaaar' target='_blank'>
						<img src={githubIcon} width='30px' height='30px' />
					</a>
				</Col>
				<Col xs={1}>
					<a href='https://twitter.com/mathaaaaaaaaaar' target='_blank'>
						<img src={twitterIcon} width='30px' height='30px' />
					</a>
				</Col>
				<Col xs={1}>
					<a href='https://www.linkedin.com/in/shaikmathar/' target='_blank'>
						<img src={linkedinIcon} width='30px' height='30px' />
					</a>
				</Col>
			</Row>
		</Container>
	</div>
}

export default SocialButtonsBar;