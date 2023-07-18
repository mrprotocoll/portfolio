"use client"

import Card from "@components/card/Card";
import CardInfo from "@components/card/CardInfo";
import Image from "next/image";
import Link from "next/link";

const Tools = ({ data }) => {
    return (
        <div data-aos="zoom-in" className="">
            <Card classes="about-profile-box" link="/about#tools">
                <div className="inner-profile-icons shadow-box flex-wrap">
                    {
                        data.map((tool, x) => (
                            <div key={x} className="d-block text-center">
                                <Link href={tool.link}>
                                    <Image src={tool.image} alt={tool.name} width={40} height={40} className="black-and-white" />
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