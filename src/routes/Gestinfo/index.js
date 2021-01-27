import React from "react";
import {Split, Aside, Anchor, Code, Help, Blockquote, Size, Color, BaseLink as A, Paragraph as P, Bold as B, Italic as I, ListItem as LI} from "bluelib/lib/components";
import Page from "../../components/Page";
import TitleSplit from "../../components/TitleSplit";
import TitleBox from "../../components/TitleBox";
import IR from "./abbr/IR";
import API from "./abbr/API";
import Token from "./components/Token";


export default function Gestinfo() {
    return (
        <Page subtitle={"Gestione dell'informazione"}>
            <Split>
                <TitleBox title={"Di cosa si tratta?"}>
                    <P>
                        Si parla di <B>come processare enormi quantità di testo</B> al fine di <B>effettuarvi ricerche</B>.
                    </P>
                    <Aside>
                        Praticamente, si parla di come funzionano i motori di ricerca!
                    </Aside>
                </TitleBox>
                <TitleBox title={"Il corso all'Unimore"}>
                    <P>
                        🎓 Il corso è tenuto dalla <Anchor href={"mailto:federica.mandreoli@unimore.it"}>Prof.ssa Federica Mandreoli</Anchor>.
                    </P>
                    <P>
                        📘 Le dispense sono disponibili su <Anchor href={"https://dolly.fim.unimore.it/2020/course/view.php?id=69"}>Dolly 2020</Anchor>.
                    </P>
                    <P>
                        🎥 Alcune videolezioni sono state eliminate, le restanti <Anchor href={"https://github.com/Steffo99/unimoreinfo-wiki/wiki/Scaricare-videolezioni#gestione-dellinformazione"}>possono essere scaricate</Anchor>.
                    </P>
                </TitleBox>
            </Split>
            <TitleSplit title={"Information Retrieval"}>
                <TitleBox title={"Cos'è?"}>
                    <P>
                        È il <B>processo</B> di <B>raccolta documenti</B>, <B>elaborazione query</B> e <B>richiamo di più risposte</B>.
                    </P>
                    <P>
                        Un'applicazione che effettua <IR/> si chiama <B>motore di ricerca</B>.
                    </P>
                </TitleBox>
            </TitleSplit>
            <Split>
                <TitleBox title={"Documenti"}>
                    <P>
                        Sono le unità con cui lavora il motore di ricerca.
                    </P>
                    <P>
                        Possono essere di vario tipo: <B>pagine web</B>, <B>metadati di file</B>, <B>paper accademici</B>...
                    </P>
                    <Aside>
                        Ad esempio, i documenti di <Anchor href={"https://google.com"}>Google Search</Anchor> sono le <B>pagine web</B>.
                    </Aside>
                    <P>
                        Vengono raccolti in svariati modi: possono provenire da <B><API/></B>, essere forniti manualmente e poi processati con un <B>parser</B>, essere scoperti tramite <B>web crawling</B> e processati tramite <B>web scraping</B>...
                    </P>
                    <Aside>
                        Il web crawler più famoso è <Anchor href={"https://it.wikipedia.org/wiki/Googlebot"}>Googlebot</Anchor>, che visita ricorsivamente tutti i collegamenti presenti su ogni pagina.
                    </Aside>
                </TitleBox>
                <TitleBox title={"Query"}>
                    <P>
                        La <B>richiesta di informazioni</B> effettuata da un utente, in un <B>linguaggio</B> che il motore di ricerca è <B>in grado di capire</B>.
                    </P>
                    <Aside>
                        In pratica, è quello che scrivi sulla casella di ricerca di Google!
                    </Aside>
                    <P>
                        Solitamente vi è possibile inserire <B>parole chiave</B> e <B>operatori</B> per specificare cosa si desidera trovare.
                    </P>
                    <Aside>
                        È possibile vedere tutti gli operatori supportati da Google nella pagina <Anchor href={"https://www.google.it/advanced_search"}>Advanced Search</Anchor>.
                    </Aside>
                </TitleBox>
                <TitleBox title={"Risposte"}>
                    <P>
                        I <B>documenti</B> che il motore di ricerca sceglie di mostrare all'utente in quanto li ha ritenuti <B>rilevanti alla query effettuata</B>.
                    </P>
                    <P>
                        Spesso sono composte da <B>metadati del documento</B> e da un <B>breve estratto</B> della sezione del documento più rilevante.
                    </P>
                    <Aside>
                        Google Search mostra <B>URL</B>, <B>titolo</B> e <B>descrizione</B> della pagina (o un suo <B>estratto</B> se una descrizione non è disponibile).
                    </Aside>
                </TitleBox>
            </Split>
            <TitleSplit title={"Preparazione dei documenti"}>
                <TitleBox title={"Cos'è?"}>
                    <P>
                        Una <B>procedura</B> che permette ai documenti di essere <B>indicizzati</B> e in seguito <B>richiamati</B> dal motore di ricerca.
                    </P>
                    <P>
                        È suddivisa in varie fasi, generalmente 5 o 6.
                    </P>
                </TitleBox>
            </TitleSplit>
            <Split>
                <TitleBox title={"1. Analisi lessicale"}>
                    <P>
                        Tutte le parole del documento vengono trasformate in <B>token</B>.
                    </P>
                    <Aside>
                        Basi di Dati → <Token>Basi</Token> <Token>di</Token> <Token>Dati</Token>
                    </Aside>
                    <P>
                        Spesso si decide di <B>distinguere</B> tra gli <B><Help text={"Parole che si leggono e scrivono uguale ma significano cose diverse."}>ononimi</Help></B> attraverso algoritmi di <B><I>word sense disambiguation</I></B>, in grado di dedurre il contesto analizzando i significati delle parole circostanti.
                    </P>
                    <Aside>
                        <Token>Sale 🧂</Token> oppure <Token>Sale 🪜</Token>?
                    </Aside>
                </TitleBox>
                <TitleBox title={"2. Normalizzazione dei token"}>
                    <P>
                        Il motore di ricerca decide come trattare i <B>simboli</B> tipografici, la <B><Help text={"Quello che in inglese si chiama 'case'. Sono grafie il maiuscolo, il minuscolo, il corsivo..."}>grafia</Help></B> delle lettere, le <B>cifre</B>, modificando l'insieme di token come ritiene necessario.
                    </P>
                    <Aside>
                        <P>
                            Alcune possibili modifiche:
                        </P>
                        <ul>
                            <LI>
                                Rimozione degli accenti
                                <Aside>
                                    <Token>caffè</Token> → <Token>caffe</Token>
                                </Aside>
                            </LI>
                            <LI>
                                Trasformazione in minuscolo
                                <Aside>
                                    <Token>Basi</Token> <Token>di</Token> <Token>Dati</Token> → <Token>basi</Token> <Token>di</Token> <Token>dati</Token>
                                </Aside>
                            </LI>
                            <LI>
                                Separazione dei trattini
                                <Aside>
                                    <Token>state-of-the-art</Token> → <Token>state</Token> <Token>of</Token> <Token>the</Token> <Token>art</Token>
                                </Aside>
                            </LI>
                        </ul>
                    </Aside>
                </TitleBox>
                <TitleBox title={"3. Eliminazione delle stopwords"}>
                    <P>
                        Le <I>stopwords</I>, i token ritenuti <B>inutili</B> ai fini delle ricerche, vengono <B>eliminate</B> dall'insieme di token ottenuto nel passo precedente.
                    </P>
                    <P>
                        Stopwords comuni sono gli <B><Help text={"Il, lo, la, un, una..."}>articoli</Help></B>, le <B><Help text={"E, perchè, ma, così..."}>congiunzioni</Help></B> e, in generale, tutte le <B>parole più frequenti</B> di una lingua.
                    </P>
                    <Aside>
                        <Token>basi</Token> <Token stopword={true}>di</Token> <Token>dati</Token>
                    </Aside>
                    <P>
                        Talvolta capita di dover <B>distinguere</B> tra stopwords e <B>nomi propri</B>, soprattutto nell'inglese; per risolvere il problema ci si affida alla disambiguazione degli ononimi effettuata durante l'analisi lessicale.
                    </P>
                    <Aside>
                        La band <Anchor href={"https://en.wikipedia.org/wiki/The_Who"}>The Who</Anchor> è l'incubo dei motori di ricerca che eliminano indiscriminatamente le stopwords:
                        <Aside>
                            <Token stopword={true}>The</Token> <Token stopword={true}>Who</Token>
                        </Aside>
                    </Aside>
                </TitleBox>
            </Split>
            <Split>
                <TitleBox title={"4. Stemming / Lemmatizzazione"}>
                    <P>
                        Ai token del passo precedente vengono sostituite le <B>radici</B> (<I>stems</I>) oppure le <B>forme base</B> (<I>lemmas</I>) delle parole.
                    </P>
                    <Aside>
                        <P>
                            Alcune delle operazioni che vengono effettuate sono:
                        </P>
                        <ul>
                            <LI>
                                Plurale → Singolare
                                <Aside>
                                    <Token>fiori</Token> → <Token>fiore</Token>
                                </Aside>
                                <Aside>
                                    <Token>flowers</Token> → <Token>flower</Token>
                                </Aside>
                            </LI>
                            <LI>
                                Verbo → Infinito
                                <Aside>
                                    <Token>vado</Token> → <Token>andare</Token>
                                </Aside>
                                <Aside>
                                    <Token>goes</Token> → <Token>go</Token>
                                </Aside>
                            </LI>
                        </ul>
                    </Aside>
                    <P>
                        Gli algoritmi che realizzano questo passo sono detti rispettivamente <B><I>stemmer</I></B> o <B><I>lemmatizer</I></B>.
                    </P>
                    <Aside>
                        Generalmente sono implementati tramite <Help text={"Dizionari che associano ogni parola alla sua forma base."}>lookup tables</Help>, ma i motori di ricerca più avanzati <Anchor href={"https://en.wikipedia.org/wiki/Stemming#Algorithms"}>possono avere implementazioni anche più complesse</Anchor>.
                    </Aside>
                </TitleBox>
                <TitleBox title={"5. Selezione degli index term"}>
                    <P>
                        Il motore di ricerca stabilisce la <B>relativa importanza</B> di ciascun token dell'insieme, in modo da determinare più facilmente in seguito la rilevanza del documento in cui si trovano.
                    </P>
                    <P>
                        I termini più importanti di un documento sono detti <B><I>index term</I></B>.
                    </P>
                    <Aside>
                        <Token>appunti</Token> <Token>universitari</Token> → <Token indexTerm={true}>appunti</Token> <Token>universitari</Token>
                    </Aside>
                    <P>
                        Essi solitamente sono individuati da <B><I>parser</I></B> e <B><I>scanner</I></B>, che analizzano la semantica di ciascun token.
                    </P>
                </TitleBox>
                <TitleBox title={"6. Categorizzazione"}>
                    <P>
                        Opzionalmente, l'intero documento può essere inserito in una o più <B>categorie</B> di un <B><I>thesaurus</I></B>, una gerarchia predeterminata di categorie di documenti.
                    </P>
                    <Aside>
                        Un esempio di thesaurus per delle sculture:
                        <ul>
                            <LI>
                                Materiale
                                <ul>
                                    <LI>
                                        Legno
                                        <ul>
                                            <LI>Pino</LI>
                                            <LI>Betulla</LI>
                                            <LI>Mogano</LI>
                                        </ul>
                                    </LI>
                                    <LI>
                                        Pietra
                                    </LI>
                                </ul>
                            </LI>
                            <LI>
                                Forma
                                <ul>
                                    <LI>Cubica</LI>
                                    <LI>Sferica</LI>
                                    <LI>Umanoide</LI>
                                </ul>
                            </LI>
                        </ul>
                    </Aside>
                    <Aside>
                        Un (simil-)thesaurus generale per l'inglese è <Anchor href={"https://wordnet.princeton.edu/"}>WordNet</Anchor>, mentre uno per l'italiano è <Anchor href={"https://thes.bncf.firenze.sbn.it/thes-dati.htm"}>Nuovo soggettario</Anchor>.
                    </Aside>
                </TitleBox>
            </Split>
        </Page>
    )
}
