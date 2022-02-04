import { Heading, Chapter, Box, Panel, Idiomatic as I, ListUnordered, Emphasis } from '@steffo/bluelib-react'
import { Link } from '../../../components/link'
import type { NextPage } from 'next'
import { Warn1024 } from '../../../components/warn'


const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Ottimizzazione lineare intera
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Premessa
                </Heading>
                <p>
                    Buona parte degli appunti di ottimizzazione non sono terminati, perchè... ho perso la voglia di farli a metà.
                </p>
                <p>
                    Penso che possano essere utili lo stesso, però.
                </p>
                <p>
                    Se l&apos;esame è ancora come quando l&apos;ho dato io, suggerisco di fare <Emphasis>molta</Emphasis> attenzione a come vengono assegnati i punti, perchè potrebbero essere nascosti tranelli che potrebbero facilmente azzerarvi il punteggio. <small>Parlo per esperienza.</small>
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
                            Appuntiweb
                        </Heading>
                        <Warn1024/>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <Link href="/year2/ottimizzazione/teoria">
                                    Appunti di teoria
                                </Link>
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Panel>
                </Chapter>
            </Box>
        </Chapter>
    </>
}

export default Page
