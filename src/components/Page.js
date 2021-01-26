import React from "react";
import {BaseLink, Title, Main} from "bluelib/lib/components";


export default function Page({children}) {
    return (
        <div>
            <Title size={"xxl"}><BaseLink href={"/"}>Unisteffo</BaseLink></Title>
            <Title size={"xl"}>Gli appunti open source di <BaseLink href={"https://steffo.eu"}>Steffo</BaseLink></Title>
            <Main>
                {children}
            </Main>
        </div>
    )
}
