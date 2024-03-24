import React from 'react'
import {useState,useEffect} from "react"

const Movie = () => {

    const [movieList,setMovieList]=useState([])

    const getMovie = () => {
      return {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmNjMjJkMzk5Mzk0MjNmZTVmOGZjYWFjODdmYjM0OSIsInN1YiI6IjY1ZmVmNTM2NDU5YWQ2MDE2NGY3ZTQ4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IzdqRSP5FE2nWLxSyeJAAAGGpelQ20in10J_Nv8WhuA',
        },
      };
    };
    
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', getMovie())
      .then(response => response.json())
      .then(response => setMovieList(response.results))
      .catch(err => console.error(err));



      useEffect(() =>{
        getMovie();

      },[])



  return (
    <>
      {movieList.map((movie) => (
  <div key={movie.id}>
    <img  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
    
    {/* <h1>{movie.title}</h1> */}
  </div>
))}
    </>
  )
}

export default Movie
