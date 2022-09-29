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
            Big data analytics
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Premessa
                </Heading>
                <p>
                    Per ora il corso sembra interessante, ma ho seguito ancora troppe poche lezioni per dirlo con certezza.
                </p>
                <Parenthesis>
                    La prof. Mandreoli consiglia il film <Link href={"https://en.wikipedia.org/wiki/Moneyball_(film)"}>Moneyball</Link>, perchè fa vedere quanto è efficace la data science.
                </Parenthesis>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Materiale raccolto
                </Heading>
                <p>
                    Sto seguendo le lezioni di questo corso, pertanto sto raccogliendo attivamente materiale.
                </p>
                <Chapter>
                    <Panel>
                        <Heading level={4}>
                            Appuntiweb
                        </Heading>
                        <Warn1024/>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <Link href="/year4/bigdata/teoria">Appunti di teoria</Link>
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Panel>
                </Chapter>
            </Box>
        </Chapter>
    </>
}

export default Page
