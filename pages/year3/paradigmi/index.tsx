import { Heading, Chapter, Box, Idiomatic as I, Panel, ListUnordered, Abbreviation } from '@steffo/bluelib-react'
import type { NextPage } from 'next'
import { Link } from '../../../components/link'

const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Paradigmi e linguaggi di programmazione
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Premessa
                </Heading>
                <p>
                    <I>Paradigmi e linguaggi di programmazione</I> è stato... la parte mancante di <I>Linguaggi dinamici</I>.
                </p>
                <p>
                    È stato quell&apos;anello mancante che ha dato un senso a tutta la teoria decontestualizzata di <Abbreviation title="Linguaggi dinamici">LD</Abbreviation>... Bizzarro, visto che il corso ha avuto luogo nel semestre successivo.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Materiale raccolto
                </Heading>
                <p>
                    Non ho moltissimo materiale di <I>Paradigmi</I>...
                </p>
                <p>
                    Ho qualche esercizietto svolto qua e là, e un link alla guida che ho usato per imparare CLisp.
                </p>
                <Chapter>
                    <Panel>
                        <Heading level={4}>
                            Esercizi svolti
                        </Heading>
                        <ListUnordered>
                            <ListUnordered.Item>
                               <Link href="https://gist.github.com/Steffo99/e6a8271f193303f40ddac4df2a366383">Tris in Prolog</Link>
                               <Link href="https://gist.github.com/Steffo99/426018f91fd24d93fab610df5366facc">Lunghezza di una lista in Prolog</Link>
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Panel>
                    <Panel>
                        <Heading level={4}>
                            Collegamenti utili
                        </Heading>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <Link href="https://www.tutorialspoint.com/lisp/index.htm">LISP Tutorial su Tutorialspoint</Link>
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Panel>
                </Chapter>
            </Box>
        </Chapter>
    </>
}

export default Page
