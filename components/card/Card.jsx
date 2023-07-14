import CardOverlay from "./CardOverlay";

const Card = ({children, classes, link, target = "_self"}) => {
    return (
        <div className={`${classes} info-box shadow-box h-full` }>
            <CardOverlay target={target} link={link} />

            {children}
        </div>
    )
}

export default Card;