import React from 'react';

import {
  Badge,
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap';

import myLogo from '../../mathar-sticker1.png';

function HeaderBar( {scrollToSection} ) {
  const headerItems = [
    //["Blog", 'https://mathar.hashnode.dev/', 1],
    ["Contact Me", '/contact', 0]
  ];

  return (
    <Navbar expand="lg" className='headerBar'>
      <Container>
        <Navbar.Brand href="/" className='siteName'>
          <img src={myLogo} width='75px' height='75px'/>
          mathar.dev
        </Navbar.Brand>
        <Nav className="ms-auto headerItems">
          <Nav.Link onClick={scrollToSection}>
            |&nbsp;Projects
          </Nav.Link>
          {headerItems.map(([headerItem, headerLink, isComingSoon], index) => (
            <Nav.Link key={index} href={headerLink}>
              |&nbsp;{headerItem} {isComingSoon ? <Badge pill bg="info">Coming Soon!</Badge> : null}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HeaderBar;