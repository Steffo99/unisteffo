import React from "react";
import PropTypes from "prop-types";
import style from "./Token.module.css";


export default function Token({children}) {
    return (
        <span className={style.token}>{children}</span>
    )
}

Token.propTypes = {
    children: PropTypes.node
}
