import React from 'react';
import { connect } from 'react-redux';
import { safeUser } from '../../../store/actions';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledDiv = styled.div`
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff);




.navLink {
text-decoration: none;
font-size: 2rem;
        
				
p {
font-size: 2.5rem;font-weight: bold;transition: .8s;color: #bdc3c7;margin: 0;
				
&:hover {
color: blue;filter: brightness(150%);text-decoration: underline;}
}
}

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
border-radius: .7rem;
width: 50%;
height: 18rem;
}

.user {
display: flex;
flex-direction: column;
align-items: center;

button {
width: 25%;
height: 5rem;
border-radius: .5rem;
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff);
border: .3rem solid black;
transition: .8s;
margin: 1rem;

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

.userStyling {
display: flex;
justify-content: space-around;
width: 100%;

.text {
display: flex;
flex-direction: column;
align-items: baseline;
}
p {
font-size: 2rem;
margin: .6rem;
}

span {
font-weight: bold;
}
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
		if (this.state.firstname &&
			this.state.lastname &&
			this.state.age &&
			this.state.adress &&
			this.state.picture &&
			this.state.mobilephonenumber) {

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
			return this.props.userData.map((user, index) => {
				return <StyledDiv
					key={index}>
					<NavLink
						to="/protected"
						className="navLink">
						<p>Home</p>
					</NavLink>
					<div
						className={!this.state.inputForStart ? 'user' : 'off'}>
						<div className="userStyling">
							<img
								src={user.picture}
								alt="user" />
							<div
								className="text">
								<p>
									<span>First name:</span> {user.firstname}
								</p>
								<p>
									<span>Last Name:</span> {user.lastname}
								</p>
								<p>
									<span>Age:</span> {user.age}</p>
								<p>
									<span>Adress:</span> {user.adress}
								</p>
								<p>
									<span>Mobilephone:</span> {user.mobilephonenumber}
								</p>
							</div>
						</div>
						<button
							className="form change"
							onClick={this.startUserPreference}>
							<i className="fa fa-upload" /> Change
                                                        </button>
					</div>
					<div
						className={this.state.inputForStart ? 'form' : 'off'}>
						<input
							value={this.state.firstname}
							type="text"
							name="firstname"
							placeholder="First name"
							onChange={this.handleChange} />
						<input
							value={this.state.lastname}
							type="text"
							name="lastname"
							placeholder="Last name"
							onChange={this.handleChange} />
						<input
							value={this.state.age}
							type="number"
							min="18"
							max="100"
							name="age"
							placeholder="Age"
							onChange={this.handleChange} />
						<input
							value={this.state.adress}
							type="text"
							name="adress"
							placeholder="Adress"
							onChange={this.handleChange} />
						<input
							value={this.state.picture}
							type="text"
							name="picture"
							placeholder="Picture URL"
							onChange={this.handleChange} />
						<input
							value={this.state.mobilephonenumber}
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
			})
		}
		return (
			<StyledDiv>
				<NavLink
					to="/protected"
					className="navLink">
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
						value={this.state.firstname}
						type="text"
						name="firstname"
						placeholder="First name"
						onChange={this.handleChange} />
					<input
						value={this.state.lastname}
						type="text"
						name="lastname"
						placeholder="Last name"
						onChange={this.handleChange} />
					<input
						value={this.state.age}
						type="number"
						min="18"
						max="100"
						name="age"
						placeholder="Age"
						onChange={this.handleChange} />
					<input
						value={this.state.adress}
						type="text"
						name="adress"
						placeholder="Adress"
						onChange={this.handleChange} />
					<input
						value={this.state.picture}
						type="text"
						name="picture"
						placeholder="Picture URL"
						onChange={this.handleChange} />
					<input
						value={this.state.mobilephonenumber}
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