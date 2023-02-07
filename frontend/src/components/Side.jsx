import React, {useContext} from 'react';
import { darkModeContext } from '../context/DarkMode'
import Categories from './Categories';
import LightSwitch from './LightSwitch';
import RandomButton from './RandomButton';

const Side = ({ categories, setActiveCategory, activeCategory }) => {
    const { darkMode } = useContext(darkModeContext)
    return (
        <div className={darkMode? 'side-dark' : 'side'}>
                <Categories 
                    categories={categories}
				    setActiveCategory={setActiveCategory}
				    activeCategory={activeCategory}
                />
                <LightSwitch/>
                <RandomButton/>
        </div>
    )
};

export default Side;