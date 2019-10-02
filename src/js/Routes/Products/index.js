import React, { Component } from "react";
import Bun from "../../Components/Product";

const buns = [ "original","gluten free", "blackberry", "pecan", "pumpkin", "walnut"]

class Products extends Component {
  render() {
    return (
      <div className="product-container">
        {buns.map(bun => (
          <Bun title={bun}/>
        ))}
      </div>
    );
  }
}

export default Products;
