"use client"

import { Twitter, GitHub, LinkedIn, Medium } from 'iconoir-react'

const Footer = () => {
    return (
        
        <footer className="footer-area">
            <div className="container">
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