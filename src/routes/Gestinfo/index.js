import React from "react"
import {
    Anchor,
    Aside,
    Bold as B,
    Code,
    Color,
    Help,
    Italic as I,
    ListItem as LI,
    Paragraph as P,
    Underline as U,
    Blockquote,
} from "bluelib/lib/components"
import LatexMath from "bluelib/lib/components/LatexMath"
import Split from "../../components/Split"
import Box from "../../components/Box"
import IR from "./abbr/IR"
import API from "./abbr/API"
import Token from "./components/Token"
import IC from "./abbr/IC"
import Ononimi from "./abbr/Ononimi"
import UIN from "./abbr/UIN"
import Regex from "./abbr/Regex"
import Glob from "./abbr/Glob"
import Predicato from "./abbr/Predicato"
import Todo from "../../components/Todo"
import IDF from "./abbr/IDF"
import TF from "./abbr/TF"
import TFIDF from "./abbr/TFIDF"
import RSV from "./abbr/RSV"
import Locuzione from "./abbr/Locuzione"
import Image from "../../components/Image"
import ImgDocuments from "./img/documents.png"
import ImgResult from "./img/result.png"
import ImgQuery from "./img/query.png"
import ImgReplacement from "./img/replacement.png"
import ImgSuggestion from "./img/suggestion.png"


const r = String.raw


