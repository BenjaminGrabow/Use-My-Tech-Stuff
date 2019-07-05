import styled from 'styled-components';

const StyledDiv = styled.div`

.functionality {
  height: 3rem;
display: flex;
width: 100%;
justify-content: space-around;
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
width: 28%;
border: .1rem solid #f5f5f5;
margin: 1.5rem;
display: flex;
flex-direction: column;
justify-content: space-between;
height:25rem;
position: relative;
text-align: left;

.card {
  position: absolute;
  transform-style: preserve-3d;
  transition: all 1s ease;
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
}

.back {
  transform: rotateY(180deg);
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
}

#dr1 {
height: 12.5rem;
width: 100%;
margin: 0;
}

img {
width: 100%;
height: 12.5rem;
}

.checked {
color: #ffa724;
} 

.fa-star {
  font-size: 1.5rem;
}

.delete {
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
}

.fa-user-times {
font-size: 2rem;
}


#delete {
  width: 15%;
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
  font-weight: bold;
  color: black;
}

.buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.middle-button {
  margin: .5rem;
  height: 2.5rem;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
}


.buttonIcon {
  padding: 0;
border: .2rem solid #ffa724;
transition: .8s;
font-size: 1.5rem; 
background: #ffa724; 

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

.text {
  width: 100%;
 height: 12.5rem;
display: flex;
flex-direction: column;
justify-content: space-between;

h2 {
  font-weight: bold;
  font-size: 2rem;
  margin: 0;
}

p {
font-size: 2rem;
margin: 0;
}
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