import React from "react";
import {Split, Title} from "bluelib/lib/components";
import PropTypes from "prop-types";


export default function TitleSplit({children, className, title}) {
    return (
        <div className={className}>
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
    className: PropTypes.string,
    title: PropTypes.node
}
