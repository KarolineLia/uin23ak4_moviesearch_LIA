import Moviecard from "./Moviecard";
import Search from "./Search";

export default function Searchresults({movies, setSearch, getMovies}){
  console.log(movies)
    return (
      <>
      <Search setSearch={setSearch} getMovies={getMovies} />
      <section className='movie-overview'>
        <h2>Filmer</h2>
        {/*<Moviecard />*/}
        {movies?.[0]?.map((movie, index) => (
                  <Moviecard key={index} type={movie?.Type} title={movie?.Title} published={movie?.Year} img={movie?.Poster} imdb={movie?.imdbID}/> 
             
          ))}
          {movies?.[1]?.map((movie, index) => (
                  <Moviecard key={index} type={movie?.Type} title={movie?.Title} published={movie?.Year} img={movie?.Poster} imdb={movie?.imdbID}/> 
             
          ))}
        </section>
      </>

      );
}