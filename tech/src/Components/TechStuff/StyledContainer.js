import styled from 'styled-components';

const StyledContainer = styled.div`

nav {
display: flex;
justify-content: space-around;
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff); 

@media (max-width:500px) {
flex-direction: column;
}

  p {
font-size: 2.5rem;
font-weight: bold;
transition: .8s;
color: #bdc3c7;
margin: 0;

&:hover {
color: black;
filter: brightness(150%);
text-decoration: underline;
}
}
}

.navLink {
text-decoration: none;
font-size: 2rem;
}

.dr2 {
height: 12rem;
width: 100%;
display: flex;
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff); 

@media (max-width:610px) {
        display: none;
}
}
      
#dr2 {
width: 100%;
margin: 0;
height: 12rem;

@media (max-width:610px) {
        display: none;
}
}

img {
height: 12rem;
}

button {
border: .1rem solid #3498db;
color: black;
transition: 0.8s;
}

button:hover {
color: red;
}
`;

export default StyledContainer;