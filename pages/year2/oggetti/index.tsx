import { Heading, Chapter, Box, Idiomatic as I, Anchor as A, ListUnordered, Panel } from '@steffo/bluelib-react'
import type { NextPage, NextPageContext } from 'next'


export async function getStaticProps(_context: NextPageContext) {
    return {
        props: {}
    }
}


const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Programmazione ad oggetti
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Premessa
                </Heading>
                <p>
                    <I>Programmazione ad oggetti</I> è stato un corso molto pratico, con laboratori e tanta scrittura di codice.
                </p>
                <p>
                    Di conseguenza, non ho alcun appunto di teoria; ho però reso disponibile l&apos;intero codice sorgente documentato del mio progetto di esame.
                </p>
                <p>
                    Suggerisco a tutti di pubblicare online da qualche parte i propri progetti. Sono utili sia per sè stessi sia per i compagni di corso che potrebbero usarli per prendere ispirazione!
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
                            Progetto d&apos;esame
                        </Heading>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <A href="https://github.com/Steffo99/cleaver">Cleaver</A>
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Panel>
                </Chapter>
            </Box>
        </Chapter>
    </>
}

export default Page
