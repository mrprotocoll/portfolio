"use client"

import Image from "next/image"
import Aos from "aos"
import CardOverlay from "@components/card/CardOverlay"
import CardInfo from "@components/card/CardInfo"
import { useEffect, useState } from "react"
import { GitHub, LinkedIn, Medium, Twitter } from "iconoir-react"


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
                <ul className="social-links d-flex justify-content-center text-light">
                    <li><a target="_blank" href="https://www.linkedin.com/in/mrprotocoll"><LinkedIn/></a></li>
                    <li><a target="_blank" href="https://twitter.com/dprotocoll"><Twitter /></a></li>
                    <li><a target="_blank" href="https://github.com/mrprotocoll"><GitHub /></a></li>
                    
                    <li><a target="_blank" href="https://medium.com/@mrprotocoll"><Medium /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default AboutCard