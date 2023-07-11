import Image from "next/image"
import CardInfo from "@components/card/CardInfo"
import Card from "@components/card/Card"

const Projects = () => {
    return (
        <div data-aos="zoom-in">
            <Card classes="about-project-box" link="/project">
                <Image src="/assets/images/my-works.png" alt="Sign" width={224} height={126} className="mt-2" />

                <div className="d-flex align-items-center justify-content-between ">
                    <CardInfo name="SHOWCASE" title="Projects" />
                </div>
            </Card>
        </div>
    )
}

export default Projects;