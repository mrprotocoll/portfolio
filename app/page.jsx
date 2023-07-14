import AboutCard from '@components/home/AboutCard'
import Marquee from "@components/home/Marquee";
import Credential from "@components/home/Credential";
import Projects from "@components/home/Projects";
import Blog from "@components/home/Blog";
import Tools from "@components/home/Tools";
import Skills from "@components/home/Skills";
import Contact from "@components/home/Contact";

export const metadata = {
  title: 'Home'
}

export default function Home() {

  return (
    <section className="about-area">
        <div className="row">
          <div className="col-lg-6" data-aos="zoom-in">
            <AboutCard />
          </div>

          <div className="col-lg-6">
            <div className="about-credentials-wrap">
              <Marquee />
              <div className="gx-row d-flex gap-24">
                <Credential />
                <Projects />
              </div>
            </div> 
          </div>
        </div>

        <div className="row mt-24">
          <div className="col-md-12">
            <div className="blog-service-profile-wrap gap-24">
              <Skills />
              <Tools />
            </div>
          </div>
        </div>

        {/* <div className="row mt-24">
          <div className="col-md-3" data-aos="zoom-in">
            <Blog />
          </div>

          <div className="col-md-6" data-aos="zoom-in">
            <Contact />
          </div>
        </div> */}
    </section>
  )
}
