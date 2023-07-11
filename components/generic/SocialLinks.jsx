import { GitHub, LinkedIn, Mail, Medium, SendMail, Twitter } from "iconoir-react"

const SocialLinks = () => {
    return (  
        <ul className="social-links pt-3 d-flex gap-3 text-light">
            <li><a className="text-light" href="mailto:lekanvgbg@gmail.com"><SendMail/></a></li>
            <li><a target="_blank" className="text-light" href="https://www.linkedin.com/in/mrprotocoll"><LinkedIn/></a></li>
            <li><a target="_blank" className="text-light" href="https://twitter.com/dprotocoll"><Twitter /></a></li>
            <li><a target="_blank" className="text-light" href="https://github.com/mrprotocoll"><GitHub /></a></li>
            
            <li><a target="_blank" className="text-light" href="https://medium.com/@mrprotocoll"><Medium /></a></li>
        </ul>
    );
}
 
export default SocialLinks;