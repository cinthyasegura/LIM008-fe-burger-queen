import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <nav className="navbar">
      <Link to="/" className="nav-item pointer tittle">Burger Queen</Link>
      <Link to="/pedidos" className="nav-item mr-3 pointer secondary">Ver pedidos &gt;</Link>   
  
    </nav>
  </header>
);

export default Header;
