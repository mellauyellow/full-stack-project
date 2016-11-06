import React from 'react';
import AuthContainer from './header/auth/auth_container';
import SearchDropdownContainer from './header/search_dropdown/search_dropdown_container';
import { Link } from 'react-router';

const App = ({children}) => (
  <div className="app">
    <nav>
      <div className="logo-and-name">
        <Link to="/">
          <img src="http://www.culhanemeadows.com/wp-content/uploads/2015/11/emoji.png" className="logo"></img>
          <h1 className="company-name">onward</h1>
        </Link>
      </div>
      <SearchDropdownContainer location={children.props.location.pathname}/>
      <AuthContainer />
    </nav>
    <div className="children">
      {children}
    </div>
  </div>
);

export default App;
