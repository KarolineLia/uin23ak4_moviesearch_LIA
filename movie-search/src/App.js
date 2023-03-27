import Layout from './Components/Layout';
import './css/main.css'
import { useEffect, useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Moviecard from './Components/Moviecard'
import Main from './Components/Main';

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('James Bond')

  const getMovies = async() =>{
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=6afb3b55`)
    //const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=6afb3b55')
    const data = await response.json()
    setMovies(data)
  }
  useEffect(() =>{
    getMovies()
  },[])
  console.log(movies?.Search)

  return (
    <>
    {/*
    <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Moviecard movies={movies} setSearch={setSearch} getMovies={getMovies} />} />
          <Route path=':slug' element={<RecipePage recipes={recipes} />}/>
        </Route>
      </Routes>
  */}
      <Layout/>
      <Main movies={movies} setSearch={setSearch} getMovies={getMovies} />
    </>
  )
}

export default App;
