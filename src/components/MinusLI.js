import React from "react";
import {ListItem, Color} from "bluelib/lib/components";
import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./MinusLI.module.css";


export default function MinusLI({children, className}) {
    return (
        <Color builtin={"red"}>
            <ListItem className={classNames(style.minusli, className)}>
                {children}
            </ListItem>
        </Color>
    )
}

MinusLI.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}
