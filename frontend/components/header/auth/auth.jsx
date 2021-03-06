import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from './auth_modal_style';
import SessionFormContainer from '../session/session_form_container';
import SignupFormContainer from '../../signup/signup_form_container';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      signIn: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.determineComponent = this.determineComponent.bind(this);
  }

  handleClick(bool) {
    return () => {
      this.setState({modalOpen: true, signIn: bool});
    };
  }


  onModalClose() {
    this.setState({modalOpen: false});
    ModalStyle.content.opacity = 0;
    this.props.clearErrors();
  }

  onModalOpen() {
    ModalStyle.content.opacity = 100;
  }

  handleGuestLogin() {
    this.props.login({username: "guest", password: "password"});
  }

  determineComponent() {
    let component;

    if (this.state.signIn) {
      component = <SessionFormContainer closeModal={this.onModalClose} />;
    } else {
      component = <SignupFormContainer closeModal={this.onModalClose} />;
    }

    return component;
  }

  render() {
    let component = this.determineComponent();

    let nameStyle = {};

    if (this.props.location === "/") {
      nameStyle = {
        color: "silver"
      };
    }

    if (this.props.currentUser.username) {
      return (
        <div className="auth-logged-in">
          <img src={this.props.currentUser.profile_pic_url}></img>
          <div className="logged-in-text">
            <h4 style={nameStyle}>{this.props.currentUser.first_name} {this.props.currentUser.last_name.slice(0, 1)}.</h4>
            <button onClick={this.props.logout}>Log Out</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="auth-not-logged-in">
          <div className="guest-link">
            <Link onClick={this.handleGuestLogin}>Guest</Link>
          </div>
          <div className="signup-link">
            <Link onClick={this.handleClick(false)}>Sign Up</Link>
          </div>
          <div className="login-link">
            <Link onClick={this.handleClick(true)}>Log In</Link>
          </div>

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            style={ModalStyle}
            onAfterOpen={this.onModalOpen}>
            <Link onClick={this.onModalClose} className="close">x</Link>
            {component}
          </Modal>
        </div>
      );
    }
  }
}

export default Auth;
