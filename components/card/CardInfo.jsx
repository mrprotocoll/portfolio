import CardImageButton from "@components/card/CardImageButton";

const CardInfo = ({ name, title, link = "#", subtitle = null, classes = "" }) => {
    return (
        <>
            <div className={`infos ${classes}`}>
                <h4>{name}</h4>
                <h1>{title}</h1>
                { subtitle && <p>{ subtitle }</p> }
            </div>
            { link && <CardImageButton link={link} />}
        </>
        
    )
}

export default CardInfo;