import {Heading, Chapter, Box, ListUnordered, ListOrdered, Parenthesis, Idiomatic as I, BringAttention as B} from "@steffo/bluelib-react"
import type { NextPage, NextPageContext } from 'next'
import { Link } from '../../../components/link'


export async function getStaticProps(_context: NextPageContext) {
    return {
        props: {}
    }
}


const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            <Link href="/year4/bigdata">
                Privacy e tutela dei dati
            </Link>
        </Heading>
        <Chapter>
            <Heading level={2}>
                Concetti principali del diritto
            </Heading>
            <Box>
                <Heading level={3}>
                    Temperamento
                </Heading>
                <p>
                    Principio secondo il quale due interessi in conflitto devono essere mediati.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Heading level={2}>
                Diritti di libertà
            </Heading>
            <Box>
                <Heading level={3}>
                    Segretezza
                </Heading>
                <p>
                    Il diritto a non fare conoscere ad altre persone quello che ci riguarda.
                </p>
            </Box>
            <Box>
                <Heading level={3}>
                    Riservatezza
                </Heading>
                <p>
                    Il dovere da parte di terzi di non divulgare informazioni a loro dirette.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Heading level={2}>
                Aspetti sociologici dell'informatica
            </Heading>
            <Box>
                <Heading level={3}>
                    Pervasività
                </Heading>
                <p>
                    L'informatica è presente in <B>tutti gli aspetti della vita</B>.
                </p>
            </Box>
            <Box>
                <Heading level={3}>
                    Globalizzazione
                </Heading>
                <p>
                    L'informatica è presente in <B>tutto il mondo</B>, e interagisce frequentemente con altri individui <B>oltre i confini nazionali</B>.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Heading level={2}>

            </Heading>
            <Box todo>
                <p>
                    Internet è considerata una proiezione spaziale delle libertà della persona.
                </p>
                <p>
                    Per questo, il suo utilizzo è considerato come tutelato dalla costituzione.
                </p>
            </Box>
            <Box todo>
                <Heading level={3}>
                    Il ruolo del Garante della Privacy
                </Heading>
                <p>
                    Il garante è un'ente con lo scopo di servire i cittadini risolve i problemi legali dell'informatica, facilitarne lo sviluppo legale e di sviluppare l'economia digitale.
                </p>
            </Box>
            <Box todo>
                <Heading level={3}>

                </Heading>
            </Box>
        </Chapter>
        <Chapter>
            <Heading level={2}>
                Diritti di libertà su Internet
            </Heading>
            <Box todo>
                <Heading level={3}>
                    Diritto di accesso
                </Heading>
                <p>
                    Diritto di accedere all'Internet in condizioni di parità con tutto il resto della nazione-
                </p>
            </Box>
            <Box todo>
                <Heading level={3}>
                    Neutralità della rete
                </Heading>
                <p>
                    Diritto che il proprio traffico Internet non venga discriminato.
                </p>
            </Box>
            <Box>
                <Heading level={3}>
                    Diritto all'educazione digitale
                </Heading>
                <p>
                    Diritto di acquisire le conoscenze necessarie a navigare in rete.
                </p>
            </Box>
            <Box>
                <Heading level={3}>
                    Diritto alla privacy
                </Heading>
                <p>
                    Eccezione al diritto di cronaca che garantisce la dignità e l'identità della singola persona.
                </p>
                <p>
                    Prevede di controllare, accedere a, modificare, integrare, moificare il trattamento di, o eliminare i propri dati da chiunque li possegga.
                </p>
            </Box>
            <Box>
                <Heading level={3}>
                    Inviolabilità di domicilio informatico
                </Heading>
                <p>
                    Garanzia che i nostri sistemi informatici siano inviolabili come il nostro domicilio.
                </p>
                <p>
                    Proibisce la sorveglianza di massa.
                </p>
                <p>
                    La polizia può intervenire solo nei casi previsti dalla legge e solo con mandato di un giudice.
                </p>
            </Box>
            <Box todo>
                <Heading level={3}>
                    Diritto all'oblio
                </Heading>
            </Box>
            <Box todo>
                <Heading level={3}>
                    Diritto alla libertà in rete
                </Heading>
            </Box>
            <Box>
                <Heading level={3}>
                    Diritti delle persone sulle piattaforme
                </Heading>
                <p>
                    Dovere dei responsabili delle piattaforme di comportarsi con lealtà nei confronti dei loro utenti.
                </p>
            </Box>
            <Box>
                <Heading level={3}>
                    Diritto alla sicurezza in rete
                </Heading>
                <p>
                    Garanzia dell'integrità delle infrastrutture di rete e di tutela contro possibili attacchi verso di esse.
                </p>
            </Box>
        </Chapter>
    </>
}

export default Page
