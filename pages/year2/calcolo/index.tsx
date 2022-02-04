import { Heading, Chapter, Box, Idiomatic as I, Panel, ListUnordered } from "@steffo/bluelib-react";
import { NextPage } from "next";
import { Link } from "../../../components/link";


const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Calcolo numerico
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Premessa
                </Heading>
                <p>
                    <I>Calcolo numerico</I> credo sia il corso per il quale ho realizzato il materiale più dettagliato.
                </p>
                <p>
                    Avere tutto schematizzato mi ha permesso di apprendere facilmente tutti i concetti! 
                </p>
                <p>
                    Non ho però realizzato nessun materiale su MATLAB, in quanto esistevano già numerose guide su Internet a riguardo...
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
                                <Link href="/year2/calcolo/teoria">
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
