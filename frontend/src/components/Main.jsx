import React from 'react'
import List from './List'
/* import Reco from './Reco' */

const Main = ({ activeCategory, categories }) => {
    return (
        <main className='main'>
            {/* <Reco/> */}
            <List 
                activeCategory={activeCategory}
                categories={categories}
            />
        </main>
    )
}

export default Main;