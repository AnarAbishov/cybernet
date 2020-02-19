import React, { Component } from "react";
import deleteIcon from "../img/delete.svg"
import plusIcon from "../img/plus.svg"


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      totalPrice: 0,
      count: 0,
    };
  }

  deleteMenuHandle = (id) => {
    let { deleteMenu } = this.props;
    deleteMenu(id)
  }
  calculate = (id) => {
    let { totalPrice, count } = this.state;
    let { price, addMenu } = this.props;
    
 
      let newObj = {
        id,
        totalPrice,
      }
      addMenu(newObj)
  }


  render() {
    let { id, name, price } = this.props;
    let { totalPrice, count } = this.state;

    return (
      <>
        <div className="col-md-12">
          <div className="menu">
            <div className="row">
              <div className="col-md-8">
                <div className="card">
                <div className="card-header d-flex justify-content-between" onClick={() => this.setState({ isVisible: !this.state.isVisible })} style={{ cursor: "pointer" }}>
                  <h5 className="d-inline" >{name}</h5>
                  <div className="changeCount d-flex justify-content-between" style={{ width: "60px" }}>
                    <img src={deleteIcon} alt="deleteIcon" style={{ width: "20px" }} onClick={this.deleteMenuHandle.bind(this, id)} />
                    <img src={plusIcon} alt="plusIcon" style={{ width: "28px" }} onClick={()=> this.setState({totalPrice: totalPrice + price,count: ++count}, this.calculate.bind(this, id))}/>
                  </div>
                </div>
                <div className="card-body">
                  Qiymet : {price}
                </div>
              </div>
              </div>
              <div className="col-md-4"><div className="sumPrice">
                <span>Price: {totalPrice}</span>
                <p>Count : {count}</p>
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
