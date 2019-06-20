import React from 'react';
import LoginPage from "./Components/Login/LoginPage";
import ListItem from './Components/TechStuff/ListItem';
import { Link, Route } from 'react-router-dom';
import PrivateRoute from './Components/Login/PrivateRoute';
import TechList from './Components/TechStuff/TechList';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
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
      component={TechList}
       />
       {props.friends.map((friend) => <Route 
       path={`/protected/${friend.name}`}
       render={() => <ListItem friend={friend} />} />)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  }
};

export default connect(mapStateToProps)(App);