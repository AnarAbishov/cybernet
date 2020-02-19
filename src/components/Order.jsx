import React, { Component } from "react";
import { connect } from "react-redux";


class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { totalSum } = this.props
    return (
      <>
      
          <p style={{marginBottom: "0px", marginLeft: "110px"}}>Total Sum: {totalSum}</p>
     
      </>
    );
  }
}

const mapStateToProps = state => ({
  menuList: state.menuList
});

export default connect(mapStateToProps)(Order);
