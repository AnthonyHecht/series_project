import React, {createContext, useState} from 'react'

const darkModeContext = createContext()

const DarkModeProvider = (props) => {
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return (
    <div>
        <darkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </darkModeContext.Provider>
    </div>
    )
}

export {darkModeContext, DarkModeProvider}