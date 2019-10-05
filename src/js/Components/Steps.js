import React, { Component } from "react";
import PropTypes from "prop-types";
import Step from "./Step";

class Steps extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { titles, stage, click, box, capacity }  = this.props;
    return (
      <div className="steps">
        {titles.map( (title, index) =>
          <Step
            key={title}
            title={title}
            index={index}
            progress={stage}
            click={click}
            enabled={
              index < stage ? true:
              index !== stage+1?false:
              stage===0? (box===null)?false:true :
               (capacity!==0)? false:true
            }
          />
        )}
      </div>
    );
  }
}

Steps.propTypes = {
  titles: PropTypes.array.isRequired,
  stage : PropTypes.number.isRequired,
  click : PropTypes.func.isRequired,
  box : PropTypes.number,
  capacity : PropTypes.number
};

export default Steps;
