'use client'

import Aos from "aos";
import { useEffect, useState } from 'react';
import AboutCard from '@components/home/AboutCard'
import Marquee from "@components/home/Marquee";
import Credential from "@components/home/Credential";
import Projects from "@components/home/Projects";
import Blog from "@components/home/Blog";
import Tools from "@components/home/Tools";
import Skills from "@components/home/Skills";
import Contact from "@components/home/Contact";

export default function Home() {
  const [data, setData] = useState({})

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });

    // get profile data 
    (async () => {
      const response = await fetch("/db/bio.json")
      const responseData = await response.json()

      setData(responseData)
    })()
  }, []);
  return (
    <section className="about-area">
        <div className="row">
          <div className="col-md-6" data-aos="zoom-in">
            <AboutCard data={data}/>
          </div>

          <div className="col-md-6">
            <div className="about-credentials-wrap">
              <Marquee />
              <div className="gx-row d-flex gap-24">
                <Credential />
                <Projects />
              </div>
            </div>

            
          </div>
        </div>

        <div class="row mt-24">
          <div class="col-md-12">
            <div class="blog-service-profile-wrap d-flex gap-24">
              <Skills />
              <Tools />
            </div>
          </div>
        </div>

        <div class="row mt-24">
          <div class="col-md-3" data-aos="zoom-in">
            <Blog />
          </div>

          <div class="col-md-6" data-aos="zoom-in">
            <Contact />
          </div>
        </div>
    </section>
  )
}
