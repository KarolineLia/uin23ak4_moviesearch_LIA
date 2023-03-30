export default function Moviepage({info, movies}) {

        
    return(
        <section>
            <h2>{info.Title}</h2>
            <img src="#"/>
            <h2>Film informasjon</h2>
            <ul>
                <li>Utgivelsesdato</li>
                <li>Rating</li>
                <li>Tid</li>
                <li>Språk</li>
                <li>Sjanger</li>
                <li>Regissør</li>
                <li>Manusforfatter</li>
                <li>Land</li>
            </ul>
            <p>Plot</p>
        </section>
    )
}