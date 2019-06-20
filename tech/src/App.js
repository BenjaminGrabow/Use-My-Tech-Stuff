import React from 'react';
import LoginPage from "./Components/Login/LoginPage";
import { Link, Route } from 'react-router-dom';
import PrivateRoute from './Components/Login/PrivateRoute';
// import Friends from './Components/Friends/Friends';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/login" component={LoginPage} />
      <PrivateRoute exact path="/protected" 
      // component={Friends}
       />
    </div>
  );
}

export default App;