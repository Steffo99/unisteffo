import {Component} from 'preact'
import Split from "../components/old/split";
import Panel from "../components/Elements/Panel";
import Example from "../components/example";
import Code from "../components/old/code";

const r = String.raw;

export default class ApprendimentoSistemiArtificiali extends Component {
    render() {
        return (
            <div>
                <h1>Apprendimento ed evoluzione in sistemi artificiali</h1>
                <Split title={"NetLogo"}>
                    <Panel title={"Cos'è?"}>
                        <p>
                            NetLogo è un software di modellazione sistemi multiagente.
                        </p>
                        <p>
                            Si può <a href={"https://ccl.northwestern.edu/netlogo/download.shtml"}>scaricare</a> o <a href={"https://www.netlogoweb.org/launch"}>usare da browser</a>.
                        </p>
                        <p>
                            Il suo codice sorgente è disponibile su <a href={"https://github.com/NetLogo/NetLogo"}>GitHub</a>, e ha una pagina di <a href={"https://ccl.northwestern.edu/netlogo/docs/dictionary.html"}>documentazione</a>.
                        </p>
                    </Panel>
                </Split>
                <Split title={"Agenti di NetLogo"}>
                    <Panel title={"Observer"}>
                        <p>
                            L'<b>utente</b> di NetLogo, che vive nel contesto globale e dà ordini agli altri agenti.
                        </p>
                    </Panel>
                    <Panel title={"Turtle"}>
                        <p>
                            Entità che possono <b>muoversi</b> per il mondo.
                        </p>
                        <Example>
                            Sono più o meno come le <a href={"https://www.computercraft.info/wiki/Turtle"}>Turtle di Computercraft</a>!
                        </Example>
                        <p>
                            Possono essere di una <i>breed</i> (razza) specifica, definite con:
                        </p>
                        <Code>{r`breed [<plurale> <singolare>]`}</Code>
                        <Example>
                            Le breed sono praticamente sottoclassi di turtle.
                        </Example>
                    </Panel>
                    <Panel title={"Patch"}>
                        <p>
                            I <b>quadratini</b> del mondo. Possono essere di vari colori e avere varie proprietà.
                        </p>
                        <Example>
                            ...possiamo dire che questi siano i blocchi di Minecraft?
                        </Example>
                    </Panel>
                    <Panel title={"Link"}>
                        <p>
                            <b>Collegamenti</b> tra due turtle.
                        </p>
                    </Panel>
                </Split>
                <Split title={"Creazione di agenti"}>
                    <Panel title={"Observer"}>
                        <p>
                            L'observer viene creato automaticamente all'apertura della simulazione.
                        </p>
                    </Panel>
                    <Panel title={"Turtle"}>
                        <p>
                            Nuove turtle possono essere create con il comando:
                        </p>
                        <Code>{r`<prefisso>-<breed> <quantità>`}</Code>
                        <p>
                            Dove prefisso varia in base al contesto attuale:
                        </p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Contesto</th>
                                    <th>Prefisso</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Observer</td>
                                    <td><code>{r`create`}</code></td>
                                </tr>
                                <tr>
                                    <td>Turtle</td>
                                    <td><code>{r`hatch`}</code></td>
                                </tr>
                                <tr>
                                    <td>Patch</td>
                                    <td><code>{r`sprout`}</code></td>
                                </tr>
                            </tbody>
                        </table>
                    </Panel>
                </Split>
                <Split title={"Variabili"}>
                    <Panel title={"Observer"}>
                        <p>
                            All'inizio del codice:
                        </p>
                        <Code>{`globals [var1 var2 var3]`}</Code>
                        <Example>
                            Sono a tutti gli effetti variabili globali.
                        </Example>
                    </Panel>
                    <Panel title={"Turtle"}>
                        <p>
                            Aggiungi proprietà a tutte le turtle:
                        </p>
                        <Code>{`turtles-own [var1 var2 var3]`}</Code>
                        <p>
                            Aggiungi proprietà alle turtle di un breed:
                        </p>
                        <Code>{`<breed>-own [var1 var2 var3]`}</Code>
                    </Panel>
                    <Panel title={"Patch"}>
                        <p>
                            Aggiungi proprietà alle patch:
                        </p>
                        <Code>{r`patches-own [var1 var2 var3]`}</Code>
                    </Panel>
                    <Panel title={"Link"}>
                        <p>
                            Aggiungi proprietà ai link:
                        </p>
                        <Code>{r`links-own [var1 var2 var3]`}</Code>
                    </Panel>
                </Split>
                <Split>
                    <Panel title={"Locali"}>
                        <p>
                            Si possono creare con:
                        </p>
                        <Code>{r`let <nome> <valore>`}</Code>
                    </Panel>
                    <Panel title={"Set"}>
                        <p>
                            Si può impostare il valore di una variabile con:
                        </p>
                        <Code>{r`set <nome> <valore>`}</Code>
                    </Panel>
                </Split>
                <Split title={"Blocchi di codice"}>
                    <Panel title={"Cambi di contesto"}>
                        <p>
                            Per cambiare contesto:
                        </p>
                        <Code>{r`
                            ask <bersaglio> [
                                <blocco di codice>
                            ]
                        `}</Code>
                        <p>
                            Nel caso ci siano più bersagli, verranno eseguiti uno
                        </p>
                    </Panel>
                    <Panel title={"Commands"}>
                        <p>
                            Funzioni che non restituiscono nulla:
                        </p>
                        <Code>{r`
                            to <nome>
                                <blocco di codice>
                            end
                        `}</Code>
                        <p>
                            Con argomenti:
                        </p>
                        <Code>{r`
                            to <nome> [var1 var2 var3]
                                <blocco di codice>
                            end
                        `}</Code>
                    </Panel>
                    <Panel title={"Reporter"}>
                        <p>
                            Funzioni che restituiscono un valore:
                        </p>
                        <Code>{r`
                            to-report <nome> [var1 var2 var3]
                                <blocco di codice>
                                report <restituito>
                            end
                        `}</Code>
                    </Panel>
                </Split>
                <Split title={"Comandi per turtle"}>
                    <Panel title={"Avanti"}>
                        <p>
                            Muoviti di 10 unità:
                        </p>
                        <Code>{r`
                            forward 10
                            back 10
                        `}</Code>
                        <p>
                            Nota che la velocità massima delle tartarughe è di 1 unità/tick, quindi muoversi di 10 unità richiederà 10 tick.
                        </p>
                    </Panel>
                    <Panel title={"Ruota"}>
                        <p>
                            Ruota di 10 gradi:
                        </p>
                        <Code>{r`
                            left 10
                            right 10
                        `}</Code>
                    </Panel>
                </Split>

            </div>
        )
    }
}
