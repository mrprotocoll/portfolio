"use client"

import Aos from "aos"
import { useEffect, useState } from "react";

const Experience = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        Aos.init({
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
        });

        // get profile data 
        (async () => {
        const response = await fetch("/db/experience.json")
        const responseData = await response.json()

        setData(responseData)
        })()
    }, []);

    return (
        <div className="credential-edc-exp credential-experience">
        <h2 data-aos="fade-up">Experience</h2>
            {
                data.map(data => (
                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                        <h4>{data.year}</h4>
                        <h3>{data.role}</h3>
                        <h5>{data.company}</h5>
                        <p>{data.achievements}</p>
                    </div>
                ))
            }
            
        </div>
    )
}

export default Experience;