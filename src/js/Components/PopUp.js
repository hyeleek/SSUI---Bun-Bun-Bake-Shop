import React, {Component} from "react";
import PropTypes from "prop-types";

var nums = [1, 3, 6, 12];

const CloseButton = ({click}) => (<div className="close-button" onClick={() => click()}>
  <p>
    X
  </p>
</div>);

/* =====================
Component : Popup
===================== */

class PopUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      option: 0
    };
    this.select = this.select.bind(this);
    this.addButton = this.addButton.bind(this);
  }

  select(newIndex) {
    this.setState({option: newIndex});
  }

  addButton(count, name) {
    const {add, close} = this.props;
    add(count, name);
    close();
  }

  render() {
    const {option} = this.state;
    const {
      imgSrc,
      title,
      name,
      price,
      add,
      close
    } = this.props;
    return (<div className="popup-container">

      <div className="popup-content">

        <div className="popup-header">
          <img src={imgSrc}/>
          <div className="popup-info">
            <p className="title">
              {title}</p>
            <p>{`$ ${ (price * nums[option]).toFixed(2)}`}</p>
            <div id={"buttons"}>
              <div id={"num-buttons"}>
                {
                  nums.map((num, index) => (<button key={index} className={[
                      "num", index === option
                        ? "selected"
                        : null
                    ].join(' ')} onClick={() => this.select(index)}>
                    {num}
                  </button>))
                }
              </div>
              <button id="add" onClick={() => this.addButton(nums[option], name)}>
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="product-detail-container">
          <div className="product-detail-column">
            <div className="section">
              <h3>Ingredients</h3>
              <p>Enriched Flour Bleached (wheat flour, niacin, ferrous sulfate, thiamin mononitrate, riboflavin, folic acid), Water, Sugar, Palm and Soybean Oil, Wheat Starch, Dextrose. Contains 2% or less of: Baking Powder (sodium acid pyrophosphate, baking soda), Palm Kernel Oil, Salt, Modified Whey, Cinnamon, Corn Syrup Solids, Monoglycerides, Pectin, Xanthan Gum, Potassium Sorbate (preservative), Polysorbate 60, Yellow 5, Natural and Artificial Flavor, Red 40.</p>
            </div>
          </div>
          <div className="product-detail-column">
            <div className="section">
              <h3>Allergy Info</h3>
              <p>Contains wheat and milk ingredients.</p>
            </div>
          </div>
          <div className="product-detail-column">
            <div className="section">
              <h3>Nutrition Facts</h3>
              <p>
                Serving Size : 1 roll (44g)
                <br/>
                Amount Per Serving : As Served<br/>
                <br/>
                Calories<br/>
                Total Fat 4.5g<br/>
                Cholesterol 0mg<br/>
                Sodium 340mg<br/>
                Total<br/>
                Carbohydrate 24g<br/>
                Protein 2g
              </p>
            </div>
          </div>

        </div>

      </div>

      <CloseButton click={close}/>
    </div>);
  }
}

PopUp.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
};

export default PopUp;
