import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ContainerOne from './containers/ContainerOne';
import ContainerTwo from './containers/ContainerTwo';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/component1">
            <ContainerOne />
          </Route>
          <Route path="/component2">
            <ContainerTwo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
