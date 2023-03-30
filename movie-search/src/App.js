import Layout from './Components/Layout';
import './css/main.css'
import { useEffect, useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Searchresults from './Components/Searchresults';


function App() {
  const allMovies = []

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('James Bond')

  const getMovies = async() =>{
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=6afb3b55`)
    const data = await response.json()
    setMovies(data)
  }
  useEffect(() =>{
    getMovies()
  },[])

  const [movies2, setMovies2] = useState([])

  const getMovies2 = async() =>{
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&page=2&apikey=6afb3b55`)
    const data = await response.json()
    setMovies2(data)
  }
  useEffect(() =>{
    getMovies2()
  },[])

  allMovies.push(movies?.Search)
  allMovies.push(movies2?.Search)
  //console.log(allMovies)

  return (
    <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Searchresults movies={allMovies} setSearch={setSearch} getMovies={getMovies} />} />
        </Route>
    </Routes>
  )
}

export default App;
