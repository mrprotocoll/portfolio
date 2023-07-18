import AboutCard from '@components/home/AboutCard'
import Marquee from "@components/home/Marquee";
import Credential from "@components/home/Credential";
import Projects from "@components/home/Projects";
import Tools from "@components/home/Tools";
import Skills from "@components/home/Skills";
import user from "@public/db/user"

export const metadata = {
  title: 'Home'
}

export default function Home() {

  return (
    <section className="about-area">
        <div className="row">
          <div className="col-lg-6" data-aos="zoom-in">
            <AboutCard data={user} />
          </div>

          <div className="col-lg-6">
            <div className="about-credentials-wrap">
              <Marquee data={user.headline} />
              <div className="gx-row d-flex gap-24">
                <Credential cv={user.cv} year={user.startYear} />
                <Projects />
              </div>
            </div> 
          </div>
        </div>

        <div className="row mt-24">
          <div className="col-md-12">
            <div className="blog-service-profile-wrap gap-24">
              <Skills data={user.skills} />
              <Tools data={user.tools} />
            </div>
          </div>
        </div>
    </section>
  )
}
