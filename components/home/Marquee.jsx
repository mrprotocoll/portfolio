"use client"

import Image from "next/image";
import Link from "next/link";

const Marquee = ({ data }) => {
    return (
        <div data-aos="zoom-in">
            <div className="banner shadow-box">
                <div className="marquee">
                    <div>
                        <span>
                            {
                                data.map((data, x) => (
                                    <span key={x}>
                                        <span dangerouslySetInnerHTML={{ __html: data.message }} />
                                        &nbsp;
                                        <Link href={data.link} target={data.target}>{data.title}</Link>
                                        <Image src="/assets/images/star1.svg" alt="Star" width={30} height={10} className="bg-img" />
                                    </span>
                                ))
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marquee;