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
            Diritto ed economia digitale
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Premessa
                </Heading>
                <p>
                    <I>Diritto ed economia digitale</I> è stato un po&apos; come <I>Apprendimento ed evoluzione in sistemi artificiali</I>: un esame entry-level molto discorsivo ed interessante.
                </p>
                <p>
                    Non ho avuto bisogno di prendere appunti, e nemmeno saprei che materiale consigliare a qualcuno che deve prepararlo, ma mi è giunta voce che purtroppo sia stato rimosso dall&apos;elenco degli esami a scelta, quindi non ci dovrebbe nemmeno essere il problema.
                </p>
            </Box>
        </Chapter>
    </>
}

export default Page
