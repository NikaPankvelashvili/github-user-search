import React, { useState } from 'react'
import SearchIcon from '../images/icon-search.svg'
import './SearchBar.css'

function SearchBar({ fetchUser, userFound, setuserFound }) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchUser = (event) => {
    event.preventDefault();
    fetchUser(searchTerm);
  }

  return (
    <>
      <form className='search-bar' onSubmit={(e) => searchUser(e)}>
        <img className='search-icon' src={SearchIcon} alt="searchIcon" />
        <div className='search-bar-input'>
          <input placeholder='Search GitHub username...' value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
          {!userFound ? <span className='not-found'>Not Found</span> : ""}
        </div>
        <button className='search-btn'>Search</button>
      </form>
    </>
  )
}

export default SearchBar