import React, { useState } from 'react'
import './Post.css'
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../Components/dummyData'

function Post({ post }) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;


    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    const user = Users.filter(u => u.id === 1)
    console.log(user)

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src={Users.filter(u => u.id === post?.userId)[0].profilePicture} alt="" />
                        <span className="postUserName">{Users.filter(u => u.id === post?.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={PF + post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src={`${PF}/like.png`} alt="" onClick={likeHandler} />
                        <img className='likeIcon' src={`${PF}/heart.png`} onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like}</span>
                    </div>
                    <div className="postBottomLeft">
                        <span className="postCommmentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post