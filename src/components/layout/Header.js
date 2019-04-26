import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <nav className="navbar">
      <Link to="/" className="nav-item pointer tittle list-none">Burger Queen</Link>
      <Link to="/pedidos" className="nav-item mr-3 pointer secondary list-none ">Ver pedidos &gt;</Link> 
    </nav>
  </header>
);

export default Header;
