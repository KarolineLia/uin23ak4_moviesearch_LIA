export default function Moviecard({title, img, published, type}){
    if(img === "N/A") {
        img = "https://placehold.jp/150x150.png"
    }

    if(type === "movie") {

    return(
        <article id="moviecard">
            <img src={img} alt={title}/>
            <h3>{title}</h3>
            <p>Utgivelses år: {published}</p>
            <p>Sjanger: </p>
            <p>Regissør: </p>
            <p>Skuespillere </p>
            <p>Pris: </p>
        </article>
    )
}}