import Bluelib, { Heading, Chapter, Box, Idiomatic as I, Anchor as A, ListUnordered, Panel } from '@steffo/bluelib-react'
import type { NextPage } from 'next'
import { MaterialLi } from '../../../components/materialLi'

const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Sistemi operativi
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Premessa
                </Heading>
                <p>
                    Non ho appunti di <I>Sistemi operativi</I>: ho studiato direttamente le slides, in quanto ogni minimo dettaglio di esse poteva essermi chiesto all&apos;esame.
                </p>
                <p>
                    Ho però la soluzione che ho dato ad un Arzigogolo, una sfida particolarmente posta dal nostro prof. per verificare le abilità dei suoi studenti.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Materiale raccolto
                </Heading>
                <Chapter>
                    <Panel>
                        <Heading level={4}>
                            Arzigogoli
                        </Heading>
                        <ListUnordered start={5}>
                            <MaterialLi base="/materials/year2/sistemioperativi" md="05_Arzigogolo5_soluzione" ftrace="05_ftrace">
                                Arzigogolo 5
                            </MaterialLi>
                        </ListUnordered>
                    </Panel>
                </Chapter>
            </Box>
        </Chapter>
    </>
}

export default Page
