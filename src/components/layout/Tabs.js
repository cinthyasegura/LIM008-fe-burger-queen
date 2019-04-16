import React from 'react';
import PropTypes from 'prop-types';
import '../styles/menu.css';

const Tabs = ({ matchOption }) => (
  <ul className="list-group list-group-horizontal-sm text-center ">
    <button type="button" className="list-group-item list-group-item-action tabs" onClick={() => matchOption('breakfast')} data-testid="breakfast-btn">Desayuno</button>
    <button type="button" className="list-group-item list-group-item-action tabs" onClick={() => matchOption('menu')} data-testid="menu-btn">Menú</button>
    <button type="button" className="list-group-item list-group-item-action tabs" onClick={() => matchOption('accompaniment')} data-testid="accompaniment-btn">Acompañamientos</button>
    <button type="button" className="list-group-item list-group-item-action tabs" onClick={() => matchOption('drinks')} data-testid="drinks-btn">Bebidas</button>
  </ul>
);
export default Tabs;

Tabs.propTypes = {
  matchOption: PropTypes.func.isRequired,
};
