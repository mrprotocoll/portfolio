"use client"

import Aos from "aos"
import Card from "@components/Card";
import CardInfo from "@components/CardInfo";
import Image from "next/image";
import { useEffect, useState } from "react";


const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        Aos.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });

        (async () => {
            const res = await fetch("/db/projects.json")
            const resData = await res.json()
            setProjects(resData)
        })()

    }, [])

    return (
        <div class="row align-items-start flex-wrap">

            {
                projects.map( project => (
                    <div data-aos="zoom-in" class="col-md-4">
                        <Card classes="project-item">
                            <div class="project-img">
                            <Image src={project.image} alt={project.name} fill />
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <CardInfo name={project.category} title={project.name}  link={`/project-details?id=${project.id}`} />
                            </div>
                        </Card>
                    </div>
                ))
            }
          
        </div>
    )
}

export default Projects;