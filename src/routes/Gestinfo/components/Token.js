import React from "react";
import PropTypes from "prop-types";
import style from "./Token.module.css";
import {Bold, Strike, Color} from "bluelib/lib/components";


export default function Token({children, indexTerm, stopword}) {
    if(indexTerm) {
        return (
            <Bold><Color value={"yellow"}><span className={style.token}>{children}</span></Color></Bold>
        )
    }

    if(stopword) {
        return (
            <Strike><Color value={"red"}><span className={style.token}>{children}</span></Color></Strike>
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
