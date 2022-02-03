import { Heading, Chapter, Box, Idiomatic as I, Anchor as A, ListUnordered, ListOrdered } from '@steffo/bluelib-react'
import type { NextPage } from 'next'
import { Link } from "../components/compat-next"


const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Errore 500
        </Heading>
        <Chapter>
            <Box builtinColor="red">
                <Heading level={3}>
                    Internal server error
                </Heading>
                <p>
                    Il server non è riuscito a preparare la pagina che hai richiesto.
                </p>
                <p>
                    Molto probabilmente si tratta di un bug: informa Steffo di come si è verificato, in modo che possa risolverlo!
                </p>
            </Box>
        </Chapter>
    </>
}

export default Page
