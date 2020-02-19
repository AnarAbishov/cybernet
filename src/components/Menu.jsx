import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
    };
  }

  deleteMenuHandle = (id) => {
    let { deleteMenu } = this.props;
    deleteMenu(id)
  }
  calculate = (id) => {
    let { totalPrice } = this.state;
    let { price } = this.props;
    this.setState({
      totalPrice: totalPrice + price
    })
    
  }

  render() {
    let { id, name, price } = this.props;
    let { totalPrice } = this.state;
    return (
      <>
        <div className="col-md-6">
          <div className="menu">
            <div className="row">
              <div className="col-md-10"><div className="card">
                <div className="card-header d-flex justify-content-between" onClick={() => this.setState({ isVisible: !this.state.isVisible })} style={{ cursor: "pointer" }}>
                  <h5 className="d-inline" >{name}</h5>
                  <span style={{ cursor: "pointer", color: "red", fontWeight: "900" }} onClick={this.deleteMenuHandle.bind(this, id)}>-</span>
                  <span onClick={this.calculate.bind(this, id)}>+</span>
                </div>
                <div className="card-body">
                  Qiymet : {price}
                </div>
              </div>
              </div>
              <div className="col-md-2"><div className="sumPrice">
                Total: {totalPrice}
              </div>
              </div>
            </div>
          </div>
         
        </div>
      </>
    );
  }
}

export default Menu;
