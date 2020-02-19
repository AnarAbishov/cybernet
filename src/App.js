import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Header from "./components/Header.jsx";
import MenuContainer from "./components/MenuContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogined: false
    };
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="container">
            <div className="row">
              <Router>
                <Switch>
                  <Route exact path="/">
                    <Login />
                  </Route>
                  <Route path="/menu">
                    <Header title="Restoran" />
                    <MenuContainer />
                  </Route>
                </Switch>
              </Router>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
