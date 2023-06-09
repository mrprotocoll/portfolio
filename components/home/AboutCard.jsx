import Image from "next/image"
import CardOverlay from "@components/CardOverlay"
import CardInfo from "@components/CardInfo"

const AboutCard = ({ data }) => {
    const { name, image, title, bio } = data
    return (
        <div className="about-me-box shadow-box">
            <CardOverlay link="/about"/>
            <div className="img-box position-relative">
                <Image src={image} fill alt="About Me" />
            </div>
            <div className="about_bio">
                <CardInfo name={title} title={name} subtitle={bio} link="/about" />
            </div>
        </div>
    )
}

export default AboutCard