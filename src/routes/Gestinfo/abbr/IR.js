import React from "react";
import {Help} from "bluelib/lib/components";
import PropTypes from "prop-types";


export default function IR() {
    return (
        <Help text={"Information Retrieval"}>IR</Help>
    )
}

IR.propTypes = {
    children: PropTypes.node,
    title: PropTypes.node
}
