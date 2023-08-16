import { Link } from "react-router-dom"
import"./AboutContent.css"
import pro2 from "../assets/p2.jpeg"
import pro6 from "../assets/p6.jpeg"
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
    <h1>Who Am I</h1>
    <p>im am a react front-end Developer.i create responsive secure website for my clients</p>
    <Link to='/Contact'>
    <button className="btn">Contact</button>
    </Link> 
    </div>

    <div className="right">
    <div className="img-container">
    <div className="img-stack top">
    <img src={pro2} className="img" alt="true"/>
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
