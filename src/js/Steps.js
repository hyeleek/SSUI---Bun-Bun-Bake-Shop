import React, { Component } from "react";
import PropTypes from "prop-types";
import Step from "./Step";

class Steps extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { titles, stage, click }  = this.props;
    return (
      <div className="steps">
        {titles.map( (title, index) =>
          <Step
            title={title}
            index={index}
            progress={stage}
            click={click}
          />
        )}
      </div>
    );
  }
}

Steps.propTypes = {
  titles: PropTypes.array.isRequired,
  stage : PropTypes.number.isRequired,
  click : PropTypes.func.isRequired
};

export default Steps;
