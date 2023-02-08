import React from "react";
import { CardList } from "../datas/CardList";
import { MovieList} from "../datas/MovieList"

const RandomButton = () => {
    
        function handleClick(e) {
            e.preventDefault();
            if(window.location.href.indexOf("home") > -1) {
                const nameList = CardList.map(item => item.name)
                const random = nameList[Math.floor(Math.random() * nameList.length)]
                alert(random)} 
            else if (window.location.href.indexOf("movie") > -1)     
                {const nameList = MovieList.map(item => item.name)
                const random = nameList[Math.floor(Math.random() * nameList.length)]
                alert(random)}
            
        }
    return (
        <button className="randomButton" onClick={handleClick}>?</button>
    )
}

export default RandomButton