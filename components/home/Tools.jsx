import Card from "@components/Card";
import CardInfo from "@components/CardInfo";
import Image from "next/image";
import Link from "next/link";

const Tools = () => {
    return (
        <div data-aos="zoom-in" className="">
            <Card classes="about-profile-box" link="/blogs">
                <div className="inner-profile-icons shadow-box flex-wrap">
                    <Link href="#">
                        <Image src="/assets/images/tech/javascript.png" alt="Button" width={46} height={42} />
                    </Link>
                    <Link href="#">
                        <Image src="/assets/images/tech/docker.png" alt="Button" width={46} height={42} />
                    </Link>
                    <Link href="#">
                        <Image src="/assets/images/tech/docker.png" alt="Button" width={46} height={42} />
                    </Link>
                    <Link href="#">
                        <Image src="/assets/images/tech/docker.png" alt="Button" width={46} height={42} />
                    </Link>
                    <Link href="#">
                        <Image src="/assets/images/tech/docker.png" alt="Button" width={46} height={42} />
                    </Link>
                    <Link href="#">
                        <Image src="/assets/images/tech/docker.png" alt="Button" width={46} height={42} />
                    </Link>
                    <Link href="#">
                        <Image src="/assets/images/tech/docker.png" alt="Button" width={46} height={42} />
                    </Link>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <CardInfo name="FULL-STACK" title="Tools" />
                </div>
            </Card>
        </div>
    )
}

export default Tools;