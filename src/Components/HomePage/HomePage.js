import React from 'react';
import StyledDiv from './StyledDiv';
import google from './Google.jpg';
import microsoft from './Microsoft.png';
import huawei from './Huawei.jpg';
import siemens from './siemens.jpg';
import bulb from './Home.jpg'
import { NavLink } from 'react-router-dom';
import { Animated } from "react-animated-css";

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
                        setTimeout(type, 300);
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
                                <div className="top">
                                <div className="left">
                                        <Animated animationIn="bounceInDown"
                                                animationOut="bounce"
                                                animationInDuration={3000}
                                                animationOutDuration={3000}
                                                isVisible={true}>
                                                <h1>The App to rent a</h1>
                                                <h1 className="typing">Hi</h1>
                                                <p>Tired of paying ridiculous fees for camera and other equipment rentals?
                                                         Bypass the middleman and rent from a real person!
</p>
                                                <button>Get a demo</button>
                                                <p className="trust">Trusted by technology companies at all stages</p>
                                        </Animated>
                                        <Animated animationIn="bounceInLeft"
                                                animationOut="bounce"
                                                animationInDuration={3000}
                                                animationOutDuration={3000}
                                                isVisible={true}>
                                                <div className="row">
                                                        <img src={google} alt="google" />
                                                        <img src={microsoft} alt="microsoft" />
                                                </div>
                                                <div className="row">
                                                        <img src={siemens} alt="siemens" />
                                                        <img src={huawei} alt="huawei" />
                                                </div>
                                        </Animated>
                                </div>
                                <div className="right">
                                        <Animated animationIn="fadeInRightBig"
                                                animationOut="fadeOut"
                                                animationInDuration={1400}
                                                animationOutDuration={1400}
                                                isVisible={true}>
                                                <img src={bulb} alt="bulb" />
                                        </Animated>
                                        </div>
                                </div>
                        </StyledDiv>
                );
        }
}

export default HomePage;