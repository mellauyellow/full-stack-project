import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
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

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  render() {
    let errors;

    if (this.props.errors) {
      errors = this.props.errors.map((error, idx) => (
        <li key={idx}>{error}</li>
      ));
    } else {
      errors = <br></br>;
    }

    return (
      <div className="login-form">
        <ul>
          {errors}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="username" onChange={this.handleChange("username")} value={this.state.username}></input>
          <input type="password" placeholder="password" onChange={this.handleChange("password")} value={this.state.password}></input>
          <input type="submit" value="Log in"></input>
        </form>
        <div className="login-form-signup">
          <p>Don't have an account?</p>
          <Link to='/signup'>Sign up</Link>
        </div>
      </div>
    );
  }
}

export default SessionForm;
