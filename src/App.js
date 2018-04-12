import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import BoxContainer from './Components/BoxContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Switch>
            <Route exact path='/' component={ BoxContainer } />  
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
