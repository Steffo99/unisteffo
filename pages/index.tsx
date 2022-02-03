import { Heading, Chapter, Box, Idiomatic as I, Anchor as A, ListUnordered, ListOrdered } from '@steffo/bluelib-react'
import type { NextPage } from 'next'
import { Link } from "../components/compat-next"


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
                            Analisi matematica
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year1/algebra">
                            Algebra lineare
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year1/programmazione1">
                            Programmazione 1
                        </Link>
                    </ListUnordered.Item>
                </ListUnordered>
                <ListUnordered>
                    <ListUnordered.Item>
                        <Link href="/year1/architettura">
                            Architettura dei calcolatori
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year1/algoritmi">
                            Algoritmi e strutture dati
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year1/programmazione2">
                            Programmazione 2
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
                            Fisica
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year2/oggetti">
                            Programmazione a oggetti
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year2/statistica">
                            Statistica ed elementi di probabilità
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year2/apprendimento">
                            Apprendimento ed evoluzione in sistemi artificiali
                        </Link>
                    </ListUnordered.Item>
                </ListUnordered>
                <ListUnordered>
                    <ListUnordered.Item>
                        <Link href="/year2/database">
                            <A href="#">Basi di dati</A>
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year2/calcolo">
                            <A href="#">Calcolo numerico</A>
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year2/ottimizzazione">
                            <A href="#">Ottimizzazione lineare intera</A>
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year2/sistemioperativi">
                            <A href="#">Sistemi operativi</A>
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
