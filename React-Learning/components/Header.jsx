import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

const Header = () => {
 
    const {theme , toggletheme} = useContext(ThemeContext)

    const style ={
        backgroundColor : theme ===  "light" ? "#f5f5f5" : "#333",
        color : theme ==="light" ? "#000" : " #fff"  ,
        padding : "10px",
        textAlign : "center"
      };
  return (
    <header style={style}>
          <h1>{theme === "light" ? "light mode":"dark mode"}</h1>
          <button onClick={toggletheme}>switch Theme</button>
    </header>
  )
}

export default Header