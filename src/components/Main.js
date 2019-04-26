import React from 'react';
import { Route } from 'react-router-dom';
import Container from './Container';
import Order from './Order';

const Main = () => (
  <React.Fragment>
    <Route exact path="/" component={Container} />
    <Route path="/pedidos" component={Order} />
  </React.Fragment>
);

export default Main;
