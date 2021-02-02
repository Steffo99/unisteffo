import React, {useState} from "react";
import {Bluelib} from "bluelib/lib/components";
import {Router} from "@reach/router";
import Home from "./routes/Home";
import Error404 from "./routes/Error404";
import Gestinfo from "./routes/Gestinfo";
import style from "./App.module.css";

export default function App() {
    const [skin, setSkin] = useState("rygblue");

    return (
        <Bluelib skin={skin} className={style.app}>
            <Router>
                <Home path={"/"}/>
                <Gestinfo path={"/gestinfo"}/>
                <Error404 default/>
            </Router>
        </Bluelib>
    );
}

