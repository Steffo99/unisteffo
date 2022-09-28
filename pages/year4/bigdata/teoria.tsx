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
                Big data analytics
            </Link>
        </Heading>
        <Chapter>
            <Heading level={3}>
                Fasi di elaborazione dei dati
            </Heading>
            <Box>
                <Heading level={3}>
                    Raccolta dati
                </Heading>
                <p>
                    I dati vengono massivamente <I>raccolti</I> da tutte le fonti disponibili.
                </p>
                <Parenthesis>
                    Ad esempio, possono essere raccolti da:
                    <ListUnordered>
                        <ListUnordered.Item>Download diretto</ListUnordered.Item>
                        <ListUnordered.Item>Generazione via simulazione</ListUnordered.Item>
                        <ListUnordered.Item>Database pubblici</ListUnordered.Item>
                        <ListUnordered.Item>Richieste ad un'API</ListUnordered.Item>
                        <ListUnordered.Item>Scraping di pagine web dinamiche</ListUnordered.Item>
                    </ListUnordered>
                </Parenthesis>
            </Box>
            <Box>
                <Heading level={3}>
                    Elaborazione dati
                </Heading>
                <p>
                    I dati raccolti vengono <I>elaborati</I> e puliti, trasformandoli in formati su cui sia possibile effettuare analisi.
                </p>
                <Parenthesis>
                    Ad esempio, se i dati provengono da basi di dati diverse, vengono resi uniformi e normalizzati.
                </Parenthesis>
            </Box>
            <Box>
                <Heading level={3}>
                    Analisi esploratoria
                </Heading>
                <p>
                    Vengono <I>analizzati</I> i dati in generale per farsi un'idea di come costruire i modelli successivamente.
                </p>
                <p>
                    Per aiutarsi nell'analisi, possono essere realizzate <B>visualizzazioni</B>, come grafici o mappe, che possono rappresentare alcune proprietà dei dati.
                </p>
                <Parenthesis>
                    Questa è la fase in cui <Link href={"https://matplotlib.org/"}>Matplotlib</Link> diventa utile!
                </Parenthesis>
            </Box>
            <Box todo>
                <Heading level={3}>
                    Sviluppo modelli
                </Heading>
                <p>
                    la prof ha lasciato a metà il discorso
                </p>
            </Box>
            <Box todo>
                <Heading level={3}>
                    Verifica ipotesi
                </Heading>
                <p>
                    le slide non continuano oltre
                </p>
            </Box>
        </Chapter>
    </>
}

export default Page
