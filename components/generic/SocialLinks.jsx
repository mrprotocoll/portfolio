import { GitHub, LinkedIn, Medium, SendMail, Twitter } from "iconoir-react"

const SocialLinks = () => {
    return (  
        <ul className="social-links pt-3 d-flex gap-2 text-light">
            <li><a target="_blank" className="text-light shadow-box" href="https://mail.google.com/mail/?view=cm&to=lekanvgbg@gmail.com"><SendMail/></a></li>
            <li><a target="_blank" className="text-light shadow-box" href="https://www.linkedin.com/in/mrprotocoll"><LinkedIn/></a></li>
            <li><a target="_blank" className="text-light shadow-box" href="https://twitter.com/dprotocoll"><Twitter /></a></li>
            <li><a target="_blank" className="text-light shadow-box" href="https://github.com/mrprotocoll"><GitHub /></a></li>
            <li><a target="_blank" className="text-light shadow-box" href="https://medium.com/@mrprotocoll"><Medium /></a></li>
        </ul>
    );
}
 
export default SocialLinks;