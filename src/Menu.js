import React from 'react';
import './Menu.css';
import coffeeDunkImage from './image/coffee-dunk.JPG';
import coffeeBiscoffImage from './image/coffee-biscoff.jpg';

const Menu  = () => {
  return (
  <div className = "menu">
    <h2>Menu</h2>
    <div className="menu-item">
      <img src={coffeeDunkImage} alt="Dunkalatte-Coffee" className="menu-item-image"/>
    <h3>Dunkalatte-Coffee</h3>
    <p>Price : $2.50 </p>
    <button>Add to Cart</button> 
</div>

<div className = "menu-item">
  <div className = "biscoff">
  <img src={coffeeBiscoffImage} alt="Biscoff-Coffee" className ="menu-item-image"/>
  </div>
  <h3>Biscof Coffee</h3>
  <p>Price: $2.00</p>
  <button>Add to Cart</button>
  </div>
  
  </div>
);
};

export default Menu;