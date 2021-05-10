import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom" ;
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderApp from "./HeaderApp"
import Blog from "./Blog"
import ProgrammingJokes from "./ProgrammingJokes"
import PenjualanTelur from './PenjualanTelur';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderApp/>
        <Switch>
          <Route path="/about">
            About
          </Route>
          {/* <Route path="/form" component={Week9}/> */}
          <Route path="/blog">
            <Blog/>
          </Route>

          <Route path="/penjualan">
            <PenjualanTelur/>
          </Route>

          <Route path="/programming">
            <ProgrammingJokes/>
          </Route>

          <Route path="/">
            Home
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
