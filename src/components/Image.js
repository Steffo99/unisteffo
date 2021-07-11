import React from "react"
import {Anchor, Paragraph} from "bluelib/lib/components"
import Style from "./Image.module.css"
import classNames from "classnames"


export default function Image({ src, description, className, ...props }) {
    return (
        <div className={Style.ImageContainer}>
            <Anchor href={src}>
                <img alt={`[${description}]`} title={description} src={src} className={classNames(Style.Img, className)} {...props}/>
            </Anchor>
        </div>
    )
}
