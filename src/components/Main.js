import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from './Container';
import Order from './Order';

const Main = () => {
    return (
      <React.Fragment>
        <Route exact path="/" component={Container}></Route>
        <Route path="/pedidos" component={Order}></Route>
      </React.Fragment>
    )
};

export default Main;