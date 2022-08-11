import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className="main_nav">
    <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a>Sign-up</a>
    <a >Buy-cars</a>
    <a >About</a>
    <a>Contact-us</a>
  </div>
</div>
</div>
  )
}

export default Navbar