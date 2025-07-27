import React from 'react'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer';
import Heroimg2 from '../componets/HeroImg2';
import Work from '../componets/Work';

const Project = () => {
  return (
    <div>
    <Navbar/>
    <Heroimg2 heading="PROJECTS / ACHIEVEMENTS" text="Some of my works"/>
    <Work/>
    <Footer/>
    </div>
  )
}

export default Project
