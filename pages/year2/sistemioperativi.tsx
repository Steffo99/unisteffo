import Bluelib, { Heading, Chapter, Box, Idiomatic as I, Anchor as A, ListUnordered, ListOrdered } from '@steffo/bluelib-react'
import type { NextPage } from 'next'

const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Sistemi operativi
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Introduzione
                </Heading>
                <p>
                    Non ho appunti di <I>Sistemi operativi</I>: ho studiato direttamente le slides, in quanto ogni minimo dettaglio di esse poteva essermi chiesto all'esame.
                </p>
                <p>
                    Ho però la soluzione che ho dato ad un Arzigogolo, una sfida particolarmente posta dal nostro prof. per verificare le abilità dei suoi studenti.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Arzigogoli
                </Heading>
                <ListUnordered start={5}>
                    <ListUnordered.Item>
                        Arzigogolo 5 (<A href="/materials/year2/sistemioperativi/05_Arzigogolo5_soluzione.md">.md</A>, <A href="/materials/year2/sistemioperativi/05_ftrace.txt">ftrace</A>)
                    </ListUnordered.Item>
                </ListUnordered>
            </Box>
        </Chapter>
    </>
}

export default Page
