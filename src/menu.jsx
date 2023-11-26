import React, { useState } from 'react';
import './burger-menu.scss'; // Import your CSS file for styling

const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`StyledBurgerMenuContainer ${isMenuOpen ? 'open' : ''}`}>
      <div className="StyledBurgerMenuContainer__icon" onClick={handleToggleMenu}>
        <div className="StyledBurgerMenuContainer__icon-bar"></div>
        <div className="StyledBurgerMenuContainer__icon-bar"></div>
        <div className="StyledBurgerMenuContainer__icon-bar"></div>
      </div>
      <div className="StyledBurgerMenuContainer__content">
        <p>Menu Item 1</p>
        <p>Menu Item 2</p>
        <p>Menu Item 3</p>
      </div>
    </div>
  );
};

export default BurgerMenu;
