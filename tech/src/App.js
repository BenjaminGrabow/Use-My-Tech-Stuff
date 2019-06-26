import React from 'react';
import HomePage from './Components/HomePage/HomePage'
import LoginPage from "./Components/Login/LoginPage";
import RegisterPage from "./Components/Register/RegisterPage";
import ListItem from './Components/TechStuff/ListItem';
import SliderMode from './Components/TechStuff/SliderMode';
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
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <PrivateRoute
          exact path="/protected"
          component={TechContainer}
        />
        <Route path="/protected/slide_mode" component={SliderMode} />
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