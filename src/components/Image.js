import React from "react"
import {Anchor, Paragraph} from "bluelib/lib/components"
import Style from "./Image.module.css"
import classNames from "classnames"


export default function Image({ src, description, className, ...props }) {
    return (
        <Paragraph>
            <Anchor href={src}>
                <img alt={`[${description}]`} title={description} src={src} className={classNames(Style.Image, className)} {...props}/>
            </Anchor>
        </Paragraph>
    )
}
