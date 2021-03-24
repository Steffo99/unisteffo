import React, {Fragment, useState} from "react";
import {BaseLink, Bluelib, Main} from "bluelib/lib/components";
import {Switch, Route} from "react-router-dom";
import Home from "./routes/Home";
import Error404 from "./routes/Error404";
import Gestinfo from "./routes/Gestinfo";
import style from "./App.module.css";
import MainTitle from "./components/MainTitle";
import ContextSetSubtitle from "./contexts/ContextSetSubtitle";
import Footer from "./components/Footer";
import Fisica from "./routes/Fisica"


export default function App() {
    const [skin, setSkin] = useState("rygblue");
    const [subtitle, setSubtitle] = useState(null);

    return (
        <ContextSetSubtitle.Provider value={setSubtitle}>

            <Bluelib skin={skin} className={style.app}>

                <MainTitle subtitle={subtitle}/>

                <Main>
                    <Switch>
                        <Route exact path={"/"}>
                            <Home skin={skin} setSkin={setSkin}/>
                        </Route>
                        <Route path={"/gestinfo"}>
                            <Gestinfo/>
                        </Route>
                        <Route path={"/fisica"}>
                            <Fisica/>
                        </Route>
                        <Route path={"*"}>
                            <Error404 />
                        </Route>
                    </Switch>
                </Main>

                <Footer default={true}/>

            </Bluelib>

        </ContextSetSubtitle.Provider>
    );
}

