import SocialLinks from "@components/generic/SocialLinks"

const DesktopFooter = () => {
    return (
        
        <footer className="footer-area">
                <div className="footer-content align-items-center justify-content-between d-flex text-center">
                    <ul className="footer-menu">
                        <li><a href="/about">About</a></li>
                        <li><a href="/project">Works</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <SocialLinks />
                    {/* <p className="copyright">
                        &copy; <span className="mrprotocoll">Mrprotocoll</span>. All rights reserved
                    </p> */}
                </div>
        </footer>
    )
}

export default DesktopFooter;