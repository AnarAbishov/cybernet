import React, { Component } from "react";
import Menu from "./Menu.jsx";
import { connect } from "react-redux";
import { deleteMenu,addMenu } from "../store/Menu/actions";

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  deleteMenuHandle = id => {
    let { deleteUser } = this.props;
    deleteUser(id);
  };


  

  render() {
    let { menuList, deleteMenu,addMenu } = this.props;
    console.log(this.props);
    return (
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
         <button className="btn btn-success" style={{marginTop: "20px", marginLeft: "15px"}}>Calculate Sum</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuList: state.menuList
});

export default connect(mapStateToProps, { deleteMenu, addMenu })(MenuContainer);
