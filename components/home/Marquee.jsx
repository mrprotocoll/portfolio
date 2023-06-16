"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Marquee = () => {
    const [marquee, setMarquee] = useState([])

    useEffect(
        () => {
            (async () => {
                const res = await fetch("/db/marquee.json")
                const resData = await res.json()
                setMarquee(resData)
            })()
        }, []
    )
    return (
        <div data-aos="zoom-in">
            <div className="banner shadow-box">
                <div className="marquee">
                    <div>
                        <span>
                            {
                                marquee.map((data) => (
                                    <span>
                                        <span dangerouslySetInnerHTML={{ __html: data.message }} />
                                        {/* {data.message} &nbsp;  */}
                                        <Link href={data.link} target={data.target}>{data.title}</Link>
                                        <Image src="/assets/images/star1.svg" alt="Star" width={30} height={10} className="bg-img" />
                                    </span>
                                ))
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marquee;