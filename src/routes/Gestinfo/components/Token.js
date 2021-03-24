import React from "react"
import PropTypes from "prop-types"
import style from "./Token.module.css"
import { Bold, Color, Strike } from "bluelib/lib/components"


export default function Token({ children, indexTerm, stopword }) {
    if(indexTerm) {
        return (
            <Bold><Color builtin={"yellow"}><span className={style.token}>{children}</span></Color></Bold>
        )
    }

    if(stopword) {
        return (
            <Strike><Color builtin={"red"}><span className={style.token}>{children}</span></Color></Strike>
        )
    }

    return (
        <span className={style.token}>{children}</span>
    )
}

Token.propTypes = {
    children: PropTypes.node,
    indexTerm: PropTypes.bool,
    stopword: PropTypes.bool,
}
