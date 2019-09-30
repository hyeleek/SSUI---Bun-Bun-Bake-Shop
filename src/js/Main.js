import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Order from "./Order";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import Detail from "./ProductDetail"

import '../css/custom.css'
import Logo from "../assets/icon.png";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <header>
                <div className="nav-item">
                  <img src={Logo}/>
                  <NavLink exact to="/" className="nav-text home">
                    Bun Bun Bake Shop
                  </NavLink>
                </div>
                <div className="nav-item">
                  <NavLink to="/About" className="nav-text">About</NavLink>
                </div>
                <div className="nav-item">
                  <NavLink to="/Order" className="nav-text">Order Online</NavLink>
                </div>
                <div className="nav-item">
                  <NavLink to="/Products" className="nav-text">Products</NavLink>
                </div>
                <div className="nav-item">
                  <NavLink to="/Contact" className="nav-text">Contact</NavLink>
                </div>
                <div className="nav-item">
                  <NavLink to="/Cart" className="nav-text">Cart</NavLink>
                </div>
            </header>
        <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Order" component={Order}/>
            <Route path="/Products" component={Products}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/Cart" component={Cart}/>
            <Route path="/Detail" component={Detail}/>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
