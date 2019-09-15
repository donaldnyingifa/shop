import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import Header from './components/header'

function App() { 
  return (
    <div className="App">
      <Header />
      <Switch>
       <Route exact path='/' component={Home} />
       <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
