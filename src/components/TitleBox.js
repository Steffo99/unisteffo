import React from "react";
import {Box, Title} from "bluelib/lib/components";
import PropTypes from "prop-types";


export default function TitleBox({children, title}) {
    return (
        <Box>
            <Title size={"l"}>
                {title}
            </Title>
            {children}
        </Box>
    )
}

TitleBox.propTypes = {
    children: PropTypes.node,
    title: PropTypes.node
}
