import AboutCard from "@components/about/AboutCard"
import Bio from "@components/about/Bio"
import Experience from "@components/about/Experience"

export const metadata = {
  title: 'About'
}

export default function About() {

  return (
    <section className="credential-area">
      <div className="container">
        <div className="gx-row d-flex">
          <AboutCard />

          <div className="credential-content flex-1">
              
              <Bio />
              <Experience />
              <Experience education />

              <div className="skills-wrap">
                  <h2 data-aos="fade-up">Skills</h2>
                  <div className="d-grid skill-items gap-24 flex-wrap">
                      <div className="skill-item" data-aos="zoom-in">
                          <span className="percent">85%</span>
                          <h3 className="name">JavaScript</h3>
                          <p>Non enim praesent</p>
                      </div>
                      <div className="skill-item" data-aos="zoom-in">
                          <span className="percent">78%</span>
                          <h3 className="name">Python</h3>
                          <p>Non enim praesent</p>
                      </div>
                      <div className="skill-item" data-aos="zoom-in">
                          <span className="percent">92%</span>
                          <h3 className="name">Figma</h3>
                          <p>Non enim praesent</p>
                      </div>
                      <div className="skill-item" data-aos="zoom-in">
                          <span className="percent">90%</span>
                          <h3 className="name">WordPress</h3>
                          <p>Non enim praesent</p>
                      </div>
                      <div className="skill-item" data-aos="zoom-in">
                          <span className="percent">81%</span>
                          <h3 className="name">React</h3>
                          <p>Non enim praesent</p>
                      </div>
                      <div className="skill-item" data-aos="zoom-in">
                          <span className="percent">87%</span>
                          <h3 className="name">Adobe XD</h3>
                          <p>Non enim praesent</p>
                      </div>

                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
