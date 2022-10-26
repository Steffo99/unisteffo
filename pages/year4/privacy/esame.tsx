import {Heading, ListUnordered, ListOrdered, Parenthesis, Idiomatic as I, BringAttention as B, Definition, Abbreviation, Quote, Dialog, Details, Cite, ListDescription} from "@steffo/bluelib-react"
import {ChapterForceWrap} from "@steffo/bluelib-react/dist/components/chapters/ChapterForceWrap"
import type { NextPage, NextPageContext } from 'next'
import { Link } from '../../../components/link'
import {Box, Chapter} from "../../../components/useful"


export async function getStaticProps(_context: NextPageContext) {
    return {
        props: {}
    }
}


const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            <Link href="/year4/bigdata">
                Privacy e tutela dei dati
            </Link>
        </Heading>
        <Chapter>
            <Box todo h="Formato dell'esame">
                <p>
                    Tante domandine orali brevi.
                </p>
                <p>
                    Importante però la capacità di collegare gli argomenti e di essere più verbosi?
                </p>
            </Box>
            <Box h="Domande fatte al preappello">
                <ListDescription>
                    <ListDescription.Term>
                        Cosa si intende per dati personali?
                    </ListDescription.Term>
                    <ListDescription.Term>
                        Come si distinguono i dati personali?
                    </ListDescription.Term>
                    <ListDescription.Term>
                        Qual è la differenza tra dato e informazione?
                    </ListDescription.Term>
                    <ListDescription.Term>
                        A quali aspetti si riferisce la normativa?
                    </ListDescription.Term>
                    <ListDescription.Term>
                        Qual è l'articolo 8 della CEDU?
                    </ListDescription.Term>
                    <ListDescription.Term>
                        La CEDU come viene fatta rispettare? (???)
                    </ListDescription.Term>
                    <ListDescription.Term>
                        Chi aderisce alla CEDU?
                    </ListDescription.Term>
                    <ListDescription.Term>
                        Che tipi di fonti esistono?
                    </ListDescription.Term>
                    <ListDescription.Term>
                        Che differenza c'è tra decreti legge e decreti legislativi?
                    </ListDescription.Term>
                    <ListDescription.Term>
                        Parliamo degli aspetti sociologici dell'informatica, e delle relazioni tra sicurezza e libertà
                    </ListDescription.Term>
                </ListDescription>
            </Box>            
        </Chapter>
    </>
}

export default Page
