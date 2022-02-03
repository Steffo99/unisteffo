import { Heading, Chapter, Box, Idiomatic as I, Anchor as A, ListUnordered, ListOrdered } from '@steffo/bluelib-react'
import type { NextPage } from 'next'

const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Titolo
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Introduzione
                </Heading>
                <p>
                    Cose
                </p>
            </Box>
        </Chapter>
    </>
}

export default Page
