const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="footer-content text-center">
                    <ul className="footer-menu">
                        <li><a href="/about">About</a></li>
                        <li><a href="/works">Works</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <ul className="social-links d-flex justify-content-center">
                        
                        <li><a href="#"><i className=""></i></a></li>
                        <li><a href="#"><i className="iconoir-twitter"></i></a></li>
                        <li><a href="#"><i className="iconoir-instagram"></i></a></li>
                        <li><a href="#"><i className="iconoir-facebook-tag"></i></a></li>
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