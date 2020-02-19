import React, { Component } from "react";
import Header from "./components/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuContainer from "./components/MenuContainer";
import Order from "./components/Order.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="container">
            <div className="row">
              <Header title="Restoran" />
              <MenuContainer />
              <Order/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
