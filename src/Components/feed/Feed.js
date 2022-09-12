import React, { useState, useEffect } from 'react'
import Post from '../Post/Post'
import Share from '../Share/Share'
import './Feed.css'
import axios from 'axios'
import { Posts } from '../dummyData'

function Feed() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fechPosts = async () => {
      const res = await axios.get("posts/timeline/630f324770aff2bc77f13f09")
      console.log(res)
    };
    fechPosts();
  }, [])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />

        ))}

      </div>
    </div>

  )
}

export default Feed