import React from 'react'
import './Share.css'
import { PermMedia, Room, EmojiEmotions, Label } from '@mui/icons-material';




function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src="/assets/person/1.jpeg" alt="img" />
                    <input type="text" placeholder=" What's in your mind buddy?" className='shareInput' />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        < PermMedia htmlColor='tomato' className='ShareIcon' />
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                    <div className="shareOptions">
                        < Label htmlColor='Blue' className='ShareIcon' />
                        <span className='shareOptionText'>Tag</span>
                    </div> <div className="shareOptions">
                        <Room htmlColor='green' className='ShareIcon' />
                        <span className='shareOptionText'>Locations</span>
                    </div> <div className="shareOptions">
                        < EmojiEmotions htmlColor='goldenrod' className='ShareIcon' />
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                    <button className='ShareButton'>Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share