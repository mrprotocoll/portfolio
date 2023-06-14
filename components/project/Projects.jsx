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

    }, []);

    return (
        <div class="d-flex align-items-start gap-24">
          <div >
            <Card classes="project-item">
                <div class="project-img">
                  <Image src="/assets/images/projects/healthyish.png" alt="Sign" width={224} height={126} />
                </div>
                <CardInfo name="MOBILE DESIGNING" title="Seven Studio" />
            </Card>
          </div>
        </div>
    )
}

export default Projects;