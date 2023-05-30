import CardOverlay from "./CardOverlay";

const Card = ({children, classes, link}) => {
    return (
        <div className={`${classes} info-box shadow-box h-full` }>
            <CardOverlay link={link} />

            {children}
        </div>
    )
}

export default Card;