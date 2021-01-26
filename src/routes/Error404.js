import React from "react";
import {Paragraph, Box, Title, Color} from "bluelib/lib/components";
import Page from "../components/Page";


export default function Error404() {
    return (
        <Page>
            <Box>
                <Title size={"l"}><Color value={"red"}>Non trovato</Color></Title>
                <Paragraph>
                    Mi spiace, ma la pagina che hai richiesto non sembra esistere :(
                </Paragraph>
            </Box>
        </Page>
    )
}
