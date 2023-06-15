"use client"
import Image from "next/image"
import Aos from "aos"
import { useEffect, useState } from "react"
import Link from "next/link"

// export const metadata = {
//   title: 'Projects'
// }

const style = {
  width: 297,
  height: 296,
};

export default function ProjectDetails({params}) {
  const [project, setProject] = useState({})
  const [gallery, setGallery] = useState([])
  const [tools, setTools] = useState([])

  useEffect(() => {
    Aos.init({
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
    });

    (async () => {
        const res = await fetch("/db/projects.json")
        const resData = await res.json()
        const projectData = resData.filter(proj => proj.id == params.id)
        console.log(projectData[0])
        setProject(projectData[0])
        setGallery(projectData[0].gallery)
        setTools(projectData[0].tools)
    })()

  }, [])

  return (
  <>
    <section className="breadcrumb-area">
        <div className="container">
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
                  <a href={project.link}>{project.name}</a>
                </li>
                {
                  project.github && <li>
                  <p>Github</p>
                  <a href={project.github}>Link</a>
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
                      tools.map((tool) => (
                        <li className="mt-0"><button className="badge">{tool}</button></li>
                      ))
                    }
                  </div>
                </li>
              </ul>
            </div>
            <div className="right-details">
              <h3>Description</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam, purus sit amet luctus venenatis, lectus magna sansit trandis fringilla urna, porttitor rhoncus dolor purus non enim dollors praesent tabasi elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam facilisis dignissim diam quis enim lobortis scelerisque.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam, purus sit amet luctus venenatis, lectus magna sansit trandis fringilla urna, porttitor rhoncus dolor purus non enim dollors praesent tabasi elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam facilisis dignissim diam quis enim lobortis scelerisque iin fermentumisa dui faucibus in ornare.Lorem ipsum dolor sit.</p>
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
