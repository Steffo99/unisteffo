import { Heading, Chapter, Box, Idiomatic as I, Anchor as A, ListUnordered, ListOrdered } from '@steffo/bluelib-react'
import type { NextPage } from 'next'
import { Link } from "../components/link"


const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Errore 404
        </Heading>
        <Chapter>
            <Box builtinColor="red">
                <Heading level={3}>
                    Not found
                </Heading>
                <p>
                    La pagina che hai richiesto non è stata trovata.
                </p>
                <p>
                    Forse l&apos;URL che hai inserito è sbagliato, o la pagina che cerchi è stata spostata a un altro URL...
                </p>
            </Box>
        </Chapter>
    </>
}

export default Page
