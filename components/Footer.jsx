const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="footer-content text-center">
                    <ul className="footer-menu">
                        <li><a href="index-2.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="works.html">Works</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                    <ul class="social-links d-flex justify-content-center">
                        
                        <li><a href="#"><i class="iconoir-dribbble"></i></a></li>
                        <li><a href="#"><i class="iconoir-twitter"></i></a></li>
                        <li><a href="#"><i class="iconoir-instagram"></i></a></li>
                        <li><a href="#"><i class="iconoir-facebook-tag"></i></a></li>
                    </ul>

                    <p className="copyright">
                        &copy; All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;