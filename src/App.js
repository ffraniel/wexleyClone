import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Art from './Pages/Art';

function App() {
  return (
    <Router>
      <section className="App">
        <nav className="navigation">
          <h1 className="title">STEPHEN POWELL</h1>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about/">About</Link>
          <Link className="nav-link" to="/contact/">Contact</Link>
        </nav>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
          <Route path="/art/:index" component={Art} />
        </main>
      </section>
    </Router>
  );
}

export default App;
