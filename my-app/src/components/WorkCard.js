import "./WorkCard.css"
import React from 'react'
import Tilt from 'react-parallax-tilt'


export const WorkCard = () => {
    
    
    return (
        <div className="work-card">
            <div className="card-container">
              <Tilt>  
                <div className="card">
                    <h2>- AIG -</h2>
                    <span className="bar"></span>
                    <p className="btc">Analyzed requirements and developed user interfaces using ReactJs and JavaScript as part of a cross-functional team.
Contributed to front-end development efforts, resulting in the successful building and maintenance of applications.
Coordinated with team members to design and implement effective solutions.
Actively participated in requirement analysis and UI development processes to ensure project success.
</p>
                </div>
              </Tilt>
              <Tilt> 
                <div className="card">
                    <h2>- Mphasis Wyde -</h2>
                    <span className="bar"></span>
                    <p className="btc">Demonstrated proficiency in creating, configuring, and validating medical bills using Wynsure software.
Effectively coordinated and collaborated with cross-functional team members to create and manage bills.
Played a key role in ensuring accurate and efficient billing processes.
Leveraged strong attention to detail and organizational skills to maintain high levels of accuracy in medical billing.
Successfully contributed to the overall success of the project by meeting project objectives and delivering timely results
</p>
                </div>
              </Tilt>
              <Tilt>
                <div className="card">
                    <h2>- Personal Assistant -</h2>
                    <span className="bar"></span>
                    <p className="btc">Developed a virtual personal assistant (YUKI) using Python language.
Enabled YUKI to open apps, web browsers, and search information from Wikipedia based on user commands.
Implemented speech recognition functionality for users to interact with YUKI through conversation.
Significantly improved user experience by providing a convenient and efficient tool for executing commands and obtaining information.
</p>
                </div>
            </Tilt> 
            </div>
            
        </div>
    )
}
