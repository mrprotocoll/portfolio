"use client"

import Aos from "aos"
import { useEffect, useState } from "react";

const Bio = () => {
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
        <div className="credential-about" data-aos="zoom-in">
            <h2>About Me</h2>
            {data.about}
        </div>
    )
}

export default Bio;