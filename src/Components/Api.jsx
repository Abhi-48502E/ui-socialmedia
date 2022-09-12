import React from 'react'

function Api({title, overview, poster_path,vote_average}) {
    const Api_img='https://image.tmdb.org/t/p/w500/'
  return (
    <div>
    <h1>{title}</h1>
    <img src={Api_img+poster_path} alt="img" />
    <p>{overview}</p>
    <h3>{vote_average}</h3>
    
    </div>
  )
}

export default Api