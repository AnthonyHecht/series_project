import React from 'react';
import { CardList } from '../datas/CardList';
import Card from './Card'
import { useState } from 'react';


const List = ({ activeCategory }) => {
    const[serieSelected, setSerieSelected] = useState('')
    return (
        <div className='card-list-wrapper'>
            <ul className='card-list'>
                    {CardList.map(({ name, note, cover, category, description }) => 
                    !activeCategory || activeCategory === category ? (
                    <div key={name}>
                        <Card  
                        cover={cover} name={name} note={note} description={description}
                        setSerieSelected={setSerieSelected} serieSelected={serieSelected}
                        />
                    </div>
                    ) : null
                    )}
            </ul>
        </div>
    )
};

export default List