import React from 'react'
import Navbar from '../components/Navbar';

import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2';
import AboutContent from '../components/AboutContent';

function About() {
  return (
    <div>
    <Navbar />
    <HeroImage2  heading="ABOUT."text="i'm a friendly Front-End Developer." />
    <AboutContent />
    <Footer />
    </div>
  )
}

export default About
