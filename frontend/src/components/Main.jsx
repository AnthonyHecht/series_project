import React, {useContext} from 'react'
import List from './List'
import { darkModeContext } from '../context/DarkMode'
/* import Reco from './Reco' */

const Main = ({ activeCategory, categories }) => {
    const {darkMode} = useContext(darkModeContext)
    return (
        <main className={darkMode? `main-dark` : `main`}>
            {/* <Reco/> */}
            <List 
                activeCategory={activeCategory}
                categories={categories}
            />
        </main>
    )
}

export default Main;