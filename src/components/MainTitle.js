import React from "react";
import {BaseLink, Title} from "bluelib/lib/components";
import PropTypes from "prop-types";


export default function MainTitle({subtitle}) {
    return (
        <div>
            <Title size={"xxl"}><BaseLink href={"/"}>Unisteffo</BaseLink></Title>
            <Title size={"xl"}>{subtitle}</Title>
        </div>
    )
}


MainTitle.propTypes = {
    subtitle: PropTypes.node
}
