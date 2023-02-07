import React, { useContext } from 'react';
import { darkModeContext } from '../context/DarkMode'

const Footer = () => {
    const {darkMode} = useContext(darkModeContext)
    return (
        <footer className={darkMode? 'footer-dark' : 'footer'}>
                <h1>liste de lien</h1>
                <a href='https://github.com/AnthonyHecht/'>github</a>
                <a href='https://www.linkedin.com/in/anthony-hecht/'>linkedin</a>
        </footer>
    )
}
export default Footer;