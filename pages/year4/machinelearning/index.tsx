import {Heading, Chapter, Box, Idiomatic as I, Panel, ListUnordered, Parenthesis} from "@steffo/bluelib-react"
import type { NextPage, NextPageContext } from 'next'
import { Link } from '../../../components/link'
import { Warn1024 } from '../../../components/warn'


export async function getStaticProps(_context: NextPageContext) {
    return {
        props: {}
    }
}


const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Machine learning
        </Heading>
        <Chapter>
            <Box todo>
                <Heading level={3}>
                    Premessa
                </Heading>
                <p>
                    TODO
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box todo>
                <Heading level={3}>
                    Materiale raccolto
                </Heading>
                <p>
                    TODO
                </p>
                <Chapter>
                    <Panel>
                        <Heading level={4}>
                            Appuntiweb
                        </Heading>
                        <Warn1024/>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <Link href="/year4/machinelearning/teoria">Appunti di teoria</Link>
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Panel>
                </Chapter>
            </Box>
        </Chapter>
    </>
}

export default Page
