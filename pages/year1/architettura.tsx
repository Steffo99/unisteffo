import { Heading, Chapter, Box, Idiomatic as I, Anchor as A, UAnnotation as U, ListUnordered, BringAttention as B, ListOrdered, Definition, Code } from '@steffo/bluelib-react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { WarningIncomplete, WarningUnchecked } from '../../components/warnings'


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
                    Introduzione
                </Heading>
                <p>
                    Quando ho dato <I>Architettura dei Calcolatori</I>, a malapena si sentiva parlare di RISC-V, e non aveva <A href="https://trends.google.com/trends/explore?date=all&q=risc-v">tutta la popolarità che ha ora</A>.
                </p>
                <p>
                    Penso si trovino risorse molto più utili per studiare il RISC-V adesso rispetto al passato!
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Materiale realizzato
                </Heading>
                <WarningIncomplete/>
                <WarningUnchecked/>
                <p>
                    Ho glissato molto sulla parte teorica, in quanto le dispense forniteci dal prof. erano ottime.
                </p>
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
                <p>
                    Quando ho studiato per questo esame non si trovava quasi nulla di RISC-V su Internet o libri di testo.
                </p>
                <p>
                    Questo è quello che ero riuscito a capire dopo vari tentativi e approfondite ricerche.
                </p>
                <ListOrdered start="4">
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
                <p>
                    Infine, un altro po' di appunti e teoria relativi all'ultima parte del corso.
                </p>
                <ListOrdered start="8">
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
            </Box>
            <Box>
                <Heading level={3}>
                    Estensione per Visual Studio Code
                </Heading>
                <p>
                    Durante il corso ho anche realizzato un'estensione per Visual Studio Code che fa <I>syntax highlighting</I> dell'Assembly RISC-V.
                </p>
                <p>
                    È possibile scaricarla <A href="https://marketplace.visualstudio.com/items?itemName=steffo.riscv-plus">sul Visual Studio Marketplace</A>, e il suo codice sorgente è disponibile <A href="https://github.com/Steffo99/riscv-plus/">su GitHub</A>.
                </p>
            </Box>
        </Chapter>
    </>
}

export default Page
