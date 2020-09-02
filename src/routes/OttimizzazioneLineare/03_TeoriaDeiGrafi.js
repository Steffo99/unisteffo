import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex, Todo, BaseLink, Image} from "bluelib";
import Example from "../../components/Example";

const r = String.raw;


export default function () {
    return (
        <Fragment>
            <Section title={<span>Terminologia dei grafi <Todo>TODO: migliorare</Todo></span>}>
                <Panel title={"Grafo"}>
                    <p>
                        Insieme di <b>nodi</b> <ILatex>{r`N`}</ILatex> e <b>archi</b> <ILatex>{r`E`}</ILatex> che li
                        connettono.
                    </p>
                    <p>
                        Può essere <b>diretto</b> se gli archi hanno una direzione.
                    </p>
                </Panel>
                <Panel title={"Nodi adiacenti"}>
                    <p>
                        Nodi <b>connessi da un arco</b>.
                    </p>
                </Panel>
                <Panel title={"Arco incidente"}>
                    <p>
                        Arco <b>connesso a un dato nodo</b>.
                    </p>
                </Panel>
                <Panel title={"Arco entrante o uscente"}>
                    <p>
                        Un arco diretto che <b>termina</b> o <b>inizia</b> da un dato nodo.
                    </p>
                </Panel>
                <Panel title={"Grado"}>
                    <p>
                        <b>Conteggio</b> degli archi incidenti di un nodo.
                    </p>
                    <p>
                        Si può calcolare anche relativamente agli archi entranti o agli archi uscenti.
                    </p>
                </Panel>
                <Panel title={"Percorso"}>
                    <p>
                        Sequenza di <b>archi consecutivi</b>.
                    </p>
                </Panel>
                <Panel title={"Connessione"}>
                    <p>
                        Due nodi sono connessi se tra loro esiste <b>almeno un percorso</b>.
                    </p>
                    <p>
                        Un grafo è connesso se tutti i suoi nodi sono connessi.
                    </p>
                </Panel>
                <Panel title={"Cicli e circuiti"}>
                    <p>
                        Percorsi rispettivamente indiretti e diretti in cui l'inizio coincide con la fine.
                    </p>
                </Panel>
                <Panel title={"Grafo completo"}>
                    <p>
                        Grafo in cui ogni nodo è connesso con ogni altro.
                    </p>
                    <p>
                        Se diretto, contiene <ILatex>{r`n \cdot (n - 1)`}</ILatex> archi; altrimenti, ne contiene la
                        metà.
                    </p>
                </Panel>
                <Panel title={"Matrice di adiacenza"}>
                    <blockquote>
                        Vedi <BaseLink href={"/algoritmiestrutturedati"}>Algoritmi</BaseLink>.
                    </blockquote>
                </Panel>
                <Panel title={"Lista di adiacenza"}>
                    <blockquote>
                        Vedi <BaseLink href={"/algoritmiestrutturedati"}>Algoritmi</BaseLink>.
                    </blockquote>
                </Panel>
                <Panel title={"Taglio"}>
                    <p>
                        Sottoinsieme di archi che connettono due sottoinsiemi di nodi.
                    </p>
                    <p>
                        Può essere anche uscente o entrante; in tal caso include solo gli archi entranti o uscenti dal
                        sottoinsieme.
                    </p>
                </Panel>
                <Panel title={"Sottografo"}>
                    <p>
                        Sottoinsieme di nodi e archi di un grafo.
                    </p>
                    <p>
                        Tutti gli archi di un sottografo possono connettere solo nodi all'interno di esso.
                    </p>
                </Panel>
                <Panel title={"Albero"}>
                    <p>
                        Sottografo connesso e aciclico.
                    </p>
                </Panel>
                <Panel title={"Spanning tree"}>
                    <p>
                        Albero che include tutti i nodi di un grafo.
                    </p>
                </Panel>
            </Section>
            <Section title={"Algoritmi con i grafi"}>
                <Panel title={"Prim"}>
                    <p>
                        Crea uno spanning tree.
                    </p>
                    <ol>
                        <li>Aggiungi l'arco di costo minimo all'albero.</li>
                        <li>Finchè mancano ancora archi:
                            <ol>
                                <li>Trova tutti gli archi che aggiungerebbero un nuovo nodo all'albero.</li>
                                <li>Seleziona l'arco di costo minore.</li>
                            </ol>
                        </li>
                    </ol>
                </Panel>
                <Panel title={"Ordine topologico"}>
                    <p>
                        Trova l'ordine topologico di un albero.
                    </p>
                    <ol>
                        <li>Ripeti finchè ci sono nodi nel grafo:
                            <ol>
                                <li>Assegna un numero sequenziale a un nodo senza archi entranti.</li>
                                <li>Elimina il nodo a cui hai assegnato il numero.</li>
                                <li>Elimina tutti gli archi incidenti sul nodo che hai eliminato.</li>
                            </ol>
                        </li>
                    </ol>
                </Panel>
                <Panel title={"Percorsi minimi in grafo diretto"}>
                    <p>
                        Trova i percorsi di costo minimo in un albero.
                    </p>
                    <ol>
                        <li>Trova l'ordine topologico dell'albero.</li>
                        <li>Invece che provare ogni singola combinazione di nodi, prova solo i nodi che hanno un numero
                            topologico maggiore di quello del nodo attuale.
                        </li>
                    </ol>
                    <p>
                        <Todo>TODO: forse spiegarlo meglio non farebbe male</Todo>
                    </p>
                </Panel>
                <Panel title={"Algoritmo di Dijkstra"}>
                    <blockquote>
                        Vedi <BaseLink href={"/algoritmiestrutturedati"}>Algoritmi</BaseLink>.
                    </blockquote>
                </Panel>
                <Panel title={"Algoritmo di Ford-Fulkerson"}>
                    <Example>
                        Trova il volume massimo di acqua che è possibile fare scorrere attraverso tubature con una data
                        capacità.
                    </Example>
                    <p>
                        Costruisci il grafo residuo e vedi se c'è un percorso che va dalla sorgente alla destinazione.
                    </p>
                    <p>
                        <Image src={"https://i.imgur.com/FJk44q0.png"}/>
                    </p>
                    <p>
                        <Image src={"https://i.imgur.com/fzb6xz2.png"}/>
                    </p>
                </Panel>
            </Section>
        </Fragment>
    )
}
