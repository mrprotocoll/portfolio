import AboutCard from "@components/about/AboutCard"
import Bio from "@components/about/Bio"
import Experience from "@components/about/Experience"
import Skills from "@components/home/Skills"
import Tools from "@components/home/Tools"
import user from "@public/db/user"

export const metadata = {
  title: 'About'
}

export default function About() {

  return (
    <section className="credential-area">
      <div className="container px-0">
        <div className="gx-row d-flex">
          <AboutCard data={user} />
          <div className="credential-content flex-1">
            <Bio about={user.about} />
            <Experience data={user.experience} />
            <Experience data={user.education} education />
            <Skills data={user.skills} />
            <br/>
            <div id="tools">
              <Tools data={user.tools} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
