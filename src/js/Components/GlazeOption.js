import React from "react";
import PropTypes from "prop-types";

const GlazeOption = ({ index, imgSrc, click, selected }) => (
  <div
  className={["box-option", selected? "box-option-selected": null].join(' ')}
  onClick={()=>click(index)}>
      <img src={imgSrc}/>
  </div>
);

GlazeOption.propTypes = {
  index : PropTypes.string.isRequired,
  imgSrc: PropTypes.any.isRequired,
  click : PropTypes.func.isRequired,
  selected : PropTypes.bool.isRequired
};

export default GlazeOption;
