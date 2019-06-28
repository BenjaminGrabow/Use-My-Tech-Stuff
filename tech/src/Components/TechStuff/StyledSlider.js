import styled from 'styled-components';

const StyledSlider = styled.div`

nav {
display: flex;
justify-content: space-around;
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff); 

  @media (max-width:500px) {
flex-direction: column;
}
}

.navLink {
text-decoration: none;


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
}

.functionality {
height: 3rem;
display: flex;
width: 100%;
justify-content: space-around;
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff); 
box-shadow: 2rem 2rem 2rem black;
padding: 2rem 0;

@media (max-width:610px) {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 15rem;

}

.fa {
cursor: pointer;
color: white;
font-size: 4rem;
font-weight: bold;
transition: 0.8s;

@media (max-width:610px) {
font-size: 6;
}

&:hover {
color: black;
}
}
}

.topInput {
border-radius: 3rem;
box-shadow: 1rem .5rem .5rem black;
width: 25%;
height: 100%;
text-align: center;
font-size: 1.5rem;

@media (max-width:610px) {
        width: 90%;
        margin: .5rem;
        font-size: 2.5rem
}
}

.slider {
height: 55rem;
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff); 

@media (max-width:800px) {
        height: 70rem;
}
}

.techItem {
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff); 
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
height: 55rem;

@media (max-width:800px) {
        height: 70rem;
}

h1 {
font-size: 2.5rem;
}

p {
color: black;
font-size: 2.5rem;
margin: 0;
}

span {
font-size: 3;
font-weight: bold;
}
}
 
a {
text-decoration: none;
}
 
 
.off {
display:none;
top          : 50%;
left         : 50%;
position     : fixed;
transform    : translate(-250%, -50%);
}

.pictureWrapper {
width: 60%;
height: 25rem;
object-fit: cover;

@media (max-width:610px) {
width: 80%;
}

img {
width: 100%;
height: 100%;
box-shadow: 1rem .5rem .5rem black;
border-radius: .8rem;
}
}

.icons {
display: flex;
width: 100%;
height: 6.5rem;
justify-content: space-around;
margin: 1rem;
background: none;

@media (max-width:800px) {
flex-direction: column;
height: 20rem;
margin: 1rem;
align-items: center;
}

.buttonIcon {
box-shadow: 1rem .5rem .5rem black;
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff); 
font-size: 2rem;
border-radius: 2rem;
width: 25%;
display: flex;
justify-content: center;
align-items: center;
transition: .8s;
border: .3rem solid black;
height: 8rem;

@media (max-width:800px) {
width: 70%;
margin: .2rem;
}

&:hover {
border: .3rem solid white;
color: white;
}
}

.fa {
color: black;
font-size: 6rem;
font-weight: bold;
cursor: pointer;
transition: 0.8s;
height: 6rem;
}

.fa:hover {
color: white;
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
align-items: baseline;
text-align: center;
width: 80%;
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
`;

export default StyledSlider;