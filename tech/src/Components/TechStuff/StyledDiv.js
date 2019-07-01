import styled from 'styled-components';

const StyledDiv = styled.div`

.functionality {
  height: 3rem;
display: flex;
width: 100%;
justify-content: space-around;
/* background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff);  */
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
color: blue;
}
}


.topInput {
border-radius: 3rem;
/* box-shadow: 1rem .5rem .5rem black; */
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
background: white; 
}

.techItem {
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: white; 
width: 26%;
border-bottom: .3rem solid #f5f5f5;
margin: 2rem;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
/* box-shadow: 1rem .5rem .5rem black; */
/* border-radius: .5rem; */
height:30rem;
position: relative;

.card {
  position: absolute;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  width: 100%;
  height: 100%;

&:hover {
  transform: rotateY(180deg);
}
}

.front {
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  /* background: yellow; */
  /* color: white; */
}

.back {
  transform: rotateY(180deg);
  position: absolute;
  backface-visibility: hidden;
  /* background: yellow; */
  /* color: white; */
  width: 100%;
  height: 100%;
}

/* @media (max-width:800px) {
        width: 80%;
}

@media (max-width:610px) {
        width: 95;
} */

#dr1 {
height: 15rem;
width: 100%;
margin: 0;
}

img {
width: 100%;
height: 15rem;
/* border-radius: .5rem; */

/* @media (max-width:1200px) {
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
}  */
}



/* .icons {
height: 20rem;
width: 20%;
display: flex;
flex-direction: column;
margin: 1rem 1rem 1rem 0;
background: none;

@media(max-width:610px) {
flex-direction: column;
align-items: center;
height: 15rem;
} 
} */

.checked {
color: #ffa724;
} 

.fa-star {
  font-size: 1.5rem;
}

.delete {
  height: 20rem;
  width: 10%;
  padding: 0;
}

.fa-user-times {
font-size: 2rem;
}

#delete {
  width: 100%;
  background: white;
  transition: .8s;
  padding: 0;
  border: none;
  border-radius: 0;
  font-size: 2rem;
  height: 3rem;

  &:hover {
    background: red
  }
}

.price {
  color : red;
  font-size: 3rem;
  font-weight: bold;
}

.buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
}

.middle-button {
  margin: .5rem;
  height: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}


.buttonIcon {
  padding: 0;
border: .2rem solid #ffa724;
transition: .8s;
/* border-radius: .5rem; */
width: 100%;
font-size: 1.5rem; 
/* width: 5rem; */
background: #ffa724; 

/* @media(max-width:610px) {
width: 70%;      
}  */


/* &:hover {
  border: .2rem solid blue;
  color: blue;
}

&:hover .fa {
  color: blue;
} */

.fa {
font-size: 2rem;
font-weight: bold;
cursor: pointer;
color: #002f36;
transition: .8s;
}
}


}
 

.draggable {
font-size: 3rem;
color: black;
height: 12rem;
}



.soldItem {
background: red;
}

.sold {
font-size: 3rem;
color: black;
}

.textContainer {
 width: 100%;
 height: 20rem;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 
  a {
text-decoration: none;
}

p {
color: black;
font-size: 2rem;
margin: 0;
}

h1 {
font-size: 3rem;
margin: 0;
}

.text {
display: flex;
justify-content: space-around;
width: 100%;
height: 10rem;
}

.theText {
  text-align: left;
}

span {
  font-weight: bold;
  font-size: 2rem;
}

/* .brandLink {
  font-size: 2.5rem;
  font-weight: bold;
  transition: .8s;
  margin: 0;
  color: #0066c0;


  &:hover {
    color: blue;
  }
} */

}



.off {
display:none;
top          : 50%;
left         : 50%;
position     : fixed;
transform    : translate(-250%, -50%);
}

.hiddenInput {
width: 100%;
height: 4rem;
transition: all 1s ease-in;

.on {
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
top          : 50%;
left         : 50%;
position     : fixed;
transform    : translate(-50%, -50%);
background: white;
height: 100%;
}

input {
border-radius: 6rem;
margin: 0 0 .5rem 0;
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

export default StyledDiv;