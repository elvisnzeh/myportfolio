import { Link } from "react-router-dom"
import"./AboutContent.css"
import me from "../assets/me.jpg"
import pro6 from "../assets/p6.jpeg"
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
    <h1>Who Am I</h1>
    <p>I am a front-end developer specializing in React. I craft responsive and secure websites for my clients.</p>
    <Link to='/Contact'>
    <button className="btn">Contact</button>
    </Link> 
    </div>

    <div className="right">
    <div className="img-container">
    <div className="img-stack top">
    <img src={me} className="img" alt="true"/>
    </div>
    <div className="img-stack bottom">
    <img src={pro6} className="img" alt="true"/>
    </div>

    </div>
    </div>
    </div>
    
  )
}

export default AboutContent
