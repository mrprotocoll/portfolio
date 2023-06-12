import CardOverlay from "@components/CardOverlay"
import Form from "@components/contact/Form"

export const metadata = {
  title: 'Contact'
}

export default function Contact() {

  return (
    <section className="contact-area">
    <div className="container">
        <div className="gx-row d-flex justify-content-between gap-24">
            <div className="contact-infos">
                <h3 data-aos="fade-up">Contact Info</h3>
                <ul className="contact-details">
                    <li className="d-flex align-items-center" data-aos="zoom-in">
                        <div className="icon-box shadow-box">
                            <i className="iconoir-mail"></i>
                        </div>
                        <div className="right">
                            <span>MAIL us</span>
                            <h4>info@bluebase.com</h4>
                            <h4>info@bluebase2.com</h4>
                        </div>
                    </li>

                    <li className="d-flex align-items-center" data-aos="zoom-in">
                        <div className="icon-box shadow-box">
                            <i className="iconoir-phone"></i>
                        </div>
                        <div className="right">
                            <span>Contact Us</span>
                            <h4>+1 504-899-8221</h4>
                            <h4>+1 504-749-5456</h4>
                        </div>
                    </li>

                    <li className="d-flex align-items-center" data-aos="zoom-in">
                        <div className="icon-box shadow-box">
                            <i className="iconoir-pin-alt"></i>
                        </div>
                        <div className="right">
                            <span>Location</span>
                            <h4>22 Baker Street, Texas <br />United States <br/>W1U 3BW</h4>
                        </div>
                    </li>
                </ul>

                <h3 data-aos="fade-up">Social Info</h3>
                <ul className="social-links d-flex align-center" data-aos="zoom-in">
                    <li><a className="shadow-box" href="#"><i className="iconoir-dribbble"></i></a></li>
                    <li><a className="shadow-box" href="#"><i className="iconoir-twitter"></i></a></li>
                    <li><a className="shadow-box" href="#"><i className="iconoir-instagram"></i></a></li>
                </ul>
            </div>

            <div data-aos="zoom-in" className="contact-form">
                <div className="shadow-box">
                  <CardOverlay />
                  <img src="assets/images/icon3.png" alt="Icon" />
                  <h1>Let’s work <span>together.</span></h1>
                  <Form />
                </div>
            </div>
            
        </div>
    </div>
</section>
  )
}
