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
                        Si crea un <i>vocabolario</i> dall'<b>insieme dei token</b>, e ad ogni <b>token</b> del vocabolario si associa una <b>lista ordinata di tutte le sue occorrenze</b> (<i>posting list</i>).
                    </p>
                    <p>
                        L'efficacia ed efficienza dell'indice dipendono dalle <i>strutture di indicizzazione</i> utilizzate per serializzarlo.
                    </p>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Vocabolario"}>
                    <p>
                        <b>Insieme</b> di <b>tutti i token</b> ricercabili.
                    </p>
                    <p>
                        Può essere implementato con diverse strutture dati:
                    </p>
                    <ul>
                        <li>
                            <b>Array ordinato</b>, utilizzando la <b>bisezione</b> per gli accessi;
                            <Code>{r`
                                ciao → R1, R15, R123
                                steffo → R1, R14
                                ciano → R1231
                            `}</Code>
                        </li>
                        <li>
                            <b>Prefix tree</b> (<i>trie</i>), utilizzando le <b>proprietà degli alberi</b> per gli accessi;
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
                        </li>
                        <li>
                            <b>Suffix tree</b>, come il prefix tree ma partendo dall'ultima lettera
                        </li>
                        <li>
                            <b>B+ tree</b>, utilizzando le <b>proprietà degli alberi B+</b> per gli accessi
                            <Example>
                                <Link href={"https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html"}>Visualizzazione di un B+ tree</Link>
                            </Example>
                            <Example>
                                È la stessa struttura utilizzata dai <BaseLink href={"/basididati"}>database relazionali</BaseLink>.
                            </Example>
                        </li>
                        <li>
                            <b>Dizionario</b>, utilizzando gli <b>hash</b> per gli accessi.
                        </li>
                    </ul>
                    <p>
                        Per permettere <i>pattern-based query</i>, è possibile utilizzare <b>più vocabolari</b> per un singolo documento.
                    </p>
                </Panel>
                <Panel title={"Posting list"}>
                    <p>
                        <b>Insieme</b> di <b>tutte le occorrenze</b> di un determinato token.
                    </p>
                    <p>
                        Viene implementata attraverso una <b>lista ordinata</b> (<i>sorted list</i>).
                    </p>
                    <p>
                        Essendo ordinata, è efficiente <ILatex>{r`O(n + m)`}</ILatex> nelle operazioni di <b>unione</b> e <b>intersezione</b> tra più posting list: si mantiene su ognuna un <b>cursore</b> che avanza quando l'occorrenza a cui punta è stata superata.
                    </p>
                    <p>
                        Non è però efficiente nelle operazioni di <b>negazione</b>.
                    </p>
                    <p>
                        È possibile aggiungere <i>skip pointers</i> alle posting list, in modo da rendere più efficiente l'intersezione.
                    </p>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Utilizzo dell'indice"}>
                    <p>
                        Per effettuare una ricerca utilizzando l'indice, sono necessari i seguenti passi:
                    </p>
                    <ol>
                        <li>Si <b>cercano</b> individualmente i termini della query nel vocabolario</li>
                        <li>Si <b>accede</b> alle posting list dei vari termini</li>
                        <li>Si <b>effettuano</b> operazioni logiche sui dati delle posting list</li>
                        <li>Si <b>restituisce</b> il sottoinsieme di token risultante</li>
                    </ol>
                </Panel>
            </Section>
        </Fragment>
    )
}
