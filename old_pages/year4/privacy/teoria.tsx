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
            <Box h="Autodeterminazione informativa">
                <p>
                    Il diritto all'<Dfn>autodeterminazione informativa</Dfn> è il diritto di <B>poter revisionare</B> il trattamento dei propri <Sb dfn="personale">dati personali</Sb> in qualsiasi momento, visualizzandoli, modificandoli o eliminandoli.
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
                <Parenthesis builtinColor={"orange"}>
                    Si arriva, quindi, a uno stato di <Link href="https://en.wikipedia.org/wiki/Anarchy">anarchia</Link>.
                </Parenthesis>
            </Box>
            <Box h="Troppa sicurezza">
                <p>
                    Se la privacy <B>viene completamente eliminata</B>, non si ha più democrazia: non abbiamo più spazio per esercitare i nostri diritti, perchè ogni nostra azione diventa soggetta a giudizio.
                </p>
                <Parenthesis builtinColor={"cyan"}>
                    Si arriva, quindi, a uno stato di <Link href="https://en.wikipedia.org/wiki/Autocracy">autocrazia</Link>.
                </Parenthesis>
            </Box>
        </Chapter>
        <Chapter h="Fonti delle norme giuridiche">
            <Box h="Gerarchia delle fonti">
                <p>
                    Le norme giuridiche possono provenire da <Dfn>fonti</Dfn> diverse, in quanto noi come individui facciamo parte di più <Sb dfn={"ordinamento giuridico"}>ordinamenti giuridici</Sb> contemporaneamente.
                </p>
                <Parenthesis>
                    Sono tutte norme: le leggi italiane, le direttive europee, il regolamento universitario, i decreti legge, etc...
                </Parenthesis>
                <p>
                    Per risolvere i conflitti che norme di fonti diverse potrebbero avere, è stato necessario stabilire una scala di priorità tra esse:
                </p>
                <OL>
                    <OL.Item><Dfn>fonti costituzionali</Dfn> - articoli della Costituzione Italiana</OL.Item>
                    <OL.Item><Dfn>fonti primarie rinforzate</Dfn> - trattati internazionali, regolamenti dell'Unione Europea</OL.Item>
                    <OL.Item><Dfn>fonti primarie</Dfn> - leggi ordinarie, decreti legislativi, decreti legge</OL.Item>
                    <OL.Item><Dfn>fonti secondarie</Dfn> - sentenze di giurisdizioni superiori, regolamenti amministrativi</OL.Item>
                    <OL.Item><Dfn>fonti consuetudinarie</Dfn> - norme de-facto, best practices</OL.Item>
                </OL>
            </Box>
        </Chapter>
        <Chapter h={"Timeline dei diritti di libertà"}>
            <Box h={"Nella storia"}>
                <Dialog>
                    400 a.C.
                </Dialog>
                <p>
                    Norme sulla riservatezza esistevano già nella <B>Grecia antica</B>.
                </p>
                <p>
                    Con il passare degli anni si sono ampliati invece i <B>doveri di riservatezza professionale</B>.
                </p>
            </Box>
            <Box h={"Costituzione della Repubblica Italiana"}>
                <Dialog>
                    Fonte <B>costituzionale</B>, 1948
                </Dialog>
                <p>
                    L'Assemblea Costituente approva la Costituzione, che in alcuni dei suoi articoli menziona esplicitamente i diritti di libertà dei cittadini italiani.
                </p>
                <p>
                    In particolare:
                </p>
                <UL>
                    <UL.Item>l'<Link href="https://www.senato.it/istituzione/la-costituzione/principi-fondamentali/articolo-2"><Cite>Articolo 2</Cite></Link> garantisce i diritti dell'uomo, sia individuali sia di gruppo</UL.Item>
                    <UL.Item>l'<Link href="https://www.senato.it/istituzione/la-costituzione/principi-fondamentali/articolo-13"><Cite>Articolo 13</Cite></Link> specifica che la libertà personale è inviolabile, se non, dove previsto da legge, con un atto motivato dell'autorità giudiziaria</UL.Item>
                    <UL.Item>l'<Link href="https://www.senato.it/istituzione/la-costituzione/principi-fondamentali/articolo-14"><Cite>Articolo 14</Cite></Link> specifica che il domicilio è tutelato come parte della libertà personale</UL.Item>
                    <UL.Item>l'<Link href="https://www.senato.it/istituzione/la-costituzione/principi-fondamentali/articolo-15"><Cite>Articolo 15</Cite></Link> specifica che la corrispondenza è tutelata come parte della libertà personale</UL.Item>
                </UL>
            </Box>
            <Box h={"Dichiarazione universale dei diritti umani"}>
                <Dialog todo>
                    Fonte <B>???</B>, 1948
                </Dialog>
                <p>
                    I membri delle Nazioni Unite firmano questa dichiarazione che elenca i diritti e le libertà degli esseri umani.
                </p>
                <p>
                    L'<Link href={"https://www.un.org/en/about-us/universal-declaration-of-human-rights"}><Cite>Articolo 8</Cite></Link> prevede il diritto ad essere tutelati dalla legge per violazioni ai propri diritti fondamentali.
                </p>
                <p>
                    L'<Link href={"https://www.un.org/en/about-us/universal-declaration-of-human-rights"}><Cite>Articolo 12</Cite></Link> prevede il diritto di <B>non essere sottoposti a interferenze arbitrarie nella vita privata</B>, nella famiglia, nel domicilio, nella corrispondenza, relativamente all'onore, o relativamente alla reputazione.
                </p>
            </Box>
            <Box h={"Convenzione europea per la salvaguardia dei diritti dell'uomo e delle libertà fondamentali"}>
                <Dialog todo>
                    Fonte <B>primaria rinforzata</B>, 1950
                </Dialog>
                <p>
                    Le nazioni parte del <Link href={"https://it.wikipedia.org/wiki/Consiglio_d%27Europa"}>Consiglio d'Europa</Link> aderiscono a questo trattato sui diritti civili.
                </p>
                <p>
                    Consente a ogni individuo di <B>far valere i propri diritti</B> attraverso il ricorso alla <I>Corte europea dei diritti dell'uomo</I>, una corte internazionale di Common Law.
                </p>
                <p>
                    In tema di privacy, essa:
                </p>
                <UL>
                    <UL.Item>rafforza i diritti di libertà concessi dalla Costituzione Italiana riguardo vita privata, familiare, domicilio e corrispondenza</UL.Item>
                    <UL.Item>prevede che le interferenze delle autorità pubbliche debbano essere <B>necessarie alla sicurezza nazionale</B> o <B>pubblica</B>, <B>al benessere economico</B>, o <B>alla protezione della salute</B>, <B>morale</B>, <B>diritti</B> e <B>libertà altrui</B></UL.Item>
                </UL>
                <Parenthesis>
                    È valida sia in termini di diritti <I builtinColor={"red"}>negativi</I>, perchè le autorità <B>non possono interferire</B> se non in determinati modi, sia <I builtinColor={"lime"}>positivi</I>, in quanto <B>gli aderenti devono impedire che vengano effettuate interferenze</B> da terze parti.
                </Parenthesis>
            </Box>
            <Box h={"Patto internazionale dell'Onu sui diritti civili e politici"}>
                <Dialog>
                    Fonte <B>primaria rinforzata</B>, 1966
                </Dialog>
                <p>
                    La netta maggioranza dei membri delle Nazioni Unite firma e ratifica questo trattato sui diritti civili.
                </p>
                <p>
                    L'<Link href={"https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights#article-17"}><Cite>Articolo 17</Cite></Link> ripete i due diritti precedentemente citati della Dichiarazione universale dei diritti umani.
                </p>
            </Box>
            <Box h={"Convenzione 108 del Consiglio d'Europa"}>
                <Dialog>
                    Fonte <B>primaria rinforzata</B>, 1981
                </Dialog>
                <p>
                    Le nazioni parte del Consiglio di Europa (<B>ma non solo!</B>) firmano e ratificano la <Dfn>Convenzione 108</Dfn>/1981 <B>vincolante a livello internazionale</B> sulla protezione delle persone dal trattamento automatizzato dei loro dati personali.
                </p>
                <p>
                    Prevede per la prima volta il principio della <B>qualità dei dati</B>, ovvero che essi siano <B>corretti</B>, <B>aggiornati</B>, <B>pertinenti</B>, <B>ottenuti legalmente</B> e <B>per fini legittimi</B>, e <B>conservati per un tempo limitato</B> a realizzare i fini per cui sono stati raccolti.
                </p>
                <p>
                    Inoltre, definisce il concetto di dati <Sb>sensibili</Sb>, dà importanza alla <B>sicurezza dei dati personali</B>, garantisce i diritti di <B>accesso</B>, <B>rettifica</B> e <B>cancellazione</B> di essi, e introduce la possibilità di <B>fare ricorso</B> con pena di <B>sanzioni</B> qualora questi principi venissero violati.
                </p>
            </Box>
            <Box h={<>Linee guida dell'<Abbreviation title={"Organizzazione per la Cooperazione e Sviluppo Economici"}>OECD</Abbreviation> sulla Protezione della Privacy</>}>
                <Dialog>
                    Fonte <B>primaria rinforzata</B>, 1981
                </Dialog>
                <p>
                    I membri dell'<Abbreviation title={"Organizzazione per la Cooperazione e Sviluppo Economici"}>OECD</Abbreviation> sottoscrivono queste linee guida per lo scambio di dati transfrontaliero.
                </p>
                <p>
                    Nella <Link href={"https://www.oecd.org/sti/ieconomy/oecdguidelinesontheprotectionofprivacyandtransborderflowsofpersonaldata.htm#part2"}><Cite>Parte 2</Cite></Link> vengono ripetuti i principi già previsti dalla <Sb>Convenzione 108</Sb>:
                </p>
                <UL>
                    <UL.Item>limitazione della quantità di dati raccolti</UL.Item>
                    <UL.Item>rilevanza, accuratezza, completezza e aggiornamento dei dati</UL.Item>
                    <UL.Item>specificità esplicita dello scopo</UL.Item>
                    <UL.Item>limitazione d'uso</UL.Item>
                    <UL.Item>tutela dei dati</UL.Item>
                    <UL.Item>trasparenza nell'utilizzo</UL.Item>
                    <UL.Item><Sb>autodeterminazione informativa</Sb></UL.Item>
                </UL>
            </Box>
            <Box h={<>Direttiva <Abbreviation title="1995">95</Abbreviation>/46/<Abbreviation title={"Comunità Europea"}>CE</Abbreviation></>}>
                <p>
                    Espansione della Convenzione 108 diretta ai membri della Comunità Europea (che diventerà poi l'Unione Europea).
                </p>
                <p>
                    Introduce numerose novità:
                </p>
                <UL>
                    <UL.Item>
                        introduce ed amplia le definizioni contenuta in essa:
                        <UL>
                            <UL.Item>
                                quando un individuo è <Dfn>identificabile</Dfn>
                            </UL.Item>
                            <UL.Item>
                                cos'è un <Dfn>trattamento di dati</Dfn> e <B>come deve svolgersi</B> (con riservatezza e sicurezza)
                            </UL.Item>
                            <UL.Item>
                                chi è il <Dfn>titolare dei dati</Dfn> di un trattamento (la persona che determina le finalità dei dati raccolti)
                            </UL.Item>
                            <UL.Item>
                                chi è il <Dfn>responsabile dei dati</Dfn> di un trattamento (la persona che effettua nella pratica il trattamento dei dati raccolti)
                            </UL.Item>
                        </UL>
                    </UL.Item>
                    <UL.Item>
                        concede alcuni diritti aggiuntivi all'interessato:
                        <UL>
                            <UL.Item>
                                diritto all'<Sb>autodeterminazione informativa</Sb> anche verso terzi a cui i dati sono stati trasmessi
                            </UL.Item>
                            <UL.Item>
                                diritto di opposizione al trattamento in situazioni personali particolari
                            </UL.Item>
                            <UL.Item>
                                diritto di opposizione al trattamento a fini di marketing
                            </UL.Item>
                            <UL.Item>
                                diritto di opposizione a trattamenti interamente automatizzati
                            </UL.Item>
                        </UL>
                    </UL.Item>
                    <UL.Item>
                        richiede che prima di effettuare trattamenti di dati <Sb dfn={"sensibile"}>sensibili</Sb> vengano effettuate verifiche dall'autorità di protezione dati
                    </UL.Item>
                    <UL.Item>
                        limita i trasferimenti di dati a paesi approvati dalla Commissione Europea, tranne in particolari eccezioni
                    </UL.Item>
                    <UL.Item>
                        dà poteri alle autorità di controllo di intervenire sui trattamenti dei dati
                    </UL.Item>
                    <UL.Item>
                        introduce un organismo internazionale che fornisce pareri sull'implementazione nazionale della direttiva
                    </UL.Item>
                </UL>
            </Box>
            <Box h={"Legge italiana"}>
                <Dialog>
                    Fonte <B>primaria</B>, vari
                </Dialog>
                <p>
                    Sono degne di nota le seguenti leggi italiane:
                </p>
                <UL>
                    <UL.Item>
                        la <B>ratifica della Convenzione 108/1981</B> <Cite>[<Abbreviation title={"Legge italiana ordinaria"}>L</Abbreviation> 98/1989]</Cite>
                    </UL.Item>
                    <UL.Item>
                        il <B>Codice della Privacy</B> <Cite>[<Abbreviation title={"Decreto legislativo italiano"}>DLvo</Abbreviation> 136/2003]</Cite>
                    </UL.Item>
                    <UL.Item>
                        il <B>Codice dell'amministrazione digitale</B> <Cite>[<Abbreviation title={"Decreto legislativo italiano"}>DLvo</Abbreviation> 82/2005]</Cite>
                    </UL.Item>
                    <UL.Item>
                        la <B>ratifica della Convenzione Cybercrime</B> <Cite>[<Abbreviation title={"Legge italiana ordinaria"}>L</Abbreviation> 48/2008]</Cite>
                    </UL.Item>
                    <UL.Item>
                        il <Cite>Decreto-legge 93/2013</Cite> <B>contro le frodi informatiche</B> relative ai furti di identità
                    </UL.Item>
                    <UL.Item>
                        e soprattutto, la <B>ratifica del GDPR</B> <Cite>[<Abbreviation title={"Decreto legislativo italiano"}>DLvo</Abbreviation> 101/2018]</Cite>
                    </UL.Item>
                </UL>
                <Parenthesis>
                    <UL>
                        <UL.Item>
                            una <Dfn>legge ordinaria</Dfn> proviene dal Parlamento
                        </UL.Item>
                        <UL.Item>
                            un <Dfn>decreto legislativo</Dfn> proviene da una commissione governativa a cui il Parlamento ha delegato la creazione della legge
                        </UL.Item>
                        <UL.Item>
                            un <Dfn>decreto-legge</Dfn> proviene dal governo in casi di urgenza e deve essere successivamente confermato dal Parlamento
                        </UL.Item>
                    </UL>
                </Parenthesis>
            </Box>
            <Box>
                <Heading level={3}>
                    Convenzione 108+ del Consiglio d'Europa
                </Heading>
                <Dialog>
                    Fonte <B>primaria rafforzata</B>, 2021
                </Dialog>
                <p>
                    Espansione della Convenzione 108 che la adegua al GDPR, facilitando il trasferimento di dati tra gli aderenti.
                </p>
                <p>
                    Vi aggiunge i principi di:
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
        </Chapter>
    </>
}

export default Page