export default function Gestinfo() {
    return (
        <article>
            <Split title={"Gestione dell'informazione"}>
                <Box title={"Di cosa si tratta?"}>
                    <P>
                        Si parla di <B>come processare enormi quantità di testo</B> al fine di <B>effettuarvi
                                                                                                  ricerche</B>.
                    </P>
                    <Aside>
                        Praticamente, si parla di come funzionano i motori di ricerca!
                    </Aside>
                </Box>
                <Box title={"Il corso all'Unimore"}>
                    <P>
                        🎓 Il corso è stato tenuto dalla <Anchor href={"mailto:federica.mandreoli@unimore.it"}>Prof.ssa Federica Mandreoli</Anchor>.
                    </P>
                    <P>
                        📘 Le dispense sono disponibili su <Anchor href={"https://dolly.fim.unimore.it/2020/course/view.php?id=69"}>Dolly (FIM)</Anchor>.
                    </P>
                    <P>
                        🎥 Le videolezioni <Color builtin={"red"}><abbr title={"Per via di una stupidissima politica di Unimore che prevede la cancellazione due settimane dopo la pubblicazione."}>sono state eliminate</abbr></Color>.
                    </P>
                </Box>
                <Box title={"Materiale utilizzato"}>
                    <ul>
                        <LI><Anchor href={"https://dolly.fim.unimore.it/2020/course/view.php?id=69"}>📄 Dispense su Dolly</Anchor></LI>
                        <LI><Anchor href={"https://www.wikipedia.org/"}>📰 Wikipedia</Anchor></LI>
                        <LI><Anchor href={"https://gitlab.com/2429571/gestione-informazione"}>🗒️ Appunti open-source di Sharon Guerzoni</Anchor></LI>
                        <LI><Anchor href={"https://www.pearson.com/uk/educators/higher-education-educators/program/Baeza-Yates-Modern-Information-Retrieval-The-Concepts-and-Technology-behind-Search-2nd-Edition/PGM804983.html"}>📘 Libro di testo consigliato</Anchor></LI>
                        <LI><Anchor href={"https://nlp.stanford.edu/IR-book/"}>🌐 Introduction to Information Retrieval</Anchor></LI>
                    </ul>
                </Box>
            </Split>
            <Split title={"Information Retrieval"}>
                <Box title={"Cos'è?"}>
                    <P>
                        È il <B>processo</B> di <B>raccolta documenti</B>, <B>elaborazione query</B> e <B>richiamo di più risposte</B>.
                    </P>
                    <P>
                        Un'applicazione che effettua <IR/> si chiama <B>motore di ricerca</B>.
                    </P>
                </Box>
            </Split>
            <Split>
                <Box title={"Documenti"}>
                    <P>
                        Sono le unità con cui lavora il motore di ricerca.
                    </P>
                    <P>
                        Possono essere di vario tipo: <B>pagine web</B>, <B>metadati di file</B>, <B>paper accademici</B>...
                    </P>
                    <Aside>
                        Ad esempio, i documenti di <Anchor href={"https://google.com"}>Google Search</Anchor> sono le <B>pagine web</B>.
                        <Image src={ImgDocuments} description={"I documenti di Google per il dominio steffo.eu"}/>
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
                </Box>
                <Box title={"Query"}>
                    <P>
                        La <B>richiesta di informazioni</B> effettuata da un utente, in un <B>linguaggio</B> che il motore di ricerca è <B>in grado di capire</B>.
                    </P>
                    <Aside>
                        In pratica, è quello che scrivi sulla casella di ricerca di Google!
                        <Image src={ImgQuery} description={"Un esempio di query su Google"}/>
                    </Aside>
                    <P>
                        Solitamente vi è possibile inserire <B>parole chiave</B> e <B>operatori</B> per specificare cosa
                        si desidera trovare.
                    </P>
                    <Aside>
                        È possibile vedere tutti gli operatori supportati da Google nella pagina <Anchor
                        href={"https://www.google.it/advanced_search"}
                    >Advanced Search</Anchor>.
                    </Aside>
                </Box>
                <Box title={"Risposte"}>
                    <P>
                        I <B>documenti</B> che il motore di ricerca sceglie di mostrare all'utente in quanto li ha
                        ritenuti <B>rilevanti alla query effettuata</B>.
                    </P>
                    <P>
                        Spesso sono composte da <B>metadati del documento</B> e da un <B>breve estratto</B> della
                        sezione del documento più rilevante.
                    </P>
                    <Aside>
                        Google Search mostra <B>URL</B>, <B>titolo</B> e <B>descrizione</B> della pagina (o un
                        suo <B>estratto</B> se una descrizione non è disponibile).
                        <Image src={ImgResult} description={"Una risposta di Google"}/>
                    </Aside>
                </Box>
            </Split>
            <Split>
                <Box title={"Token"}>
                    <P>
                        Astrazione che rappresenta un <B>singolo significato</B> di una parola o <Locuzione/>.
                    </P>
                    <Aside>
                        <P>
                            Sono token:
                        </P>
                        <ul>
                            <LI><Token>mela 🍎</Token></LI>
                            <LI><Token>ciao 👋</Token></LI>
                            <LI><Token>forze dell'ordine 👮</Token></LI>
                            <LI>...</LI>
                        </ul>
                    </Aside>
                </Box>
                <Box title={<span><LatexMath>{`q`}</LatexMath>-grammi</span>}>
                    <P>
                        <B>Sequenze</B> di <B><LatexMath>{`q`}</LatexMath> caratteri</B> e <B>spazi vuoti</B> (indicati con ␣).
                    </P>
                    <Aside>
                        <P>
                            I <LatexMath>{`q`}</LatexMath>-grammi assumono vari nomi in base al valore
                            di <LatexMath>{`q`}</LatexMath>:
                        </P>
                        <ul>
                            <LI><U>Bigrammi</U>: <LatexMath>{`q = 2`}</LatexMath></LI>
                            <LI><U>Trigrammi</U>: <LatexMath>{`q = 3`}</LatexMath></LI>
                            <LI><U>Quadrigrammi</U>: <LatexMath>{`q = 4`}</LatexMath></LI>
                            <LI>...</LI>
                        </ul>
                    </Aside>
                    <Aside>
                        <P>
                            I trigrammi del token <Token>ciao</Token> sono:
                        </P>
                        <P>
                            <Token>␣␣c</Token> <Token>␣ci</Token> <Token>cia</Token> <Token>iao</Token> <Token>ao␣</Token> <Token>o␣␣</Token>
                        </P>
                    </Aside>
                </Box>
            </Split>
            <Split title={"Preprocessing dei documenti"}>
                <Box title={"Cos'è?"}>
                    <P>
                        Una <B>procedura</B> svolta quando un documento viene <B>aggiunto</B> al motore di ricerca, permettendone l'indicizzazione e in seguito il richiamo.
                    </P>
                    <P>
                        È suddivisa in varie fasi, generalmente 5 o 6.
                    </P>
                </Box>
            </Split>
            <Split>
                <Box title={"1. Analisi lessicale"}>
                    <P>
                        Tutte le parole del documento vengono trasformate in <B>token</B>.
                    </P>
                    <Aside>
                        Treno per Modena → <Token>Treno</Token> <Token>per</Token> <Token>Modena</Token>
                    </Aside>
                    <P>
                        Spesso si decide di <B>distinguere</B> tra gli <B><Ononimi/></B> attraverso algoritmi di <B><I>word sense disambiguation</I></B>, in grado di dedurre il contesto analizzando i significati delle
                        parole circostanti.
                    </P>
                    <Aside>
                        <Token>Sale 🧂</Token> oppure <Token>Sale 🪜</Token>?
                    </Aside>
                </Box>
                <Box title={"2. Normalizzazione dei token"}>
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
                                Rimozione maiuscole non-significative:
                                <Aside>
                                    <Token>Treno</Token> <Token>per</Token> <Token>Modena</Token> → <Token>treno</Token> <Token>per</Token> <Token>Modena</Token>
                                </Aside>
                            </LI>
                            <LI>
                                Separazione dei trattini
                                <Aside>
                                    <Token>state-of-the-art</Token> → <Token>state</Token> <Token>of</Token> <Token>the</Token> <Token>art</Token>
                                </Aside>
                            </LI>
                            <LI>
                                Correzione dei typo
                                <Aside>
                                    <Token>vetr</Token> → <Token>vetro</Token>
                                </Aside>
                            </LI>
                        </ul>
                    </Aside>
                </Box>
                <Box title={"3. Eliminazione delle stopwords"}>
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
                        Talvolta capita di dover <B>distinguere</B> tra stopwords e <B>nomi propri</B>, soprattutto
                        nell'inglese; per risolvere il problema ci si affida alla disambiguazione degli ononimi
                        effettuata durante l'analisi lessicale.
                    </P>
                    <Aside>
                        La band <Anchor href={"https://en.wikipedia.org/wiki/The_Who"}>The Who</Anchor> è l'incubo dei
                        motori di ricerca che eliminano indiscriminatamente le stopwords:
                        <Aside>
                            <Token stopword={true}>The</Token> <Token stopword={true}>Who</Token>
                        </Aside>
                    </Aside>
                </Box>
            </Split>
            <Split>
                <Box title={"4. Stemming / Lemmatizzazione"}>
                    <P>
                        Ai token del passo precedente vengono sostituite le <B>radici</B> (<I>stems</I>) oppure le <B>forme base</B> (<I>lemmas</I>) delle parole.
                    </P>
                    <Aside>
                        <P>
                            Alcune delle operazioni di <B>stemming</B> che possono essere effettuate sono:
                        </P>
                        <ul>
                            <LI>
                                Plurale → Singolare
                                <Aside>
                                    <Token>flowers</Token> → <Token>flower</Token>
                                </Aside>
                            </LI>
                            <LI>
                                Verbo → Infinito
                                <Aside>
                                    <Token>goes</Token> → <Token>go</Token>
                                </Aside>
                            </LI>
                        </ul>
                    </Aside>
                    <Aside>
                        <P>
                            Alcune delle operazioni di <B>lemmatizzazione</B> che possono essere effettuate sono:
                        </P>
                        <ul>
                            <LI>
                                Plurale → Singolare
                                <Aside>
                                    <Token>fiori</Token> → <Token>fiore</Token>
                                </Aside>
                            </LI>
                            <LI>
                                Verbo → Infinito
                                <Aside>
                                    <Token>vado</Token> → <Token>andare</Token>
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
                </Box>
                <Box title={"5. Selezione degli index term"}>
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
                        Essi solitamente sono individuati da <B><I>parser</I></B> e <B><I>scanner</I></B>, che
                        analizzano la semantica di ciascun token.
                    </P>
                </Box>
                <Box title={"6. Categorizzazione"}>
                    <P>
                        Opzionalmente, l'intero documento può essere inserito in una o più <B>categorie</B> di un <B><I>thesaurus</I></B>, una gerarchia predeterminata di categorie di documenti.
                    </P>
                    <Aside>
                        Un esempio di thesaurus per delle sculture:
                        <ul>
                            <LI>
                                [Radice]
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
                            </LI>
                        </ul>
                    </Aside>
                    <Aside>
                        Un (simil-)thesaurus generale per l'inglese è <Anchor
                        href={"https://wordnet.princeton.edu/"}
                    >WordNet</Anchor>, mentre uno per l'italiano è <Anchor
                        href={"https://thes.bncf.firenze.sbn.it/thes-dati.htm"}
                    >Nuovo soggettario</Anchor>.
                    </Aside>
                </Box>
            </Split>
            <Split title={"Similitudine"}>
                <Box title={"Cos'è?"}>
                    <P>
                        Una <B>misura</B> di quanto due token hanno <B>significati in comune</B>.
                    </P>
                    <Aside>
                        <P>
                            <Token>uccello</Token> e <Token>pennuto</Token> sono molto simili, in quanto sono sinonimi
                        </P>
                        <P>
                            <Token>merlo</Token> e <Token>piccione</Token> sono abbastanza simili, in quanto sono entrambi uccelli, ma non sono sinonimi
                        </P>
                        <P>
                            <Token>merlo</Token> e <Token>ala</Token> non sono per niente simili
                        </P>
                    </Aside>
                    <P>
                        Generalmente si basa su un <B>thesaurus</B>.
                    </P>
                </Box>
                <Box title={"A cosa serve?"}>
                    <P>
                        La <B><I>word sense disambiguation</I></B> sfrutta la <B>similitudine</B> tra l'ononimo e i <B>token circostanti</B> per stabilire il significato corretto.
                    </P>
                    <P>
                        Talvolta alla similitudine sono aggiunte anche altre informazioni, come la <B>distanza</B> tra i token e dati provenienti da <B>sorgenti esterne</B>.
                    </P>
                </Box>
            </Split>
            <Split>
                <Box title={"Similitudine path-based"}>
                    <P>
                        Un modo di misurare la similitudine tra due token basato sulla loro <B>posizione</B> all'interno del <B>thesaurus</B>.
                    </P>
                    <Split>
                        <Box title={"Path-distance"}>
                            <P>
                                Si basa sull'<B>inverso della distanza</B> tra i due token all'interno dell'albero:
                            </P>
                            <B><LatexMath
                                block={true}
                            >{`sim_{pd}(t_1, t_2) = \\frac{1}{dist(t_1, t_2) + 1}`}</LatexMath></B>
                        </Box>
                        <Box title={"Wu-Palmer"}>
                            <P>
                                Si basa sulla <B>profondità</B> del <B>minimo antenato comune</B> tra i due token:
                            </P>
                            <B><LatexMath
                                block={true}
                            >{`sim_{wp}(t_1, t_2) = 2 \\cdot \\frac{depth(mac_{\\ t_1,t_2})}{depth(t_1) + depth(t_2)}`}</LatexMath></B>
                            <Aside>
                                Varia più lentamente rispetto alla Path-distance.
                            </Aside>
                        </Box>
                    </Split>
                </Box>
            </Split>
            <Split>
                <Box title={<span>Similitudine <IC/>-based</span>}>
                    <P>
                        L'<IC/> è una misura <B>probabilistica</B> di quanto un token sia inaspettato all'interno di un documento.
                    </P>
                    <P>
                        Definendo <LatexMath>{`P(t)`}</LatexMath> come la probabilità che un <B>token scelto a caso</B> sia <LatexMath>{`t`}</LatexMath>, l'<IC/> sarà:
                    </P>
                    <B><LatexMath block={true}>{`ic(t) = - \\log \\left( P(t) \\right)`}</LatexMath></B>
                    <P>
                        La <I>similitudine <IC/>-based</I> è quindi un modo di misurare la similitudine basato
                        sull'<B><IC/></B>.
                    </P>
                    <Aside>
                        Le misure <IC/>-based tengono quindi conto della frequenza dei vari token nella collezione.
                    </Aside>
                    <Box title={"Resnik"}>
                        <P>
                            Si basa sull'<B><IC/></B> del <B>minimo antenato comune</B>:
                        </P>
                        <B><LatexMath
                            block={true}
                        >{`sim_{r} (t_1,t_2) = ic \\left( mac_{\\ t_1,t_2} \\right)`}</LatexMath></B>
                    </Box>
                </Box>
            </Split>
            <Split title={"Correzione dei typo"}>
                <Box title={"Cos'è?"}>
                    <P>
                        Una parte della <B>normalizzazione dei token</B> che corregge gli errori ortografici commessi
                        durante l'inserimento della query.
                    </P>
                </Box>
                <Box title={"A cosa serve?"}>
                    <P>
                        Aumenta la <B>soddisfazione</B> dell'utente e gli consente di effettuare ricerche per termini di
                        cui <B>non conosce lo spelling</B>.
                    </P>
                </Box>
            </Split>
            <Box title={"Correzione token isolati"}>
                <P>
                    È possibile trovare per ogni token dei suoi <I>vicini</I> utilizzabili per migliorare la query:
                </P>
                <Box title={"Tramite edit distance"}>
                    <P>
                        Dato un token, si cercano tutti i token <B>entro un certo valore</B> di <I>edit distance</I>.
                    </P>
                    <Box title={"Edit distance"}>
                        <P>
                            Il numero <B>minimo</B> di <I>operazioni</I> per convertire un token in un altro.
                        </P>
                        <Split>
                            <Box title={"Levenshtein distance"}>
                                <P>
                                    Definisce <I>operazioni</I> le seguenti azioni:
                                </P>
                                <ul>
                                    <LI><B>Inserimento</B> di un singolo carattere</LI>
                                    <LI><B>Rimozione</B> di un singolo carattere</LI>
                                    <LI><B>Sostituzione</B> di un singolo carattere</LI>
                                </ul>
                                <Aside>
                                    La distanza di Levenshtein tra <Token>pierta</Token> e <Token>pietra</Token> è 2.
                                </Aside>
                                <Box title={"Matrice di distanza"}>
                                    <P>
                                        Matrice costruita per calcolare la distanza di Levenshtein con un algoritmo greedy:
                                    </P>
                                    <Aside>
                                        <Anchor href={"https://gist.github.com/Steffo99/ceeb7ed61a7b6a12a783232c0230ce70"}>Guarda
                                         un esempio documentato in Python qui!</Anchor>
                                    </Aside>
                                </Box>
                            </Box>
                            <Box title={"Damerau-Levenshtein distance"}>
                                <P>
                                    Estende la distanza di Levenshtein con una nuova operazione:
                                </P>
                                <ul>
                                    <LI><B>Trasposizione</B> di un singolo carattere</LI>
                                </ul>
                                <Aside>
                                    La distanza di Damerau-Levenshtein tra <Token>pierta</Token> e <Token>pietra</Token> è 1.
                                </Aside>
                            </Box>
                            <Box title={"Weighted distance"}>
                                <P>
                                    Differenzia i costi delle varie operazioni, diffenenziando ad esempio in base al carattere sostituito.
                                </P>
                                <Aside>
                                    <code>m</code> ed <code>n</code> sono vicini sulla tastiera e quindi la loro sostituzione "costa" meno, rispetto a <code>q</code> e <code>p</code>.
                                </Aside>
                            </Box>
                        </Split>
                        <P>
                            Calcolare l'edit distance <LatexMath>{`E`}</LatexMath> tra due token è un processo computazionalmente <B>molto costoso <LatexMath>{`O(n^2)`}</LatexMath></B>.
                        </P>
                        <Box title={"Pre-filtraggio"}>
                            <P>
                                È possibile evitare di calcolare l'edit distance per la maggior parte dei termini del
                                vocabolario <I>pre-filtrandoli</I> su <B>criteri computazionalmente più veloci</B>.
                            </P>
                            <Split>
                                <Box title={"Differenza di lunghezza"}>
                                    <Aside>
                                        L'edit distance come minimo è la differenza tra il numero di caratteri dei due
                                        token.
                                    </Aside>
                                    <B><LatexMath block={true}>{r`E \geq \left| size(X) - size(Y) \right|`}</LatexMath></B>
                                </Box>
                                <Box title={<span>Differenza di <LatexMath>{r`q`}</LatexMath>-grammi</span>}>
                                    <Aside>
                                        L'edit distance è limitata superiormente dal numero di <LatexMath>{r`q`}</LatexMath>-grammi per cui i due token differiscono.
                                    </Aside>
                                    <Todo block={true}>
                                        <B><LatexMath block={true}>{r`E \geq \frac{\max ( size(X), size(Y) ) - size(X \cap Y) + q - 1}{q}`}</LatexMath></B>
                                    </Todo>
                                </Box>
                                <Box title={<span>Posizione dei <LatexMath>{r`q`}</LatexMath>-grammi</span>}>
                                    <Aside>
                                        Token i cui <LatexMath>{`q`}</LatexMath>-grammi si trovano in posizioni diverse avranno edit distance più alte.
                                    </Aside>
                                    <P>
                                        Richiede che venga tenuto traccia delle posizione dei <LatexMath>{`q`}</LatexMath>-grammi, e prevede che i <LatexMath>{`q`}</LatexMath>-grammi a <B>più di <LatexMath>{`k`}</LatexMath> posizioni di distanza</B> non vengano considerati uguali.
                                    </P>
                                </Box>
                            </Split>
                        </Box>
                    </Box>
                </Box>
                <Box title={<span>Tramite overlap dei <LatexMath>{`q`}</LatexMath>-grammi</span>}>
                    <P>
                        Dato un token, si <B>ordinano</B> i token del vocabolario in base al numero di <LatexMath>{`q`}</LatexMath>-grammi in comune.
                    </P>
                    <Box title={"Coefficiente di Jaccard"}>
                        <P>
                            <B>Misura di overlap</B> tra due insiemi di <LatexMath>{`q`}</LatexMath>-grammi <LatexMath>{`X`}</LatexMath> e <LatexMath>{`Y`}</LatexMath>:
                        </P>
                        <B><LatexMath block={true}>{r`Jaccard = \frac{size(X \cap Y)}{size(X \cup Y)}`}</LatexMath></B>
                        <Aside>
                            <P>
                                Usando trigrammi, il <I>coefficiente di Jaccard</I> tra <Token>novembre</Token> e <Token>dicembre</Token> è:
                            </P>
                            <ul>
                                <LI>
                                    <LatexMath>{`X \\cap Y =\\ `}</LatexMath>
                                    <Token>emb</Token>&nbsp;
                                    <Token>mbr</Token>&nbsp;
                                    <Token>bre</Token>&nbsp;
                                    <Token>re␣</Token>&nbsp;
                                    <Token>e␣␣</Token>
                                </LI>
                                <LI>
                                    <LatexMath>{`X \\cup Y =\\ `}</LatexMath>
                                    <Token>␣␣n</Token>&nbsp;
                                    <Token>␣no</Token>&nbsp;
                                    <Token>nov</Token>&nbsp;
                                    <Token>ove</Token>&nbsp;
                                    <Token>vem</Token>&nbsp;
                                    <Token>␣␣d</Token>&nbsp;
                                    <Token>␣di</Token>&nbsp;
                                    <Token>dic</Token>&nbsp;
                                    <Token>ice</Token>&nbsp;
                                    <Token>cem</Token>&nbsp;
                                    <Token>emb</Token>&nbsp;
                                    <Token>mbr</Token>&nbsp;
                                    <Token>bre</Token>&nbsp;
                                    <Token>re␣</Token>&nbsp;
                                    <Token>e␣␣</Token>
                                </LI>
                                <LI>
                                    <LatexMath>{`Jaccard = \\frac{size(X \\cap Y)}{size(X \\cup Y)} = \\frac{5}{15} = 0.33`}</LatexMath>
                                </LI>
                            </ul>
                        </Aside>
                    </Box>
                </Box>
                <Box title={"Tramite algoritmi fonetici"}>
                    <P>
                        Esistono motori di ricerca che usano un algoritmo per convertire i token nella loro
                        corrispondente <B>pronuncia</B> ed effettuano match sulla base di quest'ultima.
                    </P>
                    <Aside>
                        Un metodo usato per correggere errori tipografici durante confronto di nomi propri è il <Anchor href={"https://en.wikipedia.org/wiki/Soundex"}>Soundex</Anchor>, un algoritmo che converte le parole in codici rappresentanti i loro suoni.
                    </Aside>
                </Box>
                <Box title={"Proposte di correzione"}>
                    <P>
                        Scoperti i token "vicini", si può optare per varie soluzioni:
                    </P>
                    <Split>
                        <Box title={"Sostituzione"}>
                            <P>
                                <I>Sostituire</I> automaticamente il token originale con il più vicino ad esso.
                            </P>
                            <P>
                                Richiede che le possibili correzioni siano <B>ordinate</B>.
                            </P>
                            <Aside>
                                <P>
                                    È quello che fa di default Google:
                                </P>
                                <Image src={ImgReplacement} description={"Google ha corretto il token errato per me."}/>
                            </Aside>
                        </Box>
                        <Box title={"Visualizzazione"}>
                            <P>
                                <i>Visualizzare</i> l'errore all'utente, e permettergli di correggerlo rapidamente.
                            </P>
                            <P>
                                Richiede più <B>interazione</B> da parte dell'utente.
                            </P>
                            <Aside>
                                <P>
                                    È quello che fa Google quando non è sicuro della correzione proposta:
                                </P>
                                <Image src={ImgSuggestion} description={"Google suggerisce di correggere il token errato."}/>
                            </Aside>
                        </Box>
                        <Box title={"Aggiunta"}>
                            <P>
                                <i>Aggiungere</i> automaticamente alla query i token corretti.
                            </P>
                            <P>
                                Richiede più <B>tempo di ricerca</B>, perchè nella query saranno presenti più token.
                            </P>
                        </Box>
                    </Split>
                </Box>
            </Box>
            <Box title={"Correzione contestualizzata"}>
                <P>
                    È possibile confrontare ogni token con il contesto dei termini circostanti per rilevare ulteriori errori.
                </P>
                <Split>
                    <Box title={"Conteggio dei risultati"}>
                        <P>
                            Un metodo che prevede di <B>enumerare</B> varie alternative aventi contesti concordi e di restituire quella con il <B>maggior numero di risultati</B>.
                        </P>
                    </Box>
                    <Box title={"Conteggio delle ricerche"}>
                        <P>
                            Un metodo che prevede di <B>enumerare</B> varie alternative aventi contesti concordi e di restituire quella che <B>è stata ricercata più volte</B>.
                        </P>
                    </Box>
                </Split>
            </Box>
            <Split title={"Indici"}>
                <Box title={"Cosa sono?"}>
                    <P>
                        Gli indici sono <B>strutture dati</B> in cui vengono inseriti i documenti e i loro token dopo essere stati preparati.
                    </P>
                    <P>
                        L'<B><I>indicizzazione</I></B> è la procedura che crea e mantiene aggiornati uno o più <B><I>indici</I></B>.
                    </P>
                </Box>
                <Box title={"A cosa servono?"}>
                    <P>
                        Sono fondamentali per <B>velocizzare notevolmente</B> le ricerche e per permettere certi tipi di operazioni sulle query.
                    </P>
                </Box>
            </Split>
            <Box title={"Matrice di incidenza"}>
                <P>
                    Un indice basato sulla costruzione di una matrice in cui le righe sono i <B>documenti</B>, le colonne i <B>token</B> e le celle valori booleani che descrivono se il token compare nel documento.
                </P>
                <P>
                    È terribilmente <B>inefficiente</B> in termini di spazio, perchè la matrice è <B>sparsa</B>.
                </P>
                <P>
                    Una sua evoluzione spazialmente più efficiente è l'<B><I>inverted index</I></B>.
                </P>
            </Box>
            <Box title={"Inverted index"}>
                <P>
                    L'<B>indice</B> più comune, costituito da tante <B><I>posting list</I></B> raggiungibili attraverso un <B><I>vocabolario</I></B>.
                </P>
                <Split>
                    <Box title={"Posting list"}>
                        <P>
                            L'<B>insieme</B> di tutte le <B>occorrenze</B> di un dato token.
                        </P>
                        <P>
                            Può essere realizzata in due modi:
                        </P>
                        <ul>
                            <LI>
                                <U>Document-based</U>: lista ordinata di documenti con la <B>frequenza del token</B> in essi
                            </LI>
                            <LI>
                                <U>Word-based</U>: lista ordinata di documenti che punta a una lista ordinata delle <B>posizioni</B> del token in essi
                            </LI>
                        </ul>
                        <P>
                            Essendo le liste <B>ordinate</B>, vi è possibile effettuare operazioni di <B>unione</B> e <B>intersezione</B> in <B>tempo lineare</B> utilizzando dei <B>cursori</B>.
                        </P>
                        <P>
                            Non è però altrettanto efficiente in operazioni di <B>negazione</B>.
                        </P>
                    </Box>
                    <Box title={"Vocabolario"}>
                        <P>
                            L'insieme delle <B>associazioni</B> tra <B>token</B> e la loro <B>posting list</B>.
                        </P>
                        <P>
                            Ci sono tanti modi diversi di implementarlo:
                        </P>
                        <ul>
                            <LI>
                                <U>Doppia lista ordinata</U>: <B>lista di token</B> che punta a una <B>lista di occorrenze</B>
                            </LI>
                            <LI>
                                <U>Trie</U>: <B>albero</B> in cui ogni arco rappresenta una <B>stringa</B> e ogni nodo una <B>concatenazione</B> delle stringhe tra sè e la radice
                                <ul>
                                    <LI><U>Prefix tree</U>: <B>trie</B> che usa i <B>prefissi</B> dei token</LI>
                                    <LI><U>Suffix tree</U>: <B>trie</B> che usa i <B>suffissi</B> dei token</LI>
                                </ul>
                            </LI>
                            <LI>
                                <U>B+ tree</U>: <B>albero</B> particolarmente ottimizzato, in cui le foglie sono le occorrenze
                            </LI>
                            <LI>
                                <U>Dizionario</U>: <B>hashmap</B> che usa come chiave il <B>token</B> stesso, e una lista di occorrenze come <B>valore</B>
                            </LI>
                        </ul>
                        <P>
                            Generalmente, occupano <B>spazio logaritmico</B> rispetto al numero di token.
                        </P>
                    </Box>
                </Split>
            </Box>
            <Split title={"Query languages"}>
                <Box title={"Cosa sono?"}>
                    <P>
                        Ogni motore di ricerca implementa un diverso <B><I>query language</I></B>, un'<B>interfaccia</B> per l'utente che gli permette di effettuare ricerche in base alla sua necessità di informazioni <I><UIN/></I>.
                    </P>
                    <Aside>
                        Su Google puoi scrivere la tua domanda in linguaggio naturale e ricevere una risposta, ma ci puoi anche aggiungere qualche operatore come <code>site:stackoverflow.com</code> per restringere la ricerca!
                    </Aside>
                    <P>
                        Ogni query language può poi implementare diverse <B>funzionalità</B> in base al tipo di documento indicizzato.
                    </P>
                </Box>
                <Box title={"A cosa servono?"}>
                    <P>
                        Essendo una <B>via di mezzo</B> tra linguaggio naturale e linguaggio di programmazione, permettono a un <B>utente qualunque</B> di fruire del motore di ricerca, senza bisogno di conoscenze approfondite sul suo funzionamento.
                    </P>
                </Box>
            </Split>
            <Split>
                <Box title={"Keywords semplici"}>
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
                </Box>
                <Box title={"Keyword consecutive"}>
                    <P>
                        Prevedono la possibilità di richiedere che due o più keyword siano <B><I>consecutive</I></B>.
                    </P>
                    <Aside>
                        <P>
                            Solitamente è possibile specificarlo circondando di virgolette le keyword in questione.
                        </P>
                        <Code language={"python"}>
                            "Nel mezzo del cammin di nostra vita"
                        </Code>
                    </Aside>
                </Box>
                <Box title={"Keyword distanziate"}>
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
                </Box>
            </Split>
            <Split>
                <Box title={"Patterns"}>
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
                </Box>
                <Box title={"Concetti"}>
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
                </Box>
            </Split>
            <Split>
                <Box title={"Struttura"}>
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
                </Box>
                <Box title={"Operatori booleani"}>
                    <P>
                        Prevedono la possibilità di effettuare più query e applicare le operazioni di <B>intersezione</B>, <B>unione</B> e <B>negazione</B> sui risultati.
                    </P>
                    <Aside>
                        <P>
                            Moltissimi motori di ricerca permettono boolean query, inclusa la <Anchor href={"https://www.postgresql.org/docs/current/textsearch.html"}>Full Text Search di PostgreSQL</Anchor>.
                        </P>
                        <Code language={"python"}>
                            "Dante" and "Vergil" and ("Devil May Cry" or "DMC") and not "Divina Commedia"
                        </Code>
                    </Aside>
                </Box>
            </Split>
            <Split title={<span>Implementazione dei <I>patterns</I></span>}>
                <Box title={"Tramite prefix e suffix tree"}>
                    <ol>
                        <LI>
                            Separa <B>prefisso</B> e <B>suffisso</B> in due parti collegate da un <code>AND</code>:
                            <Aside>
                                <Token>ca*e</Token> → <Token>ca*</Token> <code>AND</code> <Token>*e</Token>
                            </Aside>
                        </LI>
                        <LI>
                            Trova i risultati delle due parti attraverso un doppio vocabolario implementato con sia
                            prefix sia suffix tree:
                            <Aside>
                                <ul>
                                    <LI><Token>ca*</Token> → 1:1, 1:8, 2:113, 4:231</LI>
                                    <LI><Token>*e</Token> → 1:8, 1:32, 2:113, 3:12, 4:1 </LI>
                                </ul>
                            </Aside>
                        </LI>
                        <LI>
                            Effettua l'<B>intersezione</B> delle due parti:
                            <Aside>
                                <Token>ca*</Token> <code>AND</code> <Token>*e</Token> → 1:8, 2:113
                            </Aside>
                        </LI>
                    </ol>
                    <P>
                        È costoso in termini di tempo: ci saranno tanti risultati che andranno processati, e
                        l'intersezione è <LatexMath>{`O(n + m)`}</LatexMath>.
                    </P>
                </Box>
                <Box title={"Tramite permuterm tree"}>
                    <Box title={"Permuterm tree"}>
                        <P>
                            Un particolare <B>prefix tree</B> in cui vengono inserite tutte le possibili permutazioni di ogni token, con in aggiunta un marcatore per la fine della parola (░):
                        </P>
                        <Aside>
                            <Token>ciao</Token> → <Token>ciao░</Token> <Token>iao░c</Token> <Token>ao░ci</Token> <Token>iao░c</Token>
                        </Aside>
                    </Box>
                    <P>
                        È possibile effettuare ricerche wildcard <B>ruotando la wildcard a destra</B>, trasformando
                        tutti i pattern in <B>prefissi</B>:
                    </P>
                    <Aside>
                        <ul>
                            <LI>
                                Ricerca semplice:
                                <Aside>
                                    <Token>ciao</Token> → <Token>ciao░</Token>
                                </Aside>
                            </LI>
                            <LI>
                                Ricerca di prefisso:
                                <Aside>
                                    <Token>ci*</Token> → <Token>░ci*</Token>
                                </Aside>
                            </LI>
                            <LI>
                                Ricerca di suffisso:
                                <Aside>
                                    <Token>*ao</Token> → <Token>ao░*</Token>
                                </Aside>
                            </LI>
                            <LI>
                                Ricerca di sottostringa:
                                <Aside>
                                    <Token>*ia*</Token> → <Token>ia*</Token>
                                </Aside>
                            </LI>
                            <LI>
                                Ricerca di intervallo:
                                <Aside>
                                    <Token>c*o</Token> → <Token>o░c*</Token>
                                </Aside>
                            </LI>
                        </ul>
                    </Aside>
                    <P>
                        È costoso in termini di spazio: ogni termine va salvato molte volte nel vocabolario (<I>permuterm problem</I>).
                    </P>
                    <Aside>
                        In inglese, in cui i token sono lunghi in media <LatexMath>4</LatexMath>, questo porta a una quadruplicazione <LatexMath>{r`\times 4`}</LatexMath> dello spazio usato.
                    </Aside>
                </Box>
                <Box title={<span>Tramite <LatexMath>{`q`}</LatexMath>-gram indexes</span>}>
                    <Box title={<span><LatexMath>{`q`}</LatexMath>-gram index</span>}>
                        <P>
                            <B>Vocabolario aggiuntivo</B> che associa <LatexMath>{`q`}</LatexMath>-grammi ai token corrispondenti del vocabolario principale.
                        </P>
                        <Aside>
                            <Token>␣ci</Token> → <Token>ciao</Token> <Token>cibo</Token> <Token>cinefilo</Token>
                        </Aside>
                    </Box>
                    <P>
                        È possibile interpretare la ricerca come <B>intersezione di <LatexMath>{`q`}</LatexMath>-grammi</B>:
                    </P>
                    <Aside>
                        <P>
                            Utilizzando dei bigrammi:
                        </P>
                        <Aside>
                            <Token>lun*</Token> → <Token>␣l</Token> <code>AND</code> <Token>lu</Token> <code>AND</code> <Token>un</Token>
                        </Aside>
                    </Aside>
                    <P>
                        I risultati della ricerca andranno <B>post-filtrati</B>, in quanto ci potrebbero essere dei <B>falsi positivi</B>:
                    </P>
                    <Aside>
                        <P>
                            Utilizzando dei bigrammi:
                        </P>
                        <Aside>
                            <Token>mon*</Token> → <Token>␣m</Token> <code>AND</code> <Token>mo</Token> <code>AND</code> <Token>on</Token> → <Token stopword={true}>moon</Token> <Token>monday</Token>
                        </Aside>
                    </Aside>
                    <Aside>
                        <P>
                            È un'ottima via di mezzo tra prefix-suffix tree e permuterm tree sia per il tempo impiegato sia per lo spazio richiesto.
                        </P>
                    </Aside>
                </Box>
            </Split>
            <Split title={<span>Modelli di <IR/></span>}>
                <Box title={"Cosa sono?"}>
                    <P>
                        Sono <B>modelli matematici</B> in grado di <B>selezionare</B> e <B>ordinare</B> i documenti in base alla loro <B>rilevanza</B> rispetto alla query.
                    </P>
                </Box>
                <Box title={"A cosa servono?"}>
                    <P>
                        Stabiliscono i <B>risultati richiamati</B> dal motore di ricerca e l'<B>ordine con cui vengono visualizzati</B>.
                    </P>
                </Box>
            </Split>
            <Box title={"Modelli classici"}>
                <P>
                    Rappresentano la query come un <B>insieme di index term</B>, e assegnano le rilevanze confrontando l'insieme con gli index term dei documenti.
                </P>
                <Aside>
                    Sono usati solitamente dai motori di ricerca web.
                </Aside>
                <P>
                    Ad ogni index term del documento viene <B>indipendentemente</B> assegnato un <B><I>peso</I></B> in base alla sua rilevanza nella query.
                </P>
            </Box>
            <Split>
                <Box title={"Modello booleano"}>
                    <P>
                        <B>Modello classico</B> che rappresenta la query come un <B><Predicato/> <I>booleano</I></B>, e genera la rilevanza valutandolo su ogni documento:
                    </P>
                    <ul>
                        <LI><B><code>1</code></B> se il <Predicato/> è <B>vero</B></LI>
                        <LI><B><code>0</code></B> se il <Predicato/> è <B>falso</B></LI>
                    </ul>
                </Box>
                <Box title={"Modello fuzzy"}>
                    <P>
                        Variante del <B>modello booleano</B> che permette ai documenti di <B>soddisfare
                                                                                             parzialmente</B> il <Predicato/>:
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
                </Box>
            </Split>
            <Split>
                <Box title={"Modello vettoriale"}>
                    <P>
                        Modello classico che rappresenta il vocabolario come uno <B>spazio vettoriale</B>, in cui ogni dimensione rappresenta un token.
                    </P>
                    <P>
                        Ogni documento viene rappresentato come un <B>vettore <LatexMath>{`d`}</LatexMath></B>, i cui valori sono <B>pesi <LatexMath>{`d_i`}</LatexMath></B> assegnati in base a quanto il token è signficativo all'interno del documento.
                    </P>
                    <Aside>
                        Il metodo più comunemente usato per assegnare i pesi è il <TFIDF/>, descritto successivamente.
                    </Aside>
                    <Aside>
                        La matrice della collezione <LatexMath>{`\\mathbf{D}`}</LatexMath> è estremamente sparsa: viene implementata <B>per colonne</B> attraverso un <B>inverted index</B>.
                    </Aside>
                    <P>
                        Le query vengono anch'esse trasformate in <B>vettori <LatexMath>{`q`}</LatexMath></B>, e le rilevanze vengono ottenute dalla <B>similitudine vettoriale</B> tra i vettore query e i vettori documenti.
                    </P>
                    <Split>
                        <Box title={<span>Peso <TFIDF/></span>}>
                            <P>
                                Un metodo di assegnamento peso che si basa sul <B>prodotto</B> dei fattori <B><TF/></B> e <B><IDF/></B>:
                            </P>
                            <B><LatexMath block={true}>{`d_i = tf_{norm}(i) \\cdot idf_{log}(i)`}</LatexMath></B>
                            <Box title={<span><TF/>: Term frequency</span>}>
                                <P>
                                    Misura quanto un token è <B>frequente</B> nel <B>singolo documento</B>:
                                </P>
                                <B><LatexMath
                                    block={true}
                                >{`tf(i) = \\frac{occorrenze}{totale\\ token}`}</LatexMath></B>
                                <P>
                                    Nella formula principale, viene <B>normalizzato</B> dividendolo per il <TF/> più alto del documento, limitandolo così a valori tra 0 e 1:
                                </P>
                                <B><LatexMath
                                    block={true}
                                >{`tf_{norm}(i) = \\frac{tf(i)}{\\max_{j:\\ docs}\\ tf(j)}`}</LatexMath></B>
                            </Box>
                            <Box title={<span><IDF/>: Inverse document freq.</span>}>
                                <P>
                                    Misura quanto un token è <B>raro</B> nella <B>collezione di documenti</B>:
                                </P>
                                <B><LatexMath
                                    block={true}
                                >{`idf(i) = \\frac{totale\\ documenti}{documenti\\ con\\ occ.}`}</LatexMath></B>
                                <P>
                                    Nella formula principale, viene <B>logaritmizzato</B>, al fine di ridurre significativamente il suo impatto:
                                </P>
                                <B><LatexMath block={true}>{`idf_{log}(i) = \\log(idf(i))`}</LatexMath></B>
                            </Box>
                        </Box>
                        <Box title={"Similitudine vettoriale"}>
                            <P>
                                Un modo di misurare la similitudine tra <B>insiemi di token</B> rappresentati come <B>dimensioni vettoriali</B>.
                            </P>
                            <Box title={"Coseno di similitudine"}>
                                <P>
                                    Si basa sulla <B>norma a 2</B>, e corrisponde a cercare l'angolo centrato all'origine tra i due vettori:
                                </P>
                                <B><LatexMath block={true}>{`
                                    sim_{\\cos} (d, q) = 
                                    \\frac{
                                        \\vec{d} \\cdot \\vec{q}
                                    }{
                                        \\| \\vec{d} \\|_2 \\cdot \\| \\vec{q} \\|_2
                                    } =
                                    \\frac{
                                        \\sum_{i = 0}^{dim.} (d_i \\cdot q_i )
                                    }{
                                        \\sqrt{\\sum_{i = 0}^{dim.} (d_i^2)} \\cdot \\sqrt{\\sum_{i = 0}^{dim.} (q_i^2})
                                    }
                                `}</LatexMath></B>
                                <Aside>
                                    Solitamente viene usata nei modelli di <IR/> vettoriali, descritti in seguito.
                                </Aside>
                            </Box>
                            <Aside>
                                <P>
                                    Altre misure comuni di similitudine vettoriale sono:
                                </P>
                                <ul>
                                    <LI>La <Anchor href={"https://it.wikipedia.org/wiki/Distanza_euclidea"}>distanza euclidea</Anchor></LI>
                                    <LI>Il <Anchor href={"https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient"}>Sørensen–Dice coefficient</Anchor></LI>
                                    <LI>Il <Anchor href={"https://en.wikipedia.org/wiki/Jaccard_index"}>Jaccard Index</Anchor></LI>
                                    <LI>La <Anchor href={"https://it.wikipedia.org/wiki/Distanza_di_Minkowski"}>distanza di Minkowski</Anchor></LI>
                                </ul>
                            </Aside>
                        </Box>
                    </Split>
                    <Box title={"Modello probabilistico"}>
                        <P>
                            Implementazione del modello vettoriale che ordina i documenti <LatexMath>{`d`}</LatexMath> in base alla <B>probabilità <LatexMath>{`R`}</LatexMath></B> che siano <B>rilevanti</B> per la query <LatexMath>{`q`}</LatexMath>:
                        </P>
                        <B><LatexMath block={true}>{`sim_{prob} = \\frac{P(R\\ |\\ d, q)}{P(\\overline{R}\\ |\\ d, q)}`}</LatexMath></B>
                        <P>
                            Si dimostra che è possibile determinare quanto la presenza di un dato token <LatexMath>{`k_i`}</LatexMath> in un documento <LatexMath>{r`d`}</LatexMath> ne <B>contribuisca alla rilevanza</B> per la query <LatexMath>{r`\vec{q}`}</LatexMath>:
                        </P>
                        <B><LatexMath block={true}>{`
                            c_i = 
                            \\log \\frac{P(k_i\\ |\\ R, \\vec{q})}{1 - P(k_i\\ |\\ R, \\vec{q})}
                            +
                            \\log \\frac{1 - P(k_i\\ |\\ \\overline{R}, \\vec{q})}{P(k_i\\ |\\ \\overline{R}, \\vec{q})}
                        `}</LatexMath></B>
                        <Split>
                            <Color builtin={"lime"}>
                                <Aside>
                                    <B><LatexMath block={true}>{`
                                        \\log \\frac{P(k_i\\ |\\ R, \\vec{q})}{1 - P(k_i\\ |\\ R, \\vec{q})}
                                    `}</LatexMath></B>
                                    <P>
                                        Il valore del primo "blocco" dipende dalla presenza del token <LatexMath>{`k_i`}</LatexMath> nei documenti <B>rilevanti</B>: più il token vi appare, più il valore sarà <B>alto</B>.
                                    </P>
                                </Aside>
                            </Color>
                            <Color builtin={"red"}>
                                <Aside>
                                    <B><LatexMath block={true}>{`
                                        \\log \\frac{1 - P(k_i\\ |\\ \\overline{R}, \\vec{q})}{P(k_i\\ |\\ \\overline{R}, \\vec{q})}
                                    `}</LatexMath></B>
                                    <P>
                                        Il valore del primo "blocco" dipende dalla presenza del token <LatexMath>{`k_i`}</LatexMath> nei documenti <B>non rilevanti</B>: più il token vi appare, più il valore sarà <B>basso</B>.
                                    </P>
                                </Aside>
                            </Color>
                        </Split>
                        <Aside>
                            In generale, <LatexMath>{`c_i`}</LatexMath> avrà un valore <Color builtin={"lime"}>positivo</Color> se è più probabile che il termine appaia in documenti rilevanti e non in quelli irrilevanti; in caso contrario, esso avrà valore <Color builtin={"red"}>negativo</Color>.
                        </Aside>
                    </Box>
                </Box>
            </Split>
            <Box title={"Modello Okapi BM25"}>
                <P>
                    Modello classico che ordina i documenti in base a un <B>punteggio <RSV/></B> ad essi assegnato.
                </P>
                <P>
                    L'<RSV/> deriva dalla somma per ogni termine della query del prodotto di tre fattori:
                </P>
                <B><LatexMath block={true}>{`RSV = \sum_{t \in q} (x \\cdot y \\cdot z)`}</LatexMath></B>
                <Split>
                    <Box title={<span>Fattore <LatexMath>{`x`}</LatexMath></span>}>
                        <P>
                            Un moltiplicatore basato sull'<B><IDF/></B> dei termini della query presenti nel documento:
                        </P>
                        <B><LatexMath block={true}>{r`
                            x = ( idf_{\log} )
                        `}</LatexMath></B>
                    </Box>
                    <Box title={<span>Fattore <LatexMath>{`y`}</LatexMath></span>}>
                        <P>
                            Un moltiplicatore basato sulla <B><TF/> nel documento</B> dei termini nella query:
                        </P>
                        <B><LatexMath block={true}>{r`
                            y' = \frac{ (k_1 + 1) \cdot tf_{td} }{ k_1 + tf_{td} }
                        `}</LatexMath></B>
                        <Aside>
                            <LatexMath>{r`k_1`}</LatexMath> regola la <B>priorità data al fattore</B>: se <LatexMath>0</LatexMath> la <TF/> viene ignorata e il modello diventa binario, se molto elevata invece il fattore <LatexMath>{r`b`}</LatexMath> monopolizza gli altri.
                        </Aside>
                        <P>
                            Ad esso viene in genere applicata una normalizzazione basata sulla <B>lunghezza del documento</B>:
                        </P>
                        <B><LatexMath block={true}>{r`
                            y = \frac{(k_1 + 1) \cdot tf_{td}}{k_1 \cdot \left( 1 - b + \left( b \cdot \frac{L_d}{L_{avg}} \right) \right) + tf_{td}}
                        `}</LatexMath></B>
                        <Aside>
                            <LatexMath>{r`b`}</LatexMath> regola <B>quanto viene applicata la normalizzazione</B>: se <LatexMath>0</LatexMath>, essa viene disattivata, mentre se <LatexMath>1</LatexMath> viene applicata completamente.
                        </Aside>
                    </Box>
                    <Box title={<span>Fattore <LatexMath>{`z`}</LatexMath></span>}>
                        <P>
                            Un moltiplicatore basato sulla <B><TF/> nella query stessa</B> dei termini nella query:
                        </P>
                        <B><LatexMath
                            block={true}
                        >{`z = \\frac{(k_3 + 1) \\cdot tf_{tq}}{k_3 + tf_{tq}}`}</LatexMath></B>
                        <Aside>
                            <LatexMath>{r`k_3`}</LatexMath> regola la <B>priorità data ai vari token</B> in base alla loro <TF/> nella query stessa: se <LatexMath>0</LatexMath>, questa funzionalità viene disattivata, mentre se
                        </Aside>
                        <P>
                            Ad esso non viene ovviamente applicata alcuna normalizzazione.
                        </P>
                    </Box>
                </Split>
            </Box>
            <Box title={"Link Analysis Model"}>
                <P>
                    Modello per classificare documenti intercollegati in base a <B>come essi sono collegati</B> tra loro.
                </P>
                <Aside>
                    Una pagina non è importante in base a quanto dice di esserlo, ma in base a quanto le altre pagine dicono che lo è.
                </Aside>
                <Split>
                    <Box title={"PageRank"}>
                        <P>
                            Algoritmo di <I>Link Analysis Ranking</I> <B>query-independent</B> che assegna un <B>grado</B> a ogni pagina indicizzata.
                        </P>
                        <Aside>
                            È il primo algoritmo utilizzato da Google.
                        </Aside>
                        <Box title={"Rank"}>
                            <P>
                                Misura <B>iterativa</B> di quanto una pagina è importante rispetto a tutte le altre indicizzate.
                            </P>
                            <B><LatexMath block={true}>{r`
                                R'_i(p) = (1 - \alpha) \cdot \sum_{q:\ parents} \left( \frac{R_{i-1}(q)}{N_q} \right) + \alpha \cdot E(p)
                            `}</LatexMath></B>
                            <P>
                                In cui:
                            </P>
                            <ul>
                                <LI>
                                    <B><LatexMath>{`q`}</LatexMath></B> è una pagina che <B>referenzia</B> quella in questione;
                                </LI>
                                <LI>
                                    <B><LatexMath>{`R_{i-1}(q)`}</LatexMath></B> è il <B>rank normalizzato</B> della pagina <LatexMath>{r`q`}</LatexMath>;
                                </LI>
                                <LI>
                                    <B><LatexMath>{`N_q`}</LatexMath></B> è il numero <B>totale di link</B> presenti nella pagina <LatexMath>q</LatexMath>;
                                </LI>
                                <LI>
                                    <B><LatexMath>{`E(p)`}</LatexMath></B> è una <B><I>sorgente di rank</I></B>;
                                </LI>
                                <LI>
                                    <B><LatexMath>{`\\alpha`}</LatexMath></B> è un parametro che regola l'<B>emissione della sorgente</B> di rank e la <B>dissipazione</B> del rank preesistente.
                                </LI>
                            </ul>
                            <Aside>
                                Converge molto in fretta: <LatexMath>{`O(log\\ n)`}</LatexMath>!
                            </Aside>
                            <Box title={"Sorgenti di rank"}>
                                <P>
                                    Funzione che introduce nuovo rank nel sistema ad ogni iterazione.
                                </P>
                                <Aside>
                                    Se non venisse introdotto nuovo rank nel sistema, si formerebbero lentamente dei <B>pozzi</B> in presenza di cicli o pagine senza nessun collegamento uscente.
                                </Aside>
                                <P>
                                    PageRank normale prevede che questa funzione sia costante; è possibile però <B>personalizzarlo</B> rendendo la funzione variabile, facendo in modo che vengano assegnati rank più alti a certi tipi di pagine.
                                </P>
                                <Aside>
                                    Ad esempio, per prioritizzare le homepage rispetto alle sottopagine è possibile fare che:
                                    <LatexMath block={true}>{r`
                                        E(p) = \begin{cases}
                                            1 \qquad pagina\ principale\\
                                            0 \qquad sottopagine
                                        \end{cases}
                                    `}</LatexMath>
                                </Aside>
                            </Box>
                        </Box>
                        <Box title={"Rank normalizzato"}>
                            <P>
                                <B>Rank</B> riscalato a valori inclusi <B>tra 0 e 1</B>.
                            </P>
                            <B><LatexMath block={true}>{r`
                                R_i(p) = \frac{R'_i(p)}{\sum_{d:\ pages} \left( R'_i(d) \right)}
                            `}</LatexMath></B>
                            <P>
                                Solitamente, il rank viene rinormalizzato ad ogni iterazione.
                            </P>
                        </Box>
                    </Box>
                    <Box title={"HITS"}>
                        <P>
                            Algoritmo di <I>Link Analysis Ranking</I> <B>query-dependent</B> che attribuisce <B>due diversi valori</B> ad ogni pagina: <B><I>autorità</I></B> e <B><I>hubness</I></B>.
                        </P>
                        <Aside>
                            Viene utilizzato per determinare l'importanza delle <B>riviste scientifiche</B>.
                        </Aside>
                        <P>
                            Viene applicato solo a un <I>base set</I>, ovvero all'unione del <I>root set</I> (i match
                            della query) con tutti i nodi ad essi <B>direttamente connessi</B>.
                        </P>
                        <Split>
                            <Box title={"Autorità"}>
                                <P>
                                    Misura di quanto la pagina in questione <B>viene referenziata</B> da altri siti
                                    autoritativi.
                                </P>
                                <Aside>
                                    Quanto una pagina riceve collegamenti "importanti" in entrata.
                                </Aside>
                                <B><LatexMath block={true}>{r`
                                    a'_i(p) = \sum_{e:\ entering} h_{i-1}(e)
                                `}</LatexMath></B>
                            </Box>
                            <Box title={"Hubness"}>
                                <P>
                                    Misura di quanto la pagina in questione <B>referenzia siti</B> autoritativi.
                                </P>
                                <Aside>
                                    Quanto una pagina ha collegamenti "importanti" in uscita.
                                </Aside>
                                <B><LatexMath block={true}>{r`
                                    h'_i(p) = \sum_{l:\ leaving} a_{i-1}(l)
                                `}</LatexMath></B>
                            </Box>
                        </Split>
                        <Split>
                            <Box title={"Autorità normalizzata"}>
                                <P>
                                    <B>Autorità</B> riscalata a valori inclusi <B>tra 0 e 1</B>.
                                </P>
                                <Todo block={true}><B><LatexMath block={true}>{r`
                                    a_i(p) = \frac{a'_i(p)}{\sum_{d:\ pages} \left( a'_i(d) \right)}
                                `}</LatexMath></B></Todo>
                            </Box>
                            <Box title={"Hubness normalizzata"}>
                                <P>
                                    <B>Hubness</B> riscalata a valori inclusi <B>tra 0 e 1</B>.
                                </P>
                                <Todo block={true}><B><LatexMath block={true}>{r`
                                    h_i(p) = \frac{h'_i(p)}{\sum_{d:\ pages} \left( h'_i(d) \right)}
                                `}</LatexMath></B></Todo>
                            </Box>
                        </Split>
                        <Aside>
                            Purtroppo, è facile da manipolare, quindi non si applica molto bene ad ambienti non-regolati come l'intero web.
                        </Aside>
                    </Box>
                </Split>
            </Box>
            <Split title={<span>Profilazione sistemi <IR/></span>}>
                <Box title={"Cos'è?"}>
                    <P>
                        <B>Misurazioni</B> che vengono effettuate sui sistemi di <IR/>.
                    </P>
                    <Aside>
                        Solitamente trattano la <B>velocità di indicizzazione</B>, la <B>velocità di ricerca</B>, l'efficacia del <B>query language</B>, l'<B>user interface</B>, il <B>prezzo</B>...
                    </Aside>
                </Box>
                <Box title={"A cosa serve?"}>
                    <P>
                        Per vedere <B>quanto funziona bene</B> un sistema di <IR/>!
                    </P>
                    <Aside>
                        Solitamente, la misura più importante è la <B>soddisfazione dell'utente</B>, che generalmente coincide con la <B>rilevanza dei risultati di ricerca</B>.
                    </Aside>
                </Box>
            </Split>
            <Box title={"Benchmark"}>
                <P>
                    Per ottenere delle misure, solitamente si preparano in anticipo delle <B>query</B> dette <I>benchmark</I> delle quali si è <B>già a conoscenza dei documenti rilevanti</B>.
                </P>
                <Aside>
                    I documenti rilevanti possono essere selezionati a mano, o ricavati dai dati di utilizzo degli utenti (link cliccati o ignorati).
                </Aside>
            </Box>
            <Box title={"Misure comuni"}>
                <P>
                    Le due misure usate più di frequente per misurare l'utilità dei risultati sono <B><I>recall</I></B> e <B><I>precision</I></B>.
                </P>
                <Split>
                    <Box title={"Recall"}>
                        <P>
                            Misura <B>quanti documenti rilevanti sono stati <I>richiamati</I></B> dalla collezione:
                        </P>
                        <B><LatexMath block={true}>{`Recall = \\frac{size(A \\cap R)}{size(R)}`}</LatexMath></B>
                    </Box>
                    <Box title={"Precision"}>
                        <P>
                            Misura <B>quanti documenti richiamati sono rilevanti</B>:
                        </P>
                        <B><LatexMath block={true}>{`Precision = \\frac{size(A \\cap R)}{size(A)}`}</LatexMath></B>
                    </Box>
                </Split>
                <Aside>
                    Generalmente, recall e precision sono <B>inversamente proporzionali</B>!
                </Aside>
            </Box>
            <Box title={"Misure derivate"}>
                <Split>
                    <Box title={"R-Precision"}>
                        <P>
                            La <B>precisione</B> di una query che richiama <LatexMath>{`R`}</LatexMath> elementi.
                        </P>
                    </Box>
                    <Box title={"R-Recall"}>
                        <P>
                            A precisione <LatexMath>{`R`}</LatexMath>, il <B>richiamo</B> relativo ad una query.
                        </P>
                    </Box>
                </Split>
                <Split>
                    <Box title={"Curva di richiamo"}>
                        <P>
                            Curva che associa <B>percentili di richiamo</B> ai corrispondenti valori di <B>R-Precision</B>.
                        </P>
                        <Aside>
                            <P>
                                Ad esempio:
                            </P>
                            <Aside>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Richiamo</th>
                                            <th>R-Precision</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>10%</td>
                                            <td>90%</td>
                                        </tr>
                                        <tr>
                                            <td>20%</td>
                                            <td>60%</td>
                                        </tr>
                                        <tr>
                                            <td>30%</td>
                                            <td>10%</td>
                                        </tr>
                                        <tr>
                                            <td>...</td>
                                            <td>...</td>
                                        </tr>
                                        <tr>
                                            <td>100%</td>
                                            <td>2%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Aside>
                        </Aside>
                        <P>
                            È detta <I>naturale</I> se include un punto <B>per ogni documento richiamato</B>.
                        </P>
                        <P>
                            È detta <I>standard</I> se usa le <B>percentuali da 10% a 100%</B> come punti.
                        </P>
                    </Box>
                    <Box title={"Curva di richiamo interpolata"}>
                        <P>
                            Mostra il <B>valore massimo di precisione</B> per valori di richiamo <B>maggiori o uguali</B> a quelli del punto.
                        </P>
                        <Aside>
                            <P>
                                Ad esempio:
                            </P>
                            <Aside>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Richiamo</th>
                                            <th>Precisione</th>
                                            <th>Interpolata</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>10%</td>
                                            <td>90%</td>
                                            <td>90%</td>
                                        </tr>
                                        <tr>
                                            <td>20%</td>
                                            <td>40%</td>
                                            <td><B>50%</B></td>
                                        </tr>
                                        <tr>
                                            <td>30%</td>
                                            <td>30%</td>
                                            <td><B>50%</B></td>
                                        </tr>
                                        <tr>
                                            <td>40%</td>
                                            <td>50%</td>
                                            <td>50%</td>
                                        </tr>
                                        <tr>
                                            <td>...</td>
                                            <td>...</td>
                                            <td>...</td>
                                        </tr>
                                        <tr>
                                            <td>100%</td>
                                            <td>2%</td>
                                            <td>2%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Aside>
                        </Aside>
                        <Aside>
                            È sempre una curva <B>monotona decrescente</B>.
                        </Aside>
                    </Box>
                </Split>
            </Box>
            <Box title={"Misure medie"}>
                <P>
                    Esistono misure che riassumono i risultati di più benchmark in una sola.
                </P>
                <Split>
                    <Box title={"Curva di precisione media"}>
                        <P>
                            Se si hanno più benchmark, corrispondenti a <B>più curve di richiamo</B>, si possono
                            ottenere le <B>medie</B> dei valori ai vari livelli, ottenendo così una <B><I>curva di
                                                                                                          precisione media</I></B>.
                        </P>
                    </Box>
                    <Box title={"Mean average precision"}>
                        <P>
                            La <B>media</B> di tutti i livelli di <B>precisione media</B>.
                        </P>
                    </Box>
                </Split>
                <Split>
                    <Box title={"Media armonica"}>
                        <P>
                            Misura che combina <B>richiamo</B> e <B>precisione</B> in un singolo valore:
                        </P>
                        <B><LatexMath block={true}>{r`
                            F = \frac{2}{\frac{1}{Recall} + \frac{1}{Precision}} = 2 \cdot \frac{Recall \cdot Precision}{Recall + Precision}
                        `}</LatexMath></B>
                    </Box>
                    <Box title={"Misura E"}>
                        <P>
                            Complemento della <B>media armonica</B> configurabile che permette di selezionare se
                            dare <B>priorità <LatexMath>{`b`}</LatexMath></B> alla precisione
                            (<LatexMath>{`b > 1`}</LatexMath>) oppure al richiamo (<LatexMath>{`b < 1`}</LatexMath>):
                        </P>
                        <B><LatexMath block={true}>{r`
                            E = 1 - \frac{1 + b^2}{\frac{b^2}{Recall} + \frac{1}{Precision}}
                        `}</LatexMath></B>
                    </Box>
                </Split>
                <Aside>
                    Attenzione: non è sufficiente confrontare le misure medie per determinare l'efficacia di un motore
                    di ricerca, perchè esse potrebbero <B>nascondere problemi</B> di <B>tipi specifici di query</B>!
                </Aside>
                <Split>
                    <Box title={"Discounted Cumulative Gain"}>
                        <P>
                            Misura che attribuisce <B><I>guadagni</I> decrescenti</B> in base alla precisione di ogni
                            documento richiamato.
                        </P>
                        <Aside>
                            <P>
                                Una formula per il DCG potrebbe essere:
                            </P>
                            <LatexMath
                                block={true}
                            >{r`DCG = \sum_{Docs} \left( Stars \cdot 2^{- Position} \right)`}</LatexMath>
                            <P>
                                Applicata, sarebbe:
                            </P>
                            <Aside>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Posizione</th>
                                            <th>Stelle</th>
                                            <th>Punti</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>0</td>
                                            <td>★★★★☆</td>
                                            <td><LatexMath>{r`4 \cdot 2^{0} =\ `}</LatexMath><Color
                                                builtin={"lime"}
                                            ><LatexMath>{`+4.00`}</LatexMath></Color></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>★★☆☆☆</td>
                                            <td><LatexMath>{r`2 \cdot 2^{-1} =\ `}</LatexMath><Color
                                                builtin={"lime"}
                                            ><LatexMath>{`+1.00`}</LatexMath></Color></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>★★★☆☆</td>
                                            <td><LatexMath>{r`3 \cdot 2^{-2} =\ `}</LatexMath><Color
                                                builtin={"lime"}
                                            ><LatexMath>{`+0.75`}</LatexMath></Color></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>★★★★★</td>
                                            <td><LatexMath>{r`5 \cdot 2^{-3} =\ `}</LatexMath><Color
                                                builtin={"lime"}
                                            ><LatexMath>{`+0.63`}</LatexMath></Color></td>
                                        </tr>
                                        <tr>
                                            <td><B>Tot</B></td>
                                            <td><B>-----</B></td>
                                            <td><B><LatexMath>{r`4 + 1 + 0.75 + 0.63 =\ `}</LatexMath><Color
                                                builtin={"lime"}
                                            ><LatexMath>{`+6.38`}</LatexMath></Color></B></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Aside>
                        </Aside>
                    </Box>
                    <Box title={"Normalized DCG"}>
                        <P>
                            Variante del <B>Discounted Cumulative Gain</B> che <B>divide</B> il punteggio finale per il
                            valore <B>perfetto</B> ottenibile.
                        </P>
                        <Aside>
                            <P>
                                Normalizzando la formula precedente si ottiene:
                            </P>
                            <LatexMath
                                block={true}
                            >{r`NDCG = \frac{\sum_{Docs} \left( Stars \cdot 2^{- Position} \right)}{\sum_{Docs} \left( 5 \cdot 2^{- Position} \right)}`}</LatexMath>
                        </Aside>
                    </Box>
                </Split>
            </Box>
            <Split title={"Presentazione"}>
                <Box title={"Cos'è?"}>
                    <P>
                        Il modo in cui i <B>risultati</B> vengono visualizzati all'utente.
                    </P>
                </Box>
                <Box title={"A cosa serve?"}>
                    <P>
                        Permettere all'utente di <B>vedere velocemente</B> tutti i risultati e di <B>scegliere</B> il
                        risultato a lui più utile.
                    </P>
                </Box>
            </Split>
            <Box title={"Elenco di collegamenti"}>
                <P>
                    Il motore di ricerca web mostra all'utente un <B><I>elenco di collegamenti</I></B> ai documenti
                    richiamati.
                </P>
                <P>
                    Solitamente include alcuni dati del documento, come <B>titolo</B>, <B>sommario</B> e <B>url</B>.
                </P>
                <Box title={"Sommario"}>
                    <P>
                        Un breve <B>riassunto del contenuto</B> del documento richiamato.
                    </P>
                    <Split>
                        <Box title={"Sommario statico"}>
                            <P>
                                Un sommario i cui contenuti dipendono solo dal <B>documento</B>, e non dalla query
                                immessa.
                            </P>
                            <Aside>
                                Sono sommari statici quelli ottenuti dai <B><code>manifest.json</code></B>, dai
                                tag <B>OpenGraph</B>, dalle <B>prime righe</B> del documento e quelli che Google genera
                                dalle <B>applicazioni web</B> (Web 3.0).
                            </Aside>
                        </Box>
                        <Box title={"Sommario dinamico"}>
                            <P>
                                Un sommario che <B>varia da query a query</B>, evidenziando le parti rilevanti del
                                documento.
                            </P>
                            <Aside>
                                Sono sommari dinamici quelli che Google genera dalle <B>pagine web statiche</B> (Web
                                1.0) e <B>dinamiche</B> (Web 2.0).
                            </Aside>
                        </Box>
                    </Split>
                </Box>
            </Box>
        </article>
    )
}
