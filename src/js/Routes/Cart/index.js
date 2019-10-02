import React, { Component } from "react";

// import Images
import box1 from "../../../assets/box1.png";
import box2 from "../../../assets/box2.png";
import box3 from "../../../assets/box3.png";
import box4 from "../../../assets/box4.png";

const boxes = {
  1 : {
    "size" : 1,
    "image" : box1
  },
  2 : {
    "size" : 3,
    "image" : box2
  },
  3 : {
    "size" : 6,
    "image" : box3
  },
  4 : {
    "size" : 12,
    "image" : box4
  }
};

const buns = {
  "original": {
    "title" : "Original",
    "price" : 3.00
  },
  "gluten free": {
    "title" : "Original Gluten Free",
    "price" : 3.50
  },
  "blackberry" : {
    "title" : "Blackberry",
    "price" : 3.50
  },
  "pecan" : {
    "title" : "Caramel Pecan",
    "price" : 3.50
  },
  "pumpkin" : {
    "title" : "Pumpkin Spice",
    "price" : 3.50
  },
  "walnut" : {
    "title" : "Walnut",
    "price" : 3.50
  }
};
const glazes = {
  1: "No Glaze",
  2 : "Sugar Milk",
  3 : "Vanilla Milk",
  4 : "Double Choco"
};

const Total = ({items}) => {
  let total = 0;
  for ( var i=0; i<items.length; i++){
    for ( var bun in items[i]["choices"]) {
      total += buns[bun]["price"]* items[i]["choices"][bun];
    }
  }
  return total.toFixed(2);
}

const Items = ({items}) => (
  <div className="boxes-container">
    {
      items.map( (item, key) => (
        <div className="box">
          <div className="left">
            <img src={ boxes[item["box"]]["image"]}/>
            <p> Glaze : {glazes[item["glaze"]]} </p>
          </div>
          <div className="right">
            {
              Object.entries(item["choices"]).map( ([key, value]) => (
                <div className="info">
                  <p className="type"> {buns[key]["title"]}  </p>
                  <p className="price"> $ {buns[key]["price"].toFixed(2)} </p>
                  <p className="times"> x </p>
                  <p className="count"> {value} </p>
                <p className="total"> $ { (buns[key]["price"]*value).toFixed(2)} </p>
                </div>
              ))
            }
          </div>

        </div>
        ))
    }
  </div>
);

class Cart extends Component {
  constuctor(){
    this.state ={
      data : null
    };
  }

  componentWillMount(){
     this.setState({
       data : JSON.parse(window.localStorage.getItem("test"))
     });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="cart">
        <p id="title"> My Cart </p>
        { data!==null ? <Items  items={data}/> : <p> Empty </p> }
        { data!==null ?
          <p id="total"> TOTAL : $ {<Total items={data}/>}</p> :
          <p id="total"> TOTAL : $ 0.00 </p>
        }
      </div>
    );
  }
}

export default Cart;
