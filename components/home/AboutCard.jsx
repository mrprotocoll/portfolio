import Image from "next/image"
import '@styles/about.css'
import CardOverlay from "@components/CardOverlay"
import CardInfo from "@components/CardInfo"

const AboutCard = ({ data }) => {
    const { name, image, title, bio } = data
    return (
        <div className="about-me-box shadow-box">
            <CardOverlay link="/about"/>
            <div className="img-box">
                <Image src={image} alt="About Me" width={450} height={452} />
            </div>
            <div className="about_bio">
                <CardInfo name={title} title={name} subtitle={bio} link="/about" />
            </div>
        </div>
    )
}

export default AboutCard