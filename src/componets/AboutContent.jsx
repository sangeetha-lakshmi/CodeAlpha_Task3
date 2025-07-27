import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import react2 from "../assets/react2.jpg"
import lap from "../assets/lap.jpg"
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
         
            <h1>Who Am I</h1>
            <p>Hello! I'm Sangeetha Lakshmi,an Engineering student specializing in Computer Science and Engineering with a passion for web development, UI design, and real-world tech innovation.I focus on building clean, user-friendly interfaces and continuously explore new technologies to grow as a developer.</p>
            
            
            <br></br>
            <h1 className="ed">Educational Qualifications</h1>
            <p className="ed"> B.Tech in Computer Science and Engineering :
              Achariya College of Engineering Technology, Puducherry <br></br>
              Staus: 2022 - Present</p>
            <p className="ed">Higher Secondary Schooling- B.E.M.P Higher Secondary School , Thalassery (Kerala) <br></br>
              Completed in 2022
            </p>
            <p className="ed"> Secondary Schooling (SSLC)
            Sacred Heart Girls Higher Secondary School,Thalassery (Kerala)<br></br>
            Completed in 2020</p>
                    
<hr className="section-divider" />
<br></br>
<br></br>
             <h1 className="ed">Skills</h1>
             <ul>
              <li>Frontend Development: HTML, CSS, JavaScript</li>
              <li>Web Design: Responsive Layouts, UI/UX Principles</li>
              <li>Programming Languages: C, C++, Python </li>
              <li>Tools & Platforms: VS Code, Git, GitHub, Canva,</li>
              <li>Database: MySQL </li>
              </ul>
              
        </div>

        <div className="right">
      <div className="img-container">
        <div className="img-stack top">
            <img className="img" src={lap}  alt="true" />
        </div>
        <div className="img-stack bottom">
            <img className="img" src={react2}  alt="true" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent;
