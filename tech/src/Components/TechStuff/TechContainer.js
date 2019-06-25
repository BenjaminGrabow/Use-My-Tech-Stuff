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
background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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


  render() {
    return (
      <StyledContainer>
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