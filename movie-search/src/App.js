import Layout from './Components/Layout';
import './css/main.css'
import { useEffect, useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Searchresults from './Components/Searchresults';


function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('James Bond')

  const getMovies = async() =>{
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&type=movie&apikey=6afb3b55`)
    const data = await response.json()
    setMovies(data)
  }
  useEffect(() =>{
    getMovies()
  },[])

  return (
    <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Searchresults movies={movies} setSearch={setSearch} getMovies={getMovies} />} />
        </Route>
    </Routes>
  )
}

export default App;
