import "./HeroImage.css";

import React from 'react'
import IntroImg from "../assets/p6.jpeg"
import { Link } from "react-router-dom";

const HeroImage = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
            <p>Hi, I'M Elvis Nzeh </p>
            <h1> Front-End Developer.</h1>
            <div>
            <Link to="/Project" className="btn">Project
            </Link>
            <Link to="/Contact" className="btn btn-light">Contact
            </Link>
            </div>
            </div>
        </div>
    )
}

export default HeroImage
