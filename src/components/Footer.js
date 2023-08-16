import "./Footer.css"

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                
                    <div className="location">
            
            <div className="right"></div>
            
            <div className="social">
            <h4>About the company</h4>
                        <p>This is elvis nzeh a frontend Developer <br></br>this is my portfolio</p>
                <FaFacebook size={30} style={{ color: "white", marginRight: "1rem" }} />
                <FaTwitter size={30} style={{ color: "white", marginRight: "1rem" }} />
                <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />
            </div>

        </div>
        <div className="left">
        <div className="email"></div>
        <h4><FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />Home</h4>
        <h4><FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />elvis@gmail.com</h4>
        <h4><FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />+233 059 342 4117</h4>
        
    </div>
        </div>
        </div>
        

    )
}

export default Footer
