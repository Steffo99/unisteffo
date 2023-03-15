import { Heading, Chapter, Box, Idiomatic as I, Code, Anchor as A, Dialog, BringAttention as B, ListOrdered, ListUnordered, Panel } from "@steffo/bluelib-react"
import type { NextPage, NextPageContext } from "next"
import { Link } from "../../../components/compat-old"


export async function getStaticProps(_context: NextPageContext) {
    return {
        props: {}
    }
}


const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Programmazione 1
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Premessa
                </Heading>
                <p>
                    Avendo già programmato in C / C++ alle scuole superiori, non ho avuto bisogno di studiare per l&apos;esame di Programmazione 1, e pertanto non ho preso appunti.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Materiale raccolto
                </Heading>
                <p>
                    Il massimo che posso fare è consigliare qualche risorsa online per il C++, e allegare al sito la guida che avevo scritto al tempo per installare su Windows il compilatore C / C++ MinGW.
                </p>
                <Chapter>
                    <Panel>
                        <Heading level={4}>
                            Collegamenti utili
                        </Heading>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <Link href="https://en.cppreference.com/w/">cppreference.com</Link>
                            </ListUnordered.Item>
                            <ListUnordered.Item>
                                <Link href="https://www.cplusplus.com/reference/">cplusplus.com</Link>
                            </ListUnordered.Item>
                            <ListUnordered.Item>
                                <Link href="https://stackoverflow.com/questions">stackoverflow.com</Link>
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Panel>
                    <Panel>
                        <Heading level={4}>
                            Guide realizzate
                        </Heading>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <Link href="/year1/programmazione1/mingw">Come installare correttamente MinGW su Windows</Link>
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Panel>
                </Chapter>
            </Box>
        </Chapter>
    </>
}

export default Page
