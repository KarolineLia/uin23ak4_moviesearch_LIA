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
        {movies?.Search?.map((movie, index) => (
                  <Moviecard key={index} type={movie?.Type} title={movie?.Title} published={movie?.Year} img={movie?.Poster} imdb={movie?.imdbID} slug={movie?.Title.replace(/\s/g, "-").toLowerCase()}/> 
             
          ))}
        </section>
      </>

      );
}