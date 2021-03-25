import React from "react"
import { Box as BluelibBox, Title } from "bluelib/lib/components"
import PropTypes from "prop-types"
import classNames from "classnames"
import Style from "./Box.module.css"


export default function Box({ children, className, title, Type = BluelibBox, ...props }) {
    return (
        <Type className={classNames(Style.Panel, className)} {...props}>
            {title ?
                <Title size={"l"}>
                    {title}
                </Title>
            : null}
            {children}
        </Type>
    )
}

Box.propTypes = {
    children: PropTypes.node,
    title: PropTypes.node,
}
