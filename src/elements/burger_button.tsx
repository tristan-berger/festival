import { useState } from 'react';

interface BurgerButtonProps {
  isOpen: boolean
  onClick: () => void
}

function BurgerButton({ isOpen, onClick }: BurgerButtonProps) {
  return (
    <button
      className={`menu-button ${isOpen ? 'open' : ''}`}
      onClick={onClick}
      aria-label="Menu"
      aria-expanded={isOpen}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  );
}

export default BurgerButton;