import styled from 'styled-components';

const StyledDiv = styled.div`

.pic {
width: 100%;
height: 45rem; 

@media(max-width:750px) {
height: 40rem;
width: 100%;
}
} 

.row {
display: flex;
width:100%;
height: 100%;
justify-content: space-around;

@media(max-width:750px) {
flex-direction: column;
}
}

.column {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.messageContainer {
  width: 60%;
  text-align: left;
}

p {
font-size: 1rem;
}

.ratingScroll {
overflow-y : auto;
width: 100%;
height: 20rem;

::-webkit-scrollbar {
  width: 1rem;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 .5rem grey; 
  border-radius: .8rem;
}
 
::-webkit-scrollbar-thumb {
  background: black; 
  border-radius: .8rem;
}

::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}
}

.ratings {
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: .5rem solid lightgrey;

@media(max-width:650px) {
flex-direction: column;
}
}

#rating-pic {
width: 20%;
height: 6rem;
border-radius: 50%;

@media(max-width:1100px) {
width : 20%;
} 

@media(max-width:650px) {
width: 35%;
}

@media(max-width:650px) {
width: 45%;
}
}

.message {
@media(max-width:650px) {
order: 2;
}
}

.checked {
color: orange;
} 

.star {
@media(max-width:650px) {
display: flex;
order: 1;
}
}

.adder {
height: 4rem;
padding: 1.5rem 0 4rem 0;

@media(max-width:650px) {
padding-bottom: 18rem;
}
}

form {
display: flex;
justify-content: space-around;

  @media(max-width:650px) {
flex-direction: column;
align-items: center;
}
}

.fa-star {
  margin: .3rem;
  font-size: 1rem;
}

button {
border: .2rem solid black;
transition: .8s;
border-radius: 3rem;
width: 15%;
font-size: 4rem;
background: white;

@media(max-width:650px) {
width: 60%;
border-radius: .5rem;
margin: .5rem;
}
}

button:hover {
border: .2rem solid red;
color: red;
}

i:hover {
  color: red;
}

.columnRight {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

.oneLine {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.fa-star {
margin-top: 1.2rem;
padding-right: 2rem;
}

.payment {
  width: 100%;
  display: flex;
  justify-content: center;
}

}

Input {
border-radius: 3rem;
box-shadow: 1rem .5rem .5rem black;
width: 25%;
height: 4rem;
text-align: center;
font-size: 1.5rem;


@media(max-width:650px) {
width: 90%;
margin: .5rem;
}
}

.buy {
width: 50%;
height: 5rem;
}

a {
text-decoration: none;
}

`;

export default StyledDiv;