import { Heading, Chapter, Box, Idiomatic as I, Emphasis } from '@steffo/bluelib-react'
import type { NextPage } from 'next'

const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Programmazione 2
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Commento
                </Heading>
                <p>
                    <I>Programmazione 2</I>... è stato terrificante.
                </p>
                <p>
                    Il programma non aveva il minimo senso: insegnava praticamente come <Emphasis>NON PROGRAMMARE</Emphasis> in C++; le <Emphasis>worst practices</Emphasis>, se vogliamo. 
                </p>
                <p>
                    Se non è cambiato da allora, e dovete darlo...
                </p>
                <p>
                    Vi consiglio di trovare un bel libro di C++ di base, studiarvelo da soli, e di rituffarvi nel mare di assurdità che sono le slides del corso solo dopo che avete capito le basi della programmazione a oggetti.
                </p>
            </Box>
        </Chapter>
    </>
}

export default Page
