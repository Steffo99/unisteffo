import {Bluelib, Heading, Chapter, Box, ListUnordered, ListOrdered, Parenthesis, Idiomatic as I, BringAttention as B, UAnnotation as U, Dialog, Quote, Code, Anchor, Variable, Panel} from "@steffo/bluelib-react"
import type { NextPage, NextPageContext } from 'next'
import { Link } from '../../../components/link'


const r = String.raw

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
            <Box>
                <Heading level={3}>
                    Documenti
                </Heading>
                <p>
                    Raccolte di dati in formato <B>BSON</B> (simil-JSON binario).
                </p>
                <Parenthesis>
                    Come i <B>record</B> di un database relazionale!
                </Parenthesis>
            </Box>
            <Box>
                <Heading level={3}>
                    Collezioni
                </Heading>
                <p>
                    <B>Insiemi di documenti</B> <U>senza uno schema fisso</U>, ma con un <B>indice in comune</B>.
                </p>
                <Parenthesis>
                    Come le <B>tables</B> relazionali, ma più flessibili!
                </Parenthesis>
            </Box>
            <Box>
                <Heading level={3}>
                    Database
                </Heading>
                <p>
                    <B>Insiemi di collezioni</B>.
                </p>
                <Parenthesis>
                    È esattamente uguale al mondo relazionale. Non c'è molto da dire a riguardo.
                </Parenthesis>
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
                    Fornisce <B><I>data locality</I></B>, quindi è più veloce per <B>operazioni molto frequenti</B>, ma a costo di spazio di archiviazione.
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
        <Chapter>
            <Heading level={2}>
                Accedere a MongoDB
            </Heading>
            <Parenthesis builtinColor={"magenta"}>
                <Heading level={3}>
                    Override
                </Heading>
                <p>
                    Il prof. consiglia di usare <Anchor href={"https://robomongo.org/"}>Robo 3T</Anchor>, ma è end-of-life.
                </p>
                <p>
                    In questo sito userò invece la shell integrata a IntelliJ IDEA Ultimate.
                </p>
                <p>
                    Tutte le differenze saranno evidenziate in magenta.
                </p>
            </Parenthesis>
        </Chapter>
        <Chapter>
            <Box todo>
                <Heading level={3}>
                    <U>C</U>reazione
                </Heading>
                <Parenthesis builtinColor={"magenta"}>
                    Il metodo consigliato nelle slides, <Code>db.<Variable>COLLEZIONE</Variable>.insert(...)</Code>, è deprecato.
                </Parenthesis>
                <p>
                    È possibile inserire un documento all'interno di una collezione con:
                </p>
                <Panel>
                    <Code>db.<Variable>COLLEZIONE</Variable><br/>.insertOne(<Variable>DOCUMENTO</Variable>)</Code>
                </Panel>
                <p>
                    È possibile inserire tanti documenti all'interno della stessa collezione con:
                </p>
                <Panel>
                    <Code>db.<Variable>COLLEZIONE</Variable><br/>.insertMany([<Variable>DOCUMENTO1</Variable>, <Variable>DOCUMENTO2</Variable>, ...])</Code>
                </Panel>
            </Box>
            <Box todo>
                <Heading level={3}>
                    <U>R</U>icerca
                </Heading>
                <p>
                    È possibile recuperare tutti i documenti di una collezione con:
                </p>
                <Panel>
                    <Code>db.<Variable>COLLEZIONE</Variable>.find()</Code>
                </Panel>
                <p>
                    È possibile effettuare <B>filtraggio</B> e <B>proiezione</B> tramite le opzioni <Variable>FILTRI</Variable> e <Variable>PROIEZIONI</Variable> di <Code>find</Code>:
                </p>
                <Panel>
                    <Code>db.<Variable>COLLEZIONE</Variable>.find({"{"}<Variable>...FILTRI</Variable>{"}"}, {"{"}<Variable>...PROIEZIONI</Variable>{"}"})</Code>
                </Panel>
                <p>
                    È anche possibile effettuare <B>ordinamenti</B> e <B>limitazioni</B>:
                </p>
                <Panel>
                    <Code>db.<Variable>COLLEZIONE</Variable><br/>
                        .find(...)<br/>
                        .sort({"{"}<Variable>...CRITERI</Variable>{"}"})<br/>
                        .limit(<Variable>LIMITE</Variable>)</Code>
                </Panel>
                <p>
                    Oppure recuperare un documento solo, invece che un array di documenti:
                </p>
                <Panel>
                    <Code>db.<Variable>COLLEZIONE</Variable>.findOne(...)</Code>
                </Panel>
            </Box>
        </Chapter>
    </>
}

export default Page
