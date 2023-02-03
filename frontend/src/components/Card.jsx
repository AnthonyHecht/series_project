import React from 'react';

const Card = ({ cover, name, note}) => {
    return (
        <li className='card'>
                <img className='card-cover' src={cover} alt={`${name} cover`} />
                <div className='card-name'>{name}</div>
                <div className='card-note'>{note}</div>
        </li>
    )
};

export default Card