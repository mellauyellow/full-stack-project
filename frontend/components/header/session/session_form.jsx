import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      hashHistory.push("/");
    }
  }

  componentWillUnmount() {
    if (this.props.nextAction) {
      this.props.nextAction();
    } else if (this.props.closeModal){
      this.props.closeModal();
    }
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  handleGuestLogin(e) {
    e.preventDefault();
    this.props.login({username: "guest", password: "password"});
  }

  render() {
    let errors;

    if (this.props.errors) {
      errors = this.props.errors.map((error, idx) => (
        <li key={idx}>{error}</li>
      ));
    } else {
      errors = <li></li>;
    }

    return (
      <div className="login-form">
        <h2>Log in</h2>
        <ul className="errors">
          {errors}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="username" onChange={this.handleChange("username")} value={this.state.username}></input>
          <input type="password" placeholder="password" onChange={this.handleChange("password")} value={this.state.password}></input>
          <input type="submit" value="Log in"></input>
        </form>
        <div className="login-form-signup">
          <a onClick={this.handleGuestLogin}>Log in as a Guest</a>
          <br></br>
          <small>Don't have an account? &nbsp;</small><Link to='/signup' onClick={this.props.closeModal}>Sign up</Link>
        </div>
      </div>
    );
  }
}

export default SessionForm;
