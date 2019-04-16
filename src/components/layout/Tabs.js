import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';

const Tabs = ({ matchOption }) => (
  <ul className="list-group list-group-horizontal-sm col-md-6 text-center ">
    <button type="button" className="list-group-item list-group-item-action options" onClick={() => matchOption('breakfast')} data-testid="breakfast-btn">Desayuno</button>
    <button type="button" className="list-group-item list-group-item-action options" onClick={() => matchOption('menu')} data-testid="menu-btn">Menú</button>
    <button type="button" className="list-group-item list-group-item-action options" onClick={() => matchOption('accompaniment')} data-testid="accompaniment-btn">Acompañamientos</button>
    <button type="button" className="list-group-item list-group-item-action options" onClick={() => matchOption('drinks')} data-testid="drinks-btn">Bebidas</button>
  </ul>
);
export default Tabs;

Tabs.propTypes = {
  matchOption: PropTypes.func.isRequired,
};
