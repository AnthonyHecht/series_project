import React, {useContext} from 'react';
import { darkModeContext } from '../context/DarkMode'

const Card = ({ cover, name, note, description, setSerieSelected, serieSelected }) => {
    const {darkMode} = useContext(darkModeContext)

   if(serieSelected === name) {
    return (
            <div className={darkMode? 'card-plain-dark' : 'card-plain'}>
                <img className='card-plain-cover' src={cover} alt={`${name} cover`} />
                <div className='card-plain-name'>{name}</div>
                <div className='card-plain-note'>{note} tier</div>
                <div className='card-plain-desc'>{description}</div>
                <button onClick={() => setSerieSelected('')} className='card-btn'>Fermer</button>
        </div>
        )} else {
    return (
        <li className={darkMode? 'card-dark' : 'card'} onClick={() => setSerieSelected(name)}>
                <img className='card-cover' src={cover} alt={`${name} cover`} />
                <div className='card-name'>{name}</div>
                <div className='card-note'>{note} tier</div>
        </li>
    )}
        
    
    
};

export default Card