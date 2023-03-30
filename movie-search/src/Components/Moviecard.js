import { useEffect, useState } from 'react'

export default function Moviecard({title, img, published, imdb}){
    if(img === "N/A") {
        img = "https://placehold.jp/150x150.png"
    }

    const [info, setInfo] = useState([])

    useEffect(() => {
    const getInfo = async() =>{
    const response = await fetch(`http://www.omdbapi.com/?i=${imdb}&apikey=6afb3b55&plot=full`)
    const data = await response.json();
    setInfo(data);
    }
        getInfo();
    },[imdb]);

    console.log(info)

    return(
        <article id="moviecard">
            <img src={img} alt={title}/>
            <h3>{title}</h3>
            <p>IMDb rating: {info.imdbRating}</p>
            <p>Tid: {info.Runtime}</p>
            <p>Utgivelses år: {published}</p>
            <p>Sjanger: {info.Genre}</p>
            <p>Regissør: {info.Director}</p>
            <h4>Skuespillere:</h4>
            <ul>
                <li>{info.Actors}</li>
            </ul>
        </article>
    )
}