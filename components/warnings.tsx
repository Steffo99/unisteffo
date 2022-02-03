import { Panel, BringAttention as B, Anchor as A } from "@steffo/bluelib-react"


export const Unchecked = () => {
    return (
        <Panel builtinColor="yellow">
            <B>⚠️ Attenzione:</B> questi materiali non sono stati ricontrollati da quando sono stati scritti, e potrebbero contenere errori!<br/>
        </Panel>
    )
}

export const Incomplete = () => {
    return (
        <Panel builtinColor="yellow">
            <B>⚠️ Attenzione:</B> questi materiali non coprono tutto il programma, e non sono quindi sufficienti per dare l&apos;esame!<br/>
        </Panel>
    )
}

export const Reordered = () => {
    return (
        <Panel builtinColor="yellow">
            <B>⚠️ Attenzione:</B> questi materiali sono stati raccolti e ordinati successivamente alla scrittura, e potrebbero essere in ordine sbagliato!<br/>
        </Panel>
    )
}

export const Blocked = () => {
    return (
        <Panel builtinColor="red">
            <B>🚫 Blocco:</B> alcuni materiali esterni al sito non sono più disponibili.<br/>
        </Panel>
    )
}

export const Ported = () => {
    return (
        <Panel builtinColor="blue">
            <B>🗒️ Nota:</B> questi materiali sono stati importati da una versione vecchia di Bluelib, e potrebbero non essere visualizzati correttamente.<br/>
            <small>Se ti accorgi di un problema di visualizzazione, fammelo sapere <A href="https://github.com/Steffo99/appuntiweb-omega/issues">su GitHub</A>!</small>
        </Panel>
    )
}
