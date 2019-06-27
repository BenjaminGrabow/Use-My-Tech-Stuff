import React from 'react';
import { connect } from 'react-redux';
import { safeUser } from '../../../store/actions';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import uuid from 'uuid';
const StyledDiv = styled.div`
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff);

p {
margin: 0;
}

.off {
display:none;
}

.startScreen {
display: flex;
flex-direction: column;
align-items: center;
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff); 
}

.fa-play {
font-size: 20rem;
transition: .8s;

&:hover {
color: red;
}
}

.startH1 {
font-size: 2.5rem;
}

.form {
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: .5rem;



input {
width: 70%;
border-radius: .5rem;
font-size: 2rem;
margin-bottom: .9rem;
}

button {
width: 25%;
height: 4rem;
border-radius: .5rem;
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff);
border: .3rem solid black;
transition: .8s;

&:hover {
border: .3rem solid red;
}

&:hover, i:hover {
color: red;
}
}

i {
font-size: 3rem;
}
}

img {
border-radius: 50%;
width: 30%;
height: 12rem;
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
                        inputForStart: false,
                }
        }

        startUserPreference = () => {
                this.setState({
                        inputForStart: true
                });
        };

        handleChange = event => {
                this.setState({
                        [event.target.name]: event.target.value
                });
        };

        safePreferences = () => {
                if (this.state.firstname === "" &&
                        this.state.lastname === "" &&
                        this.state.age === "" &&
                        this.state.adress === "" &&
                        this.state.picture === "" &&
                        this.state.mobilephonenumber === "") {

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
                                inputForStart: false,
                        });
                }
        };

        sendUserData = (user) => {
                this.props.safeUser(user);
        };

        render() {
                if (this.props.userData) {
                        return this.props.userData.map(user => {
                                return <StyledDiv
                                        key={uuid()}>
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
                                <NavLink to="/protected">
                                        <p>Home</p>
                                </NavLink>
                                <div
                                        className={!this.state.inputForStart ? 'startScreen' : 'off'}>
                                        <h1
                                                className="startH1">
                                                Click on the button to start filling out your user preferences
                                        </h1>
                                        <i
                                                onClick={this.startUserPreference}
                                                className="fa fa-play"></i>
                                </div>
                                <div
                                        className={this.state.inputForStart === false ? 'off' : 'form'}>
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
                                                <i className="fa fa-upload"></i>
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