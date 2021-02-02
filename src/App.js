import React, {Fragment, useState} from "react";
import {BaseLink, Bluelib, Main} from "bluelib/lib/components";
import {Router, } from "@reach/router";
import Home from "./routes/Home";
import Error404 from "./routes/Error404";
import Gestinfo from "./routes/Gestinfo";
import style from "./App.module.css";
import MainTitle from "./components/MainTitle";
import ContextSetSubtitle from "./contexts/ContextSetSubtitle";
import Footer from "./components/Footer";


export default function App() {
    const [skin, setSkin] = useState("rygblue");
    const [subtitle, setSubtitle] = useState(null);

    return (
        <ContextSetSubtitle.Provider value={setSubtitle}>

            <Bluelib skin={skin} className={style.app}>

                <Router primary={false}>
                    <MainTitle default={true} subtitle={subtitle}/>
                </Router>

                <Main>
                    <Router primary={true}>
                        <Home path={"/"} skin={skin} setSkin={setSkin}/>
                        <Gestinfo path={"/gestinfo"}/>
                        <Error404 default/>
                    </Router>
                </Main>

                <Router primary={false}>
                    <Footer default={true}/>
                </Router>

            </Bluelib>

        </ContextSetSubtitle.Provider>
    );
}

