import React from "react";
import PropTypes from "prop-types";

const BoxOption = ({ index, number, imgSrc, click, selected }) => (
  <div
  className={["box-option", selected? "box-option-selected": null].join(' ')}
  onClick={()=>click(index)}>
      <img src={imgSrc}/>
      <p className={selected? "box-option-text": null}>{`${number} pieces`}</p>
  </div>
);

BoxOption.propTypes = {
  index : PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  imgSrc: PropTypes.any.isRequired,
  click : PropTypes.func.isRequired,
  selected : PropTypes.bool.isRequired
};

export default BoxOption;
