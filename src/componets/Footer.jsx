import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import './FooterStyles.css'

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} 
                style={{color: "#fff", marginRight: "2rem"}
                }/>
                <div>
                    <p> Uruvaiyur, Puducherry, India</p>
                    <p>Kerala</p>
                </div>
            </div>

           
            

            <div className="email">
                <h4><FaMailBulk size={20} 
                style={{color: "#fff", marginRight: "2rem"}
                }/>sangeethalachu0@gmail.com</h4>
            </div>

        </div>
        <div className="right">
            <h4> About Me</h4>
            <p>Computer Science Engineering student focused on frontend development and impactful tech solutions. Dedicated to building smart, user-centric digital experiences.

</p>
        <div className="social"></div>
        <FaFacebook size={30} 
                style={{color: "#fff", marginRight: "1rem"}
                }/>
        <FaTwitter size={30} 
                style={{color: "#fff", marginRight: "1rem"}
                }/>
        <FaLinkedin size={30} 
                style={{color: "#fff", marginRight: "1rem"}
                }/>
        </div>
      </div>
    </div>
  )
}

export default Footer
