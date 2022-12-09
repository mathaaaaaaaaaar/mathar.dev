import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Footer from './components/Footer';
import HeaderBar from './components/HeaderBar';
import HeroSection from './components/HeroSection';
import Contact from './pages/contact';
import Projects from './pages/projects';

function App() {
  return (
    <div className="App">
      <HeaderBar />

      <Router>
        <Routes>
          <Route exact path='/' element={<HeroSection />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
