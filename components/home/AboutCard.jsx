"use client"

import Image from "next/image"
import Aos from "aos"
import CardOverlay from "@components/card/CardOverlay"
import CardInfo from "@components/card/CardInfo"
import SocialLinks from "@components/generic/SocialLinks"
import { useEffect } from "react"


const AboutCard = ({data}) => {

    useEffect(() => {
        Aos.init({
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
        });
    }, []);

    return (
        <div className="about-me-box shadow-box">
            <CardOverlay />
            <div className="img-box position-relative">
                <Image src={data.image} fill alt="About Me" />
            </div>
            <div className="about_bio">
                <CardInfo name={data.title} title={data.name} subtitle={data.bio} link={null} />
                <SocialLinks />
            </div>
        </div>
    )
}

export default AboutCard