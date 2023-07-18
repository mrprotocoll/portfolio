import { GitHub, LinkedIn, Medium, SendMail, Twitter } from "iconoir-react"
import user from "@public/db/user"

const SocialLinks = () => {
    const data = user.socials
    const socials = [
        {name: "github", link: data.github, icon: <GitHub />},
        {name: "linkedin", link: data.linkedin, icon: <LinkedIn />},
        {name: "twitter", link: data.twitter, icon: <Twitter />},
        {name: "medium", link: data.medium, icon: <Medium />},
        {name: "email", link: data.mail, icon: <SendMail />}
    ]

    return (  
        <ul className="social-links pt-3 flex-wrap d-flex gap-3 text-light">
            {
                socials.map(social => (
                    <li key={social.name}><a target="_blank" title={social.name} className="text-light" href={social.link}>{social.icon}</a></li>
                ))
            }
        </ul>
    );
}
 
export default SocialLinks;