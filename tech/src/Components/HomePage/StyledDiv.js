import styled from 'styled-components';

const StyledDiv = styled.div`

.top {
        display: flex;
        background-image: url('https://images.pexels.com/photos/1656579/pexels-photo-1656579.jpeg?cs=srgb&dl=australia-beach-free-wallpaper-1656579.jpg&fm=jpg');

        p {
                color: white;
font-size: 1.5rem;

        }
}


nav {
display: flex;
justify-content: space-around;
}

a {
        text-decoration: none;
        font-size: 2rem;
}

.typing {
        margin: 0;
}

@keyframes blink {
        0%{
                opacity: 0;
        }
        100%{
                opacity: 1;
        }
}
.typing::after {
        content: "";
        position: absolute;
        width: .1rem;
        height: 2.5rem;
        border-right: .1rem solid black;
        animation: blink 0.5s infinite ease;
}


button {
        background-color: white;
        border-radius: 20%;
        width: 30%;
        height: 3rem;
        box-shadow: 1rem .5rem .5rem black;
        font-size: 1.5rem;
}

.left {
        margin: 1rem;
}
.trust {
        color: white;
        font-weight: bold;
        font-size: .8rem;
}
.row {
 img {
         width: 30%;
         height: 5rem;
 }
}

.right {
display: flex;
align-items: center;
        img {
                width: 40%;
                height: 15rem;
        }
}
`;

export default StyledDiv;