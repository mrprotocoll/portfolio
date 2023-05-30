import CardImageButton from "@components/CardImageButton";

const CardInfo = ({ name, title, link = "#", subtitle = null }) => {
    return (
        <>
            <div className="infos">
                <h4>{name}</h4>
                <h1>{title}</h1>
                { subtitle && <p>{ subtitle }</p> }
            </div>
            
            <CardImageButton link={link} />
        </>
        
    )
}

export default CardInfo;