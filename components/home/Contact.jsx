import Image from "next/image"
import Card from "@components/Card"
import CardImageButton from "@components/CardImageButton"

const Contact = () => {
    return (
        <Card classes="about-contact-box" link="/contact">

            <Image src="/assets/images/icon2.png" alt="Icon" className="star-icon" width={37} height={76} />

            <h1>Let&apos;s <br />work <span>together.</span></h1>
            <CardImageButton link="/contact" />
        </Card>
    )
}

export default Contact;