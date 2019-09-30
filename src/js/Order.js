import React, { Component } from "react";
import styled from 'styled-components'

// import Components
import Steps from "./Steps";
import BoxOption from "./BoxOption";
import BunOption from "./BunOption";
// import Images
import box1 from "../assets/box1.png";
import box2 from "../assets/box2.png";
import box3 from "../assets/box3.png";
import box4 from "../assets/box4.png";

import original from "../assets/cinnamon.png";
import gf from "../assets/cinnamon.png";
import blackberry from "../assets/cinamon_blackberry.png";
import pecan from "../assets/cinamon_pecan.png";
import pumpkin from "../assets/cinnamon_pumpkin.png";
import walnut from "../assets/cinnamon_walnut.png";

function value_limit(val, min, max) {
  return val < min ? min : (val > max ? max : val);
}

const steps = [ "Box Size", "Buns", "Glaze", "Add to Cart"];
const boxes = {
  1 : {
    "key" : 1,
    "size" : 1,
    "image" : box1
  },
  2 : {
    "key" : 2,
    "size" : 3,
    "image" : box2
  },
  3 : {
    "key" : 3,
    "size" : 6,
    "image" : box3
  },
  4 : {
    "key" : 4,
    "size" : 12,
    "image" : box4
  }
};

const buns = {
  "original": {
    "image" : original,
    "title" : "Original",
    "price" : 3.00
  },
  "gluten free": {
    "image" : gf,
    "title" : "Original Gluten Free",
    "price" : 3.50
  },
  "blackberry" : {
    "image" : blackberry,
    "title" : "Blackberry",
    "price" : 3.50
  },
  "pecan" : {
    "image" : pecan,
    "title" : "Caramel Pecan",
    "price" : 3.50
  },
  "pumpkin" : {
    "image" : pumpkin,
    "title" : "Pumpkin Spice",
    "price" : 3.50
  },
  "walnut" : {
    "image" : walnut,
    "title" : "Walnut",
    "price" : 3.50
  }
};

class Order extends Component {
  constructor() {
    console.log(Object.keys(buns));
    super();
    this.state = {
      stage: 0,
      box : null
    };
    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.boxClick = this.boxClick.bind(this);
  }

  handleClick(newIndex){
    console.log("clicked new step" + newIndex);
    this.setState({
      stage: newIndex
    });
  }

  boxClick(newIndex){
    this.setState({
      box: newIndex
    });
  }

  decrease() {
    const { stage } = this.state;
    this.setState({
      stage : value_limit(stage -1, 0, 3)
    });
  }
  increase() {
    const { stage } = this.state;
    this.setState({
      stage : value_limit(stage + 1, 0, 3)
    });
  }

  render() {
    const { stage, box } = this.state;
    return (
      <div className="order">
        <Steps titles= {steps.slice(0, -1)} stage={stage} click={this.handleClick}/>

        <div className="viewer">
          { box === null?
            <p>  CHOOSE YOUR BOX SIZE </p>:
            <img src={boxes[box]["image"]}/>
          }
        </div>


        <div className="buttons">
          { stage > 0 ?
              <button className="decrease" onClick= {this.decrease} > &#60;     {steps[stage-1]}</button>
              : <button className="empty" > </button>
          }
          { stage < 3 ?
              <button className="increase" onClick= {this.increase} > {steps[stage+1]}  &#62;</button>
              : <button className="empty" > Added to Cart! </button>
          }

        </div>

        <div className="options">
          { stage === 0 ?
            Object.entries(boxes).map( ([key, value]) => (
            <BoxOption
              index={value["key"]}
              number={value["size"]}
              imgSrc={value["image"]}
              click={this.boxClick}
              selected={value["key"]===box}
            />
        )) : null
          }
          { stage === 1 ?
            <div className="buns-container">
              {Object.entries(buns).map( ([key, value]) => (
                <BunOption
                  imgSrc={value["image"]}
                  title={value["title"]}
                  price={value["price"]}
                  click={this.boxClick}
                />
              ))}
            </div>
            : null
          }
          { stage === 2 ?
            <p>Hello</p>: null
          }
        </div>

      </div>
    );
  }
}

export default Order;
