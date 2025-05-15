import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Menu from './Menu';
import BusinessObjective from './BusinessObjective';
import Support from './Support';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

      <section classnName = "hero">
       
        </section>

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/objective" element={<BusinessObjective />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;