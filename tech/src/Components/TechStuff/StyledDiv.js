import styled from 'styled-components';

const StyledDiv = styled.div`

.functionality {
  height: 3rem;
display: flex;
width: 100%;
justify-content: space-around;
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff); 
padding: 2rem 0;

@media (max-width:610px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 7rem 0 6rem 0;
        height: 10rem;
}

.fa {
cursor: pointer;
color: black;
font-size: 4.5rem;
font-weight: bold;
transition: 0.8s;
padding-right: 1.5rem;

@media (max-width:610px) {
font-size: 6rem;
padding: 0;
}

&:hover {
color: red;
}
}


.topInput {
border-radius: 3rem;
box-shadow: 1rem .5rem .5rem black;
width: 40%;
height: 4rem;
text-align: center;
font-size: 1.5rem;

@media (max-width:610px) {
        width: 90%;
        margin: .5rem;
        font-size: 3rem;
}
}
}

.techList {
display: flex;
flex-wrap: wrap;
justify-content: center;
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff); 
}

.techItem {
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff); 
width: 45%;
border: .08rem solid black;
margin: 1rem;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
box-shadow: 1rem .5rem .5rem black;
border-radius: .5rem;

@media (max-width:800px) {
        width: 80%;
}

@media (max-width:610px) {
        width: 95;
}
}
 
a {
text-decoration: none;
}

h1 {
font-size: 3rem;
}

p {
color: black;
font-size: 2rem;
margin: 0;
}
 
.off {
display:none;
top          : 50%;
left         : 50%;
position     : fixed;
transform    : translate(-250%, -50%);
}

.hiddenInput {
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff); 
width: 100%;
height: 4rem;
transition: all 1s ease-in;

.on {
width: 100%;
display: flex;
flex-direction: column;
top          : 50%;
left         : 50%;
position     : fixed;
transform    : translate(-20%, -50%);
}

input {
border-radius: 3rem;
margin: .5rem 0 0 0;
box-shadow: 1rem .5rem .5rem black;
width: 40%;
height: 4rem;
text-align: center;
font-size: 3rem;
}
 
button {

background-color: white;
border-radius: 20%;
width: 40%;
height: 6rem;
box-shadow: 1rem .5rem .5rem black;
font-size: 2.5rem;
cursor: pointer;
}
}
 
img {
width: 20rem;
height: 12rem;
box-shadow: 1rem .5rem .5rem black;

@media (max-width:1200px) {
width: 17rem; 
}

@media (max-width:1100px) {
width: 15rem;
}

@media (max-width:1000px) {
width: 17rem;
}

@media(max-width:800px) {
width : 23rem;
} 

@media(max-width:610px) {
width : 90%;
} 
}

.draggable {
font-size: 3rem;
color: black;
height: 12rem;
}

#dr1 {
height: 12rem;
display: flex;
justify-content: center;
margin: 0;
}


.icons {
height: 6rem;
width: 95%;
/* background-color: white; */
display: flex;
margin: 1rem 1rem 1rem 0;
background: none;

@media(max-width:610px) {
flex-direction: column;
align-items: center;
height: 15rem;
} 

.buttonIcon {
border: .2rem solid black;
transition: .8s;
border-radius: .5rem;
width: 33%;
font-size: 1.5rem;
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff); 

@media(max-width:610px) {
width: 70%;      
} 

&:hover {
  border: .2rem solid #ff2e63;
  color: #ff2e63;
}

&:hover .fa {
  color: #ff2e63;
}

.fa {
font-size: 3rem;
font-weight: bold;
cursor: pointer;
color: black;
transition: .8s;
}
}
}

.soldItem {
background: red;
}

.sold {
font-size: 3rem;
color: black;
}

.text {
display: flex;
flex-direction: column;
justify-content: flex-start;
text-align: left;
width: 80%;
}

span {
  font-weight: bold;
  font-size: 2rem;
}
`;

export default StyledDiv;