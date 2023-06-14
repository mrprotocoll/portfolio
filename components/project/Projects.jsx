"use client"

import Aos from "aos"
import Card from "@components/Card";
import CardInfo from "@components/CardInfo";
import Image from "next/image";
import { useEffect } from "react";


const Projects = () => {

    useEffect(() => {
        Aos.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
    }, [])

    return (
        <div class="row align-items-start flex-wrap">
          <div data-aos="zoom-in" class="col-md-4">
            <Card classes="project-item">
                <div class="project-img">
                  <Image src="/assets/images/projects/healthyish2.png" alt="Sign" fill />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <CardInfo name="MOBILE DESIGNING" title="Seven Studio" />
                </div>
            </Card>
          </div>
        </div>
    )
}

export default Projects;