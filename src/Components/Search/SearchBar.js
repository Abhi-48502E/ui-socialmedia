import React from 'react'
import './searchbar.css'
import Logo from '../../assets/logo.png'
import carlogo from '../../assets/carlogo.png'
import car2 from '../../assets/car2.png'
import logo2 from '../../assets/logo-black-txt.png'






function SearchBar() {
  return (
    
    <div className='Searchbar'>
      <div className="black-box">
<img src={carlogo} alt="yoo logo" className='logo-car'/>
<img src={logo2} alt="yoo logo" className='logo-car2'/>

      </div>
      <div className="left-box">

      </div>
       <img src={Logo} alt="hh" className='logo-img' />
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