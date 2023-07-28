import"./FooterStyles.css"
import { FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color:"white", marginRight: "2rem"}} />
                        <div>
                            <p>Beliatore, Bankura</p>
                            <p>PIN- 722203</p>
                            
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                          <FaPhone size={20} style={{color:"white", marginRight: "1rem"}} />+91 8250425989
                        </ h4> 

                    </div>
                    <div className="mail">
                        <h4>
                          <FaMailBulk size={20} style={{color:"white", marginRight: "1rem"}} />chakrabortysumon1997@gmail.com
                        </ h4> 

                    </div>
                    <div className="linkedin">
                        <h4>
                          <FaLinkedin size={20} style={{color:"white", marginRight: "1rem"}} />https://www.linkedin.com/in/somnath-chakraborty-245497176/
                        </ h4> 

                    </div>



                </div>
                <div className="right">

                </div>
            </div>
            
        </div>
    )
}

export default Footer



