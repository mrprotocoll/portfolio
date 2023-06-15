"use client"

import CardOverlay from "@components/CardOverlay"
import Form from "@components/contact/Form"
import { Twitter, GitHub, LinkedIn, Medium, Mail } from 'iconoir-react'
import Aos from "aos"
import { useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <div className="container">
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
                          <a href="mailto:mrprotocoll@yahoo.com" className="text-white">mrprotocoll@yahoo.com</a>
                        </div>
                    </li>

                    <li className="d-flex align-items-center" data-aos="zoom-in">
                        <div className="icon-box shadow-box">
                            <i className="iconoir-pin-alt"></i>
                        </div>
                        <div className="right">
                            <span>Location</span>
                            <h4>Lagos, Nigeria</h4>
                        </div>
                    </li>
                </ul>

                <h3 data-aos="fade-up">Social Info</h3>
                <ul className="social-links d-flex align-center" data-aos="zoom-in">
                      <li><a className="shadow-box" target="_blank" href="https://www.linkedin.com/in/mrprotocoll"><LinkedIn /></a></li>
                        <li><a  className="shadow-box"target="_blank" href="https://twitter.com/dprotocoll"><Twitter /></a></li>
                        <li><a className="shadow-box" target="_blank" href="https://github.com/mrprotocoll"><GitHub /></a></li>
                       
                        <li><a className="shadow-box" target="_blank" href="https://medium.com/@mrprotocoll"><Medium /></a></li>
                </ul>
            </div>

            <div data-aos="zoom-in" className="contact-form">
                <div className="shadow-box">
                  <CardOverlay />
                  <img src="assets/images/icon3.png" alt="Icon" />
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
