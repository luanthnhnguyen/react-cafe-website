import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
return (
    <nav style ={{ background: '#f2f2f2', padding: '1rem' }}>
        <ul style = {{display: 'flex', listStyle: 'none', gap: '1rem' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/objective">BusinessObjective</Link></li>
            <li><Link to="/support">Support</Link></li>
        </ul>
    </nav>
)
};

export default Navbar;