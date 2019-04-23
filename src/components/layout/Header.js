import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <nav className="navbar">
      <h1 className="nav-item pointer tittle">Burger Queen</h1>
      <h3 className="nav-item mr-3 pointer secondary">Ver pedidos &gt;</h3>
    </nav>
  </header>
);

export default Header;
