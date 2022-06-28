import { Heading, Chapter, Box, Idiomatic as I, Panel, ListUnordered } from '@steffo/bluelib-react'
import type { NextPage, NextPageContext } from 'next'


export async function getStaticProps(_context: NextPageContext) {
    return {
        props: {}
    }
}


const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Protocolli e architetture di rete
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Premessa
                </Heading>
                <p>
                    Un esame decisamente ben fatto, ma il cui materiale trattava la materia di indirizzo delle mie scuole superiori. Niente miei appunti qui, mi spiace...
                </p>
                <p>
                    Le slides del prof. erano ottime: se le fornisce ancora, vi consiglio di studiare su quelle!
                </p>
            </Box>
        </Chapter>
    </>
}

export default Page
