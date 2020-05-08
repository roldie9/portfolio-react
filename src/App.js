import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import About from './About.js'; 
import Projects from './Projects.js'; 
import Contact from './Contact.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Route exact path="/" component={About} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Contact" component={Contact} />

      <div className="navigation">
        <div className="navigation-sub">
          <Link to="/" className="item">About</Link>
          <Link to="/Projects" className="item">Projects</Link>
          <Link to="/Contact" className="item">Contact</Link>
        </div>
      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
