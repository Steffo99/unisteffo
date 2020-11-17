import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex, Code, BaseLink} from "bluelib";
import Example from "../../components/Example";
import Link from "../../components/Link";

const r = String.raw;


export default function () {
    return (
        <Fragment>
            <Section title={"Indicizzazione"}>
                <Panel title={"Inverted index"}>
                    <p>
                        Una <b>struttura dati</b> che permette di velocizzare le ricerche su testi <b>grandi</b> e <b>semi-statici</b>.
                    </p>
                    <aside>
                        <u>Testo semi-statico</u>: un testo che viene aggiornato raramente.
                    </aside>
                    <p>
                        Si crea un <i>vocabolario</i> dall'<b>insieme dei token</b>, e ad ogni <b>token</b> del vocabolario si associa una <b>lista di tutte le sue occorrenze</b> (<i>posting list</i>).
                    </p>
                    <p>
                        L'efficacia ed efficienza dell'indice dipendono dalle <i>strutture di indicizzazione</i> utilizzate per serializzarlo.
                    </p>
                </Panel>
            </Section>
            <Section title={"Strutture di indicizzazione"}>
                <Panel title={"Sorted array"}>
                    <p>
                        Struttura per rappresentare il vocabolario basata su un <b>array di puntatori</b> alle posting list.
                    </p>
                    <Code>{r`
                        ciao → R1, R15, R123
                        steffo → R1, R14
                        ciano → R1231
                    `}</Code>
                </Panel>
                <Panel title={"Trie"}>
                    <p>
                        Struttura per rappresentare il vocabolario basata su un <b>albero dei prefissi dei token</b>,:
                    </p>
                    <ul>
                        <li>ogni arco corrisponde a <b>una lettera del prefisso</b>;</li>
                        <li>ogni foglia corrisponde a <b>un token</b> e contiene un puntatore alla sua <b>posting list</b>.</li>
                    </ul>
                    <Code>{r`
                        - [root]
                          - c
                            - i
                              - a
                                - o
                                  - R1
                                  - R15
                                  - R123
                                - no
                                  - R1231
                          - steffo
                            - R1
                            - R14
                    `}</Code>
                </Panel>
                <Panel title={"B+ tree"}>
                    <p>
                        Struttura per rappresentare il vocabolario che <b>occupa più spazio di un albero</b> ma permette di effettuare <b>certe operazioni più velocemente</b>.
                    </p>
                    <Example>
                        <Link href={"https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html"}>Visualizzazione di un B+ tree</Link>
                    </Example>
                    <Example>
                        L'abbiamo fatta in <BaseLink href={"/basididati"}>Basi di dati</BaseLink>!
                    </Example>
                </Panel>
            </Section>
            <Section title={"Utilizzo dell'indice"}>
                <Panel title={"Passi"}>
                    <ol>
                        <li><u>Vocabulary search</u>: si cercano <b>individualmente</b> i termini della query nel vocabolario</li>
                        <li><u>Occurences retrieval</u>: si <b>raccolgono le posting list</b> dei vari termini</li>
                        <li><u>Occurences manipulation</u>: si manipolano i dati delle posting list in modo da risolvere le query, restituendo quindi un <b>sottoinsieme delle occorrenze</b></li>
                    </ol>
                    <p>
                        In base alla struttura utilizzata, potrebbe non essere sempre possibile effettuare il terzo passo.
                    </p>
                    <Example>
                        Non è possibile cercare prefissi se è stato utilizzato l'hashing!
                    </Example>
                </Panel>
            </Section>
        </Fragment>
    )
}
