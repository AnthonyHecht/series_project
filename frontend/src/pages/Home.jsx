import React from "react";
import Header from "../components/Header";
import Side from "../components/Side";
import Main from "../components/Main";
import Footer from "../components/Footer"

const Home = () => {

    return (
        <>
        <Header />
        <div className="mid_container">
            <Side />
            <Main />
        </div>        
        <Footer />
        </>
    )
}

export default Home;