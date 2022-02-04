import { ListUnordered } from "@steffo/bluelib-react"
import {Heading, Chapter, Box, Panel, Idiomatic as I} from "@steffo/bluelib-react"
import { Link } from "../../../components/link"


export default function Fisica() {
    return <>
        <Heading level={2}>
            Fisica
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Premessa
                </Heading>
                <p>
                    <I>Fisica</I> è stato il corso che mi ha spinto a sviluppare il progetto Appuntiweb: avendo tante definizioni e formule, avere una visualizzazione &quot;a carte mnemoniche&quot; mi ha aiutato molto a studiare per l&apos;esame.
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
                                <Link href="/year2/fisica/teoria">
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
