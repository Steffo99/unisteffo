import { Heading, Chapter, Box, Idiomatic as I, Panel, ListUnordered } from '@steffo/bluelib-react'
import type { NextPage, NextPageContext } from 'next'
import { Link } from '../../../components/link'


export async function getStaticProps(_context: NextPageContext) {
    return {
        props: {}
    }
}


const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Progetto del software
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Premessa
                </Heading>
                <p>
                    <I>Progetto del Software</I>. Una montagna, in termini di tempo richiesto per svolgere il progetto.
                </p>
                <p>
                    Ma al tempo stesso, molto, molto soddisfacente. Svolgere un progetto in 7 e vedere lentamente che prende forma è stata un&apos;esperienza importante, a mio parere. 
                </p>
                <p>
                    Complimenti al resto del mio gruppo per aver portato a termine l&apos;impresa! :D
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Materiale raccolto
                </Heading>
                <p>
                    Abbiamo pubblicato il nostro progetto completato su GitHub!
                </p>
                <Chapter>
                    <Panel>
                        <Heading level={4}>
                            Progetto di esame
                        </Heading>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <Link href="https://github.com/pds-nest/nest">N.E.S.T.</Link>, con <Link href="https://docs.nest.steffo.eu/">relativa documentazione</Link>
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Panel>
                </Chapter>
            </Box>
        </Chapter>
    </>
}

export default Page
