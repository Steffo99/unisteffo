import React from "react";
import {Bluelib, Main} from "bluelib/lib/components";
import {Router} from "@reach/router";
import Home from "./routes/Home";
import Error404 from "./routes/Error404";
import Gestinfo from "./routes/Gestinfo";

export default function App() {
    return (
        <Bluelib skin={"rygblue"}>
            <Router>
                <Home path={"/"}/>
                <Gestinfo path={"/gestinfo"}/>
                <Error404 default/>
            </Router>
        </Bluelib>
    );
}

