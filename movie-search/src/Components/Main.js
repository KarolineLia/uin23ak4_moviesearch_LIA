import Moviecard from "./Moviecard";
import Search from "./Search";

export default function Main({movies, setSearch, getMovies}){
    //console.log(movies)
    return (
      <>
      <Search setSearch={setSearch} getMovies={getMovies} />
      <section className='movie-view'>
        <h2>Filmer</h2>
        <Moviecard/>
        </section>
      </>

      );
}