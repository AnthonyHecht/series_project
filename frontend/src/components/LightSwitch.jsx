import { useContext } from "react";
import { darkModeContext } from "../context/DarkMode";

const LightSwitch = () => {
    const {toggleDarkMode} = useContext(darkModeContext)
    const handleClick = () => {
        toggleDarkMode()
    }
    return (
        <button className="lightSwitch" onClick={handleClick}>lightSwitch</button>
    )
}

export default LightSwitch