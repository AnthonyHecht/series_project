import React from 'react';
import { CardList } from '../datas/CardList';
import { MovieList } from '../datas/MovieList';
import Card from './Card'
import { useState } from 'react';


const List = ({ activeCategory }) => {
    const[serieSelected, setSerieSelected] = useState('')
    if(window.location.href.indexOf("home") > -1) {
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
    )} else if (window.location.href.indexOf("movie") > -1) {
        return (
        <div className='card-list-wrapper'>
            <ul className='card-list'>
                    {MovieList.map(({ name, note, cover, category, description }) => 
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
    }
};

export default List