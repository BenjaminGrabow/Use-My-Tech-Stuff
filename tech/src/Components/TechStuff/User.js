import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`

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
                        userData: null,
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

                this.setState({
                        userData: user,
                });
                
                this.setState({
                        firstname: '',
                        lastname: '',
                        age: '',
                        adress: '',
                        picture: '',
                        mobilephonenumber: '',   
                });
        };

        render() { 
                if(this.state.userData){
                        return this.state.userData.map(user => {
                                return <div>
                                <img src={user.picture} alt="user" />
                                <p>{user.firstname}</p>
                                <p>{user.lastname}</p>
                                <p>{user.age}</p>
                                <p>{user.mobilephonenumber}</p>
                                <p>{user.firstname}</p>
                                </div>
                        })
                }
                return ( 
                        <StyledDiv>
                                <div>
<input type="text" name="firstname" placeholder="First name" onChange={this.handleChange} />
<input type="text" name="lastname" placeholder="Last name" onChange={this.handleChange} />
<input type="number" min="18" max="100" name="age" placeholder="Age" onChange={this.handleChange} />
<input type="text" name="adress" placeholder="Adress" onChange={this.handleChange} />
<input type="text" name="picture" placeholder="Picture URL" onChange={this.handleChange} />
<input type="text" name="mobilephonenumber" placeholder="Mobilephone" onChange={this.handleChange} />
<button onClick={this.safePreferences}>Upload</button>
</div>
                        </StyledDiv>     
                 );
        }
}
 
export default User;