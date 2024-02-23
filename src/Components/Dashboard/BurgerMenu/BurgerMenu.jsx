import React from 'react';

function BurgerMenu({ onClick }) {
  return (
    <button className="burger-menu" onClick={onClick}>
      <div>-</div>
      <div>-</div>
      <div>-</div>
    </button>
  );
}

export default BurgerMenu;