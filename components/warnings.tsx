import { Panel } from "@steffo/bluelib-react"

export const Warning = (props) => {
    return (
        <Panel builtinColor="yellow">

            <B>Attenzione:</B> questi file non sono stati ricontrollati da quando sono stati scritti, e potrebbero contenere errori!<br/>
            <small>Usali a tuo rischio e pericolo!</small>
        </Panel>
    )
}