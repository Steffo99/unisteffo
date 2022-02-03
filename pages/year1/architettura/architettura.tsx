import { Heading, Chapter, Box, Idiomatic as I, Anchor as A, BringAttention as B, ListOrdered, Panel, Code, ListUnordered } from '@steffo/bluelib-react'
import type { NextPage } from 'next'
import { Link } from '../../../components/compat-old'


const MaterialLi = ({children, file}) => {
    return <ListOrdered.Item>
        {children} (<A href={`/materials/year1/architettura/${file}.md`}><Code>.md</Code></A>)
    </ListOrdered.Item>
}


const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Architettura dei calcolatori
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Premessa
                </Heading>
                <p>
                    Quando ho dato <I>Architettura dei Calcolatori</I>, a malapena si sentiva parlare di RISC-V, e non aveva <A href="https://trends.google.com/trends/explore?date=all&q=risc-v">tutta la popolarità che ha ora</A>.
                </p>
                <p>
                    Penso che adesso si trovino su Internet molte più risorse per studiare RISC-V rispetto al passato!
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Materiale raccolto
                </Heading>
                <p>
                    Ho preso appunti solo sulle parti del corso che non avevamo già fatto in Sistemi e Reti alle superiori.
                </p>
                <p>
                    Ho glissato molto sulla parte teorica, in quanto le dispense forniteci dal prof. erano ottime.
                </p>
                <Chapter>
                    <Panel>
                        <Heading level={4}>
                            Appunti di teoria
                        </Heading>
                        <ListOrdered>
                            <MaterialLi file="1_principi">
                                Principi dell'architettura dei calcolatori
                            </MaterialLi>
                            <MaterialLi file="2_dentro_il_processore">
                                Dentro il processore
                            </MaterialLi>
                            <MaterialLi file="3_assembly">
                                Assembly
                            </MaterialLi>
                        </ListOrdered>
                    </Panel>
                    <Panel>
                        <Heading level={4}>
                            Esercizi svolti
                        </Heading>
                        <ListOrdered start={4}>
                            <MaterialLi file="4_hello_world">
                                Hello World in RISC-V
                            </MaterialLi>
                            <MaterialLi file="5_primo_programma">
                                Primo programma RISC-V
                            </MaterialLi>
                            <MaterialLi file="6_stack">
                                Stack in RISC-V
                            </MaterialLi>
                            <MaterialLi file="7_prodotto_scalare">
                                Prodotto scalare in RISC-V
                            </MaterialLi>
                        </ListOrdered>
                    </Panel>
                    <Panel>
                        <Heading level={4}>
                            Appunti di pratica
                        </Heading>
                        <ListOrdered start={8}>
                            <MaterialLi file="8_appunti_e_deduzioni">
                                Appunti e deduzioni
                            </MaterialLi>
                            <MaterialLi file="9_memorie">
                                Memorie
                            </MaterialLi>
                            <MaterialLi file="10_meltdown">
                                Meltdown
                            </MaterialLi>
                        </ListOrdered>
                    </Panel>
                </Chapter>
                <p>
                    Durante il corso, ho anche realizzato un'estensione per Visual Studio Code per il <I>syntax highlighting</I> dell'Assembly RISC-V.
                </p>
                <Chapter>
                    <Panel>
                        <Heading level={4}>
                            Estensioni sviluppate
                        </Heading>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <Link href="https://marketplace.visualstudio.com/items?itemName=steffo.riscv-plus">
                                    RISC-V Assembly
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
