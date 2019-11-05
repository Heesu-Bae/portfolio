import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';

import Home from './routes/Home';
import About from './routes/About';
import Works from './routes/Works';

import Header from './components/Header';

const App = () => {
  return (
      <Router>
          <div className="App">
              <Header/>
              <div className="App-body">
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route path="/About" component={About}/>
                      <Route path="/Works" component={Works}/>
                  </Switch>
              </div>
          </div>
      </Router>
  );
}

export default App;
