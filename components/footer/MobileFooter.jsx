import { Home, User, Svg3DSelectPoint, MessageText } from 'iconoir-react'

const MobileFooter = () => {
    return (
        
        <footer className="footer-area footer-area-mobile mb-2 container">
            <div className="">
                <ul className="social-links d-flex justify-content-between text-center">
                    <li><a href="/" className='text-center'><Home /><br/>Home</a></li>
                    <li><a href="/about"><User /><br/>About</a></li>
                    <li><a href="/project"><Svg3DSelectPoint /><br/>Projects</a></li>
                    <li><a href="/contact"><MessageText /><br/>Contact</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default MobileFooter;