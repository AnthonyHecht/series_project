import React from "react";
import { CardList } from "../datas/CardList";

const RandomButton = () => {
    
        function handleClick(e) {
            e.preventDefault();
            const nameList = CardList.map(item => item.name)
            const random = nameList[Math.floor(Math.random() * nameList.length)]
            alert(random)
        }
    return (
        <button className="randomButton" onClick={handleClick}>?</button>
    )
}

export default RandomButton