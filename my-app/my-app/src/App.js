import logo from './qut-logo-large.jpg';
import './App.css';
import React, {useState} from 'react';
import {useNewArticles} from './api';
import Select from 'react-select';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Home from "./pages/home";
import Study from "./pages/study";
import About from "./pages/about";

const activeStyle = {
  fontWeight: "bold",
  color:"red",
}

function App() {
  return(
    <Router>
      <div>
        <ul>
          <li>
            <NavLink exact to="/" activeStyle={activeStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about" activeStyle={activeStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/study" activeStyle={activeStyle}>
              Study
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
          <About/>
          </Route>
          <Route exact path="/study">
          <Study/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
