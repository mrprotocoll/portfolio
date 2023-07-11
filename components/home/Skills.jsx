"use client"

import Card from "@components/card/Card";
import CardInfo from "@components/card/CardInfo";
import { useEffect, useState } from "react";

const Skills = () => {
    const [skills, setSkills] = useState([])

    useEffect(
        () => {
            (async () => {
                const res = await fetch("/db/skills.json")
                const resData = await res.json()
                setSkills(resData)
            })()
        }, []
    )
    return (
        <div data-aos="zoom-in" className="">
            <Card classes="about-profile-box" link="/about">
                <ul className="d-flex flex-wrap gap-2 mb-4">
                    {
                        skills.map((skill, x) => (
                            <li key={x}><button className="badge">{skill}</button></li>
                        ))
                    }
                </ul>

                <div className="d-flex align-items-center justify-content-between">
                    <CardInfo name="TECHNICAL & PROFESSIONAL SKILLS" title="Skills" />
                </div>
            </Card>
        </div>
    )
}

export default Skills;