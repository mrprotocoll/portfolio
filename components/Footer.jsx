"use client"

import { Twitter, GitHub, LinkedIn, Medium } from 'iconoir-react'

const Footer = () => {
    return (
        
        <footer className="footer-area">
            <div className="container">
                <div className="footer-content align-items-center justify-content-between d-flex text-center">
                    <ul className="footer-menu">
                        <li><a href="/about">About</a></li>
                        <li><a href="/works">Works</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <ul className="social-links d-flex justify-content-center">
                        <li><a href="#"><Twitter /></a></li>
                        <li><a href="#"><GitHub /></a></li>
                        <li><a href="#"><LinkedIn /></a></li>
                        <li><a href="#"><Medium /></a></li>
                    </ul>
                    <p className="copyright">
                        &copy; <span className="mrprotocoll">Mrprotocoll</span>. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;