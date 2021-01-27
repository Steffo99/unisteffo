import React from "react";
import {Split, Title} from "bluelib/lib/components";
import PropTypes from "prop-types";
import style from "./TitleSplit.module.css";


export default function TitleSplit({children, title}) {
    return (
        <div className={style.titlesplit}>
            <Title size={"xl"}>
                {title}
            </Title>
            <Split>
                {children}
            </Split>
        </div>
    )
}

TitleSplit.propTypes = {
    children: PropTypes.node,
    title: PropTypes.node
}
