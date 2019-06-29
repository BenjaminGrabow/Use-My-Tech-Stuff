import styled from 'styled-components';

const StyledDiv = styled.div`

.article {
display: flex;
width:100%;
justify-content: space-around;

@media(max-width:750px) {
flex-direction: column;
}

img {
width: 50%;
height: 50rem; 

@media(max-width:750px) {
height: 40rem;
width: 100%;
}
}        
}

p {
font-size: 1.5rem;
font-weight: bold;
}

.text {
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 100%;
}

.ratings {
display: flex;
justify-content: space-between;
align-items: center;
border: .5rem solid #facf5a;

@media(max-width:650px) {
flex-direction: column;
}
}

.rating-pic {
width: 20%;
height: 9rem;
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

span {
font-size: 1.5rem;
}

.star {
@media(max-width:650px) {
display: flex;
order: 1;
margin: 1rem;
}
}

.adder {
height: 4rem;
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff); 
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
  margin: 1rem;
  font-size: 2.5rem;
}

button {
border: .2rem solid black;
transition: .8s;
border-radius: 3rem;
width: 15%;
font-size: 4rem;
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff); 

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