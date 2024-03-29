import React from 'react';

import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';

import myImage from '../../mathar-sticker2.png';
import SocialButtonsBar from '../SocialButtonsBar';

function HeroSection() {
    return <div>
        <Container fluid>
            <Row>
                <Col>
                    <img className='heroPicture' src={myImage} height='400px' width='400px' />
                    <h1 className='titleText'>Hi, I'm Mathar.</h1>
                    <p>&lt;Front-End Developer&gt; &lt;iOS Developer&gt; &lt;Blogger&gt;</p>
                    <p className='heroDescription'>I'm a Software Engineer, who has helped people overcome their reading difficulties, with Speechify; created value for e-commerce stores, with Swym; and guided tech companies to assess their candidates using WeCP's AI tool. You can find more about me here:</p>
                    <SocialButtonsBar />
                    <br />
                </Col>
            </Row>
        </Container>
    </div>
}

export default HeroSection;