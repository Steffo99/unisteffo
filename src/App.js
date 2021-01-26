import React from "react";
import {Bluelib, Main} from "bluelib/lib/components";
import {Router} from "@reach/router";
import Home from "./routes/Home";
import Error404 from "./routes/Error404";

export default function App() {
    return (
        <Bluelib skin={"rygblue"}>
            <Router>
                <Home path={"/"}/>
                <Error404 default/>
            </Router>
        </Bluelib>
    );
}

