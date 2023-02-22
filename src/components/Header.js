import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import Logo from '../images/devfinder.svg'
import './Header.css'
import Moon from '../images/icon-moon.svg'
import Sun from '../images/icon-sun.svg'

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className='header-wrapper'>
      <img className='header-logo' src={Logo} alt="devFinder logo" />
      <div className='theme-wrapper' onClick={() => toggleTheme(theme)}>
        {<span className='theme-text'>{theme === "light" ? "dark" : "light"}</span>}
        {theme === "dark" ? <img className='sun' src={Sun} alt="sun" /> : <img className='moon' src={Moon} alt="moon" />}
      </div>
    </header>
  )
}

export default Header