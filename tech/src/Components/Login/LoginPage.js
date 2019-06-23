import React from 'react';
import { connect } from 'react-redux'
import { login } from '../../store/actions';
import Loader from 'react-loader-spinner';

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
                        <div>
                                <form
                                        onSubmit={this.login}>
                                        <input
                                                name="username"
                                                onChange={this.handleChange}
                                                value={this.state.username}
                                        />
                                        <input
                                                name="password"
                                                onChange={this.handleChange}
                                                value={this.state.password}
                                        />
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
                        </div>
                );
        }
}

const mapStateToProps = state => {
        return {
                isLoggingIn: state.loggingIn
        }
}

export default connect(mapStateToProps, { login })(LoginPage);