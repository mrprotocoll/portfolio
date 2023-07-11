"use client"

import Card from "@components/card/Card";
import CardInfo from "@components/card/CardInfo";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Tools = () => {
    const [tools, setTools] = useState([])

    useEffect(
        () => {
            (async () => {
                const res = await fetch("/db/tools.json")
                const resData = await res.json()
                setTools(resData)
            })()
        }, []
    )

    return (
        <div data-aos="zoom-in" className="">
            <Card classes="about-profile-box" link="/about#tools">
                <div className="inner-profile-icons shadow-box flex-wrap">
                    {
                        tools.map((tool, x) => (
                            <div className="d-block text-center">
                                <Link key={x} href={tool.link}>
                                    <Image src={tool.image} alt={tool.name} width={40} height={40} />
                                </Link>
                                <p className="pt-2">{tool.title}</p>
                            </div>
                            
                        ))
                    }
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <CardInfo name="FULL-STACK" title="Tools" />
                </div>
            </Card>
        </div>
    )
}

export default Tools;