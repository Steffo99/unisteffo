import { Heading, Chapter, Box, Panel, Idiomatic as I, ListUnordered } from "@steffo/bluelib-react";
import { NextPage, NextPageContext } from "next";
import { Link } from "../../../components/link";
import { Warn1024 } from "../../../components/warn";


export async function getStaticProps(_context: NextPageContext) {
    return {
        props: {}
    }
}


const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Basi di Dati
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Introduzione
                </Heading>
                <p>
                    Alle superiori, abbiamo trattato molto in dettaglio le <I>Basi di Dati</I>, quindi non ho preso appunti per tutta la prima parte del corso; pertanto, qui ci sono solo appunti sulla seconda parte, quella sul calcolo dei costi.
                </p>
                <p>
                    In compenso, abbiamo pubblicato il progetto di gruppo che abbiamo realizzato per l&apos;esame: potete usarlo per prendere ispirazione se siete bloccati con il vostro!
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
                            Progetto di esame
                        </Heading>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <Link href="https://github.com/Steffo99/alexandria">
                                    Alexandria
                                </Link>
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Panel>
                    <Panel>
                        <Heading level={4}>
                            Appuntiweb
                        </Heading>
                        <Warn1024/>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <Link href="/year2/database/teoria">
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

export default Page
