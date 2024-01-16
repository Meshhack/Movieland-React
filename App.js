import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=67877dd8'
const movie1 = {
    "Title": "The Batman",
    "Year": "2022",
    "imdbID": "tt1877830",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNTAwZGEtNTAxNC00ODVjLTgzZjUtYmU0YjAzNmQyZDEwXkEyXkFqcGdeQXVyNDc2NTg3NzA@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const searchMovies = async (title)=>{
        const res = await fetch(`${API_URL}&s=${title}`)
        const data = await res.json()
        setMovies(data.Search)

    }
    useEffect(()=>{
        searchMovies("batman")


    }, [])
    return (
        <div className="app"> 
         <h1>MovieLand</h1> 
        
        <div className="search">
            <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
            />
             <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                 />
        
        </div>
        {
          movies?.length > 0
          ? (
            <div className="container">
                {movies.map((movie)=>(
                    <MovieCard movie={movie} />
                ))}
            </div>
          ): (
            <div className="empty">
                <h2>No movies found</h2>
            </div>
          )  
        }



        
        </div>
    )
} 

export default App