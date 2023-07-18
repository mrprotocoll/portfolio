"use client"

import Aos from "aos"
import { useEffect } from "react";

const Bio = ({ about }) => {

    useEffect(() => {
        Aos.init({
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
        });
    }, []);

    return (
        <div className="credential-about" data-aos="zoom-in">
            <h2>About Me</h2>
            <div dangerouslySetInnerHTML={{ __html: about }} />
            {/* <p>{data.about}</p> */}
        </div>
    )
}

export default Bio;