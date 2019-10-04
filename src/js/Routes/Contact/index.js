import React, { Component } from "react";

import background from "../../../assets/contact.jpg";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-info">
          <h1 className="home-title"> Bun Bun <br/> Bake Shop </h1>
          <div className="branch">
            <p className="location"> Pittsburgh </p>
            <p>
                6533 Northumberland Street, 15217 <br/>
                Tel.: +1 412234234 <br/>
                E-Mail: pitt@bunbun.com <br/>
            </p>
          </div>
          <div className="branch">
            <p className="location"> Philadelphia </p>
            <p>
              36 Center Street, 12532 <br/>
              Tel.: +1 412234234 <br/>
              E-Mail: phili@bunbun.com <br/>
            </p>
          </div>
          <div className="branch">
            <p className="location"> Gettysburgh </p>
            <p>
              5001 South College Avenue , 13634 <br/>
            Tel.: +1 412234234<br/>
              E-Mail: gettys@bunbun.com<br/>
            </p>
          </div>

        </div>
        <div className="image-container"/>
      </div>
    );
  }
}

export default Contact;
