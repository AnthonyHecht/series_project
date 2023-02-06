import React from 'react';
import List from './List'

const Main = ({ activeCategory, categories, isSelected, setSelect }) => {
    return (
        <main className='main'>
            <List 
                activeCategory={activeCategory}
                categories={categories}
                isSelected={isSelected}
                setSelect={setSelect}
            />
        </main>
    )
}

export default Main;