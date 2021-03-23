import React from "react";
import {ListItem, Color} from "bluelib/lib/components";
import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./PlusLI.module.css";


export default function PlusLI({children, className}) {
    return (
        <Color builtin={"lime"}>
            <ListItem className={classNames(style.plusli, className)}>
                {children}
            </ListItem>
        </Color>
    )
}

PlusLI.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}
