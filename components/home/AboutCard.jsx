"use client"

import Image from "next/image"
import Aos from "aos"
import CardOverlay from "@components/card/CardOverlay"
import CardInfo from "@components/card/CardInfo"
import { useEffect, useState } from "react"


const AboutCard = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        Aos.init({
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
        });

        // get profile data 
        (async () => {
            const response = await fetch("/db/bio.json")
            const responseData = await response.json()

            setData(responseData)
        })()
    }, []);

    return (
        <div className="about-me-box shadow-box">
            <CardOverlay link="/about"/>
            <div className="img-box position-relative">
                <Image src={data.image} fill alt="About Me" />
            </div>
            <div className="about_bio">
                <CardInfo name={data.title} title={data.name} subtitle={data.bio} link={null} />
            </div>
        </div>
    )
}

export default AboutCard