import React from 'react';
import AuthContainer from './header/auth/auth_container';
import SearchDropdownContainer from './header/search_dropdown/search_dropdown_container';
import { Link } from 'react-router';

const App = ({children}) => {
  let style;

  if (children.props.location.pathname === "/") {
    style = {color: "white"};
  } else {
    style = {};
  }

  return (
    <div className="app">
      <nav>
        <div className="logo-and-name">
          <Link to="/">
            <h1 className="company-name" style={style}>onward.</h1>
          </Link>
        </div>
        <SearchDropdownContainer location={children.props.location.pathname} router={children.props.router}/>
        <AuthContainer location={children.props.location.pathname}/>
      </nav>
      <div className="children">
        {children}
      </div>
    </div>
  );
};

export default App;
