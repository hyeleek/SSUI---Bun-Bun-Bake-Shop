import React, {Component} from "react";
import Bun from "../../Components/Product";

const buns = [
  "original",
  "gluten free",
  "blackberry",
  "pecan",
  "pumpkin",
  "walnut"
]

/*=====================
PRODUCTS PAGE
=====================*/

class Products extends Component {
  render() {
    return (<div className="product-container">
      {buns.map(bun => (<Bun key={bun} title={bun}/>))}
    </div>);
  }
}

export default Products;
