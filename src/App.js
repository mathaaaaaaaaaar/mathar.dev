import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, { useRef } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Footer from './components/Footer';
import HeaderBar from './components/HeaderBar';
import Contact from './pages/contact';
import Home from './pages/home';

function App() {
  const projectSectionRef = useRef(null);

  const handleScrollToSection = () => {
    if (projectSectionRef.current) {
      projectSectionRef.current.scrollToSection();
    }
  };

  return (
    <div className="App">
      <HeaderBar scrollToSection={handleScrollToSection}/>

      <Router>
        <Routes>
          <Route exact path='/' element={<Home ref={projectSectionRef}/>} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
