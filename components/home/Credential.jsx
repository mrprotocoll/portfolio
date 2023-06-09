import CardInfo from "@components/CardInfo"
import Card from "@components/Card"

const Credential = () => {
    const year = parseInt((new Date()).getFullYear()) - 2020 
    return (
        <div data-aos="zoom-in">
            <Card classes="about-client-box" link="https://docs.google.com/document/d/1GmCyGmMZcX5VIO0VFHmXWKmSEWzNAgvTgBERF3ZbEn0/edit?usp=sharing">
                <div className="clients mb-2">
                    <div className="client-item">
                        <h1>{year}</h1>
                        <p>Years <br />Experience</p>
                    </div>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <CardInfo name="RESUME" title="Download CV" />
                </div>
            </Card>
        </div>
    )
}

export default Credential;