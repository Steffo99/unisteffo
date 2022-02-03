import { Heading, Chapter, Box, Idiomatic as I, Anchor as A, ListUnordered, ListOrdered } from '@steffo/bluelib-react'
import type { NextPage } from 'next'

const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Programmazione ad oggetti
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Introduzione
                </Heading>
                <p>
                    <I>Programmazione ad oggetti</I> è stato un corso molto pratico, con laboratori e tanta scrittura di codice.
                </p>
                <p>
                    Non ho alcun appunto di teoria; ho però reso disponibile <A href="https://github.com/Steffo99/cleaver">su GitHub</A> l'intero codice sorgente documentato del mio progetto di esame.
                </p>
            </Box>
        </Chapter>
    </>
}

export default Page
