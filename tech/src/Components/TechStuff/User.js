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
                 }
        }

        handleChange = event => {
                this.setState({
                        [event.target.name]: event.target.value
                });
        };


        render() { 
                return ( 
                        <StyledDiv>
<input type="text" name="firstname" placeholder="First name" onChange={this.handleChange} />
<input type="text" name="lastname" placeholder="Last name" onChange={this.handleChange} />
<input type="number" min="18" max="100" name="age" placeholder="Age" onChange={this.handleChange} />
<input type="text" name="adress" placeholder="Adress" onChange={this.handleChange} />
<input type="text" name="picture" placeholder="Picture URL" onChange={this.handleChange} />
<input type="text" name="mobilephonenumber" placeholder="Mobilephone" onChange={this.handleChange} />
<button onClick={this.safePreferences}>Upload</button>
                        </StyledDiv>
                        
                 );
        }
}
 
export default User;