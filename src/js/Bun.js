import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import original from "../assets/cinnamon.png";
import gf from "../assets/cinnamon.png";
import blackberry from "../assets/cinamon_blackberry.png";
import pecan from "../assets/cinamon_pecan.png";
import pumpkin from "../assets/cinnamon_pumpkin.png";
import walnut from "../assets/cinnamon_walnut.png";

var dict = {
  "original": [original, "Original"],
  "gluten free": [gf, "Original Gluten Free"],
  "blackberry" : [blackberry, "Blackberry"],
  "pecan" : [pecan, "Caramel Pecan"],
  "pumpkin" : [pumpkin,"Pumpkin Spice"],
  "walnut" : [walnut, "Walnut"]
};

const Bun = ({ title }) => (
  <Link to={{
    pathname: `/Detail/${title}`,
    title : title
  }} style={{ textDecoration: 'none'}} className="item">
      <img src={dict[title][0]}/>
      <p> {dict[title][1]} </p>
  </Link>
);

Bun.propTypes = {
  title: PropTypes.string.isRequired
};

export default Bun;
