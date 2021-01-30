import React from "react";
import {Split, Aside, Anchor, LatexMath, Help, Blockquote, Title, Separator, Code, Color, Underline as U, BaseLink as A, Paragraph as P, Bold as B, Italic as I, ListItem as LI} from "bluelib/lib/components";
import Page from "../../components/Page";
import TitleSplit from "../../components/TitleSplit";
import TitleBox from "../../components/TitleBox";
import IR from "./abbr/IR";
import API from "./abbr/API";
import Token from "./components/Token";
import IC from "./abbr/IC";
import Ononimi from "./abbr/Ononimi";
import UIN from "./abbr/UIN";
import Regex from "./abbr/Regex";
import Glob from "./abbr/Glob";
import PlusLI from "../../components/PlusLI";
import MinusLI from "../../components/MinusLI";
import Predicato from "./abbr/Predicato";
import Todo from "../../components/Todo";
import IDF from "./abbr/IDF";
import TF from "./abbr/TF";
import TFIDF from "./abbr/TFIDF";


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
                    <P>
                        Un insieme di documenti è detto <B><I>collezione</I></B>.
                    </P>
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
            <TitleSplit title={"Preprocessing dei documenti"}>
                <TitleBox title={"Cos'è?"}>
                    <P>
                        Una <B>procedura</B> svolta quando un documento viene <B>aggiunto</B> al motore di ricerca, permettendone l'indicizzazione e in seguito il richiamo.
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
                        Spesso si decide di <B>distinguere</B> tra gli <B><Ononimi/></B> attraverso algoritmi di <B><I>word sense disambiguation</I></B>, in grado di dedurre il contesto analizzando i significati delle parole circostanti.
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
            <TitleSplit title={"Similitudine"}>
                <TitleBox title={"Cos'è?"}>
                    <P>
                        Una <B>misura</B> di quanto due token hanno <B>significati in comune</B>.
                    </P>
                    <Aside>
                        <P>
                            <Token>uccello</Token> e <Token>pennuto</Token> sono molto simili, in quanto sono sinonimi
                        </P>
                        <P>
                            <Token>merlo</Token> e <Token>piccione</Token> sono abbastanza simili, in quanto sono
                            entrambi uccelli, ma non sono sinonimi
                        </P>
                        <P>
                            <Token>merlo</Token> e <Token>ala</Token> non sono per niente simili
                        </P>
                    </Aside>
                    <P>
                        Generalmente si basa su un <B>thesaurus</B>.
                    </P>
                </TitleBox>
                <TitleBox title={"A cosa serve?"}>
                    <P>
                        La <B><I>word sense disambiguation</I></B> sfrutta la <B>similitudine</B> tra l'ononimo e i <B>token circostanti</B> per stabilire il significato corretto.
                    </P>
                    <P>
                        Talvolta alla similitudine sono aggiunte anche altre informazioni, come la <B>distanza</B> tra i token e dati provenienti da <B>sorgenti esterne</B>.
                    </P>
                </TitleBox>
            </TitleSplit>
            <Split>
                <TitleBox title={"Similitudine path-based"}>
                    <P>
                        Un modo di misurare la similitudine tra due token basato sulla loro <B>posizione</B> all'interno del <B>thesaurus</B>.
                    </P>
                    <Split>
                        <TitleBox title={"Path-distance"}>
                            <P>
                                Si basa sull'<B>inverso della distanza</B> tra i due token all'interno dell'albero:
                            </P>
                            <B><LatexMath block={true}>{`sim_{pd}(t_1, t_2) = \\frac{1}{dist(t_1, t_2) + 1}`}</LatexMath></B>
                        </TitleBox>
                        <TitleBox title={"Wu-Palmer"}>
                            <P>
                                Si basa sulla <B>profondità</B> del <B>minimo antenato comune</B> tra i due token:
                            </P>
                            <B><LatexMath block={true}>{`sim_{wp}(t_1, t_2) = 2 \\cdot \\frac{depth(mac_{\\ t_1,t_2})}{depth(t_1) + depth(t_2)}`}</LatexMath></B>
                        </TitleBox>
                    </Split>
                </TitleBox>
                <TitleBox title={<span>Similitudine <IC/>-based</span>}>
                    <P>
                        L'<IC/> è una misura <B>probabilistica</B> di quanto un token sia inaspettato all'interno di un documento.
                    </P>
                    <P>
                        Definendo <LatexMath>{`P(t)`}</LatexMath> come la probabilità che un <B>token scelto a caso</B> sia <LatexMath>{`t`}</LatexMath>, l'<IC/> sarà:
                    </P>
                    <B><LatexMath block={true}>{`ic(t) = - \\log \\left( P(t) \\right)`}</LatexMath></B>
                    <P>
                        La <I>similitudine <IC/>-based</I> è quindi un modo di misurare la similitudine basato sull'<B><IC/></B>.
                    </P>
                    <TitleBox title={"Resnik"}>
                        <P>
                            Si basa sull'<B><IC/></B> del <B>minimo antenato comune</B>:
                        </P>
                        <B><LatexMath block={true}>{`sim_{r} (t_1,t_2) = ic \\left( mac_{\\ t_1,t_2} \\right)`}</LatexMath></B>
                    </TitleBox>
                </TitleBox>
                <TitleBox title={"Similitudine vettoriale"}>
                    <P>
                        Un modo di misurare la similitudine in cui i token sono rappresentati come <B>dimensioni vettoriali</B>.
                    </P>
                    <TitleBox title={"Coseno di similitudine"}>
                        <P>
                            Si basa sulla <B>norma a 2</B>, e corrisponde a cercare l'angolo centrato all'origine tra i due vettori:
                        </P>
                        <B><LatexMath block={true}>{`sim_{\\cos} (t_1, t_2) = \\frac{\\vec{t_1} \\cdot \\vec{t_2}}{\\| \\vec{t_1} \\| \\cdot \\| \\vec{t_2} \\|}`}</LatexMath></B>
                        <Aside>
                            Solitamente viene usata nei modelli di <IR/> vettoriali, descritti in seguito.
                        </Aside>
                        <Todo>
                            Forse dovrei scrivere la formula "completa".
                        </Todo>
                    </TitleBox>
                    <Aside>
                        <P>
                            Altre misure di similitudine vettoriale sono:
                        </P>
                        <ul>
                            <LI>La <Anchor href={"https://it.wikipedia.org/wiki/Distanza_euclidea"}>distanza euclidea</Anchor></LI>
                            <LI>Il <Anchor href={"https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient"}>Sørensen–Dice coefficient</Anchor></LI>
                            <LI>Il <Anchor href={"https://en.wikipedia.org/wiki/Jaccard_index"}>Jaccard Index</Anchor></LI>
                            <LI>La <Anchor href={"https://it.wikipedia.org/wiki/Distanza_di_Minkowski"}>distanza di Minkowski</Anchor></LI>
                        </ul>
                    </Aside>
                </TitleBox>
            </Split>
            <TitleSplit title={"Indici"}>
                <TitleBox title={"Cosa sono?"}>
                    <P>
                        Gli indici sono <B>strutture dati</B> in cui vengono inseriti i documenti e i loro token dopo essere stati preparati.
                    </P>
                    <P>
                        L'<B><I>indicizzazione</I></B> è la procedura che crea e mantiene aggiornati uno o più <B><I>indici</I></B>.
                    </P>
                </TitleBox>
                <TitleBox title={"A cosa servono?"}>
                    <P>
                        Sono fondamentali per <B>velocizzare notevolmente</B> le ricerche e per permettere certi tipi di operazioni sulle query.
                    </P>
                </TitleBox>
            </TitleSplit>
            <TitleBox title={"Matrice di incidenza"}>
                <P>
                    Un indice basato sulla costruzione di una matrice in cui le righe sono i <B>documenti</B>, le colonne i <B>token</B> e le celle valori booleani che descrivono se il token compare nel documento.
                </P>
                <P>
                    È terribilmente <B>inefficiente</B> in termini di spazio, perchè la matrice è <B>sparsa</B>.
                </P>
                <P>
                    Una sua evoluzione spazialmente più efficiente è l'<B><I>inverted index</I></B>.
                </P>
            </TitleBox>
            <TitleBox title={"Inverted index"}>
                <P>
                    L'<B>indice</B> più comune, costituito da tante <B><I>posting list</I></B> raggiungibili attraverso un <B><I>vocabolario</I></B>.
                </P>
                <Split>
                    <TitleBox title={"Posting list"}>
                        <P>
                            L'<B>insieme</B> di tutte le <B>occorrenze</B> di un dato token.
                        </P>
                        <P>
                            Può essere realizzata in due modi:
                        </P>
                        <ul>
                            <LI><U>Document-based</U>: lista ordinata di documenti con la <B>frequenza del token</B> in essi</LI>
                            <LI><U>Word-based</U>: lista ordinata di documenti che punta a una lista ordinata delle <B>posizioni</B> del token in essi</LI>
                        </ul>
                        <P>
                            Essendo le liste <B>ordinate</B>, vi è possibile effettuare operazioni di <B>unione</B> e <B>intersezione</B> in <B>tempo lineare</B> utilizzando dei <B>cursori</B>.
                        </P>
                        <P>
                            Non è però altrettanto efficiente in operazioni di <B>negazione</B>.
                        </P>
                    </TitleBox>
                    <TitleBox title={"Vocabolario"}>
                        <P>
                            L'insieme delle <B>associazioni</B> tra <B>token</B> e la loro <B>posting list</B>.
                        </P>
                        <P>
                            Ci sono tanti modi diversi di implementarlo:
                        </P>
                        <ul>
                            <LI><U>Doppia lista ordinata</U>: <B>lista di token</B> che punta a una <B>lista di occorrenze</B></LI>
                            <LI>
                                <U>Trie</U>: <B>albero</B> in cui ogni arco rappresenta una <B>stringa</B> e ogni nodo una <B>concatenazione</B> delle stringhe tra sè e la radice
                                <ul>
                                    <LI><U>Prefix tree</U>: <B>trie</B> che usa i <B>prefissi</B> dei token</LI>
                                    <LI><U>Suffix tree</U>: <B>trie</B> che usa i <B>suffissi</B> dei token</LI>
                                </ul>

                            </LI>
                            <LI><U>B+ tree</U>: <B>albero</B> particolarmente ottimizzato, in cui le foglie sono le occorrenze</LI>
                            <LI><U>Dizionario</U>: <B>hashmap</B> che usa come chiave il <B>token</B> stesso, e una lista di occorrenze come <B>valore</B></LI>
                        </ul>
                        <P>
                            Generalmente, occupano <B>spazio logaritmico</B> rispetto al numero di token.
                        </P>
                    </TitleBox>
                </Split>
            </TitleBox>
            <TitleSplit title={"Query languages"}>
                <TitleBox title={"Cosa sono?"}>
                    <P>
                        Ogni motore di ricerca implementa un diverso <B><I>query language</I></B>, un'<B>interfaccia</B> per l'utente che gli permette di effettuare ricerche in base alla sua necessità di informazioni <I><UIN/></I>.
                    </P>
                    <Aside>
                        Su Google puoi scrivere la tua domanda in linguaggio naturale e ricevere una risposta, ma ci puoi anche aggiungere qualche operatore come <code>site:stackoverflow.com</code> per restringere la ricerca!
                    </Aside>
                    <P>
                        Ogni query language può poi implementare diverse <B>funzionalità</B> in base al tipo di documento indicizzato.
                    </P>
                </TitleBox>
                <TitleBox title={"A cosa servono?"}>
                    <P>
                        Essendo una <B>via di mezzo</B> tra linguaggio naturale e linguaggio di programmazione, permettono a un <B>utente qualunque</B> di fruire del motore di ricerca, senza bisogno di conoscenze approfondite sul suo funzionamento.
                    </P>
                </TitleBox>
            </TitleSplit>
            <Split>
                <TitleBox title={"Keywords semplici"}>
                    <P>
                        All'interno della query vengono inserite <B>una o più keywords</B> da ricercare all'interno dei documenti.
                    </P>
                    <Aside>
                        <P>
                            Praticamente tutti i motori di ricerca le supportano!
                        </P>
                        <Code language={"text"}>
                            Divina Commedia Dante
                        </Code>
                    </Aside>
                </TitleBox>
                <TitleBox title={"Keyword consecutive"}>
                    <P>
                        Prevedono la possibilità di richiedere che due o più keyword siano <B><I>consecutive</I></B>.
                    </P>
                    <Aside>
                        <P>
                            Solitamente è possibile specificarlo circondando di virgolette le keyword in questione.
                        </P>
                        <Code language={"text"}>
                            "Nel mezzo del cammin di nostra vita"
                        </Code>
                    </Aside>
                </TitleBox>
                <TitleBox title={"Keyword distanziate"}>
                    <P>
                        Prevedono la possibilità di richiedere che due o più keyword siano a una certa <B><I>distanza</I></B> una dall'altra.
                    </P>
                    <Aside>
                        <P>
                            È molto raro al giorno d'oggi che un motore di ricerca permetta di ricercare la distanza tra le keyword.
                        </P>
                        <P>
                            Uno dei pochi motori di ricerca che lo permette ancora è <Anchor href={"https://en.wikipedia.org/wiki/Westlaw"}>Westlaw</Anchor>.
                        </P>
                        <Code language={"text"}>
                            Dante /3 Beatrice
                        </Code>
                    </Aside>
                </TitleBox>
            </Split>
            <Split>
                <TitleBox title={"Patterns"}>
                    <P>
                        Prevedono la possibilità di cercare <B>prefissi</B>, <B>suffissi</B>, <B>sottostringhe</B> e <B>intervalli</B> di keyword.
                    </P>
                    <Aside>
                        <P>
                            Le <B><Regex/></B> e i <B><Glob/></B> sono i pattern utilizzati più di frequente.
                        </P>
                        <Code language={"regex"}>
                            /^V.?rgilio/
                        </Code>
                        <Code language={"glob"}>
                            **/V?rgilio.png
                        </Code>
                    </Aside>
                </TitleBox>
                <TitleBox title={"Concetti"}>
                    <P>
                        Prevedono la possibilità di usare tag provenienti da un <B>thesaurus limitato</B> di cui è <B>garantita</B> la precisione.
                    </P>
                    <Aside>
                        <P>
                            Il più famoso motore di ricerca a concetti è <Anchor href={"https://pubmed.ncbi.nlm.nih.gov/"}>PubMed</Anchor>, e i concetti ricercabili possono essere trovati su <Anchor href={"https://www.ncbi.nlm.nih.gov/mesh/"}>MeSH</Anchor>.
                        </P>
                        <Code language={"text"}>
                            "Plague"[Mesh]
                        </Code>
                    </Aside>
                </TitleBox>
            </Split>
            <Split>
                <TitleBox title={"Struttura"}>
                    <P>
                        Prevedono la possibilità di limitare la query a <B>specifiche sezioni</B> del documento.
                    </P>
                    <Aside>
                        <P>
                            Un esempio di query strutturali è <Anchor href={"https://books.google.it/advanced_book_search?hl=it"}>Google Books</Anchor>.
                        </P>
                        <Code language={"text"}>
                            inauthor:Dante inauthor:Alighieri
                        </Code>
                    </Aside>
                </TitleBox>
                <TitleBox title={"Operatori booleani"}>
                    <P>
                        Prevedono la possibilità di effettuare più query e applicare le operazioni di <B>intersezione</B>, <B>unione</B> e <B>negazione</B> sui risultati.
                    </P>
                    <Aside>
                        <P>
                            <Todo>Dove vengono usate?</Todo>
                        </P>
                        <Code language={"python"}>
                            "Dante" and "Vergil" and ("Devil May Cry" or "DMC") and not "Divina Commedia"
                        </Code>
                    </Aside>
                </TitleBox>
            </Split>
            <TitleSplit title={<span>Modelli di <IR/></span>}>
                <TitleBox title={"Cosa sono?"}>
                    <P>
                        Sono <B>modelli matematici</B> in grado di <B>selezionare</B> e <B>ordinare</B> i documenti in base alla loro <B>rilevanza</B> rispetto alla query.
                    </P>
                </TitleBox>
                <TitleBox title={"A cosa servono?"}>
                    <P>
                        Stabiliscono i <B>risultati richiamati</B> dal motore di ricerca e l'<B>ordine con cui vengono visualizzati</B>.
                    </P>
                </TitleBox>
            </TitleSplit>
            <TitleBox title={"Modelli classici"}>
                <P>
                    Rappresentano la query come un <B>insieme di index term</B>, e assegnano le rilevanze confrontando l'insieme con gli index term dei documenti.
                </P>
                <Aside>
                    Sono usati solitamente dai motori di ricerca web.
                </Aside>
                <P>
                    Ad ogni index term del documento viene <B>indipendentemente</B> assegnato un <B><I>peso</I></B> in base alla sua rilevanza nella query.
                </P>
            </TitleBox>
            <Split>
                <TitleBox title={"Modello booleano"}>
                    <P>
                        <B>Modello classico</B> che rappresenta la query come un <B><Predicato/> <I>booleano</I></B>, e genera la rilevanza valutandolo su ogni documento:
                    </P>
                    <ul>
                        <LI><B><code>1</code></B> se il <Predicato/> è <B>vero</B></LI>
                        <LI><B><code>0</code></B> se il <Predicato/> è <B>falso</B></LI>
                    </ul>
                </TitleBox>
                <TitleBox title={"Modello fuzzy"}>
                    <P>
                        Variante del <B>modello booleano</B> che permette ai documenti di <B>soddisfare parzialmente</B> il <Predicato/>:
                    </P>
                    <ul>
                        <LI><B><code>1.00</code></B> se il <Predicato/> è <B>vero</B></LI>
                        <LI><B><code>0.XX</code></B> se il <Predicato/> è <B>parzialmente vero</B></LI>
                        <LI><B><code>0.00</code></B> se il <Predicato/> è <B>falso</B></LI>
                    </ul>
                    <P>
                        Le <B>operazioni fuzzy</B> diventano quindi:
                    </P>
                    <ul>
                        <LI><U><code>AND</code></U>: <B><LatexMath>{`max( x_{A},\\ x_{B} )`}</LatexMath></B></LI>
                        <LI><U><code>OR</code></U>: <B><LatexMath>{`min( x_{A},\\ x_{B} )`}</LatexMath></B></LI>
                        <LI><U><code>NOT</code></U>: <B><LatexMath>{`1 - x_{A}`}</LatexMath></B></LI>
                    </ul>
                </TitleBox>
            </Split>
            <Split>
                <TitleBox title={"Modello vettoriale"}>
                    <P>
                        Modello classico che rappresenta il vocabolario come uno <B>spazio vettoriale</B>, in cui ogni dimensione rappresenta un token.
                    </P>
                    <P>
                        Ogni documento viene rappresentato come un <B>vettore</B>, i cui valori sono <B>pesi</B> assegnati in base a quanto il token è signficativo all'interno del documento.
                    </P>
                    <Aside>
                        Il metodo più comunemente usato per assegnare i pesi è il <TFIDF/>, descritto successivamente.
                    </Aside>
                    <P>
                        Le query vengono anch'esse trasformate in vettori, e le rilevanze vengono ottenute dalla <B>similitudine vettoriale</B> tra i vettore query e i vettori documenti.
                    </P>
                    <Aside>
                        La matrice della collezione è estremamente sparsa: viene implementata <B>per colonne</B> attraverso un <B>inverted index</B>.
                    </Aside>
                </TitleBox>
                <TitleBox title={<span>Peso <TFIDF/></span>}>
                    <P>
                        Un metodo di assegnamento peso che si basa sul <B>prodotto</B> dei fattori <B><TF/></B> e <B><IDF/></B>:
                    </P>
                    <B><LatexMath block={true}>{`w = tf_{norm} \\cdot idf_{log}`}</LatexMath></B>
                    <Split>
                        <TitleBox title={<span><TF/>: Term frequency</span>}>
                            <P>
                                Misura quanto un token è <B>frequente</B> nel <B>singolo documento</B>:
                            </P>
                            <B><LatexMath block={true}>{`tf = \\frac{occorrenze}{totale\\ token}`}</LatexMath></B>
                            <P>
                                Nella formula principale, viene <B>normalizzato</B> dividendolo per il <TF/> più alto del documento, limitandolo così a valori tra 0 e 1:
                            </P>
                            <B><LatexMath block={true}>{`tf_{norm} = \\frac{tf}{\\max\\ tf_d}`}</LatexMath></B>
                        </TitleBox>
                        <TitleBox title={<span><IDF/>: Inverse document freq.</span>}>
                            <P>
                                Misura quanto un token è <B>raro</B> nella <B>collezione di documenti</B>:
                            </P>
                            <B><LatexMath block={true}>{`idf = \\frac{documenti\\ con\\ occ.}{totale\\ documenti}`}</LatexMath></B>
                            <P>
                                Nella formula principale, viene <B>logaritmizzato</B>, al fine di ridurre significativamente il suo impatto:
                            </P>
                            <B><LatexMath block={true}>{`idf_{log} = \\log(idf)`}</LatexMath></B>
                        </TitleBox>
                    </Split>
                </TitleBox>
            </Split>
            <Split>
                <TitleBox title={"Modello probabilistico"}>
                    <P>
                        Modello classico che ordina i documenti in base alla loro <B>probabilità di rilevanza</B>.
                    </P>
                    <P>
                        <Todo>Da finire!</Todo>
                    </P>
                </TitleBox>
            </Split>
        </Page>
    )
}
