import { ListUnordered } from "@steffo/bluelib-react"
import {Heading, Chapter, Box, Panel, Idiomatic as I} from "@steffo/bluelib-react"
import { Link } from "../../../components/compat-next"


export default function Fisica() {
    return <>
        <Heading level={2}>
            Apprendimento ed evoluzione in sistemi artificiali
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Premessa
                </Heading>
                <p>
                    <I>Apprendimento ed evoluzione in sistemi artificiali</I> è stato un corso molto discorsivo (un po' come il suo stesso nome).
                </p>
                <p>
                    Penso sia quasi controproduttivo studiare dai miei appunti, in quanto essi sono una sintesi, mentre al fine di passare l'esame è utile saper parlare bene di tutti i concetti.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Materiale raccolto
                </Heading>
                <Chapter>
                    <Panel>
                        <Heading level={4}>
                            Appuntiweb
                        </Heading>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <Link href="/year2/apprendimento/teoria">
                                    Appunti di teoria
                                </Link>
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Panel>
                </Chapter>
            </Box>
        </Chapter>
    </>
}
