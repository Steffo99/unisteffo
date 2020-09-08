import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex} from "bluelib";
import Min from "../../components/OttimizzazioneLineare/Min";
import Max from "../../components/OttimizzazioneLineare/Max";
import Example from "../../components/Example";
import Empty from "../../components/OttimizzazioneLineare/Empty";

const r = String.raw;


export default function () {
    return (
        <Fragment>
            <Section title={"Ottimizzazione lineare intera"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Particolari problemi di ottimizzazione lineare in cui le <b>variabili sono vincolate ad essere
                        numeri interi</b>.
                    </p>
                    <PLatex>{r`
                        \mathbf{x} \in \mathbb{Z}^n
                    `}</PLatex>
                    <p>
                        Spesso detti anche <i>problemi di <abbr title={"Integer Linear Programming"}>ILP</abbr></i>.
                    </p>
                </Panel>
                <Panel title={"Rilassamento lineare"}>
                    <p>
                        Un rilassamento che rimuove il <b>vincolo di integrità</b> a un problema, trovando la sua <b>soluzione
                        continua</b>.
                    </p>
                </Panel>
            </Section>
            <Section title={"Dal rilassamento alla soluzione"}>
                <Panel title={"Enumerazione totale"}>
                    <p>
                        Un <b>modo</b> per passare dalla soluzione del rilassamento alla soluzione intera di un problema
                        di ILP.
                    </p>
                    <p>
                        Consiste nel calcolare la soluzione di ogni singolo punto incluso nel poliedro, e selezionare
                        la <Min>minore</Min>/<Max>maggiore</Max>.
                    </p>
                    <p>
                        Trova <b>sicuramente</b> la soluzione giusta, ma il costo computazionale è
                        esponenziale <ILatex>O(n^k)</ILatex>!
                    </p>
                </Panel>
                <Panel title={"Arrotondamento"}>
                    <p>
                        Un altro <b>modo</b> per passare dalla soluzione del rilassamento alla soluzione intera di un
                        problema di ILP.
                    </p>
                    <p>
                        Consiste nell'<b>arrotondare tutte le variabili al loro valore intero più vicino</b>, e
                        calcolarne il valore ottimo.
                    </p>
                    <p>
                        Funziona bene per valori grandi, ma più essi si avvicinano allo 0 più l'<b>errore diventa
                        grande</b>.
                    </p>
                </Panel>
                <Panel title={"Piani secanti"}>
                    <p>
                        Un altro <b>modo</b> ancora per passare dalla soluzione del rilassamento alla soluzione intera
                        di un problema di ILP.
                    </p>
                    <p>
                        Consiste nel tagliare il poliedro con nuovi vincoli (<i>piani secanti</i>) che <b>riducono le
                        possibili soluzioni continue</b> ma non quelle intere.
                    </p>
                    <p>
                        Per selezionare i vincoli, si usano i <b>tagli di Gomory</b>:
                    </p>
                    <PLatex>{r`
                        \sum_{j \in F} \left( \left( a_{tj} - \lfloor a_{tj} \rfloor \right) \cdot x_j \right) \geq (b_t - \lfloor b_t \rfloor)
                    `}</PLatex>
                    <p>
                        Per ogni valore noto frazionario si viene quindi a creare <b>una nuova variabile in base</b> e
                        un nuovo vincolo formato dall'opposto di tutti i valori frazionari dei coefficienti fuori base.
                    </p>
                    <Example>
                        <p>
                            Il tableau:
                            <table>
                                <thead>
                                <tr>
                                    <th><BLatex>{r`x_1`}</BLatex></th>
                                    <th><BLatex>{r`x_2`}</BLatex></th>
                                    <th><BLatex>{r`s_1`}</BLatex></th>
                                    <th><BLatex>{r`s_2`}</BLatex></th>
                                    <th><abbr title={"Termine noto"}>TN</abbr></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><BLatex>{r`1`}</BLatex></td>
                                    <td><BLatex>{r`1`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                </tr>
                                <tr>
                                    <td><BLatex>{r`1`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`1`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`3`}</BLatex></td>
                                </tr>
                                <tr>
                                    <td><BLatex>{r`\frac{3}{2}`}</BLatex></td>
                                    <td><BLatex>{r`\frac{1}{2}`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`1`}</BLatex></td>
                                    <td><BLatex>{r`\frac{6}{5}`}</BLatex></td>
                                </tr>
                                </tbody>
                            </table>
                        </p>
                        <p>
                            Diventa:
                            <table>
                                <thead>
                                <tr>
                                    <th><BLatex>{r`x_1`}</BLatex></th>
                                    <th><BLatex>{r`x_2`}</BLatex></th>
                                    <th><BLatex>{r`s_1`}</BLatex></th>
                                    <th><BLatex>{r`s_2`}</BLatex></th>
                                    <th style={"background-color: rgba(255, 255, 0, 0.1);"}><BLatex>{r`s_3`}</BLatex>
                                    </th>
                                    <th><abbr title={"Termine noto"}>TN</abbr></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><BLatex>{r`1`}</BLatex></td>
                                    <td><BLatex>{r`1`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td style={"background-color: rgba(255, 255, 0, 0.1);"}><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                </tr>
                                <tr>
                                    <td><BLatex>{r`1`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`1`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td style={"background-color: rgba(255, 255, 0, 0.1);"}><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`3`}</BLatex></td>
                                </tr>
                                <tr>
                                    <td><BLatex>{r`\frac{3}{2}`}</BLatex></td>
                                    <td><BLatex>{r`\frac{1}{2}`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`1`}</BLatex></td>
                                    <td style={"background-color: rgba(255, 255, 0, 0.1);"}><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`\frac{6}{5}`}</BLatex></td>
                                </tr>
                                <tr style={"background-color: rgba(255, 255, 0, 0.1);"}>
                                    <td><BLatex>{r`-\frac{1}{2}`}</BLatex></td>
                                    <td><BLatex>{r`-\frac{1}{2}`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td style={"background-color: rgba(255, 255, 0, 0.2);"}><BLatex>{r`1`}</BLatex></td>
                                    <td><BLatex>{r`-\frac{1}{5}`}</BLatex></td>
                                </tr>
                                </tbody>
                            </table>
                        </p>
                    </Example>
                </Panel>
                <Panel title={"Divide et impera"}>
                    <p>
                        È possibile usare la tecnica <i>divide et impera</i> per rendere più efficiente l'<b>enumerazione
                        totale</b>.
                    </p>
                    <p>
                        Si divide il problema principale (trovare il valore ottimo di un problema di ILP) in più
                        sottoproblemi (trovare il valore ottimo di un problema di ILP con una variabile impostata a un
                        valore fisso).
                    </p>
                    <p>
                        Si crea così un <b>albero</b>.
                    </p>
                    <p>
                        È possibile <b>chiudere in anticipo</b> alcuni nodi dell'albero se il loro miglior possibile
                        valore ottimo è inferiore a uno precedentemente trovato o se il loro poliedro è <Empty/>.
                    </p>
                    <p>
                        È possibile utilizzare diverse <b>strategie di esplorazione</b> dell'albero:
                        <ul>
                            <li><b>depth-first</b>: permette di raggiungere immediatamente a una soluzione accettabile
                                (ma non ottimale)
                            </li>
                            <li><b>best-first</b>: permette di raggiungere più velocemente alla soluzione corretta</li>
                        </ul>
                    </p>
                </Panel>
                <Panel title={"Seca et impera"}>
                    <p>
                        È possibile combinare il metodo dei <b>tagli secanti</b> con la tecnica <b>divide et
                        impera</b> per raggiungere ancora più velocemente a una soluzione.
                    </p>
                    <p>
                        Si effettuano <b>poche iterazioni</b> del metodo dei tagli secanti, e sul risultato di quelle
                        iterazioni si applica il <b>divide et impera</b>.
                    </p>
                </Panel>
            </Section>
        </Fragment>
    )
}
