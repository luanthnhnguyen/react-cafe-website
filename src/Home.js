import React from 'react';
import './Home.css';
import coffeeHero from './image/coffee-hero.jpg';

const Home = () => {
  return(
    <div className = "home">
      <div className = "hero"
      style = {{ backgroundImage: `url(${coffeeHero})` }}
      >
        <h1>Welcome to Clarisse's Café Shop!</h1>
        <p>Where your can taste heaven.</p>
        </div>
        </div>
  );
};

export default Home;