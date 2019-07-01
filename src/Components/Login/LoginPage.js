import React from 'react';
import loginPic from './loginPic.jpg';
import { connect } from 'react-redux'
import { login, fetch } from '../../store/actions';
import Loader from 'react-loader-spinner';
import { Animated } from "react-animated-css";
import StyledDiv from './StyledDiv';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: '',
        password: '',
      }
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  };

  login = e => {
    e.preventDefault();
    
    if(JSON.parse(localStorage.getItem('state') === null )) {
      this.props.fetch()
    }
 
    this.props.login(this.state.credentials)
      .then(() => {
        this.props.history.push('/protected')
      })
  };


  render() {
    return (
      <StyledDiv>
        <Animated
          animationIn="rollIn"
          animationOut="slideOutDown"
          animationInDuration={1800}
          animationOutDuration={1800}
          isVisible={true}>
          <img src={loginPic} alt="logo" />
        </Animated>
       <div className="row">
        <form
          onSubmit={this.login}>
          <Animated
            animationIn="rollIn"
            animationOut="slideOutDown"
            animationInDuration={1800}
            animationOutDuration={1800}
            isVisible={true}>
            <div
              className="inputs">
              <input
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
                placeholder="Username"
                type="text"
              />
              <input
                name="password"
                type="password"
                onChange={this.handleChange}
                value={this.state.password}
                placeholder="Password"
              />
            </div>
          </Animated>
          <button
            type="submit">
            {this.props.isLoggingIn ? (<Loader
              type="ThreeDots"
              color="#1f2a38"
              height="12"
              width="26" />) :
              (<i className="fa fa-user-plus"></i>)}
          </button>
        </form>
        </div>
      </StyledDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggingIn: state.loggingIn
  }
}

export default connect(mapStateToProps, { login, fetch })(LoginPage);