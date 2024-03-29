"use client"

import CardOverlay from "@components/card/CardOverlay"
import Form from "@components/contact/Form"
import { Mail, PinAlt } from 'iconoir-react'
import Aos from "aos"
import { useEffect } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLinks from "@components/generic/SocialLinks"
import Image from "next/image"

export default function Contact() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      });
  },[])
  return (
    <section className="contact-area">
    <div className="">
        <div className="gx-row d-flex justify-content-between gap-24">
            <div className="contact-infos">
                <h3 data-aos="fade-up">Contact Info</h3>
                <ul className="contact-details">
                    <li className="d-flex align-items-center" data-aos="zoom-in">
                        <div className="icon-box shadow-box">
                            <Mail />
                        </div>
                        <div className="right">
                          <span>MAIL me</span>
                          <a target="_blank" href="https://mail.google.com/mail/?view=cm&to=lekanvgbg@gmail.com" className="text-white">lekanvgbg@gmail</a>
                        </div>
                    </li>

                    <li className="d-flex align-items-center" data-aos="zoom-in">
                        <div className="icon-box shadow-box">
                            <PinAlt />
                        </div>
                        <div className="right">
                            <span>Location</span>
                            <h4>Lagos, Nigeria</h4>
                        </div>
                    </li>
                </ul>

                <h3 data-aos="fade-up">Social Info</h3>

                <SocialLinks />
            </div>

            <div data-aos="zoom-in" className="contact-form">
              <div className="shadow-box">
                <CardOverlay />
                <Image src="/assets/images/icon3.png" width={37} height={97} alt="Icon" />
                <h1 className="text-light">Let’s work <span>together.</span></h1>
                <Form />
              </div>
            </div>
            
        </div>
    </div>
    <ToastContainer position="top-center"
                autoClose={10000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light" />
</section>
  )
}
