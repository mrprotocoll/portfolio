import Image from "next/image"
import Link from "next/link"

const CardImageButton = ({ link }) => {
    return (
        <Link href={link} className="about-btn">
            <Image src="/assets/images/icon.svg" alt="Button" width={46} height={42} />
        </Link>
    )
}

export default CardImageButton;