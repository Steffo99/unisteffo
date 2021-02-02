import {createContext} from "react";


function defaultSetter() {
    throw new Error("No subtitle setter found.")
}


export default createContext(defaultSetter);
