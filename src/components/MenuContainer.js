import React, { Component } from "react";
import Menu from "./Menu.jsx";
import { connect } from "react-redux";
import { deleteMenu, addMenu } from "../store/Menu/actions";
import Order from "./Order.jsx";

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      totalSum: 0
    };
  }

  deleteMenuHandle = id => {
    let { deleteUser } = this.props;
    deleteUser(id);
  };

  totalHandle = () => {
    let { menuList } = this.props;
    let totalSumCalculate = 0;
    menuList.map(item => {
      totalSumCalculate += item.totalSum;
    });

    this.setState({
      totalSum: totalSumCalculate
    });
  };

 
  render() {
    let { menuList, deleteMenu, addMenu } = this.props;
    let { totalSum } = this.state;

    return (
      <>
        <div className="col-md-6">
          {menuList.map(menu => {
            return (
              <Menu
                key={menu.id}
                id={menu.id}
                name={menu.name}
                price={menu.price}
                deleteMenu={deleteMenu}
                addMenu={addMenu}
              />
            );
          })}
          <div className="d-flex align-items-center" style={{ marginTop: "20px", marginLeft: "15px" }}>
          <button
            className="btn btn-success"
            
            onClick={this.totalHandle}
          >
            Calculate Sum
          </button>
          <Order totalSum={totalSum} />
          </div>
        </div>
        
      </>
    );
  }
}

const mapStateToProps = state => ({
  menuList: state.menuList
});

export default connect(mapStateToProps, { deleteMenu, addMenu })(MenuContainer);
