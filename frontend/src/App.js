import React from "react";
import Routes from "./router/";
import { DarkModeProvider } from "./context/DarkMode";

const App = () => {

    return (
        <DarkModeProvider>
        <Routes />
        </DarkModeProvider>
    )
}

export default App;
