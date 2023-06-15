import ProjectList from "@components/project/ProjectList"
import Image from "next/image"

export const metadata = {
  title: 'Projects'
}

export default function Project() {

  return (
    <section className="projects-area">
      <div className="container">
        <h1 className="section-heading mb-5 text-light">
          <Image src="/assets/images/star-2.png" alt="Star" width={48} height={48} /> My Projects <Image src="/assets/images/star-2.png" alt="Star" width={48} height={48} /></h1>

        <ProjectList />

      </div>
    </section>
  )
}
