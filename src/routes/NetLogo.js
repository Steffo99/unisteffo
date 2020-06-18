import {Section, Panel, Code} from "bluelib";
import Example from "../components/Example";

const r = String.raw;


export default function(props) {
    return (
        <div>
            <h1>
                <a href={"/apprendimento"}>Apprendimento</a>: NetLogo
            </h1>
            <Section title={"Agenti di NetLogo"}>
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
                    <Code language={"lisp"}>{r`breed [<plurale> <singolare>]`}</Code>
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
            </Section>
            <Section title={"Creazione di agenti"}>
                <Panel title={"Observer"}>
                    <p>
                        L'observer viene creato automaticamente all'apertura della simulazione.
                    </p>
                </Panel>
                <Panel title={"Turtle"}>
                    <p>
                        Nuove turtle possono essere create con il comando:
                    </p>
                    <Code language={"lisp"}>{r`<prefisso>-<breed> <quantità>`}</Code>
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
                            <td><Code language={"lisp"}>{r`create`}</Code></td>
                        </tr>
                        <tr>
                            <td>Turtle</td>
                            <td><Code language={"lisp"}>{r`hatch`}</Code></td>
                        </tr>
                        <tr>
                            <td>Patch</td>
                            <td><Code language={"lisp"}>{r`sprout`}</Code></td>
                        </tr>
                        </tbody>
                    </table>
                </Panel>
            </Section>
            <Section title={"Variabili"}>
                <Panel title={"Observer"}>
                    <p>
                        All'inizio del codice:
                    </p>
                    <Code language={"lisp"}>{`globals [var1 var2 var3]`}</Code>
                    <Example>
                        Sono a tutti gli effetti variabili globali.
                    </Example>
                </Panel>
                <Panel title={"Turtle"}>
                    <p>
                        Aggiungi proprietà a tutte le turtle:
                    </p>
                    <Code language={"lisp"}>{`turtles-own [var1 var2 var3]`}</Code>
                    <p>
                        Aggiungi proprietà alle turtle di un breed:
                    </p>
                    <Code language={"lisp"}>{`<breed>-own [var1 var2 var3]`}</Code>
                </Panel>
                <Panel title={"Patch"}>
                    <p>
                        Aggiungi proprietà alle patch:
                    </p>
                    <Code language={"lisp"}>{r`patches-own [var1 var2 var3]`}</Code>
                </Panel>
                <Panel title={"Link"}>
                    <p>
                        Aggiungi proprietà ai link:
                    </p>
                    <Code language={"lisp"}>{r`links-own [var1 var2 var3]`}</Code>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Locali"}>
                    <p>
                        Si possono creare con:
                    </p>
                    <Code language={"lisp"}>{r`let <nome> <valore>`}</Code>
                </Panel>
                <Panel title={"Set"}>
                    <p>
                        Si può impostare il valore di una variabile con:
                    </p>
                    <Code language={"lisp"}>{r`set <nome> <valore>`}</Code>
                </Panel>
            </Section>
            <Section title={"Blocchi di codice"}>
                <Panel title={"Cambi di contesto"}>
                    <p>
                        Per cambiare contesto:
                    </p>
                    <Code language={"lisp"}>{r`
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
                    <Code language={"lisp"}>{r`
                        to <nome>
                            <blocco di codice>
                        end
                    `}</Code>
                    <p>
                        Con argomenti:
                    </p>
                    <Code language={"lisp"}>{r`
                        to <nome> [var1 var2 var3]
                            <blocco di codice>
                        end
                    `}</Code>
                </Panel>
                <Panel title={"Reporter"}>
                    <p>
                        Funzioni che restituiscono un valore:
                    </p>
                    <Code language={"lisp"}>{r`
                        to-report <nome> [var1 var2 var3]
                            <blocco di codice>
                            report <restituito>
                        end
                    `}</Code>
                </Panel>
            </Section>
            <Section title={"Comandi per turtle"}>
                <Panel title={"Avanti"}>
                    <p>
                        Muoviti di 10 unità:
                    </p>
                    <Code language={"lisp"}>{r`
                        forward 10
                        back 10
                    `}</Code>
                </Panel>
                <Panel title={"Ruota"}>
                    <p>
                        Ruota di 10 gradi:
                    </p>
                    <Code language={"lisp"}>{r`
                        left 10
                        right 10
                    `}</Code>
                </Panel>
            </Section>
        </div>
    )
}
