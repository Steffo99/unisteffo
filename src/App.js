import React from "react";
import Title from "bluelib/src/components/Title";
import Bluelib from "bluelib/src/components/Bluelib";

export default function App() {
    return (
        <Bluelib skin={"rygblue"}>
            <Title size={"xxl"}>Unisteffo</Title>
            <Title size={"xl"}>Gli appunti open source di <a href={"https://steffo.eu"}>Steffo</a></Title>
        </Bluelib>
    );
}

