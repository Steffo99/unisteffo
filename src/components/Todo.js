import React from "react";
import PropTypes from "prop-types";
import style from "./Todo.module.css";


export default function Todo({children}) {
    return (
        <span className={style.todo}>🚧 {children}</span>
    )
}

Todo.propTypes = {
    children: PropTypes.node,
}
