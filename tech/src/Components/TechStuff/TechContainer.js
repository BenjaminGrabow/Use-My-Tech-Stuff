import React from 'react';
import TechList from './TechList';
import Droppable from './DragDrop/Droppable';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const StyledContainer = styled.div`

nav {
  display: flex;
  justify-content: space-around;

  p {
  font-size: 2.5rem;
  font-weight: bold;
 transition: .8s;
 color: #bdc3c7;

  &:hover {
color: black;
filter: brightness(150%);
text-decoration: underline;
  }
}

.navLink {
text-decoration: none;
font-size: 2rem;
}

.dr2 {
height: 12rem;
width: 100%;
display: flex;
background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

@media (max-width:610px) {
        display: none;
}
}
      
#dr2 {
width: 100%;
margin: 0;
height: 12rem;
}

img {
height: 12rem;
}

button {
border: .1rem solid #3498db;
color: black;
transition: 0.8s;
}

button:hover {
color: red;
}
`;

class TechContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  logout = () => {
    localStorage.removeItem('token');
  };


  render() {
    return (
      <StyledContainer>
        <nav>
            <NavLink
              to="/"
              className="navLink">
              <p
            onClick={this.logout}>
                Logout
                </p>
            </NavLink>
        <NavLink
          className="navLink"
          to="/protected/slide_mode" >
          <p>Slide Mode</p>
           </NavLink>
           <NavLink
          className="navLink"
          to="/protected/user" >
          <p>User</p>
           </NavLink>
           </nav>
        <div
          className="dr2">
          <Droppable
            id="dr2" >
          </Droppable>
        </div>
        <TechList />
      </StyledContainer>
    );
  }
}

export default TechContainer;