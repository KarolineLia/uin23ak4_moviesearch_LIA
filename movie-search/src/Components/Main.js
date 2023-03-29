import Moviecard from "./Moviecard";
import Search from "./Search";

export default function Main({movies, setSearch, getMovies, info}){
    return (
      <>
      <Search setSearch={setSearch} getMovies={getMovies} />
      <section className='movie-view'>
        <h2>Filmer</h2>
        {/*<Moviecard />*/}
        {movies?.Search?.map((movie, index) => (
                  <Moviecard key={index} type={movie?.Type} title={movie?.Title} published={movie?.Year} img={movie?.Poster} imdb={movie?.imdbID}/> 
             
          ))}
          {info?.map((extra, index) => (
            <Moviecard key={index} genre={extra?.Genre}/>
          ))}
        </section>
      </>

      );
}