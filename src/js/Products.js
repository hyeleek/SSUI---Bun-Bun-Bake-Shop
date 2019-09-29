import React, { Component } from "react";
import Bun from "./Bun";

class Products extends Component {
  render() {
    return (
      <div className="product-container">
        <Bun title={"original"}/>
        <Bun title={"blackberry"}/>
        <Bun title={"walnut"}/>
        <Bun title={"gluten free"}/>
        <Bun title={"pecan"}/>
        <Bun title={"pumpkin"}/>
      </div>
    );
  }
}

export default Products;
