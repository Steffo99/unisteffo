import React, { useState } from "react"
import { BaseLink, Bluelib, Main, Title } from "bluelib/lib/components"
import { Route, Switch } from "react-router-dom"
import Home from "./routes/Home"
import Error404 from "./routes/Error404"
import Gestinfo from "./routes/Gestinfo"
import style from "./App.module.css"
import Footer from "./components/Footer"
import Fisica from "./routes/Fisica"
import Apprendimento from "./routes/Apprendimento"
import Statistica from "./routes/Statistica"
import Sistemioperativi from "./routes/Sistemioperativi"


export default function App() {
    const [skin, setSkin] = useState("rygblue")

    return (
        <Bluelib skin={skin} className={style.app}>

            <Title size={"xxl"}><BaseLink href={"/"}>Unisteffo</BaseLink></Title>

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
                    <Route path={"/apprendimento"}>
                        <Apprendimento/>
                    </Route>
                    <Route path={"/statistica"}>
                        <Statistica/>
                    </Route>
                    <Route path={"/sistemioperativi"}>
                        <Sistemioperativi/>
                    </Route>
                    <Route path={"*"}>
                        <Error404/>
                    </Route>
                </Switch>
            </Main>

            <Footer default={true}/>

        </Bluelib>
    )
}

