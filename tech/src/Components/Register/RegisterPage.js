import React from 'react';
import { connect } from 'react-redux'
import { register } from '../../store/actions';
import loginPic from '../Login/loginPic.jpg';

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

class RegisterPage extends React.Component {
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

        register = e => {
                e.preventDefault();

                this.props.register(this.state.credentials)
                        .then(() => {
                                this.props.history.push('/login')
                        })

        };


        render() {
                return (
                        <StyledDiv>
                                <img src={loginPic} alt="logo" />
                                <form
                                        onSubmit={this.register}>
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
                                                Register
                                        </button>
                                </form>
                        </StyledDiv>
                );
        }
}

export default connect(null, { register })(RegisterPage);