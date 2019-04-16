import React from 'react';
import '../styles/header.css';

const Header = () => (
  <header className="header">
    <nav className="navbar">
      <h1 className="nav-item pointer">Burger Queen</h1>
      <h3 className="nav-item mr-3 pointer">Ver pedidos &gt;</h3>
    </nav>
  </header>
);

export default Header;
