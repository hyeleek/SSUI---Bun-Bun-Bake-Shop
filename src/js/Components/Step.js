import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

/* =====================
Component : Ordering Step
===================== */
const Step = ({title, index, progress, click, enabled}) => (
  <div
    className={["step", index===progress? "step-current":null].join(' ')} onClick={enabled
    ? () => click(index)
    : null}>
  {
    index < progress
      ? <span>&#10003;</span>
      : null
  }
  <p>
    {title}
  </p>
</div>);

Step.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired,
  enabled: PropTypes.bool.isRequired
};

export default Step;
