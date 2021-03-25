import React from "react"
import { Split as BluelibSplit, Title } from "bluelib/lib/components"
import PropTypes from "prop-types"
import classNames from "classnames"
import Style from "./Split.module.css"


export default function Split({ children, className, titleClassName, title, ...props }) {
    return (
        <div className={classNames(Style.Split, className)} {...props}>
            {title ?
                 <Title className={classNames(Style.SplitTitle, titleClassName)} size={"xl"}>
                     {title}
                 </Title>
            : null}
            <BluelibSplit>
                {children}
            </BluelibSplit>
        </div>
    )
}
