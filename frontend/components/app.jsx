import React from 'react';
import AuthContainer from './header/auth/auth_container';

const App = ({children}) => (
  <div className="app">
    <nav>
      <div className="logo-and-name">
        <img src="http://www.culhanemeadows.com/wp-content/uploads/2015/11/emoji.png" className="logo"></img>
        <h1 className="company-name">onward</h1>
      </div>
      <AuthContainer />
    </nav>
    {children}
  </div>
);

export default App;
