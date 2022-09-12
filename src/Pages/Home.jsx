import React from 'react'
import Rightbar from '../Components/Rightbar/Rightbar'
import Feed from '../Components/feed/Feed'
import Sidebar from '../Components/Sidebar/Sidebar'
import TopBar from '../Components/topbar/TopBar'
import './Home.css'

function Home() {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}

export default Home