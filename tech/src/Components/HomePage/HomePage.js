import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`

nav {
display: flex;
justify-content: space-around;
}

a {
        text-decoration: none;
}
`;

class HomePage extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        animation: "on",
                }
        }

        componentDidMount = () => {
                const texts = ['Camera', 'Laptop', 'PC', 'Mobilephone', ''];
                let count = 0;
                let index = 0;
                let currentText = "";
                let letter = "";
        
                (function type() {
        
                        if (count === texts.length) {
                                count = 0;
                        }
        
                        currentText = texts[count];
                        letter = currentText.slice(0, ++index);
        
                        document.querySelector('.typing').textContent = letter;
                        if (letter.length === currentText.length) {
                                count++;
                                index = 0;
                        }
                        setTimeout(type, 400);
                }());
        };

        endAnimation = (e) => {
               e.stopPropagation();
        };

        render() {
                return (
                        <StyledDiv>
                                <nav>
                                <NavLink to="/"><p onClick={this.endAnimation}>Home</p></NavLink>
                                <NavLink to="/login"><p onClick={this.endAnimation}>Login</p></NavLink>
                                <NavLink to="/register"><p onClick={this.endAnimation}>Register</p></NavLink>
                                </nav>
                                <h1>Tired of paying ridiculous fees for camera and other equipment rentals?
                                         Bypass the middleman and rent from a real person!
</h1>
                                <h1>Rent your</h1><h1 className="typing">Hi</h1>
                        </StyledDiv>
                );
        }
}

export default HomePage;