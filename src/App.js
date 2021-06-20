import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Login from './components/Login.js';



function App() {
  return (
    <div className="App">
      

      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;