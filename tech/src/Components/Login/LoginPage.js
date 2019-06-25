import React from 'react';
import loginPic from './loginPic.jpg';
import { connect } from 'react-redux'
import { login } from '../../store/actions';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

img {
height: 25rem;
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
height: 2rem;
}
 
button {
background-color: red;
border-radius: 50%;
width: 15%;
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

                this.props.login(this.state.credentials)
                        .then(() => {
                                this.props.history.push('/protected')
                        })
        };


        render() {
                return (
                        <StyledDiv>
                                <img src={loginPic} alt="logo" />
                                <form
                                        onSubmit={this.login}>
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

export default connect(mapStateToProps, { login })(LoginPage);