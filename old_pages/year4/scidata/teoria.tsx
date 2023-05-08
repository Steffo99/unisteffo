import {Heading, Chapter, Box, ListUnordered, ListOrdered, Parenthesis, Idiomatic as I, BringAttention as B} from "@steffo/bluelib-react"
import type { NextPage, NextPageContext } from 'next'
import { Link } from '../../../components/link'


export async function getStaticProps(_context: NextPageContext) {
    return {
        props: {}
    }
}


const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            <Link href="/year4/scidata">
                Elaborazione dati scientifici
            </Link>
        </Heading>
        <Chapter>
            <Box todo>
                TODO
            </Box>
        </Chapter>
    </>
}

export default Page
