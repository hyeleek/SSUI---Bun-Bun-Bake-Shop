import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import original from "../../../assets/cinnamon.png";
import gf from "../../../assets/cinnamon.png";
import blackberry from "../../../assets/cinamon_blackberry.png";
import pecan from "../../../assets/cinamon_pecan.png";
import pumpkin from "../../../assets/cinnamon_pumpkin.png";
import walnut from "../../../assets/cinnamon_walnut.png";

const dict = {
  "original": [original, "Original"],
  "gluten free": [gf, "Original Gluten Free"],
  "blackberry" : [blackberry, "Blackberry"],
  "pecan" : [pecan, "Caramel Pecan"],
  "pumpkin" : [pumpkin,"Pumpkin Spice"],
  "walnut" : [walnut, "Walnut"]
};


class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title : null
    };
  };

  componentWillMount() {
    this.state.title = this.props.location.title;
  }

  render() {
    const { title } = this.state;
    return (
      <div className="product-detail">
      <div className="product-detail-container">

        <div className="product-detail-column">
          <p className="title">{title==undefined ? dict["original"][1] : dict[title][1]}</p>
          <img src={title==undefined ? dict["original"][0] : dict[title][0]}/>

        </div>

        <div className="product-detail-column">
          <div className="section">
            <h3>Ingredients</h3>
            <p>Enriched Flour Bleached (wheat flour, niacin, ferrous sulfate, thiamin mononitrate, riboflavin, folic acid), Water, Sugar, Palm and Soybean Oil, Wheat Starch, Dextrose. Contains 2% or less of: Baking Powder (sodium acid pyrophosphate, baking soda), Palm Kernel Oil, Salt, Modified Whey, Cinnamon, Corn Syrup Solids, Monoglycerides, Pectin, Xanthan Gum, Potassium Sorbate (preservative), Polysorbate 60, Yellow 5, Natural and Artificial Flavor, Red 40.</p>
          </div>
          <div className="section">
            <h3>Allergy Info</h3>
            <p>Contains wheat and milk ingredients.</p>
          </div>
        </div>
        <div className="product-detail-column">
          <div className="section">
            <h3>Nutrition Facts</h3>
            <p>
              Serving Size : 1 roll (44g) <br/>
            Amount Per Serving :  As Served<br/>
          <br/>
              Calories<br />
              Total Fat 4.5g<br />
              Cholesterol 0mg<br />
              Sodium 340mg<br />
              Total<br />
              Carbohydrate 24g<br />
              Protein 2g
            </p>
          </div>
        </div>

      </div>
      <div className="product-detail-buttons">
        <Link to="/Products" style={{ textDecoration: 'none'}}> BACK </Link>
        <Link to="/Order" style={{ textDecoration: 'none'}} id="order-button"> ORDER NOW </Link>
      </div>
    </div>
    );
  }
}

export default Detail;
