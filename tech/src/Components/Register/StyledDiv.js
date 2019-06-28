import styled from 'styled-components';

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #eaeaea, #deecff); 
background: linear-gradient(to right, #eaeaea, #deecff); 

img {
height: 40rem;
width: 100%;
}

form {
display: flex;
 margin: 1rem;
justify-content: center;
align-items: center;
width: 100%;
}

input {
border-radius: 3rem;
box-shadow: 1rem .5rem .5rem black;
width: 100%;
margin-bottom: 1rem;
height: 5rem;
font-size: 1.5rem;
text-align: center;
}
 
button {
background-color: white;
border-radius: 1rem;
width: 10%;
height: 10rem;
box-shadow: 1rem .5rem .5rem black;
margin: 0 0 1rem 1.5rem;
font-size: 1.5rem;
font-weight: bold;

&:hover, i:hover {
color: red;
}
}


i {
font-size: 4rem;
}

.row {
display: flex;
justify-content: space-around;
width: 100%;
}
`;

export default StyledDiv;