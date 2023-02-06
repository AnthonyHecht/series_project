import React from 'react';

const Card = ({ cover, name, note, isSelected, setSelect}) => {
    
    return (
        <li className='card'>
                <img className='card-cover' src={cover} alt={`${name} cover`} />
                <div className='card-name'>{name}</div>
                <div className='card-note'>{note}</div>
        </li>
    )
        /* return (
            <div className='card-plain'>
                <img className='card-plain-cover' src={cover} alt={`${name} cover`} onClick={toggleCard()} />
                <div className='card-plain-name'>{name}</div>
                <div className='card-plain-note'>{note}</div>
        </div>
        ) */
    
};

export default Card