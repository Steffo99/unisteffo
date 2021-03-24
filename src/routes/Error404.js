import React from "react"
import { Box, Color, Paragraph, Title } from "bluelib/lib/components"
import Split from "../components/Split"


export default function Error404() {
    return (
        <article>
            <Split title={"Errore 404"}>
                <Color builtin={"red"}>
                    <Box>
                        <Title size={"l"}>
                            Pagina non trovata
                        </Title>
                        <Paragraph>
                            Mi spiace, ma la pagina che hai richiesto non sembra esistere :(
                        </Paragraph>
                    </Box>
                </Color>
            </Split>
        </article>
    )
}
