"use client"
import Image from "next/image"
import Aos from "aos"
import { useEffect } from "react"
import Link from "next/link"

export const metadata = {
  title: 'Projects'
}

export default function ProjectDetails() {
  useEffect(() => {
    Aos.init({
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
    });

    // (async () => {
    //     const res = await fetch("/db/projects.json")
    //     const resData = await res.json()
    //     setProjects(resData)
    // })()

  }, [])

  return (
  <>
      <section className="breadcrumb-area">
          <div className="container">
              <div className="breadcrumb-content" data-aos="fade-up">
                  <p>BRANDING - RAVEN STUDIO</p>
                  <h1 className="section-heading mb-5 text-light">
                  <Image src="/assets/images/star-2.png" alt="Star" width={48} height={48} /> My Projects <Image src="/assets/images/star-2.png" alt="Star" width={48} height={48} /></h1>
              </div>
          </div>
      </section>

  <section className="project-details-wrap">
    <div className="project-details-Image" data-aos="zoom-in">
        <Image src="/assets/images/project-dt-1.jpg" alt="Project Details" />
    </div>

    <div className="container">
        <div data-aos="zoom-in">
            <div className="d-flex project-infos-wrap shadow-box mb-24">
                <Image src="/assets/images/bg1.png" alt="BG" className="bg-Image" />
                <Image src="/assets/images/icon2.png" alt="Icon" />
                <div className="/project-details-info flex-1">
                    <h3>Raven studio</h3>
                    <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                    <p>Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet luctussd fav venenatis, lectus magna fringilla zac urna, porttitor rhoncus dolor purus non enim praesent cuz elementum sahas facilisis leot.</p>
                </div>

                <div className="project-details-info flex-1">
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna ve fringilla urna, porttitor rhoncus dolor purus nonds enim isi praesent elementum facilisis leo.</p>
                    <p>Vel fringilla est ullamcorper eget nulla facilisi etiama ashfa dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu agv he volutpat odio asas facilisis mauris sit.</p>
                </div>
            </div>
        </div>

        <div className="project-details-2-Image mb-24" data-aos="zoom-in">
            <Image src="assets/images/project-dt-1.jpg" alt="Project" />
        </div>

        <div className="row mb-24">
            <div className="col-md-6" data-aos="zoom-in">
                <div className="project-details-3-Image">
                    <Image src="assets/images/project3.jpg" alt="Project" />
                </div>
            </div>
            <div className="col-md-6" data-aos="zoom-in">
                <div className="project-details-3-Image">
                    <Image src="assets/images/project4.jpg" alt="Project" />
                </div>
            </div>
        </div>
        {/* gallery */}
        <div className="row mb-24">
            <div className="col-md-6" data-aos="zoom-in">
                <div className="project-details-3-Image">
                    <Image src="assets/images/project5.jpg" alt="Project" />
                </div>
            </div>
            <div className="col-md-6" data-aos="zoom-in">
                <div className="project-details-3-Image">
                    <Image src="assets/images/project6.jpg" alt="Project" />
                </div>
            </div>
        </div>

        <div data-aos="zoom-in">
            <div className="project-about-2 d-flex shadow-box mb-24">
                <Image src="/assets/images/bg1.png" alt="BG" className="bg-Image" />
                <div className="left-details">
                    <Image src="/assets/images/icon3.png" alt="Icon" />
                    <ul>
                        <li>
                            <p>Year</p>
                            <h4>2023</h4>
                        </li>
                        <li>
                            <p>Client</p>
                            <h4>Raven Studio</h4>
                        </li>
                        <li>
                            <p>Services</p>
                            <h4>Web Design</h4>
                        </li>
                        <li>
                            <p>Project</p>
                            <h4>Dynamic</h4>
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
    </div>

    <div className="project-details-Image" data-aos="zoom-in">
        <Image src="assets/images/project-dt-1.jpg" alt="Project Details" />
    </div>

    <div className="container d-flex align-items-center justify-content-center" data-aos="zoom-in">
        <Link href="#" className="big-btn shadow-box">Next Project</Link>
    </div>
  </section>
  </>
  )
}
