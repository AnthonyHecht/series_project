import React from 'react';
import List from './List'

const Main = ({ activeCategory, categories }) => {
    return (
        <main className='main'>
            <List 
                activeCategory={activeCategory}
                categories={categories}
            />
        </main>
    )
}

export default Main;