import React, { useEffect } from "react"
import PropTypes from "prop-types"
import style from "./Todo.module.css"


export default function Todo({ children, block }) {
    useEffect(() => {
        console.info("TODO:", { children })
    }, [])

    if(block) {
        return (
            <div className={style.todoblock}>{children}</div>
        )
    }
    else {
        return (
            <span className={style.todo}>🚧 {children}</span>
        )
    }
}

Todo.propTypes = {
    children: PropTypes.node,
    block: PropTypes.bool,
}
