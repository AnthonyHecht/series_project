import React, { useState } from "react";
import Header from "../components/Header";
import Side from "../components/Side";
import Main from "../components/Main";
import Footer from "../components/Footer"
import { MovieList } from "../datas/MovieList";

const MoviePage = () => {
    const[activeCategory, setActiveCategory] = useState('')
    const categories = MovieList.reduce(
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

export default MoviePage