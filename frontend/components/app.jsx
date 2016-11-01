import React from 'react';
import AuthContainer from './header/auth/auth_container';

const App = ({children}) => (
  <div className="app">
    <h1>This is the Onward App Component...</h1>
    <AuthContainer />
    {children}
  </div>
);

export default App;
