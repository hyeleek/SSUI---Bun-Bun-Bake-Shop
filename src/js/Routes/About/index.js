import React, {Component} from "react";

import background from "../../../assets/about.jpg";

/* =====================
ABOUT PAGE
===================== */
class About extends Component {
  render() {
    return (<div className="about">
      <img src={background} alt={"background"}></img>
      <div>
        <p>
          Since 1994, Bun Bun Bake Shop in Pittsburgh, Philadelphia, Gettysburg provide the perfect opportunity to experience Cinnamon Roll at its best. Treat yourself with a roll of Original Bun Bun Cinnamon Roll and a cup of coffee.
          <br/><br/>
          Enjoy.
        </p>
      </div>
    </div>);
  }
}

export default About;
