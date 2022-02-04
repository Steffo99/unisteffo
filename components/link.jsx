import NextLink from "next/link"
import { Anchor as BluelibLink } from "@steffo/bluelib-react"


export const Link = ({children, href, disabled = false, nextProps = {}, bluelibProps = {}}) => {
    return (
        <NextLink href={href} passHref={true} {...nextProps}>
            <BluelibLink disabled={disabled} {...bluelibProps}>
                {children}
            </BluelibLink>
        </NextLink>
    )
}
