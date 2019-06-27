import React from 'react';
import { connect } from 'react-redux';
import { safeUser } from '../../store/actions';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledDiv = styled.div`

img {
        border-radius: 50%;
        width: 20%;
        height: 7rem;
}
`;

class User extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        firstname: '',
                        lastname: '',
                        age: '',
                        adress: '',
                        picture: '',
                        mobilephonenumber: '',
                }
        }

        handleChange = event => {
                this.setState({
                        [event.target.name]: event.target.value
                });
        };

        safePreferences = () => {
                const user = [{
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        age: this.state.age,
                        adress: this.state.adress,
                        picture: this.state.picture,
                        mobilephonenumber: this.state.mobilephonenumber,
                }];

                this.sendUserData(user);

                this.setState({
                        firstname: '',
                        lastname: '',
                        age: '',
                        adress: '',
                        picture: '',
                        mobilephonenumber: '',
                });
        };

        sendUserData = (user) => {
                this.props.safeUser(user);
        };

        render() {
                if (this.props.userData) {
                        return this.props.userData.map(user => {
                                return <StyledDiv>
                                        <NavLink to="/protected">
                                                <p>Home</p>
                                        </NavLink>
                                        <div>
                                                <img
                                                        src={user.picture}
                                                        alt="user" />
                                                <p>{user.firstname}</p>
                                                <p>{user.lastname}</p>
                                                <p>{user.age}</p>
                                                <p>{user.mobilephonenumber}</p>
                                                <p>{user.firstname}</p>
                                        </div>
                                        <div>
                                                <input
                                                        type="text"
                                                        name="firstname"
                                                        placeholder="First name"
                                                        onChange={this.handleChange} />
                                                <input
                                                        type="text"
                                                        name="lastname"
                                                        placeholder="Last name"
                                                        onChange={this.handleChange} />
                                                <input
                                                        type="number"
                                                        min="18"
                                                        max="100"
                                                        name="age"
                                                        placeholder="Age"
                                                        onChange={this.handleChange} />
                                                <input
                                                        type="text"
                                                        name="adress"
                                                        placeholder="Adress"
                                                        onChange={this.handleChange} />
                                                <input
                                                        type="text"
                                                        name="picture"
                                                        placeholder="Picture URL"
                                                        onChange={this.handleChange} />
                                                <input
                                                        type="text"
                                                        name="mobilephonenumber"
                                                        placeholder="Mobilephone"
                                                        onChange={this.handleChange} />
                                                <button
                                                        onClick={this.safePreferences}>
                                                        Upload
                                                         </button>
                                        </div>
                                </StyledDiv>
                        })
                }
                return (
                        <StyledDiv>
                                <div>
                                        <input
                                                type="text"
                                                name="firstname"
                                                placeholder="First name"
                                                onChange={this.handleChange} />
                                        <input
                                                type="text"
                                                name="lastname"
                                                placeholder="Last name"
                                                onChange={this.handleChange} />
                                        <input
                                                type="number"
                                                min="18" max="100"
                                                name="age"
                                                placeholder="Age"
                                                onChange={this.handleChange} />
                                        <input
                                                type="text"
                                                name="adress"
                                                placeholder="Adress"
                                                onChange={this.handleChange} />
                                        <input
                                                type="text"
                                                name="picture"
                                                placeholder="Picture URL"
                                                onChange={this.handleChange} />
                                        <input
                                                type="text"
                                                name="mobilephonenumber"
                                                placeholder="Mobilephone"
                                                onChange={this.handleChange} />
                                        <button
                                                onClick={this.safePreferences}>
                                                Upload
                                                </button>
                                </div>
                        </StyledDiv>
                );
        }
}

const mapStateToProps = state => {
        return {
                userData: state.userData
        }
};

export default connect(mapStateToProps, { safeUser })(User);