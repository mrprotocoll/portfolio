import Image from "next/image"
import CardInfo from "@components/CardInfo"
import CardOverlay from "@components/CardOverlay"

const Credential = () => {
    return (
        <div data-aos="zoom-in">
            <div className="about-crenditials-box info-box shadow-box h-full">
                <CardOverlay link="/credentials"/>

                <Image src="/assets/images/sign.png" alt="Sign" width={224} height={126} />

                <div className="d-flex align-items-center justify-content-between">
                    <CardInfo name="more about me" title="Credentials" />
                </div>
            </div>
        </div>
    )
}

export default Credential;