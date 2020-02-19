import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import exit from "../img/exit.png"

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <>
        <div className="col-md-12">
          <div className="header d-flex" style={{marginTop: "20px" , marginBottom: "20px", marginLeft: "15px", alignItems: "center"}}>
            <h4>
              {this.props.title}
            </h4>

            <Link to="/" style={{textDecoration: "none", marginLeft: "140px"}}>
              <div className="logOut d-flex justify-content-between" style={{width: "90px"}}>
                <p style={{color: "orange", marginBottom: "0px"}}>Logout</p>
                <img src={exit} alt="exit" style={{ width: "20px", height: "20px" }} />
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};
