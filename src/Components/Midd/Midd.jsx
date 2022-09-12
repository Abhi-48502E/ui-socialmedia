import React from 'react'
import './midd.css'
import { useEffect, useState } from 'react'
import Api from '../Api';
const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=259233264731e7df280f285afb05991b'
function Midd() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPost(data.results);
      });

  }, []);

  return (
    <div className='banner-image'>
      {post.map((movieReq) => (

        <Api key={movieReq.id}{...movieReq} />
      ))}

    </div>

  )
}

export default Midd
