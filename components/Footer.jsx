"use client"

import { Twitter, GitHub, LinkedIn, Medium, HomeAlt, Home, User, ProjectCurve3D, Svg3DSelectPoint, MessageText } from 'iconoir-react'

const Footer = () => {
    return (
        
        <footer className="footer-area">
            <div className="">
                <ul className="social-links d-flex justify-content-center">
                    <li><a target="_blank" href="/"><Home />Home</a></li>
                    <li><a target="_blank" href="/about"><User />About</a></li>
                    <li><a target="_blank" href="/project"><Svg3DSelectPoint />Projects</a></li>
                    
                    <li><a target="_blank" href="/contact"><MessageText />Contact</a></li>
                </ul>
                <div className="footer-content align-items-center justify-content-between d-flex text-center">
                    <ul className="footer-menu">
                        <li><a href="/about">About</a></li>
                        <li><a href="/project">Works</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <ul className="social-links d-flex justify-content-center">
                        <li><a target="_blank" href="https://www.linkedin.com/in/mrprotocoll"><LinkedIn /></a></li>
                        <li><a target="_blank" href="https://twitter.com/dprotocoll"><Twitter /></a></li>
                        <li><a target="_blank" href="https://github.com/mrprotocoll"><GitHub /></a></li>
                       
                        <li><a target="_blank" href="https://medium.com/@mrprotocoll"><Medium /></a></li>
                    </ul>
                    {/* <p className="copyright">
                        &copy; <span className="mrprotocoll">Mrprotocoll</span>. All rights reserved
                    </p> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer;