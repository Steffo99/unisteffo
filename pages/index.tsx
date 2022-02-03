import { Heading, Chapter, Box, Idiomatic as I, Anchor as A, ListUnordered, ListOrdered } from '@steffo/bluelib-react'
import type { NextPage } from 'next'
import Link from 'next/link'


const Home: NextPage = () => {
    return <>
        <Heading level={2}>
            Appunti universitari open source di Steffo
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Dove sono?
                </Heading>
                <p>
                    Ciao! Benvenuto a <I>Unisteffo</I>, il sito su cui è caricato tutto il materiale per lo studio che ho utilizzato durante il mio percorso universitario!
                </p>
                <p>
                    Spero che ti possa essere utile!
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Anno 1
                </Heading>
                <ListUnordered>
                    <ListUnordered.Item>
                        <Link href="/year1/analisi">
                            <A href="#">Analisi matematica</A>
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year1/algebra">
                            <A href="#">Algebra lineare</A>
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year1/programmazione1">
                            <A href="#">Programmazione 1</A>
                        </Link>
                    </ListUnordered.Item>
                </ListUnordered>
                <ListUnordered>
                    <ListUnordered.Item>
                        <Link href="/year1/architettura">
                            <A href="#">Architettura dei calcolatori</A>
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year1/algoritmi">
                            <A href="#">Algoritmi e strutture dati</A>
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year1/programmazione2">
                            <A href="#">Programmazione 2</A>
                        </Link>
                    </ListUnordered.Item>
                </ListUnordered>
            </Box>
            <Box>
                <Heading level={3}>
                    Anno 2
                </Heading>
                <ListUnordered>
                    <ListUnordered.Item>
                        <Link href="/year2/fisica">
                            <A href="#">Fisica</A>
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year2/oggetti">
                            <A href="#">Programmazione a oggetti</A>
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year2/statistica">
                            <A>Statistica ed elementi di probabilità</A>
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year2/apprendimento">
                            <A>Apprendimento ed evoluzione in sistemi artificiali</A>
                        </Link>
                    </ListUnordered.Item>
                </ListUnordered>
                <ListUnordered>
                    <ListUnordered.Item>
                        <Link href="/year2/database">
                            <A>Basi di dati</A>
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year2/calcolo">
                            <A>Calcolo numerico</A>
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year2/ottimizzazione">
                            <A>Ottimizzazione lineare intera</A>
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year2/sistemioperativi">
                            <A>Sistemi operativi</A>
                        </Link>
                    </ListUnordered.Item>
                </ListUnordered>
            </Box>
            <Box>
                <Heading level={3}>
                    Anno 3
                </Heading>
                <ListUnordered>
                    <ListUnordered.Item>
                        <Link href="/year3/gestione">
                            <A>Gestione dell&apos;informazione</A>
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year3/web">
                            <A>Tecnologie web</A>
                        </Link>
                    </ListUnordered.Item>
                </ListUnordered>
            </Box>
        </Chapter>
    </>
}

export default Home
