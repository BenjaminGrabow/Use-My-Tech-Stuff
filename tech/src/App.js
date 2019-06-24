import React from 'react';
import HomePage from './Components/HomePage/HomePage'
import LoginPage from "./Components/Login/LoginPage";
import ListItem from './Components/TechStuff/ListItem';
import TechList from './Components/TechStuff/TechList';
import Footer from "./Components/Footer/Footer";
import {  Route } from 'react-router-dom';
import PrivateRoute from './Components/Login/PrivateRoute';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
  return (
    <div className="App">
      {/* <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul> */}
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <PrivateRoute 
      exact path="/protected" 
      component={TechList}
       />
       {props.techItems.map((techItem) => <Route
       key={techItem.id} 
       path={`/protected/${techItem.title}`}
       render={() => <ListItem techItem={techItem} />} />)}
       <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    techItems: state.techItems
  }
};

export default connect(mapStateToProps)(App);