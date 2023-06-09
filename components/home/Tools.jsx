import Card from "@components/Card";
import CardInfo from "@components/CardInfo";

const Tools = () => {
    return (
        <div data-aos="zoom-in" className="flex-1">
            <Card classes="about-profile-box" link="/blogs">
                <div className="inner-profile-icons shadow-box">
                    <a href="#">
                        <i className="iconoir-dribbble"></i>
                    </a>
                    <a href="#">
                        <i className="iconoir-twitter"></i>
                    </a>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <CardInfo name="FULL-STACK" title="Tools" />
                </div>
            </Card>
        </div>
    )
}

export default Tools;