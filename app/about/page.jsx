import AboutCard from "@components/about/AboutCard"
import Bio from "@components/about/Bio"
import Experience from "@components/about/Experience"
import Skills from "@components/home/Skills"
import Tools from "@components/home/Tools"

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
              <Skills />
              <br/>
              <Tools />
          </div>
        </div>
      </div>
    </section>
  )
}
