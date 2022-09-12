import React from 'react'
import { MdRssFeed } from 'react-icons/md';
import { BsFillChatRightFill } from 'react-icons/bs';
import { BiMoviePlay } from 'react-icons/bi';
import { MdGroups } from 'react-icons/md';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { GiStickSplitting } from 'react-icons/gi';
import { Users } from '../dummyData'
import { Link, Outlet } from 'react-router-dom';





import './Sidebar.css'
import CloseFriend from '../closeFriend/CloseFriend';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sideWrapper">
                <ul className="sidebarlist">
                    <li className="sidebarListItem">
                        <MdRssFeed className='sidebarIcon' />
                        <span className="sideBarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Link to="/connectmovies" style={{ textDecoration: "none", color: "black" }}> <BiMoviePlay className='sidebarIcon' />
                            <span className="sideBarListItemText">Connect-Moviez</span></Link>

                    </li>
                    <li className="sidebarListItem">
                        <BsFillChatRightFill className='sidebarIcon' />
                        <span className="sideBarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <MdGroups className='sidebarIcon' />
                        <span className="sideBarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsFillBookmarkStarFill className='sidebarIcon' />
                        <span className="sideBarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsFillQuestionCircleFill className='sidebarIcon' />
                        <span className="sideBarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsCalendar2DateFill className='sidebarIcon' />
                        <span className="sideBarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <GiStickSplitting className='sidebarIcon' />
                        <span className="sideBarListItemText">Events</span>
                    </li>
                </ul>
                <button className='sideBarButton'>Show More</button>
                <hr className='sidebarHr' />
                <ul className='sidebarFriendList'>
                    {Users.map(u => (
                        <CloseFriend user={u} key={u.id} />
                    ))}

                </ul>
            </div>
            <Outlet />
        </div>
    )
}

export default Sidebar