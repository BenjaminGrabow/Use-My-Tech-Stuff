import React from 'react';
import TechList from './TechList';
import Droppable from './DragDrop/Droppable';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const StyledContainer = styled.div`

.dr2 {
        height: 6rem;
        width: 100%;
        display: flex;
      }
      
#dr2 {
        width: 100%;
        margin: 0;
        height: 6rem;
      }

      img {
        height: 6rem;
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
        <NavLink to="/login"><p onClick={this.logout}>Logout</p></NavLink>
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