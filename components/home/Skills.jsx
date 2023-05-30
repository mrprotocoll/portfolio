"use client"

import Card from "@components/Card";
import CardInfo from "@components/CardInfo";
import { useEffect, useState } from "react";

const Skills = () => {
    const [skills, setSkills] = useState([])

    useEffect(
        () => {
            (async () => {
                const res = await fetch("/db/bio.json")
                const resData = await res.json()
                setSkills(resData.skills)
            })()
        }, []
    )
    return (
        <div data-aos="zoom-in" class="flex-1">
            <Card classes="about-profile-box" link="/about">
                <ul className="d-flex flex-wrap gap-2 mb-4">
                    {
                        skills.map((skill) => (
                            <li><button class="theme-btn">{skill}</button></li>
                        ))
                    }
                </ul>

                <div className="d-flex align-items-center justify-content-between">
                    <CardInfo name="SKILLS" title="Specialisation" />
                </div>
            </Card>
        </div>
    )
}

export default Skills;