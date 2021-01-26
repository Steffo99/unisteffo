import React from "react";
import {Split, Title} from "bluelib/lib/components";
import PropTypes from "prop-types";


export default function TitleSplit({children, title}) {
    return (
        <section>
            <Title size={"xl"}>
                {title}
            </Title>
            <Split>
                {children}
            </Split>
        </section>
    )
}

TitleSplit.propTypes = {
    children: PropTypes.node,
    title: PropTypes.node
}
