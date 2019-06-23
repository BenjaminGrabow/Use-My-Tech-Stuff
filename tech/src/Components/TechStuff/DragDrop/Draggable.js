import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`

`;

class Draggable extends React.Component {

        drag = (event) => {
                event.dataTransfer.setData('transfer', event.target.id );
              };
            
              dontAllowDrop = (event) => {
                event.stopPropagation();
              };
            
        render() { 
                return ( 
                        <StyledDiv 
                        id={this.props.id}
                        draggable='true'
                        onDragStart={this.drag}
                        onDragOver={this.dontAllowDrop}
                        >
                        {this.props.children}
                </StyledDiv>
                 );
        }
}
 
export default Draggable;