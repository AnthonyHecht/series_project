import React, { useContext } from 'react';
/* import Nav from "./Nav"; */
import { darkModeContext } from '../context/DarkMode'

const Header = () => {
    const {darkMode} = useContext(darkModeContext)
    return (
        <header className={darkMode? 'header-dark' : 'header'}>
            <div>
                <h1> Series project </h1>
            </div>
            
            {/* <Nav /> */}
        </header>
    )
}

export default Header;