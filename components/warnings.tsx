import { Panel, BringAttention as B } from "@steffo/bluelib-react"


export const WarningUnchecked = () => {
    return (
        <Panel builtinColor="yellow">
            <B>⚠️ Attenzione:</B> questi materiali non sono stati ricontrollati da quando sono stati scritti, e potrebbero contenere errori!<br/>
            <small>Usali a tuo rischio e pericolo!</small>
        </Panel>
    )
}

export const WarningIncomplete = () => {
    return (
        <Panel builtinColor="yellow">
            <B>⚠️ Attenzione:</B> questi materiali non coprono tutto il programma, e non sono quindi sufficienti per dare l&apos;esame!<br/>
            <small>Usali per ripassare quello che hai studiato.</small>
        </Panel>
    )
}

export const WarningBlocked = () => {
    return (
        <Panel builtinColor="red">
            <B>🚫 Blocco:</B> questi materiali sono stati resi bloccati per via di fattori esterni a questo sito, e non possono essere ri-aggiunti.<br/>
            <small>Lamentati con chi li ha bloccati, non con me, io non posso farci niente...</small>
        </Panel>
    )
}
