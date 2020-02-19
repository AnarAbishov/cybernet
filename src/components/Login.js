import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../store/Login/actions"
import { Redirect } from "react-router-dom"

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: "",
        password: "",
        isLogined: false,
        error: false,
    };
  }

  onSubmit=(e)=>{
    e.preventDefault()
    let { users, } = this.props
    let { name , password } = this.state
    const user = users.find(user=> user.name === name && user.password === Number(password));
    user ? this.setState({isLogined:true}) : this.setState({ error: true})
  }

  render() {
    let { name, password ,isLogined , error} = this.state
    return (
      <div>
        <h2 className="mb-3">Login</h2>
        <form onSubmit={this.onSubmit}>
          <div className="inputName">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="form-control mb-3"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e)=> this.setState({name: e.target.value})}
            />
          </div>
          <div className="inputPassword">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="form-control"
              type="text"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e)=> this.setState({password: e.target.value})}
            />
          </div>
          {isLogined && <Redirect to="menu"/>}
          {error && <p style={{color: "red", marginTop: "10px", marginLeft: "5px"}}>error message</p> }
          <button style={{marginTop: "15px"}} type="submit" className="btn btn-success">Login</button>
        </form>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
    users: state.users
  });
  
  export default connect(mapStateToProps, { loginUser })(Login);