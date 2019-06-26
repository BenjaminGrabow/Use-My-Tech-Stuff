import React from 'react';
import loginPic from './loginPic.jpg';
import { connect } from 'react-redux'
import { login, fetch } from '../../store/actions';
import Loader from 'react-loader-spinner';
import { Animated } from "react-animated-css";
import styled from 'styled-components';

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

img {
height: 40rem;
width: 100%;
}

form {
display: flex;
margin: 1rem;
justify-content: center;
align-items: center;
width: 100%;
}

input {
border-radius: 3rem;
box-shadow: 1rem .5rem .5rem black;
width: 100%;
margin-bottom: 1rem;
height: 5rem;
font-size: 1.5rem;
text-align: center;
}
 
button {
background-color: white;
border-radius: 20%;
width: 25%;
height: 5rem;
box-shadow: 1rem .5rem .5rem black;
margin: 0 0 1rem 1.5rem;
font-size: 1.5rem;
font-weight: bold;
}
`;


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
    
    if(JSON.parse(localStorage.getItem("state")).techItems[0].messages[2] === undefined) {
      this.props.fetch();
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
              ('Log In')}
          </button>
        </form>
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