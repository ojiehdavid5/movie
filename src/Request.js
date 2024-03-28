import React from 'react'


const Request = ({setChange}) => {


  return (
    <div>
      
        <button onClick={setChange("now_playing")}>Now Playing</button>
        <button onClick={setChange('https://api.themoviedb.org/3/movie/popular')}> Popular</button>
        <button onClick={setChange("top_rated")}>Top rated</button>
        
        <button onClick={setChange("upcoming")}>Upcoming</button>
        

      
    </div>
  )
}

export default Request
