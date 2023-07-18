"use client"

import Image from "next/image"
import Aos from "aos"
import { useEffect, useState } from "react";
import CardOverlay from "@components/card/CardOverlay";
import Link from "next/link";
import { Twitter, GitHub, LinkedIn, Medium, SendMail } from 'iconoir-react'
import SocialLinks from "@components/generic/SocialLinks";
const AboutCard = ({ data }) => {
    useEffect(() => {
        Aos.init({
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
        });
    }, []);

    return (
        
        <div className="credential-sidebar-wrap" data-aos="zoom-in">
            <div className="credential-sidebar text-center">
                <div className="shadow-box">
                    <CardOverlay />
                    <div className="img-box position-relative">
                        <Image src={data.image}  className="object-contain" fill 
                        sizes="(max-width: 768px) 322px, 323px, (max-width: 1200px) 322px, 323px" 
                        alt="About Me" />
                    </div>
                    <h2>{data.name}</h2>
                    <p>{data.handle}</p>

                    <ul className="social-links d-flex justify-content-center">
                        <li><a target="_blank" href="https://mail.google.com/mail/?view=cm&to=lekanvgbg@gmail.com"><SendMail/></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/mrprotocoll"><LinkedIn /></a></li>
                        <li><a target="_blank" href="https://twitter.com/dprotocoll"><Twitter /></a></li>
                        <li><a target="_blank" href="https://github.com/mrprotocoll"><GitHub /></a></li>
                        <li><a target="_blank" href="https://medium.com/@mrprotocoll"><Medium /></a></li>
                    </ul>

                    <Link href="/contact" className="theme-btn">Let&apos;s Work Together</Link>
                </div>
            </div>
        </div>
    )
}

export default AboutCard;