import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`

background-color: visible;
width: 100%;
height: 3rem;
margin: .5rem;
display: flex;
flex-wrap: wrap;

`;


class Droppable extends React.Component {
        drop = (event) => {
                event.preventDefault();
                const data = event.dataTransfer.getData('transfer');
              
                event.target.append(document.getElementById(data));
        };

              allowDrop = (event) => {
                event.preventDefault();
              };

        render() { 
                return ( 
                        <StyledDiv id={this.props.id}
                        onDrop={this.drop}
                        onDragOver={this.allowDrop} >
                        {this.props.children}
                </StyledDiv>   
                 );
        }
}
 
export default Droppable;