import NextLink from "next/link"
import { Anchor as BluelibLink } from "@steffo/bluelib-react"


export const Link = ({children, href, nextProps = {}, bluelibProps = {}}) => {
    return (
        <NextLink href={href} passHref={true} {...nextProps}>
            <BluelibLink {...bluelibProps}>
                {children}
            </BluelibLink>
        </NextLink>
    )
}
