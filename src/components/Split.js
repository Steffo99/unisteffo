import React from "react"
import { Split as BluelibSplit, Title } from "bluelib/lib/components"
import PropTypes from "prop-types"


export default function Split({ children, title, ...props }) {
    return (
        <div {...props}>
            {title ?
             <Title size={"xl"}>
                 {title}
             </Title>
                   : null}
            <BluelibSplit>
                {children}
            </BluelibSplit>
        </div>
    )
}

Split.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.node,
}
