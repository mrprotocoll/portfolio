import Image from "next/image"
import Link from "next/link"

const CardOverlay = ({ link = null, target = "_self" }) => {
    return (
        <>
            {
                link && <Link className="overlay-link" target={target}  href={link}></Link>
            }
            
            {/* <Image src="/assets/images/bg1.png" alt="bg"  */}
                {/* width={568} height={316} className="bg-img" /> */}
        </>
    )
}

export default CardOverlay;