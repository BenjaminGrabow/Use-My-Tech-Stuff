import React from 'react';
import StyledDiv from './StyledDiv';
import { connect } from 'react-redux'
import { register } from '../../store/actions';
import loginPic from '../Login/loginPic.jpg';
import { Animated } from "react-animated-css";

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
                                        onSubmit={this.register}>
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
                                             <i className="fa fa-user-plus"></i>
                                        </button>
                                </form>
                                        </div>
                        </StyledDiv>
                );
        }
}

export default connect(null, { register })(RegisterPage);