import {Heading, Chapter, Box, ListUnordered, ListOrdered, Parenthesis, Idiomatic as I, BringAttention as B, UAnnotation as U, Dialog, Quote, Code} from "@steffo/bluelib-react"
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
            <Link href="/year4/bigdata">
                Big data analytics
            </Link>
        </Heading>
        <Chapter>
            <Heading level={2}>
                MongoDB
            </Heading>
            <Box>
                <Heading level={3}>
                    Cos'è?
                </Heading>
                <Dialog>
                    <Quote>Hu<U>mongo</U>us <U>D</U>ata<U>b</U>ase</Quote>
                </Dialog>
                <p>
                    Un <B>database non-relazionale</B> basato su <B>documenti <I>JSON</I></B>.
                </p>
            </Box>
            <Box>
                <Heading level={3}>
                    Vantaggi e svantaggi
                </Heading>
                <ListUnordered>
                    <ListUnordered.Item builtinColor={"lime"}>
                        Schema flessibile
                    </ListUnordered.Item>
                    <ListUnordered.Item builtinColor={"lime"}>
                        Facilmente scalabile
                    </ListUnordered.Item>
                    <ListUnordered.Item builtinColor={"lime"}>
                        Richiede pochi joins
                    </ListUnordered.Item>
                    <ListUnordered.Item builtinColor={"lime"}>
                        Facilmente interfacciabile con tutti i linguaggi
                    </ListUnordered.Item>
                    <ListUnordered.Item builtinColor={"lime"}>
                        Integra funzionalità utili sia da RDBMS sia da sistemi chiave→valore
                    </ListUnordered.Item>
                </ListUnordered>
                <Parenthesis todo>
                    E gli svantaggi?
                </Parenthesis>
            </Box>
        </Chapter>
        <Chapter>
            <Heading level={2}>
                Glossario di MongoDB
            </Heading>
            <Box todo>
                <Heading level={3}>
                    Documenti
                </Heading>
            </Box>
            <Box>
                <Heading level={3}>
                    Collezioni
                </Heading>
                <p>
                    <B>Insiemi di documenti</B> <U>senza uno schema fisso</U>, ma con un <B>indice in comune</B>.
                </p>
                <Parenthesis>
                    Come le tabelle relazionali, ma più flessibili!
                </Parenthesis>
            </Box>
            <Box>
                <Heading level={3}>
                    Database
                </Heading>
                <p>
                    <B>Insiemi di collezioni</B>.
                </p>
            </Box>
            <Box>
                <Heading level={3}>
                    ID
                </Heading>
                <p>
                    Il valore di un documento alla <B>chiave <Code>_id</Code></B>.
                </p>
                <p>
                    Deve essere <B>unico</B>, <B>immutabile</B>, e <B>non-array</B>.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Heading level={2}>
                Mettere in relazione i dati in MongoDB
            </Heading>
            <Box>
                <Heading level={3}>
                    Embedding
                </Heading>
                <p>
                    <B>Inserimento</B> di un dato come <B>documento annidato</B> all'interno di un documento.
                </p>
                <p>
                    Più veloce a costo di spazio, per <B>operazioni molto frequenti</B>.
                </p>
            </Box>
            <Box>
                <Heading level={3}>
                    Linking
                </Heading>
                <p>
                    <B>Inserimento</B> di un dato attraverso l'<B>ID del documento</B> che referenzia.
                </p>
                <p>
                    Più lento con guadagno di spazio, per <B>operazioni poco frequenti</B>.
                </p>
            </Box>
        </Chapter>
    </>
}

export default Page
