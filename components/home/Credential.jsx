import CardInfo from "@components/card/CardInfo"
import Card from "@components/card/Card"

const Credential = () => {
    const year = parseInt((new Date()).getFullYear()) - 2020 
    return (
        <div data-aos="zoom-in">
            <Card classes="about-client-box" target="_blank" link="https://drive.google.com/file/d/1mIrHPBmxV-9MpqXeO67f2mR3ddJSpAsg/view?usp=sharing">
                <div className="clients mb-2">
                    <div className="client-item">
                        <h1>{year}</h1>
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