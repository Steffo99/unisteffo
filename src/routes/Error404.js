import React from "react";
import {Paragraph, Box, Title, Color, BaseLink} from "bluelib/lib/components";
import Page from "../components/Page";
import TitleBox from "../components/TitleBox";
import TitleSplit from "../components/TitleSplit";


export default function Error404() {
    return (
        <Page>
            <TitleSplit title={<Color value={"red"}>Non trovato</Color>}>
                <TitleBox title={<Color value={"red"}>404</Color>}>
                    <Paragraph>
                        Mi spiace, ma la pagina che hai richiesto non sembra esistere :(
                    </Paragraph>
                    <Paragraph>
                        <BaseLink href={"/"}>← Torna alla home</BaseLink>
                    </Paragraph>
                </TitleBox>
            </TitleSplit>
        </Page>
    )
}
