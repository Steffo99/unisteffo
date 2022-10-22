import {Heading, Chapter, Box, ListUnordered, ListOrdered, Parenthesis, Idiomatic as I, BringAttention as B, Definition, Abbreviation, Quote} from "@steffo/bluelib-react"
import {ChapterForceWrap} from "@steffo/bluelib-react/dist/components/chapters/ChapterForceWrap"
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
                Glossario di vari termini giuridici
            </Heading>
            <Box>
                <Heading level={3}>
                    Ordinamento
                </Heading>
                <p>
                    <B>Insieme strutturato</B> di regole che regolano i rapporti interpersonali e interistituzionali.
                </p>
            </Box>
            <Box builtinColor={"orange"}>
                <Heading level={3}>
                    Fatto
                </Heading>
                <p>
                    <B>Avvenimento oggettivo</B> rilevante alla questione di cui si sta discutendo.
                </p>
            </Box>
            <Box builtinColor={"orange"}>
                <Heading level={3}>
                    Atto
                </Heading>
                <p>
                    <B>Azione</B> intrapresa da uno o più individui, che può essere volontaria oppure no.
                </p>
            </Box>
            <Box>
                <Heading level={3}>
                    Norma
                </Heading>
                <p>
                    <B>Singola regola</B> che disciplina la vita della società.
                </p>
                <p>
                    È composta da una <Definition>formula</Definition>, il suo testo letterale, e da un <Definition>precetto</Definition>, ciò che essa stabilisce.
                </p>
            </Box>
            <Box>
                <Heading level={3}>
                    Dato
                </Heading>
                <p>
                    <B>Nozione grezza</B>, non elaborata.
                </p>
                <p>
                    È <Definition>personale</Definition> se <B>identifica un individuo</B> <small>(anche indirettamente)</small> e lo associa a un elemento della sua <B>identità fisica</B>, <B>fisiologica</B>, <B>genetica</B>, <B>psichica</B>, <B>economica</B>, <B>culturale</B> o <B>sociale</B>.
                </p>
            </Box>
            <Box>
                <Heading level={3}>
                    Informazione
                </Heading>
                <p>
                    <B>Dato elaborato</B> e analizzato da cui derivano nozioni aggiuntive.
                </p>
            </Box>
            <Box>
                <Heading level={3}>
                    Temperamento
                </Heading>
                <p>
                    <B>Principio</B> secondo il quale due interessi in conflitto vanno <B>mediati</B>.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Heading level={2}>
                Caratteristiche giuridiche dell'informatica
            </Heading>
            <Box>
                <Heading level={3}>
                    Aspetti sociologici dell'informatica
                </Heading>
                <p>
                    Due caratteristiche rendono l'informatica molto particolare a livello giuridico: la sua <B>pervasività</B> e la sua <B>globalizzazione</B>.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Pervasività
                </Heading>
                <p>
                    L'informatica è presente in <B>tutti gli aspetti della vita</B>.
                </p>
                <Parenthesis>
                    È facile che essa permetta ai cittadini di evitare alcuni dei loro doveri, o che li privi di alcuni loro diritti.
                </Parenthesis>
            </Box>
            <Box>
                <Heading level={3}>
                    Globalizzazione
                </Heading>
                <p>
                    L'informatica esiste in <B>tutto il mondo</B>, e attraverso di essa <B>si oltrepassano frequentemente oltre i confini nazionali</B>.
                </p>
                <Parenthesis>
                    Per regolamentarne l'utilizzo, non sarà sempre sufficiente utilizzare norme all'interno di un ordinamento specifico, ma sarà necessaria un'infrastruttura giuridica comune a più nazioni possibile.
                </Parenthesis>
            </Box>
        </Chapter>
        <Chapter>
            <Heading level={2}>
                Privacy
            </Heading>
            <Box>
                <Heading level={3}>
                    Cos'è?
                </Heading>
                <p>
                    La privacy è un insieme di diritti sia <Abbreviation title={"Che proibiscono determinati atti."} builtinColor={"red"}>[-] negativi</Abbreviation> sia <Abbreviation title={"Che tutelano determinati atti."} builtinColor={"lime"}>[+] positivi</Abbreviation> relativi alla vita privata degli individui.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box builtinColor={"red"}>
                <Heading level={3}>
                    [–] Segretezza
                </Heading>
                <p>
                    Il diritto a <B>non fare conoscere ad altri</B> quello ciò che ci riguarda.
                </p>
            </Box>
            <Box builtinColor={"red"}>
                <Heading level={3}>
                    [–] Riservatezza
                </Heading>
                <p>
                    Il dovere da parte di terzi di <B>non divulgare informazioni segrete</B> a loro dirette.
                </p>
            </Box>
            <Box builtinColor={"lime"}>
                <Heading level={3}>
                    [+] Autodeterminazione informativa
                </Heading>
                <p>
                    Il diritto di <B>poter controllare</B> i propri dati personali.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Heading level={2}>
                Diritti di libertà su Internet
            </Heading>
            <Box>
                <Heading level={3}>
                    Cosa sono?
                </Heading>
                <p>
                    Perchè le persone si sentano libere di intraprendere le scelte che desiderano, devono essere tutelati alcuni diritti, detti <Definition>diritti di libertà</Definition>.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Diritto di accesso
                </Heading>
                <p>
                    Diritto di <B>accedere a Internet in condizioni di parità</B> con tutti gli altri cittadini.
                </p>
                <Parenthesis>
                    <p>
                        Implica due cose:
                    </p>
                    <ListUnordered>
                        <ListUnordered.Item>che non deve essere possibile privare qualcuno dell'accesso a Internet</ListUnordered.Item>
                        <ListUnordered.Item>che deve essere sviluppata un'infrastruttura che permetta a più persone possibili di usufruire di Internet</ListUnordered.Item>
                    </ListUnordered>
                </Parenthesis>
            </Box>
            <Box>
                <Heading level={3}>
                    Neutralità della rete
                </Heading>
                <p>
                    Diritto che il proprio traffico Internet <B>non venga discriminato</B>.
                </p>
                <Parenthesis>
                    <p>
                        Implica che i fornitori del servizio Internet non possono rallentare o velocizzare la connessione verso determinate destinazioni rispetto ad altre.
                    </p>
                </Parenthesis>
                <Parenthesis>
                    <p>
                        È una questione molto discussa in giro per il mondo e la rete stessa: ci sono state numerose campagne online per proteggere questo diritto.
                    </p>
                </Parenthesis>
                <Parenthesis>
                    <p>
                        C'è anche un <Link href={"https://en.wikipedia.org/wiki/Net_neutrality"}>paginone enorme su Wikipedia</Link> sull'argomento.
                    </p>
                </Parenthesis>
            </Box>
            <Box>
                <Heading level={3}>
                    Diritto all'educazione digitale
                </Heading>
                <p>
                    Diritto di <B>acquisire le conoscenze necessarie</B> a navigare in rete.
                </p>
                <Parenthesis>
                    <p>
                        A scuola dovrebbero insegnare come si usa Internet. Haha, bella battuta: non lo sanno nemmeno i professori stessi...
                    </p>
                </Parenthesis>
            </Box>
            <Box>
                <Heading level={3}>
                    Diritto alla privacy
                </Heading>
                <p>
                    <B>Eccezione al diritto di cronaca</B> che garantisce la dignità e l'identità della singola persona garantendo la <B>segretezza</B> e <B>riservatezza</B> dei propri <B>dati personali</B>.
                </p>
                <Parenthesis>
                    <p>
                        Prevede che un individuo debba sempre poter controllare, modificare, ed eliminare i propri dati personali da chiunque ne sia in possesso.
                    </p>
                </Parenthesis>
            </Box>
            <Box>
                <Heading level={3}>
                    Inviolabilità di domicilio informatico
                </Heading>
                <p>
                    Garanzia che i nostri sistemi informatici siano <B>inviolabili</B>, proprio come il nostro domicilio.
                </p>
                <Parenthesis>
                    <p>
                        Proibisce intrusioni arbitrarie nei nostri dispositivi, e la sorveglianza di massa su tutti i cittadini.
                    </p>
                    <p>
                        La polizia può intervenire solo nei casi previsti dalla legge e solo con mandato di un giudice.
                    </p>
                </Parenthesis>
            </Box>
            <Box>
                <Heading level={3}>
                    Diritto all'oblio
                </Heading>
                <p>
                    Diritto che informazioni errate e irrilevanti vengano eliminate da indici e motori di ricerca.
                </p>
                <p>
                    È controbilanciato dalla rilevanza pubblica delle informazioni in questione: se esse sono di pubblico interesse, allora devono essere accessibili.
                </p>
                <Parenthesis>
                    <p>
                        Potete <Link href={"https://support.google.com/legal/answer/10769224"}>fare oscurare informazioni errate o non aggiornate su di voi da Google</Link>.
                    </p>
                </Parenthesis>
            </Box>
            <Box>
                <Heading level={3}>
                    Diritto globale alla libertà in rete
                </Heading>
                <p>
                    Diritto all'esistenza di un sistema di <B>regole internazionali</B> che tutelino la libertà di ogni individuo in rete, a <B>prescindere dalla sua provenienza</B> o <B>potere economico</B>.
                </p>
            </Box>
            <Box>
                <Heading level={3}>
                    Diritti delle persone sulle piattaforme
                </Heading>
                <p>
                    Dovere dei gestori di piattaforme online di comportarsi con <B>lealtà e correttezza nei confronti dei loro utenti</B>.
                </p>
                <Parenthesis>
                    <Quote>hahahahahahahaha hsudghudahfguadhfughdufhgduhfgja hahahfushdushud</Quote>
                </Parenthesis>
            </Box>
            <Box>
                <Heading level={3}>
                    Diritto alla sicurezza in rete
                </Heading>
                <p>
                    Garanzia dell'<B>integrità delle infrastrutture</B> di rete e di tutela contro possibili attacchi verso di esse.
                </p>
                <Parenthesis>
                    <p>
                        Niente attacchi DoS verso nessuno, per piacere!
                    </p>
                </Parenthesis>
            </Box>
        </Chapter>
        <Chapter>
            <Heading level={2}>
                Unsorted stuff
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
        </Chapter>
    </>
}

export default Page
