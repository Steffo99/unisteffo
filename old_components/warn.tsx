import * as React from "react"
import * as Bluelib from "@steffo/bluelib-react"
import style from "./warn.module.css"


export const Warn420 = () => {
    return (
        <Bluelib.Panel builtinColor="yellow" className={style.warn420}>
            ⚠️ Unisteffo richiede uno schermo largo almeno 420px.
        </Bluelib.Panel>
    )
}


export const Warn1024 = () => {
    return (
        <Bluelib.Panel builtinColor="yellow" className={style.warn1024}>
            ⚠️ Appuntiweb richiede uno schermo largo almeno 1024px.
        </Bluelib.Panel>
    )
}
