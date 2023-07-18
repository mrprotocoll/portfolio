"use client"

import Aos from "aos"
import Card from "@components/card/Card";
import CardInfo from "@components/card/CardInfo";
import Image from "next/image";
import { useEffect } from "react";


const ProjectList = ({ data }) => {

    useEffect(() => {
        Aos.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });

    }, [])

    return (
        <div class="row align-items-start flex-wrap">

            {
                data.map( project => (
                    <div key={project.id} data-aos="zoom-in" class="col-md-4">
                        <Card classes="project-item" link={`/project/${project.id}`}>
                            <div class="project-img">
                            <Image src={project.image} alt={project.name} fill />
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <CardInfo name={project.category} title={project.name}  link={`/project/${project.id}`} />
                            </div>
                        </Card>
                    </div>
                ))
            }
          
        </div>
    )
}

export default ProjectList;