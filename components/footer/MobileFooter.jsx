"use client"

import { Home, User, Svg3DSelectPoint, MessageText } from 'iconoir-react'

const MobileFooter = () => {
    return (
        
        <footer className="footer-area position-md-fixed">
            <div className="">
                <ul className="social-links d-flex justify-content-between text-center">
                    <li><a target="_blank" href="/" className='text-center'><Home /><span>Home</span></a></li>
                    <li><a target="_blank" href="/about"><User />About</a></li>
                    <li><a target="_blank" href="/project"><Svg3DSelectPoint />Projects</a></li>
                    
                    <li><a target="_blank" href="/contact"><MessageText />Contact</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default MobileFooter;