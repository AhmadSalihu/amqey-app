import React from 'react'
import './box-bar.styles.css';


const SearchbBox = ({ searchChange }) => {
  return(
    <div className="box-bar">
      <input className='search-box' type="search" placeholder="search aqmey" onChange={searchChange} />
    </div>
  )
}


export default SearchbBox