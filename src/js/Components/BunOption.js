import React, { Component } from "react";
import PropTypes from "prop-types";

var nums = [ 1, 3, 6, 12];

class BunOption extends Component {

  constructor(props){
    super(props);
    this.state={
      option : 0
    };
    this.select = this.select.bind(this);
  }

  select(newIndex){
    this.setState({
      option: newIndex
    });
  }
  render(){
    const { option } = this.state;
    const { imgSrc, title, name, price, add, open, close } = this.props;
    return (
      <div className="bun-option">
          <img src={imgSrc}/>
          <button id="view" onClick={()=>open(name)}> Quick View </button>
          <p>{title}</p>
          <p>{`$ ${(price*nums[option]).toFixed(2)}`}</p>
          <div id={"buttons"}>
            <div id={"num-buttons"}>
              {nums.map( (num, index)  => (
                <button
                  className={["num", index===option ? "selected":null].join(' ')}
                  onClick={()=>this.select(index)}
                > {num} </button>
              ))}
            </div>
            <button id="add" onClick={()=>add(nums[option], name)}>  Add </button>
          </div>

      </div>
    );
  }
}

BunOption.propTypes = {
  imgSrc: PropTypes.object.isRequired,
  title : PropTypes.string.isRequired,
  name : PropTypes.string.isRequired,
  price : PropTypes.number.isRequired,
  add : PropTypes.func.isRequired,
  open : PropTypes.func.isRequired,
  close : PropTypes.func.isRequired
};

export default BunOption;
