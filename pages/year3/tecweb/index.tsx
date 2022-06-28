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
            Tecnologie web
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Premessa
                </Heading>
                <p>
                    Avendo fatto tirocinio e tesi con la prof.ssa di Tecnologie Web, l&apos;esame orale è stato più una formalità che altro.
                </p>
                <p>
                    Non saprei bene cosa consigliare a chi deve dare questo esame: di sicuro servono buone conoscenze di Python e in generale di programmazione, ma oltre a quello... boh?
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Materiale raccolto
                </Heading>
                <p>
                    Ho allegato qui il mio progetto di tesi con tutta la relativa documentazione.
                </p>
                <p>
                    Spero possa esservi utile, anche se è di un ordine di grandezza superiore a quello che va realizzato per passare l&apos;esame!
                </p>
                <Chapter>
                    <Panel>
                        <Heading level={4}>
                            Progetto di esame, tirocinio e tesi
                        </Heading>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <Link href="https://github.com/Steffo99/sophon">Sophon</Link>
                            </ListUnordered.Item>
                            <ListUnordered.Item>
                                <Link href="https://github.com/Steffo99/sophon/actions/runs/1751761064">Relazione sul progetto</Link>
                            </ListUnordered.Item>
                            <ListUnordered.Item>
                                <Link href="https://github.com/Steffo99/sophon/actions/runs/1751761066">Tesi</Link>
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Panel>
                </Chapter>
            </Box>
        </Chapter>
    </>
}

export default Page
