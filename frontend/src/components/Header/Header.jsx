import React from 'react';
import './Header.css';

const Header = () => {
  const handleScrollToMenu = () => {
    const menuElement = document.getElementById('explore-menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Craving something delicious? We've got you covered! Explore a world of flavors
          and cuisines, delivered straight to your door with just a few clicks. Whether you're in the
          mood for a quick bite, a hearty meal, or something sweet, our platform connects you to the
          best local restaurants and dishes. Fast, fresh, and hassle-free—your favorite food is just
          moments away.
        </p>
        <button onClick={handleScrollToMenu}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
