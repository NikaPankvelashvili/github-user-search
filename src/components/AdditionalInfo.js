import React from 'react'
import './AdditionalInfo.css'

function AdditionalInfo({ logo, info, visibility }) {
  return (
    <div className={`info-wrapper ${visibility}`}>
      <img src={logo} alt="logo" />
      <h4>{info}</h4>
    </div>
  )
}

export default AdditionalInfo