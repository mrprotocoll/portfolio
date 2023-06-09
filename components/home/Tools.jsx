import Card from "@components/Card";
import CardInfo from "@components/CardInfo";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Tools = () => {
    const [tools, setTools] = useState([])

    useEffect(
        () => {
            (async () => {
                const res = await fetch("/db/bio.json")
                const resData = await res.json()
                setTools(resData.tools)
            })()
        }, []
    )

    return (
        <div data-aos="zoom-in" className="">
            <Card classes="about-profile-box" link="/blogs">
                <div className="inner-profile-icons shadow-box flex-wrap">
                    {
                        tools.map((tool) => (
                            <Link href={tool.link}>
                                <Image src={tool.image} alt={tool.name} width={46} height={42} />
                            </Link>
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