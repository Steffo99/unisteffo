import React from "react";
import {Help} from "bluelib/lib/components";
import PropTypes from "prop-types";


export default function API() {
    return (
        <Help text={"[Web] Application Programming Interface, fonti di dati fruibili attraverso HTTP"}>API</Help>
    )
}

API.propTypes = {
    children: PropTypes.node,
    title: PropTypes.node
}
