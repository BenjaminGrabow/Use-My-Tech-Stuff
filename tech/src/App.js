import React from 'react';
import HomePage from './Components/HomePage/HomePage'
import LoginPage from "./Components/Login/LoginPage";
import RegisterPage from "./Components/Register/RegisterPage";
import ListItem from './Components/TechStuff/ListItem';
import TechContainer from './Components/TechStuff/TechContainer';
import Footer from "./Components/Footer/Footer";
import { Route } from 'react-router-dom';
import PrivateRoute from './Components/Login/PrivateRoute';
import { fetch } from './store/actions';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  componentDidMount() {
    this.fetchData();
  };
              
  fetchData = () => {
                this.props.fetch();
  };


  render() {
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
        <Route exact path="/register" component={RegisterPage} />
        <PrivateRoute
          exact path="/protected"
          component={TechContainer}
        />
        {this.props.techItems.map((techItem) => <Route
          key={techItem.id}
          path={`/protected/${techItem.title}`}
          render={() => <ListItem techItem={techItem} />} />)}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    techItems: state.techItems
  }
};

export default connect(mapStateToProps, { fetch })(App);