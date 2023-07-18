"use client"
import Image from "next/image"
import Aos from "aos"
import { useEffect, useState } from "react"
import user from "@public/db/user"

// export const metadata = {
//   title: 'Projects'
// }

export default function ProjectDetails({params}) {
  const [project, setProject] = useState({})
  const [gallery, setGallery] = useState([])
  const [tools, setTools] = useState([])
  const [features, setFeatures] = useState([])

  useEffect(() => {
    Aos.init({
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
    });

    const projectData = user.projects.filter(proj => proj.id == params.id)
        setProject(projectData[0])
        setGallery(projectData[0].gallery)
        setTools(projectData[0].tools)
        setFeatures(projectData[0].features)

  }, [params.id])

  return (
  <>
    <section className="breadcrumb-area">
        <div className="">
            <div className="breadcrumb-content" data-aos="fade-up">
                <p>{project.title}</p>
                <h1 className="section-heading mb-5 text-light">
                <Image src="/assets/images/star-2.png" alt="Star" width={48} height={48} /> {project.name} <Image src="/assets/images/star-2.png" alt="Star" width={48} height={48} /></h1>
            </div>
        </div>
    </section>

    <section className="project-details-wrap">

      <div className="container">
        <div data-aos="zoom-in">
          <div className="project-about-2 d-flex shadow-box mb-24">
            <Image src="/assets/images/bg1.png" fill alt="BG" className="bg-img" />
            <div className="left-details">
              <Image src="/assets/images/icon3.png" width={37} height={76} alt="Icon" />
              <ul>
                <li>
                  <p>Year</p>
                  <h4>{project.date}</h4>
                </li>

                <li>
                  <p>My Role</p>
                  <h4>{project.role}</h4>
                </li>

                <li>
                  <p>Live Link</p>
                  <a target="_blank" href={project.link}>{project.name}</a>
                </li>
                {
                  project.github && <li>
                  <p>Github</p>
                  <a target="_blank" href={project.github}>Link</a>
                </li>
                }
                
                <li>
                  <p>Project</p>
                  <h4>{project.category}</h4>
                </li>

                <li>
                  <p>Tools</p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {
                      tools.map((tool, x) => (
                        <li key={x} className="mt-0"><button className="badge">{tool}</button></li>
                      ))
                    }
                  </div>
                </li>
              </ul>
            </div>
            <div className="right-details">
              <h3>Description</h3>
              <p>{project.description}</p>

              <h3 className="my-4">Features:</h3>
              <ul>
               {
                  features.map((feature, x) => (
                    <li key={x} className="mt-0 mb-3 text-light">- {feature}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>

        <div className="row my-5 flex-wrap">
          {
            gallery.map((image, i) => (
              <div key={i} className="col-md-6 mb-4" data-aos="zoom-in">
                <div className="project-details-3-img">
                  <Image src={image} fill alt="Project" />
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* <div className="container d-flex align-items-center justify-content-center" data-aos="zoom-in">
        <Link href={`/project/${params.id}`} className="big-btn shadow-box">Previous Project</Link>
          <Link href={`/project/${params.id }`} className="big-btn shadow-box">Next Project</Link>
         
      </div> */}
    </section>
  </>
  )
}
