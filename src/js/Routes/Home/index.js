import React, {Component} from "react";
import {Link} from "react-router-dom";

import title from "../../../assets/home.png";

/*=====================
HOME PAGE
=====================*/
class Home extends Component {
  render() {
    return (<div>
      <img alt={"bun"} className="home-image" src={title}/>
      <h1 className="home-title">
        Bun Bun
        <br/>
        Bake Shop
      </h1>
      <div className="intro">
        <p>Since 1994, Bun Bun Bake Shop in Pittsburgh, Philadelphia, Gettysburg provide the perfect opportunity to experience Cinnamon Roll at its best. Treat yourself with a roll of Original Bun Bun Cinnamon Roll and a cup of coffee. Enjoy.
        </p>
        <Link to="/About" style={{
            textDecoration: 'none'
          }}>
          Learn More
        </Link>
      </div>
      <div className="order-button">
        <Link to="/Order" style={{
            textDecoration: 'none'
          }}>
          ORDER ONLINE</Link>
      </div>
    </div>);
  }
}

export default Home;
