import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { Navigate  } from "react-router-dom";
import Movie from "../pages/MoviePage";

const index = () => {
    return(
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="*" element={<Navigate replace to="/home" />} />
            </Routes>
        </Router>
    );
};

export default index;