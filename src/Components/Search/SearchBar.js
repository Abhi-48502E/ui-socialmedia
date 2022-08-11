import React from 'react'
import './searchbar.css'

function SearchBar() {
  return (
    <div className='Searchbar'>
    <div className="main_search">
    <input type="text" className='searchbox-main' placeholder='search for cars'/>
    <button className='btn-searchz'>Search</button>
    </div>
    <div className="mini_search">

    </div>

    </div>
  )
}

export default SearchBar