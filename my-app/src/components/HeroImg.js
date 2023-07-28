import "./HeroImgStyles.css"

import IntroImg from "../assets/img10.jpg"

import Typical from "react-typical"

import PrfImg from "../assets/img14.jpg"

import Resume from "./updated resume2.pdf";


import React from 'react'
import { Link } from "react-router-dom"


const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="IntrImg" />
            </div>
            
         
              <div className="profile-details-name">
                <span className="primary-text">
                    {" "}
                    <h1>
                    Hello, I'M <span className="highlighted-text">Somnath Chakraborty</span>
                    </h1>
                </span>
               </div>

              <div className="profile-details-role">
                <span className="primary-text">
                    {" "}
                    <h1>
                        <Typical
                        loop={Infinity}
                        steps={[
                            "UI/UX Developer 😎",
                            1000,
                            "Web Designer 💻",
                            1000,
                            "Front-End Developer 🔴",
                            1000,
                            "React JS Developer 🔹",
                            1000,
                           
                        ]}
                        
                        />

                     </h1>
                  </span>
               </div>

              <div className="content">
                <Link to="/project" className="btn">PROJECTS</Link>
                <a href= {Resume} download="Somnath Chakraborty Resume.pdf">
                    <button className="btn btn-light">Resume</button>
                </a>
              </div>

              <div className="about-me">
                <p>Results-driven professional with expertise in programming languages including JavaScript, React Js, and Python. Skilled in writing and configuring bug-free, readable codes based on design specifications and guidelines. A proven problem-solver with strong ownership skills. Experienced in unit testing all scenarios end to end before delivering to QA. Assists team members in requirement analysis, design, testing, QA support, and release packaging. A supportive, innovative, and enthu- siastic team player dedicated to streamlining processes and efficiently resolving project issues.
Self-motivated, agile, diligent, outgoing, and proficient in multitasking. Excels under pressure.</p>
              </div>

              
                <div className="profile-picture-background">
                    <img className="profile-image" src={PrfImg} alt="profimg"></img>
                </div>
              

              
            
        </div>
    )
}

export default HeroImg
