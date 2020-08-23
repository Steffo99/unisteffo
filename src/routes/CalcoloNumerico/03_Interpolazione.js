import style from "./03_Interpolazione.less";
import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex, Todo} from "bluelib";
import Example from "../../components/Example";

const r = String.raw;


export default function (props) {
    return (
        <Fragment>
            <Section title={"Problema: Interpolazione"}>
                <Panel title={"Descrizione"}>
                    <p>
                        Si vuole trovare una funzione in grado di <b>approssimarne</b> un altra, di cui si conoscono però solo alcuni punti.
                    </p>
                    <Example>
                        È utile in un sacco di casi! Ad esempio, quando si vuole scalare un'immagine.
                    </Example>
                </Panel>
            </Section>
            <Section title={"Metodi di interpolazione"}>
                <Panel title={"Metodo dei coefficienti indeterminati"}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={"Metodo di Lagrange"}>
                    <Todo>TODO</Todo>
                </Panel>
            </Section>
            <Section title={"Resto di interpolazione"}>
                <Panel title={"Definizione"}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={"Stima"}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={"Fenomeno di Runge"}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={"Nodi di Chebychev"}>
                    <Todo>TODO</Todo>
                </Panel>
            </Section>
        </Fragment>
    )
}
