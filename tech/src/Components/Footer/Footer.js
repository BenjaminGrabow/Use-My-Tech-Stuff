import React from 'react';
import styled from 'styled-components';
import SocialMedia from './SocialMedia';

const StyledFooter = styled.footer`

.bottom{
display: flex;
justify-content: space-around;
background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

@media (max-width:700px) {
        flex-direction: column;
}
}

.footer-left {

        h1 {
                font-size: 3rem;
        }

        p {
                font-size: 1.5rem;    
        }

}

.footer-right {
        display: flex;

        @media (max-width:605px) {
        flex-direction: column;
}

        .row {
                padding: 0 1rem;

                @media (max-width:605px) {
                 padding: 0;
}
        }

        h4 {
                font-size: 1.7rem;

                @media (max-width:605px) {
                        font-size: 2.5rem;
                        margin: .5rem 0 0 0 ;
       }
}
        
        p{
                font-size: 1.3rem;
                color: black;
                font-weight: bold;

                @media (max-width:605px) {
                        font-size: 1.5rem;
                        font-weight: 100
       }
        }
}
`;

const Footer = () => {
        return (
                        <StyledFooter>
                                <SocialMedia />
                <div className="bottom">
                                <div className="footer-left">
                                        {/* <img></img> */}
                                        <h1>Use My Tech Stuff</h1>
                                        <p>&copy; Use My Tech Stuff Inc. 2019</p>
                                </div>
                                <div className="footer-right">
                                        <div className="row">
                                                <h4>Top Features</h4>
                                                <p>Pre-approvels</p>
                                                <p>Payments</p>
                                                <p>Accounting</p>
                                                <p>Visibilty</p>
                                        </div>
                                        <div className="row">
                                                <h4>Resources</h4>
                                                <p>Pricing</p>
                                                <p>Case study</p>
                                        </div>
                                        <div className="row">
                                                <h4>Company</h4>
                                                <p>About us</p>
                                                <p>Customers</p>
                                                <p>Press</p>
                                                <p>Legal</p>
                                        </div>
                                        <div className="row">
                                                <h4>Connect</h4>
                                                <p>Support</p>
                                                <p>Twitter</p>
                                                <p>Linkedin</p>
                                        </div>
                                </div>
                        </div>
                        </StyledFooter>
        );
}

export default Footer;