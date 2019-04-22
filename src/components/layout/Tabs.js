import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const Tabs = ({ matchOption }) => (
  <div className="list-group list-group-horizontal-sm text-center ">
    <button type="button" className="list-group-item list-group-item-action tabs" onClick={() => matchOption('breakfast')} data-testid="breakfast-btn">Desayuno</button>
    <button type="button" className="list-group-item list-group-item-action tabs" onClick={() => matchOption('menu')} data-testid="menu-btn">Menú</button>
    <button type="button" className="list-group-item list-group-item-action tabs" onClick={() => matchOption('accompaniment')} data-testid="accompaniment-btn">Acompañamientos</button>
    <button type="button" className="list-group-item list-group-item-action tabs" onClick={() => matchOption('drinks')} data-testid="drinks-btn">Bebidas</button>
  </div>
);
export default Tabs;

Tabs.propTypes = {
  matchOption: PropTypes.func.isRequired,
};
