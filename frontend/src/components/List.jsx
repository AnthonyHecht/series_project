import React from 'react';
import { CardList } from '../datas/CardList';
import Card from './Card'


const List = ({ activeCategory, isSelected, setSelect }) => {

    return (
        <div className='card-list-wrapper'>
            <ul className='card-list'>
                    {CardList.map(({ name, note, cover, category }) => 
                    !activeCategory || activeCategory === category ? (
                    <div key={name}>
                        <Card  
                        cover={cover} name={name} note={note}
                        isSelected={isSelected}
                        setSelect={setSelect}
                        />
                    </div>
                    ) : null
                    )}
            </ul>
        </div>
    )
};

export default List