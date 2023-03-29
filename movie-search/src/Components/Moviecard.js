export default function Moviecard({title, img, published, type}){

    if(type == "movie") {

    return(
        <article id="moviecard">
            <img src={img}/>
            <h3>{title}</h3>
            <p>{published}</p>
            <p>Sjanger</p>
            <p>Regissør</p>
            <p>Skuespillere</p>
            <p>Pris</p>
        </article>
    )
}}