import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <>
        <div className="col-md-12">
          <div className="header" style={{marginBottom: "40px", marginLeft: "15px"}}>
            <h4>
              {this.props.title}
            </h4>
          </div>
        </div>
      </>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};
