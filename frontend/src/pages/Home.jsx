import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Side from "../components/Side";
import Main from "../components/Main";
import Footer from "../components/Footer"
import { CardList } from "../datas/CardList";

const Home = () => {
    const[activeCategory, setActiveCategory] = useState('')
    const categories = CardList.reduce(
        (acc, elem) =>
            acc.includes(elem.category) ? acc : acc.concat(elem.category),
            []
    )
    return (
        <>
        <Header />
        <div className="mid_container">
            <Side 
                categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
            />
            <Main 
                categories={categories}
				activeCategory={activeCategory}
            />
        </div>        
        <Footer />
        </>
    )
}

export default Home;