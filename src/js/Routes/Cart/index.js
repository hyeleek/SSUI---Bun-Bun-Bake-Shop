import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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

const Items = ({items, click}) => (
  <div className="boxes-container">
    { items.map( (item, key) => (
        <div className="box">
          <div className="delete" onClick={()=>click(key)}> <p>x</p> </div>
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

  constructor(props){
    super(props);
    this.state ={
      checkedout : false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.checkout = this.checkout.bind(this);
  }

  checkout(){
    const { data, updateCart } = this.props;
    window.localStorage.clear();
    this.setState({
      checkedout : true,
    });
    updateCart();
    window.alert('Thank you for ordering. Your order has been made successfully');
  }

  // Warning Message : https://gist.github.com/primaryobjects/aacf6fa49823afb2f6ff065790a5b402
  handleDelete = index => {
    const item = JSON.parse(window.localStorage.getItem("cart"));
    const { data, updateCart } = this.props;
    var modified = data.slice(0,index).concat(data.slice(index+1,data.length));

    if ( window.confirm('Are you sure you wish to delete your box?')) {
      if ( modified.length === 0) {
        window.localStorage.clear();
      } else {
        window.localStorage.setItem('cart', JSON.stringify(modified));
      }
      updateCart();
    } else {
      return;
    }
  };

  render() {
    const { data, updateCart } = this.props;
    const { checkedout } = this.state;
    return (
      <div className="cart">
        <p id="title"> My Cart </p>
        <div className="buttons">
          <Link to="/Order" style={{ textDecoration: 'none'}}> CONTINUE SHOPPING </Link>
          { data!==null &&
            <Link onClick={this.checkout} style={{ textDecoration: 'none'}} id="order-button"> CHECKOUT </Link>
          }
        </div>
        { data!==null && <Items  items={data} click={this.handleDelete}/> }
        { data!==null ?
          <p id="total"> TOTAL : $ {<Total items={data}/>}</p> :
          <p id="total"> TOTAL : $ 0.00 </p>
        }
      </div>
    );
  }
}

Cart.propTypes = {
  data : PropTypes.array.isRequired,
  updateCart : PropTypes.func.isRequired
};

export default Cart;
