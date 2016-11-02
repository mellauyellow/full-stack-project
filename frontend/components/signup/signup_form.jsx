import React from 'react';
import { Link, hashHistory } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
      zip_code: ""
    };
    console.log(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      hashHistory.push("/");
    }
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  renderErrors() {
    if (this.props.errors) {
      let errorFields = Object.keys(this.props.errors);
      let errors = errorFields.map((field, idx) => {
        if (field.indexOf("_") > -1) {
          let newField = field.replace("_", " ");
          return (<li key={idx}>{newField} {this.props.errors[field]}</li>);
        } else {
          return (<li key={idx}>{field} {this.props.errors[field]}</li>);
        }
      });
      return errors;
    } else {
      return <li></li>;
    }
  }

  render() {
    let errors = this.renderErrors();

    return (
      <div className="signup-form">
        <h2>Create an account</h2>
        <ul className="errors">
          {errors}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="username" value={this.state.username} onChange={this.handleChange("username")}/>
          <input type="password" placeholder="password" value={this.state.password} onChange={this.handleChange("password")}/>
          <input type="text" placeholder="email address" value={this.state.email} onChange={this.handleChange("email")}/>
          <input type="text" placeholder="first name" value={this.state.first_name} onChange={this.handleChange("first_name")}/>
          <input type="text" placeholder="last name" value={this.state.last_name} onChange={this.handleChange("last_name")}/>
          <input type="text" placeholder="zip code (optional)" value={this.state.zip_code} onChange={this.handleChange("zip_code")}/>
          <input type="submit" value="Sign up"></input>
        </form>
        <div className="signup-form-login">
          <small>Already have an account? &nbsp;</small>
          <Link to='/login'>Log in</Link>
        </div>
      </div>
    );
  }
}

export default SignupForm;
