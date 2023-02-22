import React from 'react'
import './UserStats.css'

function UserStats({ repos, followers, following }) {
  return (
    <div className='stats-container'>
      <div className='stat-wrapper'>
        <h4>Repos</h4>
        <span>{repos}</span>
      </div>
      <div className='stat-wrapper'>
        <h4>Followers</h4>
        <span>{followers}</span>
      </div>
      <div className='stat-wrapper'>
        <h4>Following</h4>
        <span>{following}</span>
      </div>
    </div>
  )
}

export default UserStats