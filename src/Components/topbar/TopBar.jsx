import React from 'react'
import './TopBar.css'
import { FiSearch } from 'react-icons/fi';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillChatFill } from 'react-icons/bs';
import { Outlet, Link } from "react-router-dom";
import { GrNotification } from 'react-icons/gr';

function TopBar() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}> <span className="logo">CONNECT-WING</span></Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <FiSearch className='searchIcon' />
                    <input placeholder='Search for friend,post or video' className='searchInput' />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <BsFillPersonFill />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <BsFillChatFill />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <GrNotification />
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className='topbarImg' />
            </div>
            <Outlet />
        </div>
    )
}

export default TopBar
