import { ListUnordered, Code } from "@steffo/bluelib-react"
import { Link } from "./link"


export const MaterialLi = ({children, base, ...files}) => {
    const formats = Object.entries(files).map(([k, v], pos) => {
        return (
            <Link key={pos} href={`${base}/${v}.${k}`}>
                <Code>.{k}</Code>
            </Link>
        )
    }).reduce((p, c) => {
        return [p, ", ", c]
    })
    
    return (
        <ListUnordered.Item>
            {children} ({formats})
        </ListUnordered.Item>
    )
}
