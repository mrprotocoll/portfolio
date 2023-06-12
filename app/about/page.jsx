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

              <div className="credential-edc-exp credential-education">
                  <h2 data-aos="fade-up">Education</h2>
                  <div className="credential-edc-exp-item" data-aos="zoom-in">
                      <h4>2004 - 2007</h4>
                      <h3>Bachelor Degree in Psychology</h3>
                      <h5>University of California</h5>
                      <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                  </div>
                  <div className="credential-edc-exp-item" data-aos="zoom-in">
                      <h4>2007 - 2009</h4>
                      <h3>Master Degree in Designing</h3>
                      <h5>University of Texas</h5>
                      <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                  </div>
              </div>

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
