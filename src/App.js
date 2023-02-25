import React, { createContext, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import UserInfo from './components/UserInfo';
import './index.css'


export const ThemeContext = createContext(null);


function App() {
  const [userData, setuserData] = useState(null);
  const [userFound, setuserFound] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") == null ? "light" : localStorage.getItem('theme'));

  const fetchUser = async (user) => {
    const response = await fetch(`https://api.github.com/users/${user}`);

    // eslint-disable-next-line
    if (response.status == "200") {
      const data = await response.json();
      setuserData(data);
      setuserFound(true);
    } else {
      setuserFound(false);
    }
  }

  const toggleTheme = (curr) => {
    const newTheme = curr === "light" ? "dark" : "light"
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='app' id={theme}>
        <Header />
        <SearchBar fetchUser={fetchUser} userFound={userFound} setUserFound={setuserFound} />
        <UserInfo userData={userData} />
      </div>
    </ThemeContext.Provider>
  )
}

export default App