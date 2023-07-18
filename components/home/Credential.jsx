import CardInfo from "@components/card/CardInfo"
import Card from "@components/card/Card"

const Credential = ({cv, year}) => {
    const years = parseInt((new Date()).getFullYear()) - year 
    return (
        <div data-aos="zoom-in">
            <Card classes="about-client-box" target="_blank" link={cv}>
                <div className="clients mb-2">
                    <div className="client-item">
                        <h1>{years}</h1>
                        <p>Years <br />Experience</p>
                    </div>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <CardInfo name="DOWNLOAD RESUME" title="My Resume" />
                </div>
            </Card>
        </div>
    )
}

export default Credential;