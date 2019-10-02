import React, { Component } from "react";

// import Components
import Steps from "../../Components/Steps";
import BoxOption from "../../Components/BoxOption";
import BunOption from "../../Components/BunOption";
import GlazeOption from "../../Components/GlazeOption";
import OrderChoice from "../../Components/OrderChoice";
import PopUp       from "../../Components/PopUp";

// import Images
import box1 from "../../../assets/box1.png";
import box2 from "../../../assets/box2.png";
import box3 from "../../../assets/box3.png";
import box4 from "../../../assets/box4.png";

import original from "../../../assets/cinnamon.png";
import gf from "../../../assets/cinnamon.png";
import blackberry from "../../../assets/cinamon_blackberry.png";
import pecan from "../../../assets/cinamon_pecan.png";
import pumpkin from "../../../assets/cinnamon_pumpkin.png";
import walnut from "../../../assets/cinnamon_walnut.png";

import glaze1 from "../../../assets/glaze1.png";
import glaze2 from "../../../assets/glaze2.png";
import glaze3 from "../../../assets/glaze3.png";
import glaze4 from "../../../assets/glaze4.png";

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
const glazes = {
  1: {
    "image" : glaze1,
    "title" : "No Glaze",
  },
  2 :{
    "image" : glaze2,
    "title" : "Sugar Milk",
  },
  3 : {
    "image" : glaze3,
    "title" : "Vanilla Milk"
  },
  4 : {
    "image" : glaze4,
    "title" : "Double Choco"
  }
};

const bunsOnBox = (choices) => {
  let buns = []
  for (var key in choices){
    for (var i=0; i <choices[key]; i++) {
        buns.push(key);
    }
  }
  return buns
}

class Order extends Component {
  constructor() {
    super();
    this.state = {
      stage: 0,
      box : null,
      choices : {},
      glaze : "1",
      capacity : null,
      showPopup : false,
      popup : null
    }
    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.boxClick = this.boxClick.bind(this);
    this.addToBox = this.addToBox.bind(this);
    this.glazeClick = this.glazeClick.bind(this);
    this.openPopUp = this.openPopUp.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
    this.handleCart = this.handleCart.bind(this);
  }

  handleClick(newIndex){
    this.setState({
      stage: newIndex
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

  boxClick(newIndex){
    this.setState({
      box: newIndex,
      capacity : boxes[newIndex]["size"],
      choices : {}
    });
  }

  openPopUp(currentItem){
    this.setState({
      showPopup: true,
      popup : currentItem
    });
  }

  closePopUp(){
    this.setState({
      showPopup: false,
      popup : null
    });
  }

  addToBox(count, title){
    const {  box, choices, capacity } = this.state;
    if ( box === null){
      // TODO : disable "next step" button when choices are not completed
      alert('Choose your box first!');
    }
    else {
      if ( capacity <= 0){
        alert("no more space left");
      } else if ( (capacity-count) < 0){
        alert("no more space left");
      } else {
          if ( title in choices) {
            choices[title] = choices[title] + count;
          } else {
            choices[title] = count;
          }
          this.setState({
            capacity : capacity - count
          })
      }
    }
  }


  glazeClick(newIndex){
    this.setState({
      glaze: newIndex,
    });
  }

  handleCart = () => {
    const { box, choices, glaze } = this.state;
    var test = null;
    var newItem = {
      "box" : box,
      "choices" : choices,
      "glaze" : glaze
    };

    if (localStorage.getItem("test") === null) {
      test = [newItem];
    } else {
      test = JSON.parse(window.localStorage.getItem("test"));
      test.unshift(newItem);
    }
    window.localStorage.setItem('test', JSON.stringify(test));
    this.increase();
  };


  render() {
    const { stage, box, choices, glaze, showPopup, popup } = this.state;
    return (
      <div className="order">
        <Steps titles= {steps.slice(0, -1)} stage={stage} click={this.handleClick}/>

        <div className="viewer">
          { box === null?
              <p> CHOOSE YOUR BOX SIZE </p>:
              <OrderChoice
                boxKey={box}
                items={bunsOnBox(choices)}
              />
          }
        </div>

        <div className="buttons">
          { stage > 0 ?
              <button className="decrease" onClick= {this.decrease} > &#60;     {steps[stage-1]}</button>
              : <button className="empty" > </button>
          }
          { stage < 3 ?
              <button className="increase" onClick={ stage===2 ? this.handleCart:this.increase}> {steps[stage+1]}  &#62;</button>
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
                  name={key}
                  price={value["price"]}
                  add={this.addToBox}
                  open = {this.openPopUp}
                  close = {this.closePopUp}
                />
              ))}
            </div>
            : null
          }
          { stage === 2 ?
            Object.entries(glazes).map( ([key, value]) => (
              <GlazeOption
                index={key}
                imgSrc={value["image"]}
                click={this.glazeClick}
                selected={key===glaze}
              />
            )) : null
          }
        </div>

        {this.state.showPopup ?
          <PopUp
            imgSrc ={buns[popup]["image"]}
            title ={buns[popup]["title"]}
            name ={popup}
            price={buns[popup]["price"]}
            add ={this.addToBox}
            close ={this.closePopUp}
          />
          : null
        }
      </div>
    );
  }
}

export default Order;