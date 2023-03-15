import { Heading, Box as BlueBox, Chapter as BlueChapter, Definition as BlueDefinition } from "@steffo/bluelib-react"
import { ChapterProps as BlueChapterProps } from "@steffo/bluelib-react/dist/components/chapters/Chapter"
import { BoxProps as BlueBoxProps } from "@steffo/bluelib-react/dist/components/panels/Box"
import { DefinitionProps } from "@steffo/bluelib-react/dist/components/semantics/Definition"
import React, { ReactNode } from "react"
import { Link } from "./link"

export type BoxProps = BlueBoxProps & {
    h?: ReactNode,
}

export const Box = ({h, children, ...props}: BoxProps) => {
    return (
        <BlueBox {...props}>
            {h && <Heading level={3}>
                {h}
            </Heading>}
            {children}
        </BlueBox>
    )
}

export type ChapterProps = BlueChapterProps & {
    h?: ReactNode
}

export const Chapter = ({h, children, ...props}: ChapterProps) => {
    return (
        <BlueChapter {...props}>
            {h && <Heading level={2}>
                {h}
            </Heading>}
            {children}
        </BlueChapter>
    )
}

const idFromString = (t: string): string => {
    return t.toLowerCase().replace(/[^a-z0-9]/g, "-")
}

export type DfnProps = DefinitionProps & {
    children: string
}

// Definition
export const Dfn = ({children, ...props}: DfnProps) => {
    const id: string = "dfn-" + idFromString(children)

    return (
        <BlueDefinition {...props} id={id}>
            {children}
        </BlueDefinition>
    )
}

export type SbProps = {
    children: string
    dfn?: string
}

// Sendback
export const Sb = ({children, dfn}: SbProps) => {
    const id: string = "dfn-" + idFromString(dfn ?? children)
    
    return (
        <Link href={`#${id}`}>
            {children}
        </Link>
    )
}