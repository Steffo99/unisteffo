import React from "react";
import {Paragraph, Color} from "bluelib/lib/components";
import TitleBox from "../components/TitleBox";
import useSubtitle from "../hooks/useSubtitle";


export default function Error404() {
    useSubtitle(<Color value={"red"}>Errore 404</Color>);

    return (
        <article>
            <TitleBox title={<Color value={"red"}>Pagina non trovata</Color>}>
                <Paragraph>
                    Mi spiace, ma la pagina che hai richiesto non sembra esistere :(
                </Paragraph>
            </TitleBox>
        </article>
    )
}
