import Image from "next/image";
import Card from "@components/card/Card";
import CardInfo from "@components/card/CardInfo";

const Blog = () => {
    return (
        // <div data-aos="zoom-in">
            <Card classes="about-client-box" link="/blogs">
                <Image src="/assets/images/gfonts.png" layout="responsive" alt="Sign" width={224} height={126} />

                <div className="d-flex align-items-center justify-content-between">
                    <CardInfo name="BLOG" title="Blog Posts" />
                </div>
            </Card>
        // </div>
    )
}

export default Blog;