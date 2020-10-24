import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


export const appsContext = React.createContext({});
function App() {
  const [apps] = useState({
    title: 'Curirculum Vitae',
    headerLinks: [
      { title: 'Home', path: '/' },
      { title: 'About', path: '/about' },
      { title: 'Contact', path: '/contact' }
    ],
    home: {
      title: 'Hello,',
      text: 'my name is Melinda Utami. This is my portofolio website, and you can check my last project below.' ,
      
    },
    about: {
      title: 'About Me'
    },
    contact: {
      title: 'Let\'s Talk'
    }  
  });

  return (
    <appsContext.Provider value ={{apps}}>
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Curriculum Vitae</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={apps.home.title} subTitle={apps.home.subTitle} text={apps.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={apps.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={apps.contact.title} />} />
          
          <Footer />

        </Container>
      </Router>
    </appsContext.Provider>
  );
}

export default App;