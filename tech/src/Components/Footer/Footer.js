import React from 'react';
import StyledFooter from './StyledFooter';
import SocialMedia from './SocialMedia';


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