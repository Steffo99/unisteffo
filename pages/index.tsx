import { Heading, Chapter, Box, Idiomatic as I, Anchor as A, ListUnordered, ListOrdered } from '@steffo/bluelib-react'
import type { NextPage } from 'next'
import { Link } from "../components/link"
import { ThemeSwitcher } from '../components/theme-switcher'
import { Warn420 } from '../components/warn'


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
                <Warn420/>
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
                            Basi di dati
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year2/calcolo">
                            Calcolo numerico
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year2/ottimizzazione">
                            Ottimizzazione lineare intera
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year2/sistemioperativi">
                            Sistemi operativi
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
                        <Link href="/year3/linguaggi">
                            Linguaggi dinamici
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year3/diritto">
                            Diritto ed economia digitale
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year3/progetto">
                            Progetto del software
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year3/gestione">
                            Gestione dell&apos;informazione
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year3/protocolli">
                            Protocolli e architetture di rete
                        </Link>
                    </ListUnordered.Item>
                </ListUnordered>
                <ListUnordered>
                    <ListUnordered.Item>
                        <Link href="/year3/tecweb">
                            Tecnologie web
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="/year3/paradigmi">
                            Paradigmi e linguaggi di programmazione
                        </Link>
                    </ListUnordered.Item>
                </ListUnordered>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Anno 4
                </Heading>
                <ListUnordered disabled={true}>
                    <ListUnordered.Item>
                        TBD
                    </ListUnordered.Item>
                </ListUnordered>
            </Box>
            <Box>
                <Heading level={3}>
                    Anno 5
                </Heading>
                <ListUnordered disabled={true}>
                    <ListUnordered.Item>
                        TBD
                    </ListUnordered.Item>
                </ListUnordered>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Amici e colleghi
                </Heading>
                <ListUnordered>
                    <ListUnordered.Item>
                        <Link href="https://navigator.erre2.fermitech.info/erre2/erre2.fermitech.info/">
                            Erre2 (Modena)
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="https://navigator.erre2.fermitech.info/erre2/erre2next.fermitech.info/">
                            Erre2 Next (Bologna)
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="https://github.com/topics/unimore-informatica">
                            [unimore-informatica] su GitHub
                        </Link>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <Link href="https://thor.steffo.eu/">
                            Unimore Informatica Telegram
                        </Link>
                    </ListUnordered.Item>
                </ListUnordered>
            </Box>
            <Box>
                <Heading level={3}>
                    Cambia tema
                </Heading>
                <ThemeSwitcher/>
            </Box>
        </Chapter>
    </>
}

export default Home
