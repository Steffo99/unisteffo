import React from "react";
import {BaseLink, Title} from "bluelib/lib/components";
import PropTypes from "prop-types";


export default function MainTitle() {
    return (
        <hgroup>
            <Title size={"xxl"}><BaseLink href={"/"}>Unisteffo</BaseLink></Title>
        </hgroup>
    )
}


MainTitle.propTypes = {
    subtitle: PropTypes.node
}
