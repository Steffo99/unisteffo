import { Heading, Chapter, Box, Idiomatic as I, Panel, ListUnordered } from '@steffo/bluelib-react'
import type { NextPage } from 'next'
import { Link } from '../../../components/link'

const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Gestione dell&apos;informazione
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Premessa
                </Heading>
                <p>
                    <I>Gestione dell&apos;informazione</I>: un corso... disordinato!
                </p>
                <p>
                    Ho imparato parecchie cose da quest&apos;esame, soprattutto dal progetto che ho realizzato per passarlo, ma le slides erano disorganizzate, e la prova scritta mi è sembrata in buona parte basata sulla fortuna. 
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Materiale raccolto
                </Heading>
                <p>
                    Avendolo dovuto provare due volte, ho raccolto e realizzato un sacco di materiale per questo corso!
                </p>
                <Chapter>
                    <Panel>
                        <Heading level={4}>
                            Appuntiweb
                        </Heading>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <Link href="/year3/gestione/teoria">Appunti di teoria</Link>
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Panel>
                    <Panel>
                        <Heading level={4}>
                            Progetto realizzato
                        </Heading>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <Link href="https://github.com/Steffo99/mandarin">Mandarin</Link>
                            </ListUnordered.Item>
                            <ListUnordered.Item>
                                <Link href="https://github.com/Steffo99/mandarin-search">Mandarin Search</Link>
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Panel>
                    <Panel>
                        <Heading level={4}>
                            Appunti di altri studenti
                        </Heading>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <Link href="https://gitlab.com/2429571/gestione-informazione">GitLab di Sharon Guerzoni</Link>
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Panel>
                    <Panel>
                        <Heading level={4}>
                            Collegamenti utili
                        </Heading>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <Link href="https://nlp.stanford.edu/IR-book/">Introduction to Information Retrieval</Link>
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Panel>
                </Chapter>
            </Box>
        </Chapter>
    </>
}

export default Page
