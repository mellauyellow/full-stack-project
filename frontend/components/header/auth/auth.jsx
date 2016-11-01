import React from 'react';
import { Link } from 'react-router';

const Auth = ({currentUser, logout}) => {
  if (currentUser.username) {
    return (
      <div className="auth-logged-in">
        <img src={currentUser.profile_pic_url}></img>
        <h4>{currentUser.username}</h4>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  } else {
    return (
      <div className="auth-not-logged-in">
        <div className="signup-link">
          <Link to="/signup">Sign Up</Link>
        </div>
        <div className="login-link">
          <Link to="/login">Log In</Link>
        </div>
      </div>
    );
  }
};

export default Auth;
