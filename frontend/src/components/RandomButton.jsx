import React from "react";
import { CardList } from "../datas/CardList";

const RandomButton = () => {
    const random = CardList[Math.floor(Math.random() * CardList.length)]
    return (
        <button className="randomButton" onClick={random}>?</button>
    )
}

export default RandomButton