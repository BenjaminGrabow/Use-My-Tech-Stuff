import React from 'react';
import { connect } from 'react-redux'
import { register } from '../../store/actions';
import Loader from 'react-loader-spinner';

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
                        <div>
                                <form
                                        onSubmit={this.register}>
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
                                               Register
                                        </button>
                                </form>
                        </div>
                );
        }
}

// const mapStateToProps = state => {
//         return {
//                 isLoggingIn: state.loggingIn
//         }
// }

export default connect(null, { register })(RegisterPage);