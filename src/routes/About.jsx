import React from 'react'
import Navbar from '../componets/Navbar'
import HeroImg from '../componets/HeroImg';
import Footer from '../componets/Footer';
import Heroimg2 from '../componets/HeroImg2';
import AboutContent from '../componets/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT" text="I'm a Front-End Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
