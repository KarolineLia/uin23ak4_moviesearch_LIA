export default function Moviecard({title, img, time, slug}){
    return(
        <article>
            <img src={img} alt={title}/>
            <h3>Tittel</h3>
            <p>År publisert</p>
            <p>Sjanger</p>
            <p>Regissør</p>
            <p>Skuespillere</p>
            <p>Pris</p>
        </article>
    )
}