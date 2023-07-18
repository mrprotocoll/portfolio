"use client"

import Aos from "aos"
import { useEffect } from "react";

const Experience = ({ data, education = false }) => {

    useEffect(() => {
        Aos.init({
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
        });

    }, []);

    return (
        <div className="credential-edc-exp credential-experience">
        <h2 data-aos="fade-up">{education ? "Education" : "Experience"}</h2>
            {
                data.map((data, x) => (
                    <div key={x} className="credential-edc-exp-item" data-aos="zoom-in">
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