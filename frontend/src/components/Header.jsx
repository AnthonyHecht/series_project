import React, { useContext } from 'react';
import { darkModeContext } from '../context/DarkMode'
import { Link } from 'react-router-dom';

const Header = () => {
    const {darkMode} = useContext(darkModeContext)
    return (
        <header className={darkMode? 'header-dark' : 'header'}>
            <ul>
                <li>
                    <Link to='/home'>Serie</Link>
                </li>
                <li>
                    <Link to='/movie'>Movie</Link>
                </li>
            </ul>
            
        </header>
    )
}

export default Header;