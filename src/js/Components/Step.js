import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Step = ({ title, index, progress, click }) => (
    <div
      className = {["step", index===progress? "step-current":null].join(' ')}
      onClick={()=>click(index)}
    >
        { index < progress?<span>&#10003;</span> : null}
        <p> {title} </p>
    </div>
);

Step.propTypes = {
  title: PropTypes.string.isRequired,
  index : PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  click : PropTypes.func.isRequired
};

export default Step;
