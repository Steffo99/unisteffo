import * as Bluelib from "@steffo/bluelib-react"
import TeX from "@matejmazur/react-katex"
import stripIndent from "strip-indent"
import 'katex/dist/katex.min.css';
import {default as NextLink} from "next/link"
import { AnchorProps } from "@steffo/bluelib-react/dist/components/common/Anchor";


export const Split = ({title = undefined, children}: any) => {
    return <>
        <Bluelib.Chapter>
            {title ?
                <Bluelib.Heading level={3}>
                    {title}
                </Bluelib.Heading>
            : null}
            {children}
        </Bluelib.Chapter>
    </>
}

export const Box = ({title = undefined, children, color = undefined}: any) => {
    return (
        <Bluelib.Box builtinColor={color}>
            {title ?
                <Bluelib.Heading level={4}>
                    {title}
                </Bluelib.Heading>
            : null}
            {children}
        </Bluelib.Box>
    )
}

export const Plus = (props: any) => {
    return (
        <Bluelib.BaseElement builtinColor={"red"} kind="span" {...props}/>
    )
}

export const Minus = (props: any) => {
    return (
        <Bluelib.BaseElement builtinColor={"blue"} kind="span" {...props}/>
    )
}

export const Color = ({builtin, ...props}: any) => {
    return (
        <Bluelib.BaseElement builtinColor={builtin} kind="span" {...props}/>
    )
}

export const LatexMath = ({children, ...props}: any) => {
    return (
        <TeX math={children} {...props}/>
    )
}

export const ILatex = (props: any) => {
    return (
        <LatexMath block={false} {...props}/>
    )
}
export const BLatex = (props: any) => {
    return (
        <LatexMath block={true} {...props}/>
    )
}
export const PLatex = (props: any) => {
    return (
        <p>
            <BLatex {...props}/>
        </p>
    )
}

export const P = (props: any) => {
    return (
        <p {...props}/>
    )
}

export const Todo = (props: any) => {
    return (
        <Bluelib.BaseElement builtinColor={"orange"} kind={"span"} {...props}/>
    )
}

export const Help = ({text, ...props}: any) => {
    return (
        <Bluelib.BaseElement title={text} bluelibClassNames={"semantic-abbr"} kind={"span"} {...props}/>
    )
}

export const TablePanel = ({children, ...props}: any) => {
    return (
        <Bluelib.Box>
            <table>
                {children}
            </table>
        </Bluelib.Box>
    )
}

export const Code = ({children, ...props}: any) => {
    return (
        <pre>
            <Bluelib.Code {...props}>
                {stripIndent(children)}
            </Bluelib.Code>
        </pre>
    )
}

export const Image = (props: any) => {
    return (
        <Bluelib.Image limit="quarter" {...props}/>
    )
}


export const Aside = (props: any) => {
    return (
        <Bluelib.Parenthesis {...props}/>
    )
}

export const Example = (props: any) => {
    return (
        <Aside builtinColor="magenta" {...props}/>
    )
}

export const Section = Split
export const Panel = Box
export const Latex = LatexMath
export const B = Bluelib.BringAttention
export const I = Bluelib.Idiomatic
export const LI = Bluelib.ListUnordered.Item

export const Anchor = (props: AnchorProps) => {
    if(!props.href) {
        return <Bluelib.Anchor {...props}/>
    }

    return (
        <NextLink href={props.href}>
            <Bluelib.Anchor {...props}/>
        </NextLink>
    )
}
export const Link = Anchor
export const BaseLink = Anchor

export const r = String.raw
