import "./HeroImgStyle.css";
import React from 'react'
import cp from "../assets/cp.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={cp} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Hi Sangeetha here !!!</p>
            <h1>Web Developer</h1>
            
        <div>
           <Link to="/Project" className="btn">Project</Link>
           <Link to="/Contact" className="btn btn-light">Contact</Link>
        </div>



        </div>
</div>  )
}

export default HeroImg
