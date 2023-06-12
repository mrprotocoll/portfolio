"use client"

import Aos from "aos"
import { useEffect, useState } from "react";

const Experience = ({ education = false }) => {
    const [data, setData] = useState([])
    const endpoint = education ? "/db/education.json" : "/db/experience.json"

    useEffect(() => {
        Aos.init({
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
        });

        // get profile data 
        (async () => {
        const response = await fetch(endpoint)
        const responseData = await response.json()

        setData(responseData)
        })()
    }, []);

    return (
        <div className="credential-edc-exp credential-experience">
        <h2 data-aos="fade-up">{education ? "Education" : "Experience"}</h2>
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