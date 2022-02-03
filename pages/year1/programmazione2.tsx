import { Heading, Chapter, Box, Idiomatic as I, Anchor as A, ListUnordered, ListOrdered, BringAttention as B } from '@steffo/bluelib-react'
import type { NextPage } from 'next'

const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Programmazione 2
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Introduzione
                </Heading>
                <p>
                    <I>Programmazione 2</I>... è stato terrificante.
                </p>
                <p>
                    Il programma non aveva il minimo senso: insegnava praticamente come <B>NON PROGRAMMARE</B> in C++; le <I>worst practices</I>, se vogliamo. 
                </p>
                <p>
                    Se non è cambiato da allora, e dovete darlo... Vi consiglio di trovare un bel libro di C++ di base, studiarvelo da soli, e solo dopo che avete capito più o meno tutti i concetti principali tuffarvi nel mare di assurdità che sono le slides del corso. 
                </p>
                <p>
                    Purtroppo non conosco buoni libri di C++, quindi dovete trovarvelo da soli, ma sono sicuro che ne esistano centinaia!
                </p>
            </Box>
        </Chapter>
    </>
}

export default Page
