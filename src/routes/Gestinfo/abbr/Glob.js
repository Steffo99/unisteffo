import React from "react"
import { Help } from "bluelib/lib/components"


export default function Glob() {
    return (
        <Help
            text={`La sintassi della ricerca tra file, dove ? sostituisce un singolo carattere, * un qualsiasi numero e ** include le sottocartelle.`}>Glob</Help>
    )
}

Glob.propTypes = {}
