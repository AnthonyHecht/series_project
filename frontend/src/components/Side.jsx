import React from 'react';
import Categories from './Categories';

const Side = ({ categories, setActiveCategory, activeCategory }) => {
    return (
        <div className='side'>
                <Categories 
                    categories={categories}
				    setActiveCategory={setActiveCategory}
				    activeCategory={activeCategory}
                />
        </div>
    )
};

export default Side;