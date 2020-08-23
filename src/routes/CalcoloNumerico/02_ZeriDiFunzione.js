import style from "./02_ZeriDiFunzione.less";
import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex, Todo} from "bluelib";

const r = String.raw;


export default function (props) {
    return (
        <Fragment>
            <Section title={"Problema: Ricerca degli zeri di funzione"}>
                <Panel title={"Descrizione"}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={"Condizionamento"}>
                    <Todo>TODO</Todo>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Metodi dicotomici"}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={"Metodo delle approssimazioni successive"}>
                    <Todo>TODO</Todo>
                </Panel>
            </Section>
            <Section title={"Metodi dicotomici"}>
                <Panel title={"Metodo di bisezione"}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={"Metodo regula falsi"}>
                    <Todo>TODO</Todo>
                </Panel>
            </Section>
            <Section title={"Metodo delle approssimazioni successive"}>
                <Panel title={"Metodo generale"}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={"Metodo di Newton"}>
                    <Todo>TODO</Todo>
                </Panel>
            </Section>
        </Fragment>
    )
}
