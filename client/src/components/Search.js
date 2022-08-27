import React, { useState } from 'react';
import "./search.css"

function Search({dest, setdest}) {

 
  return (
    <div className='body3'> 
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
    <div className="search-container">
      <input type="text" name="search" onChange={(e)=>setdest(e.target.value)} placeholder="Choose your destination ...." className="search-input" />
      <a href="#" className="search-btn">
        <i className="fas fa-search" />      
      </a>
    </div>
</div>
  )
}

export default Search