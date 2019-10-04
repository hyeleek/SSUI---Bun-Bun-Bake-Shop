import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  withRouter
} from "react-router-dom";

import Home from "./Routes/Home";
import About from "./Routes/About";
import Order from "./Routes/Order";
import Products from "./Routes/Products";
import Contact from "./Routes/Contact";
import Cart from "./Routes/Cart";
import Detail from "./Routes/ProductDetail"

import '../css/custom.css'
import Logo from "../assets/icon.png";

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      added : false,
      data : JSON.parse(window.localStorage.getItem("cart"))
    }
    this.updateCart = this.updateCart.bind(this);
    this.directBack = this.directBack.bind(this);
    this.startFresh = this.startFresh.bind(this);
  }

  updateCart = () => {
    this.setState({
      data : JSON.parse(window.localStorage.getItem("cart"))
    });
  }

  directBack = () => {
    this.setState({
      added : true
    });
    this.updateCart();
  }

  startFresh = () => {
    this.setState({
      added : false
    });
  }

  render() {
    const { data, added } = this.state;
    return (
      <HashRouter>
        <header>
                <div className="nav-item">
                  <img src={Logo}/>
                  <NavLink exact to="/" onClick={this.startFresh}className="nav-text home">
                    Bun Bun Bake Shop
                  </NavLink>
                </div>
                <div className="nav-item">
                  <NavLink to="/About" onClick={this.startFresh}className="nav-text">About</NavLink>
                </div>
                <div className="nav-item">
                  <NavLink to="/Order" onClick={this.startFresh} className="nav-text">Order Online</NavLink>
                </div>
                <div className="nav-item">
                  <NavLink to="/Products" onClick={this.startFresh} className="nav-text">Products</NavLink>
                </div>
                <div className="nav-item">
                  <NavLink to="/Contact" onClick={this.startFresh} className="nav-text">Contact</NavLink>
                </div>
                <div className="nav-item">
                  <NavLink to="/Cart" onClick={this.startFresh}  className="nav-text">Cart</NavLink>
                  <div className="cart-indicator">
                    <p> { data!==null? data.length : 0}</p>
                  </div>
                </div>
            </header>
        <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Order" component={ () => <Order  data={data} added={added} directBack={this.directBack} startFresh={this.startFresh}/>}/>
            <Route path="/Products" component={Products}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/Cart" component={ () => <Cart  data={data} updateCart={this.updateCart} />}/>
            <Route path="/Detail" component={Detail}/>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
