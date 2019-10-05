import React, {Component} from "react";
import PropTypes from "prop-types";

import box1 from "../../assets/box1.png";
import box2 from "../../assets/box2.png";
import box3 from "../../assets/box3.png";
import box4 from "../../assets/box4.png";

import original from "../../assets/cinnamon.png";
import gf from "../../assets/cinnamon.png";
import blackberry from "../../assets/cinamon_blackberry.png";
import pecan from "../../assets/cinamon_pecan.png";
import pumpkin from "../../assets/cinnamon_pumpkin.png";
import walnut from "../../assets/cinnamon_walnut.png";

const boxes = {
  1: {
    "key": 1,
    "size": 1,
    "image": box1
  },
  2: {
    "key": 2,
    "size": 3,
    "image": box2
  },
  3: {
    "key": 3,
    "size": 6,
    "image": box3
  },
  4: {
    "key": 4,
    "size": 12,
    "image": box4
  }
};
const buns = {
  "original": {
    "image": original,
    "title": "Original",
    "price": 3.00
  },
  "gluten free": {
    "image": gf,
    "title": "Original Gluten Free",
    "price": 3.50
  },
  "blackberry": {
    "image": blackberry,
    "title": "Blackberry",
    "price": 3.50
  },
  "pecan": {
    "image": pecan,
    "title": "Caramel Pecan",
    "price": 3.50
  },
  "pumpkin": {
    "image": pumpkin,
    "title": "Pumpkin Spice",
    "price": 3.50
  },
  "walnut": {
    "image": walnut,
    "title": "Walnut",
    "price": 3.50
  }
};

const boxClassName = (boxKey) => {
  return `buns${boxKey}`
};

const bunClassName = (boxKey) => {
  return `bun${boxKey}`
}

/* =====================
Component : Buns on Box
===================== */

class OrderChoice extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {boxKey, items, deleteFromBox} = this.props;
    return (<div className="order-choice">
      <img src={boxes[boxKey]["image"]} className="box"/>
      <div className={boxClassName(boxKey)}>
        {items.map((bun, index) => (<img key={index} className={[bunClassName(boxKey)].join(" ")} src={buns[bun]["image"]} onClick={() => deleteFromBox(bun, index)}/>))}
      </div>
    </div>);
  }
}

OrderChoice.propTypes = {
  boxKey: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  deleteFromBox: PropTypes.func.isRequired
};

export default OrderChoice;
