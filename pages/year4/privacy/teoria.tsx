import {Heading, ListUnordered as UL, ListOrdered as OL, Parenthesis, Idiomatic as I, BringAttention as B, Abbreviation, Quote as Q, Dialog, Details, Cite, UAnnotation as U} from "@steffo/bluelib-react"
import {ChapterForceWrap} from "@steffo/bluelib-react/dist/components/chapters/ChapterForceWrap"
import type { NextPage, NextPageContext } from 'next'
import { Link } from '../../../components/link'
import {Chapter, Box, Dfn, Sb} from "../../../components/useful"


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
        <Chapter h="Alcuni termini giuridici">
            <Box h="Ordinamento">
                <p>
                    Un <Dfn>ordinamento giuridico</Dfn> è un <B>insieme strutturato di regole</B> che regolano i rapporti interpersonali e interistituzionali.
                </p>
                <Parenthesis>
                    Ad esempio, lo Stato Italiano è il perfetto esempio di <I>ordinamento giuridico</I>.
                </Parenthesis>
            </Box>
            <Box h="Norma">
                <p>
                    Una <Dfn>norma giuridica</Dfn> è una <B>singola regola</B> che disciplina la vita della società.
                </p>
                <p>
                    È composta da:
                </p>
                <UL>
                    <UL.Item>una <Dfn>formula</Dfn>, corrispondente al testo letterale della <I>norma</I></UL.Item>
                    <UL.Item>un <Dfn>precetto</Dfn>, corrispondente a ciò che la <I>norma</I> stessa stabilisce</UL.Item>
                </UL>
                <Parenthesis>
                    Un <Sb>ordinamento giuridico</Sb> solitamente contiene numerose <I>norme</I>.
                </Parenthesis>
            </Box>
            <Box h="Temperamento">
                <p>
                    Il <Dfn>temperamento giuridico</Dfn> è un principio secondo il quale <B>due interessi in conflitto vanno mediati</B>.
                </p>
                <Parenthesis todo>
                    Messo qui così mi sembra senza contesto.
                </Parenthesis>
            </Box>
        </Chapter>
        <Chapter h="Tipi di diritti">
            <Box h="Diritto positivo">
                <p>
                    È <Dfn builtinColor="lime">positivo</Dfn> un diritto che <B>garantisce</B> la possibilità di un individuo di intraprendere una azione.
                </p>
                <Parenthesis>
                    Un individuo <U builtinColor="lime">deve sempre essere in grado di visualizzare</U> i propri dati personali detenuti da terzi.
                </Parenthesis>
            </Box>
            <Box h="Diritto negativo">
                <p>
                    È <Dfn builtinColor="red">negativo</Dfn> un diritto che <B>proibisce</B> ad un'entità di interferire con la libertà di un individuo.
                </p>
                <Parenthesis>
                    Le intercettazioni sono permissibili <U builtinColor="red">solo dove previste dalla legge</U>, e mai arbitrariamente.
                </Parenthesis>
            </Box>
        </Chapter>
        <Chapter h="Tipi di dati">
            <Box h="Dato">
                <p>
                    Un <Dfn>dato</Dfn> è una <B>nozione grezza</B> non elaborata.
                </p>
                <Parenthesis>
                    <Q>Oggi il sito della mia impresa ha avuto <U>289</U> visite.</Q>
                </Parenthesis>
            </Box>
            <Box h="Dato personale">
                <p>
                    È <Dfn>personale</Dfn> un dato che <B>identifica un individuo</B>, anche indirettamente.
                </p>
                <Parenthesis>
                    <Q>Oggi <U>123.45.67.89</U> ha visitato il sito della mia impresa.</Q>
                </Parenthesis>
            </Box>
            <Box h="Dato sensibile">
                <p>
                    È <Dfn>sensibile</Dfn> un dato che, oltre a identificare un individuo, ne rivela elementi della sua <B>identità fisica</B>, <B>fisiologica</B>, <B>genetica</B>, <B>psichica</B>, <B>economica</B>, <B>culturale</B> o <B>sociale</B>.
                </p>
                <Parenthesis>
                    <Q>Oggi <U>123.45.67.89</U> ha richiesto <U>una visita specialistica</U> in ospedale.</Q>
                </Parenthesis>
            </Box>
            <Box h="Informazione">
                <p>
                    <B>Dato elaborato</B> e analizzato da cui derivano nozioni aggiuntive.
                </p>
                <Parenthesis todo>
                    Non so bene perchè ne abbiamo parlato, qualche idea?
                </Parenthesis>
            </Box>
        </Chapter>
        <Chapter h="Strumenti giudiziari">
            <Box h="Ordinanza">
                <p>
                    Un'<Dfn>ordinanza</Dfn> è uno <B>strumento giudiziario</B> che il giudice può <I>emanare</I> durante un processo per ragioni di necessità allo svolgimento di esso.
                </p>
                <p>
                    Obbliga <B>temporaneamente</B> una o più parti di un processo a <B>compiere o interrompere determinate azioni</B>.
                </p>
                <p>
                    Deve sempre essere <B>motivata</B> e può essere <B>dibattuta</B> perchè venga modificata o annullata.
                </p>
                <Parenthesis>
                    Sono <I>ordinanze</I> la <B>custodia cautelare</B>, la <B>richiesta di dati</B> relativi a un utente, o un ordine di <B>sbloccare il telefono con l'impronta digitale</B>.
                </Parenthesis>
            </Box>
            <Box h="Sentenza">
                <p>
                    Una <Dfn>sentenza</Dfn> è uno <B>strumento giudiziario</B> con cui il giudice conclude un caso.
                </p>
                <p>
                    Obbliga <B>permanentemente</B> una o più parti di un processo a <B>compiere o interrompere determinate azioni</B>.
                </p>
                <Parenthesis>
                    <Q>Sei obbligato a... fare una vacanzina al fresco.</Q>
                </Parenthesis>
            </Box>
        </Chapter>
        <Chapter h="Particolarità giuridiche di Internet">
            <Box h="Aspetti sociologici">
                <p>
                    Internet è un campo piuttosto particolare a livello giuridico per via di alcuni <Dfn>aspetti sociologici</Dfn> che presenta.
                </p>
                <p>
                    Essendo formato non solo da componenti puramente tecnici come protocolli e tecnologie, ma anche dalle persone che lo utilizzano, esso definisce una <B>rete di rapporti giuridici</B>.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box h="Pervasività">
                <p>
                    Internet è <Dfn>pervasivo</Dfn>, ovvero presente in <B>tutti gli aspetti della vita</B>.
                </p>
                <p>
                    È facile quindi che avvenimenti relativi ad esso abbiano <B>risvolti profondi su tutte le persone</B>.
                </p>
                <Parenthesis>
                    Anche solo <Link href="https://en.wikipedia.org/wiki/DeGoogle">evitare di utilizzare servizi Google</Link> è parecchio complicato: figuriamoci evitare completamente Internet!
                </Parenthesis>
            </Box>
            <Box h="Globalizzazione">
                <p>
                    Internet è <Dfn>globalizzato</Dfn>, ovvero connette <B>tutto il mondo</B>, e utilizzandolo si <B>oltrepassano spesso i confini nazionali</B>.
                </p>
                <p>
                    Non è quindi possibile regolamentarlo introducendo norme in un solo ordinamento, ma sono necessari accordi internazionali.
                </p>
                <Parenthesis>
                    Se commetto un cyber-crimine negli Stati Uniti, ma io mi trovo nella Federazione Russa, difficilmente verrò estradato, o anche solo punito.
                </Parenthesis>
            </Box>
        </Chapter>
        <Chapter>
            <Box h="Nella Costituzione Italiana">
                <p>
                    L'utilizzo di Internet viene tutelato dalla Costituzione Italiana come <B>mezzo di espressione della libertà individuale</B>.
                </p>
                <p>
                    L'<Link href="https://www.senato.it/istituzione/la-costituzione/principi-fondamentali/articolo-2"><Cite>Articolo 2</Cite></Link> e l'<Link href="https://www.senato.it/istituzione/la-costituzione/principi-fondamentali/articolo-13"><Cite>Articolo 13</Cite></Link> includono quindi l'<B>utilizzo dell'informatica</B> all'interno della <B>libertà personale</B>.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box h="Diritto di accesso">
                <p>
                    Diritto di <B>accedere a Internet in condizioni di parità</B> con tutti gli altri cittadini.
                </p>
                <Parenthesis>
                    <p>
                        Implica due cose:
                    </p>
                    <UL>
                        <UL.Item>che non deve essere possibile privare qualcuno dell'accesso a Internet</UL.Item>
                        <UL.Item>che deve essere sviluppata un'infrastruttura che permetta a più persone possibili di usufruire di Internet</UL.Item>
                    </UL>
                </Parenthesis>
            </Box>
            <Box h="Neutralità della rete">
                <p>
                    Diritto che il proprio traffico Internet <B>non venga discriminato</B>.
                </p>
                <Parenthesis>
                    Implica che i fornitori del servizio Internet non possono rallentare o velocizzare la connessione verso determinate destinazioni rispetto ad altre.
                </Parenthesis>
                <Parenthesis>
                    È una questione molto discussa in giro per il mondo e la rete stessa: ci sono state numerose campagne online per proteggere questo diritto.
                </Parenthesis>
                <Parenthesis>
                    C'è anche un <Link href={"https://en.wikipedia.org/wiki/Net_neutrality"}>paginone enorme su Wikipedia</Link> sull'argomento.
                </Parenthesis>
            </Box>
            <Box h="Diritto all'educazione digitale">
                <p>
                    Diritto di <B>acquisire le conoscenze necessarie</B> a navigare in rete.
                </p>
                <Parenthesis>
                    A scuola dovrebbero insegnare come si usa Internet.<br/>
                    Haha, bella battuta: non lo sanno nemmeno i professori stessi...
                </Parenthesis>
            </Box>
            <Box h="Inviolabilità di domicilio informatico">
                <p>
                    Garanzia che i nostri sistemi informatici siano <B>inviolabili</B>, proprio come il nostro domicilio.
                </p>
                <Parenthesis>
                    Proibisce intrusioni arbitrarie nei nostri dispositivi, e la sorveglianza di massa su tutti i cittadini: la polizia può intervenire solo nei casi previsti dalla legge e solo con mandato di un giudice.
                </Parenthesis>
            </Box>
            <Box h="Diritto all'oblio">
                <p>
                    Diritto che informazioni errate e irrilevanti vengano eliminate da indici e motori di ricerca.
                </p>
                <p>
                    È controbilanciato dalla rilevanza pubblica delle informazioni in questione: se esse sono di pubblico interesse, allora devono essere accessibili.
                </p>
                <Parenthesis>
                    Potete <Link href={"https://support.google.com/legal/answer/10769224"}>fare oscurare informazioni errate o non aggiornate su di voi da Google</Link>.
                </Parenthesis>
            </Box>
            <Box h="Diritto alla rete globale">
                <p>
                    Diritto all'esistenza di un sistema di <B>regole internazionali</B> che tutelino la libertà di ogni individuo in rete, a <B>prescindere dalla sua provenienza</B> o <B>potere economico</B>.
                </p>
                <Parenthesis>
                    Abbiamo diritto a un Internet unito e non <Link href="https://en.wikipedia.org/wiki/Splinternet">frammentato</Link>!
                </Parenthesis>
            </Box>
            <Box h="Diritti delle persone sulle piattaforme">
                <p>
                    Dovere dei gestori di piattaforme online di comportarsi con <B>lealtà e correttezza nei confronti dei loro utenti</B>.
                </p>
                <Parenthesis>
                    Disse nessun gestore di piattaforme nella storia.
                </Parenthesis>
            </Box>
            <Box h="Diritto alla sicurezza in rete">
                <p>
                    Garanzia dell'<B>integrità delle infrastrutture</B> di rete e di tutela contro possibili attacchi verso di esse.
                </p>
                <Parenthesis>
                    Niente attacchi DoS verso nessuno, per piacere!
                </Parenthesis>
            </Box>
            <Box h="Diritto alla privacy">
                <p>
                    <B>Eccezione al diritto di cronaca</B> che garantisce la dignità e l'identità della singola persona garantendone la <B>segretezza</B> e <B>riservatezza</B> dei <B>dati personali</B>.
                </p>
                <Parenthesis>
                    Prevede che un individuo debba sempre poter controllare, modificare, ed eliminare i propri dati personali da chiunque ne sia in possesso.
                </Parenthesis>
            </Box>
        </Chapter>
        <Chapter h="Approfondendo la privacy">
            <Box h="Segretezza">
                <p>
                    Il diritto alla <Dfn>segretezza</Dfn> è il diritto a <B>non fare conoscere ad altri</B> ciò che ci riguarda.
                </p>
                <Parenthesis builtinColor="red">
                    È un diritto <B>negativo</B>: <U>proibisce</U> di imporre a un individuo di rivelare elementi della sua vita privata.
                </Parenthesis>
            </Box>
            <Box h="Riservatezza">
                <p>
                    Il diritto alla <Dfn>riservatezza</Dfn> è il diritto di <B>non vedere divulgate a terzi</B> informazioni private che abbiamo comunicato ad un individuo.
                </p>
                <Parenthesis builtinColor="red">
                    È un diritto <B>negativo</B>: <U>proibisce</U> a un individuo di divulgare informazioni di cui non è il proprietario.
                </Parenthesis>
            </Box>
            <Box h="Autodeterminazione informatica">
                <p>
                    Il diritto all'<Dfn>autodeterminazione informatica</Dfn> è il diritto di <B>poter revisionare</B> il trattamento dei propri <Sb dfn="personale">dati personali</Sb> in qualsiasi momento, visualizzandoli, modificandoli o eliminandoli.
                </p>
                <Parenthesis builtinColor="lime">
                    È un diritto <B>positivo</B>: <U>garantisce</U> a un individuo la possibilità di gestire i propri dati.
                </Parenthesis>
            </Box>
        </Chapter>
        <Chapter h="Libertà e sicurezza">
            <Box h="Due concetti agonisti">
                <p>
                    In competizione con i <Sb>diritti di libertà personale</Sb> c'è il <Dfn>diritto alla sicurezza</Dfn>, ovvero il principio per cui i cittadini di uno stato democratico devono vedersi tutti i loro diritti da esso garantiti.
                </p>
                <Parenthesis>
                    Se la polizia non avesse il potere di imporsi sulla vita privata dei cittadini, non sarebbe possibile per lo Stato punire i criminali.
                </Parenthesis>
                <p>
                    In particolare, contrapposto al <B>diritto alla privacy</B>, si ha il <B>diritto di cronaca</B> per fatti di <B>particolare rilevanza pubblica</B>.
                </p>
                <Parenthesis>
                    Ad esempio, riguardo <B>fatti di rilevanza pubblica</B>: è importante sapere se un senatore ha ricevuto pagamenti da uno Stato rivale!
                </Parenthesis>
            </Box>
            <Box h="Chilling effect">
                <p>
                    In uno stato democratico, deve essere possibile per lo Stato scavalcare la libertà dei cittadini <B>solo dove previsto dalla legge</B>, e non arbitrariamente, perchè altrimenti diverrebbe possibile intimidirli a <B>non esercitare i propri diritti</B>, risultando in quello che viene detto <Dfn>chilling effect</Dfn>.
                </p>
                <Parenthesis>
                    Una legge che elimina la segretezza nel voto potrebbe influenzare alcuni a non votare certi partiti per paura di <Link href="https://it.wikipedia.org/wiki/Squadrismo">ritorsioni</Link>.
                </Parenthesis>
            </Box>
        </Chapter>
        <Chapter>
            <Box h="Troppa privacy">
                <p>
                    Se la privacy <B>viene garantita in ogni momento</B>, non si ha più democrazia: non è più possibile per lo Stato tutelare i nostri diritti, perchè non riesce più a <B>imporsi</B> in caso di violazione.
                </p>
                <Parenthesis>
                    Si arriva, quindi, a uno stato di <Link href="https://en.wikipedia.org/wiki/Anarchy">anarchia</Link>.
                </Parenthesis>
            </Box>
            <Box h="Troppa sicurezza">
                <p>
                    Se la privacy <B>viene completamente eliminata</B>, non si ha più democrazia: non abbiamo più spazio per esercitare i nostri diritti, perchè ogni nostra azione diventa soggetta a giudizio.
                </p>
                <Parenthesis>
                    Si arriva, quindi, a uno stato di <Link href="https://en.wikipedia.org/wiki/Autocracy">autocrazia</Link>.
                </Parenthesis>
            </Box>
        </Chapter>
        <Chapter h="Fonti delle norme giuridiche">
            <Box>
                <Heading level={3}>
                    La scala
                </Heading>
                <p>
                    Le norme giuridiche possono provenire da <Dfn>fonti</Dfn> diverse, in quanto non facciamo parte di un unico <Sb>ordinamento giuridico</Sb> ma apparteniamo a più di essi contemporaneamente.
                </p>
                <Parenthesis>
                    Sono norme: le leggi italiane, le direttive europee, il regolamento universitario, i decreti legge, etc...
                </Parenthesis>
                <p>
                    È necessario che ad esse venga 
                </p>
                <OL>
                    <OL.Item>fonti costituzionali</OL.Item>
                    <OL.Item>fonti primarie rinforzate</OL.Item>
                    <OL.Item>fonti primarie</OL.Item>
                    <OL.Item>fonti secondarie</OL.Item>
                    <OL.Item>fonti consuetudinarie</OL.Item>
                </OL>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Fonti costituzionali
                </Heading>
                <p>
                    La <B>Costituzione Italiana</B> è la fonte con più priorità nell'ordinamento giuridico italiano, l'unica <Dfn>fonte costituzionale</Dfn>.
                </p>
                <p>
                    In particolare, riguardano i <B>diritti di libertà</B> i seguenti articoli:
                </p>
                <Dialog>
                    <Details>
                        <Details.Summary>
                            <Cite><Abbreviation title={"Costituzione Italiana"}>CI</Abbreviation> - Articolo 2</Cite>
                        </Details.Summary>
                        <p>
                            <Link href={"https://github.com/dubrox/Costituzione-Italiana/blob/master/TESTO.md#art-2"}>[src]</Link>
                            &nbsp;
                            <Q>La Repubblica riconosce e garantisce i diritti inviolabili dell'uomo, sia come singolo sia nelle formazioni sociali ove si svolge la sua personalità, e richiede l'adempimento dei doveri inderogabili di solidarietà politica, economica e sociale.</Q>
                        </p>
                    </Details>
                </Dialog>
                <Dialog>
                    <Details>
                        <Details.Summary>
                            <Cite><Abbreviation title={"Costituzione Italiana"}>CI</Abbreviation> - Articolo 13</Cite>
                        </Details.Summary>
                        <p>
                            <Link href={"https://github.com/dubrox/Costituzione-Italiana/blob/master/TESTO.md#art-13"}>[src]</Link>
                            &nbsp;
                            <Q>
                                La libertà personale è inviolabile.<br/>
                                Non è ammessa forma alcuna di detenzione, di ispezione o perquisizione personale, né qualsiasi altra restrizione della libertà personale, se non per atto motivato dell'autorità giudiziaria e nei soli casi e modi previsti dalla legge.<br/>
                                [...]
                            </Q>
                        </p>
                    </Details>
                </Dialog>
                <Dialog>
                    <Details>
                        <Details.Summary>
                            <Cite><Abbreviation title={"Costituzione Italiana"}>CI</Abbreviation> - Articolo 14</Cite>
                        </Details.Summary>
                        <p>
                            <Link href={"https://github.com/dubrox/Costituzione-Italiana/blob/master/TESTO.md#art-14"}>[src]</Link>
                            &nbsp;
                            <Q>
                                Il domicilio è inviolabile.<br/>
                                Non vi si possono eseguire ispezioni o perquisizioni o sequestri se non nei casi e modi stabiliti dalla legge secondo le garanzie prescritte per la tutela della libertà personale.<br/>
                                [...]
                            </Q>
                        </p>
                    </Details>
                </Dialog>
                <Dialog>
                    <Details>
                        <Details.Summary>
                            <Cite><Abbreviation title={"Costituzione Italiana"}>CI</Abbreviation> - Articolo 15</Cite>
                        </Details.Summary>
                        <p>
                            <Link href={"https://github.com/dubrox/Costituzione-Italiana/blob/master/TESTO.md#art-15"}>[src]</Link>
                            &nbsp;
                            <Q>
                                La libertà e la segretezza della corrispondenza e di ogni altra forma di comunicazione sono inviolabili.<br/>
                                La loro limitazione può avvenire soltanto per atto motivato dell'autorità giudiziaria con le garanzie stabilite dalla legge.
                            </Q>
                        </p>
                    </Details>
                </Dialog>
            </Box>
            <Box todo>
                <Heading level={3}>
                    Fonti primarie rinforzate
                </Heading>
                <p>
                    I <B>regolamenti</B> dell'Unione Europea sono applicati automaticamente in tutti i paesi membri sovrascrivendo le leggi ordinarie nazionali, e sono detti <Dfn>fonti primarie rinforzate</Dfn>.
                </p>
            </Box>
            <Box>
                <Heading level={3}>
                    Fonti primarie
                </Heading>
                <p>
                    Le <B>leggi ordinarie</B> (del parlamento), i <B>decreti legislativi</B> (delegati dal parlamento al governo), e i <B>decreti legge</B> (del governo per ragioni di urgenza) sono dette <Dfn>fonti primarie</Dfn>.
                </p>
                <p>
                    Di particolare importanza sono:
                </p>
                <UL>
                    <UL.Item>
                        la <B>ratifica della Convenzione di Strasburgo</B> <Cite>[<Abbreviation title={"Legge italiana ordinaria"}>L</Abbreviation> 98/1989]</Cite>
                    </UL.Item>
                    <UL.Item>
                        il <B>Codice in materia di dati personali</B> o <B>della Privacy</B> <Cite>[<Abbreviation title={"Decreto legislativo italiano"}>DLvo</Abbreviation> 136/2003]</Cite>
                    </UL.Item>
                    <UL.Item>
                        il <B>Codice dell'amministrazione digitale</B> <Cite>[<Abbreviation title={"Decreto legislativo italiano"}>DLvo</Abbreviation> 82/2005]</Cite>
                    </UL.Item>
                    <UL.Item>
                        la <B>ratifica della Convenzione di Budapest</B> sulla criminalità informatica <Cite>[<Abbreviation title={"Legge italiana ordinaria"}>L</Abbreviation> 48/2008]</Cite> che introduce le investigazioni penali informatiche
                    </UL.Item>
                    <UL.Item>
                        la <B>legge <Cite>[<Abbreviation title={"Legge italiana ordinaria"}>L</Abbreviation> 93/2013]</Cite></B> che argina le frodi relative ai furti di identità
                    </UL.Item>
                    <UL.Item>
                        e soprattutto, la <B>ratifica del <Abbreviation title={"Regolamento europeo sulla protezione dei dati"}>GDPR</Abbreviation></B> <Cite>[<Abbreviation title={"Decreto legislativo italiano"}>DLvo</Abbreviation> 101/2018]</Cite>
                    </UL.Item>
                </UL>
            </Box>
            <Box>
                <Heading level={3}>
                    Fonti secondarie
                </Heading>
                <p>
                    I <B>regolamenti</B> (emanati da autorità amministrative) costituiscono le <Dfn>fonti secondarie</Dfn>.
                </p>
                <p>
                    In tema di privacy, è particolarmente rilevante:
                </p>
                <UL>
                    <UL.Item>
                        il <B>regolamento per l'adozione di linee guida e attuazione del Codice dell'amministrazione digitale</B> <Cite>[<Abbreviation title={"Agenzia per l'Italia Digitale"}>AGID</Abbreviation> 2018-05-17]</Cite>
                    </UL.Item>
                </UL>
            </Box>
            <Box>
                <Heading level={3}>
                    Fonti consuetudinarie
                </Heading>
                <p>
                    Quando non c'è nessuna fonte che regola un determinato argomento, ci si appella alle condotte ripetute nel tempo in quel dato ambito, formando <Dfn>fonti consuetudinarie</Dfn>.
                </p>
                <p>
                    In tema di privacy, un esempio di esse sono:
                </p>
                <UL>
                    <UL.Item>
                        le <B>best practices</B> riguardanti le investigazioni informatiche e la raccolta di <I>prove digitali</I>
                    </UL.Item>
                </UL>
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
            <Box todo>
                <Heading level={3}>
                    Convenzione europea dei diritti dell'uomo
                </Heading>
                <p>
                    in particolare l'articolo 8
                </p>
            </Box>
            <Box todo>
                <Heading level={3}>
                    Convenzione 108/1981 del Consiglio d'Europa
                </Heading>
                <p>
                    Strumento giuridico attraverso il quale si inizia a dare forma ai diritti alla privacy dei cittadini degli stati aderenti.
                </p>
                <p>
                    qualcosa
                </p>
                <p>
                    Viene usata per regolare le protezioni che devono avere i dati quando trasferiti verso paesi terzi esterni all'Unione Europea.
                </p>
            </Box>
            <Box todo>
                <Heading level={3}>
                    Convenzione 108+
                </Heading>
                <p>
                    Espansione della Convenzione 108 con il fine di facilitare il trasferimento di dati al di fuori dei confini delle nazioni aderenti.
                </p>
                <p>
                    Aggiunge alcuni principi:
                </p>
                <UL>
                    <UL.Item>
                        accountability
                    </UL.Item>
                    <UL.Item>
                        trasparenza nei trattamenti
                    </UL.Item>
                    <UL.Item>
                        valutazione preventiva dei rischi
                    </UL.Item>
                    <UL.Item>
                        privacy by design
                    </UL.Item>
                    <UL.Item>
                        privacy by default
                    </UL.Item>
                    <UL.Item>
                        notifica dei data breach
                    </UL.Item>
                    <UL.Item>
                        diritto a non essere soggetti a decisioni automatizzate
                    </UL.Item>
                </UL>
            </Box>
            <Box todo>
                <Heading level={3}>
                    Direttiva <Abbreviation title="1995">95</Abbreviation>/46/CE
                </Heading>
                <p>
                    Espansione della Convenzione 108.
                </p>
                <p>
                    Introduce ed amplia le definizioni contenuta in essa:
                </p>
                <UL>
                    <UL.Item>
                        <I>identificabile</I>
                    </UL.Item>
                    <UL.Item>
                        <I>trattamento dei dati</I>
                    </UL.Item>
                    <UL.Item>
                        <Dfn>titolare dei dati</Dfn>: persona che trae "benenfici" dai dati raccolti da individui
                    </UL.Item>
                    <UL.Item>
                        <Dfn>responsabile dei dati</Dfn>: persona che effettua il trattamento pratico dei dati
                    </UL.Item>
                </UL>
                <p>
                    Inoltre, rende obbligatoriamente <B>espliciti</B> e <B>trasparenti</B> i trattamenti dei dati, e specifica alcune <B>categorie speciali</B> di dati che necessitano di trattamenti particolari.
                </p>
                <p>
                    Infine, concede alcuni diritti all'interessato:
                </p>
                <UL>
                    <UL.Item>
                        diritto ad accesso, cancellazione, rettifica e congelamento dei dati
                    </UL.Item>
                    <UL.Item>
                        diritto di opposizione in situazioni particolari
                    </UL.Item>
                    <UL.Item>
                        diritto di opposizione al marketing
                    </UL.Item>
                    <UL.Item>
                        diritto di non essere sottoposti ad analisi di personalità?
                    </UL.Item>
                    <UL.Item>
                        [...]
                    </UL.Item>
                </UL>
            </Box>

        </Chapter>
    </>
}

export default Page
