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
            Linguaggi dinamici
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Premessa
                </Heading>
                <p>
                    <I>Linguaggi dinamici</I> è stato il Dark Souls delle introduzioni a Python.
                </p>
                <p>
                    Un sacco di concetti complessi spiegati molto velocemente (o addirittura in modo errato!), un po&apos; di Perl buttato lì a caso (per giustificare il plurale nel nome del corso?), e vaghi riferimenti alle macro di Lisp (trattato nel semestre successivo!)...
                </p>
                <p>
                    Per non parlare dell&apos;esame che è stato praticamente una sfida di code golfing...
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Materiale raccolto
                </Heading>
                <p>
                    Avendo già usato Python ampiamente in passato, non ho avuto problemi, quindi non ho preso appunti.
                </p>
                <p>
                    Ho però alcune risorse che possono aiutare molto ad apprendere il linguaggio!
                </p>
                <Chapter>
                    <Panel>
                        <Heading level={4}>
                            Collegamenti utili
                        </Heading>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <Link href="https://docs.python.org/3/">Documentazione di Python 3</Link>
                            </ListUnordered.Item>
                            <ListUnordered.Item>
                                <Link href="https://stackoverflow.com/questions/tagged/python">Tag [python] di Stack Overflow</Link>
                            </ListUnordered.Item>
                            <ListUnordered.Item>
                                <Link href="https://www.reddit.com/r/learnpython/">Il subreddit /r/learnpython</Link> e <Link href="https://www.reddit.com/r/learnpython/wiki/index">la relativa wiki</Link>
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Panel>
                    <Panel>
                        <Heading level={4}>
                            Esempi pratici
                        </Heading>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <Link href="https://gist.github.com/Steffo99/b9eaf8649fe0e341ae0cdbd78b0a9055">Su GitHub Gist</Link>
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Panel>
                </Chapter>
            </Box>
        </Chapter>
    </>
}

export default Page
