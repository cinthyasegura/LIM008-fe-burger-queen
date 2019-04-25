import React from 'react';
import Main from './components/Main';
import Header from './components/layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <div>
    <Header />
    <Main /> 
  </div> 
);

export default App;
