import * as Bluelib from "@steffo/bluelib-react"
import TeX from "@matejmazur/react-katex"


export const Split = ({title = undefined, children}) => {
    return (
        <Bluelib.Chapter>
            {title ?
                <Bluelib.Heading level={3}>
                    {title}
                </Bluelib.Heading>
            : null}
            {children}
        </Bluelib.Chapter>
    )
}
export const Section = Split

export const Box = ({title = undefined, children, color = undefined}) => {
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

export const Example = (props) => {
    return (
        <Bluelib.Panel builtinColor="magenta" style={{minWidth: "auto"}} {...props}/>
    )
}

export const Plus = (props) => {
    return (
        <Bluelib.BaseElement builtinColor={"red"} kind="span" {...props}/>
    )
}

export const Minus = (props) => {
    return (
        <Bluelib.BaseElement builtinColor={"blue"} kind="span" {...props}/>
    )
}

export const Color = ({builtin, ...props}) => {
    return (
        <Bluelib.BaseElement builtinColor={builtin} kind="span" {...props}/>
    )
}

export const LatexMath = ({children, ...props}) => {
    return (
        <TeX math={children} {...props}/>
    )
}

export const ILatex = (props) => {
    return (
        <LatexMath block={false} {...props}/>
    )
}
export const BLatex = (props) => {
    return (
        <LatexMath block={true} {...props}/>
    )
}
export const PLatex = (props) => {
    return (
        <p>
            <BLatex {...props}/>
        </p>
    )
}

export const P = (props) => {
    return (
        <p {...props}/>
    )
}

export const Todo = (props) => {
    return (
        <Bluelib.BaseElement builtinColor={"orange"} kind={"span"} {...props}/>
    )
}

export const Help = ({text, ...props}) => {
    return (
        <Bluelib.BaseElement title={text} bluelibClassNames={"semantic-abbr"} kind={"span"} {...props}/>
    )
}

export const TablePanel = ({children, ...props}) => {
    return (
        <Bluelib.Box>
            <table>
                {children}
            </table>
        </Bluelib.Box>
    )
}

export const Code = (props) => {
    return (
        <pre>
            <Bluelib.Code {...props}/>
        </pre>
    )
}

export const Image = (props) => {
    return (
        <Bluelib.Image limit="quarter" {...props}/>
    )
}

export const Latex = LatexMath
export const Panel = Box
export const B = Bluelib.BringAttention
export const I = Bluelib.Idiomatic
export const LI = Bluelib.ListUnordered.Item
export const Anchor = Bluelib.Anchor
export const Link = Bluelib.Anchor
export const BaseLink = Bluelib.Anchor

export const r = String.raw
