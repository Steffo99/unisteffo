import {
    Color,
    Paragraph as P,
    Bold as B,
    Italic as I,
    Anchor, ListItem as LI, BaseLink,
} from "bluelib/lib/components"
import { default as Latex } from "bluelib/lib/components/LatexMath"

import Box, { default as Panel } from "../../components/Box"
import Split, { default as Section } from "../../components/Split"
import Todo from "../../components/Todo"


const r = String.raw
const Example = ({ children, ...props }) => <Color builtin={"magenta"}><Panel {...props}>{children}</Panel></Color>
const Plus = ({ children }) => <Color builtin={"red"}>{children}</Color>
const Minus = ({ children }) => <Color builtin={"blue"}>{children}</Color>



export default function Statistica() {
    return (
        <div>
            <Split title={"Statistica ed elementi di probabilità"}>
                <Box title={"Di cosa si tratta?"}>
                    <P>
                        <Todo>Questa parte non è ancora stata scritta.</Todo>
                    </P>
                </Box>
                <Box title={"Il corso all'Unimore"}>
                    <P>
                        🎓 Il corso è stato tenuto dal <Anchor href={"mailto:luca.larocca@unimore.it"}>Prof. Luca La Rocca</Anchor>.
                    </P>
                    <P>
                        📘 Le dispense sono disponibili sulla <Anchor href={"http://www-dimat.unipv.it/luca/sep1920.htm"}>pagina personale</Anchor> del professore.
                    </P>
                    <P>
                        🎥 <Color builtin={"orange"}>Non sono mai state registrate</Color> delle videolezioni.
                    </P>
                </Box>
                <Box title={"Materiale utilizzato"}>
                    <ul>
                        <LI><BaseLink disabled={true}>📄 Dispense</BaseLink></LI>
                        <LI><Anchor href={"https://www.wikipedia.org/"}>📰 Wikipedia</Anchor></LI>
                    </ul>
                </Box>
            </Split>
            <Section title={"Tipi di probabilità"}>
                <Panel title={"Classica"}>
                    <P>
                        <Latex>{r`P(E) = \frac{casi\ favorevoli}{casi\ possibili}`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Frequentista"}>
                    <P>
                        <Latex>{r`P(E) = \frac{successi}{prove\ totali}`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Soggettiva"}>
                    <P>
                        Il prezzo che un individuo coerente riterrebbe equo per ricevere <B>1</B> nel caso
                        l'evento si verificasse e <B>0</B> nel caso l'evento non si verificasse.
                    </P>
                </Panel>
            </Section>
            <Section title={"Linguaggio matematico"}>
                <Panel title={"Spazio campionario"}>
                    <blockquote>
                        "omegone"
                    </blockquote>
                    <P>
                        L'<B>insieme</B> di tutti gli esiti possibili di un esperimento.
                    </P>
                    <P>
                        <Latex>{r`\Omega = \left \{ 1, 2, 3, 4, 5, 6 \right \}`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Esito"}>
                    <blockquote>
                        "omeghino"
                    </blockquote>
                    <P>
                        Un <B>elemento</B> dello spazio campionario.
                    </P>
                    <P>
                        <Latex>{r`\omega = 1`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Evento"}>
                    <blockquote>
                        "e"
                    </blockquote>
                    <P>
                        Un <B>sottoinsieme</B> dello spazio campionario.
                    </P>
                    <P>
                        <Latex>{r`E = \left \{ 1, 2 \right \}`}</Latex>
                    </P>
                    <P>
                        Lo spazio campionario stesso è un <B>evento certo</B>.
                    </P>
                </Panel>
                <Panel title={"Not"}>
                    <blockquote>
                        "not e"
                    </blockquote>
                    <P>
                        Il <B>complementare</B> di un sottoinsieme.
                    </P>
                    <P>
                        <Latex>{r`\bar{E} = \left \{ 3, 4, 5, 6 \right \}`}</Latex>
                    </P>
                </Panel>
                <Panel title={"And"}>
                    <blockquote>
                        "e intersecato effe"
                    </blockquote>
                    <P>
                        L'<B>intersezione</B> di più sottoinsiemi.
                    </P>
                    <P>
                        <Latex>{r`E \cap F = \left \{ 1 \right \}`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Or"}>
                    <blockquote>
                        "e unito a effe"
                    </blockquote>
                    <P>
                        L'<B>unione</B> di più sottoinsiemi.
                    </P>
                    <P>
                        <Latex>{r`E \cup F = \left \{ 1, 2, 3, 4 \right \}`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Differenza"}>
                    <blockquote>
                        "e meno effe"
                    </blockquote>
                    <P>
                        <Latex>{r`E \setminus F = E \cap \bar{F}`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Implicazione"}>
                    <blockquote>
                        "e contenuto in effe"
                    </blockquote>
                    <P>
                        L'<B>inclusione</B> del primo insieme in un altro.
                    </P>
                    <P>
                        <Latex>{r`E \subseteq F`}</Latex>
                    </P>
                    <P>
                        Se si verifica <Latex>E</Latex>, allora si verifica anche <Latex>F</Latex>.
                    </P>
                </Panel>
                <Panel title={"Evento impossibile"}>
                    <blockquote>
                        "e è impossibile"
                    </blockquote>
                    <P>
                        Un sottoinsieme <B>vuoto</B>.
                    </P>
                    <P>
                        <Latex>{r`E = \emptyset`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Mutua esclusione"}>
                    <blockquote>
                        "e ed effe si escludono mutualmente"
                    </blockquote>
                    <P>
                        La <B>disgiunzione</B> di due insiemi.
                    </P>
                    <P>
                        <Latex>{r`E \cap F = \emptyset`}</Latex>
                    </P>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Famiglia degli eventi"}>
                    <blockquote>
                        "famiglia effe"
                    </blockquote>
                    <P>
                        I sottoinsiemi dello spazio campionario formano una <B>famiglia</B> di sottoinsiemi
                        detta <I>famiglia degli eventi</I>.
                    </P>
                    <P>
                        <Latex>{r`\mathcal{F}`}</Latex>
                    </P>
                    <P>
                        Qualsiasi sottoinsieme appartenente a <Latex>{r`\mathcal{F}`}</Latex> è considerato un
                        evento.
                    </P>
                </Panel>
                <Panel title={<span><Latex>{r`\sigma`}</Latex>-algebra</span>}>
                    <blockquote>
                        "sigma algebra"
                    </blockquote>
                    <P>
                        Se la famiglia degli eventi soddisfa questi tre requisiti, allora viene
                        detta <I><Latex>{r`\sigma`}</Latex>-algebra</I>:
                    </P>
                    <ol>
                        <li>
                            Lo spazio campionario è un evento: <Latex>{r`\Omega \in \mathcal{F}`}</Latex>
                        </li>
                        <li>
                            Se un sottoinsieme è un evento, allora anche il suo complementare lo
                            è: <Latex>{r`E \in \mathcal{F} \implies \bar{E} \in \mathcal{F}`}</Latex>
                        </li>
                        <li>
                            Se due sottoinsiemi sono eventi, allora lo sono anche la loro unione e
                            intersezione: <Latex>{r`(E, F) \in \mathcal{F} \implies (E \cup F, E \cap F) \in \mathcal{F}`}</Latex>
                        </li>
                    </ol>
                    <P>
                        Un
                        esempio: <Latex>{r`E \in \mathcal{F} \implies \mathcal{F} = \{ \emptyset, E, \bar{E}, \Omega \}`}</Latex>
                    </P>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Partizione"}>
                    <blockquote>
                        "la partizione e composta da e uno, e due, e tre..."
                    </blockquote>
                    <P>
                        Un insieme di esiti e eventi:
                    </P>
                    <ul>
                        <li><B>Finito</B>.</li>
                        <li>In cui tutti gli eventi hanno <B>probabilità diversa da 0</B>.</li>
                        <li>In cui tutti gli eventi sono <B>mutualmente esclusivi</B>.</li>
                        <li>In cui l'unione di tutti i suoi elementi <B>copre lo spazio campionario</B>.</li>
                    </ul>
                    <P>
                        La partizione <Latex>{r`E_i`}</Latex> è composta dagli
                        eventi <Latex>{r`E_1`}</Latex>, <Latex>{r`E_2`}</Latex>, <Latex>{r`E_3`}</Latex>, fino
                        a <Latex>{r`E_n`}</Latex>.
                    </P>
                    <Example>
                        Se lo spazio campionario fosse una torta, una sua partizione sarebbe l'insieme delle
                        fette di uno dei modi in cui si potrebbe tagliare.
                    </Example>
                </Panel>
            </Section>
            <Section title={"Assiomi della probabilità"}>
                <Panel title={"Primo assioma della probabilità"}>
                    <P>
                        La probabilità di un evento è un numero tra 0 e 1.
                    </P>
                    <P>
                        <Latex>{r`\forall E \in \mathcal{F}, 0 \leq P(E) \leq 1`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Secondo assioma della probabilità"}>
                    <P>
                        La probabilità dello spazio campionario è sempre 1.
                    </P>
                    <P>
                        <Latex>{r`P(\Omega) = 1`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Terzo assioma della probabilità"}>
                    <P>
                        La probabilità dell'unione di eventi indipendenti è uguale alla somma delle loro
                        probabilità.
                    </P>
                    <P>
                        <Latex>{r`P \left ( \bigcup_i E_i \right ) = \sum_i P ( E_i )`}</Latex>
                    </P>
                </Panel>
            </Section>
            <Section title={"Conseguenze degli assiomi"}>
                <Panel title={"Probabilità di un evento negato"}>
                    <P>
                        La probabilità di un evento negato è uguale a 1 meno la probabilità dell'evento non
                        negato.
                    </P>
                    <P>
                        <Latex>{r`P(\bar{E}) = 1 - P({E})`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Probabilità di un evento incluso"}>
                    <P>
                        La probabilità di un evento incluso in un altro è sempre minore o uguale alla
                        probabilità dell'evento in cui è incluso.
                    </P>
                    <P>
                        <Latex>{r`F \subseteq E \implies P(F) \leq P(E)`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Unione"}>
                    <P>
                        La probabilità di un evento unito a un altro è uguale alla somma delle probabilità dei
                        due eventi meno la probabilità della loro intersezione.
                    </P>
                    <P>
                        <Latex>{r`P(E \cup F) = P(E) + P(F) - P(E \cap F)`}</Latex>
                    </P>
                    <Example>
                        Sommando le probabilità dei due eventi, l'intersezione viene contata due volte, e va
                        quindi rimossa!
                    </Example>
                </Panel>
            </Section>
            <Section title={"Spazi equiprobabili"}>
                <Panel title={"Cosa sono?"}>
                    <P>
                        Spazi campionari in cui ci sono un numero finito di esiti e ogni esito ha la stessa
                        probabilità di verificarsi.
                    </P>
                    <P>
                        <Latex>{r`P(E) = \frac{len(E)}{len(\Omega)}`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Spazi equiprobabili geometrici"}>
                    <P>
                        Gli spazi campionari possono avere un numero infinito di esiti: sono <I>equiprobabili
                                                                                                geometrici</I> se nessun esito è privilegiato rispetto agli altri.
                    </P>
                </Panel>
            </Section>
            <Section title={"Calcolo combinatorio"}>
                <Panel title={"Disposizioni"}>
                    <P>
                        Estraggo un numero, da un sacchetto con <Latex>n</Latex> numeri, mi segno che numero ho
                        estratto e lo <B>tengo fuori dal sacchetto</B>. Ripeto per <Latex>k</Latex> volte.
                    </P>
                    <P>
                        <B>Tengo conto</B> dell'ordine in cui ho estratto i numeri.
                    </P>
                    <P>
                        <Latex>{r`\boldsymbol{D}_{n, k} = \frac{n!}{(n - k)!}`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Disposizioni con ripetizione"}>
                    <P>
                        Estraggo un numero, da un sacchetto con <Latex>n</Latex> numeri, mi segno che numero ho
                        estratto e lo <B>rimetto nel sacchetto</B>. Ripeto per <Latex>k</Latex> volte.
                    </P>
                    <P>
                        <B>Tengo conto</B> dell'ordine in cui ho estratto i numeri.
                    </P>
                    <P>
                        <Latex>{r`\boldsymbol{D}^{r}_{n, k} = n^k`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Combinazioni"}>
                    <P>
                        Estraggo un numero, da un sacchetto con <Latex>n</Latex> numeri, mi segno che numero ho
                        estratto e lo <B>tengo fuori dal sacchetto</B>. Ripeto per <Latex>k</Latex> volte.
                    </P>
                    <P>
                        <B>Non mi interessa</B> l'ordine in cui ho estratto i numeri.
                    </P>
                    <P>
                        <Latex>{r`\boldsymbol{C}_{n, k} = \binom{n}{k} = \frac{n!}{(k)! \cdot (n - k)!}`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Combinazioni con ripetizione"}>
                    <P>
                        Estraggo un numero, da un sacchetto con <Latex>n</Latex> numeri, mi segno che numero ho
                        estratto e lo <B>rimetto nel sacchetto</B>. Ripeto per <Latex>k</Latex> volte.
                    </P>
                    <P>
                        <B>Non mi interessa</B> l'ordine in cui ho estratto i numeri.
                    </P>
                    <P>
                        <Latex>{r`\boldsymbol{C}^{r}_{n, k} = \binom{n + k - 1}{k} = \frac{(n + k - 1)!}{(k)! \cdot (n - 1)!}`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Permutazioni"}>
                    <P>
                        Estraggo <Latex>n</Latex> numeri e guardo in quanti ordini diversi li posso mettere.
                    </P>
                    <P>
                        <Latex>{r`\boldsymbol{P}_n = n!`}</Latex>
                    </P>
                </Panel>
            </Section>
            <Section title={"Probabilità condizionata"}>
                <Panel title={"Eventi condizionati"}>
                    <blockquote>
                        "E dato F"
                    </blockquote>
                    <P>
                        La probabilità che si verifichi <Latex>E</Latex> sapendo che <B>si è già verificato</B>
                        <Latex>F</Latex>.
                    </P>
                    <P>
                        <Latex>{r`P(E|F) = \frac{P(E \cap F)}{P(F)}`}</Latex>
                    </P>
                    <Example>
                        Ricorda vagamente le pipe di <code>bash</code>, però al contrario...
                    </Example>
                </Panel>
                <Panel title={"Eventi mutualmente esclusivi"}>
                    <P>
                        Se due eventi sono mutualmente esclusivi, entrambe le loro probabilità condizionate
                        saranno uguali a 0.
                    </P>
                    <P>
                        <Latex>{r`E \cap F = \emptyset \Longleftrightarrow P(E|F) = P(F|E) = 0`}</Latex>
                    </P>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Regola della catena"}>
                    <P>
                        Si può sfruttare la formula inversa della probabilità condizionata per calcolare catene
                        di intersezioni:
                    </P>
                    <P>
                        <Latex>{r`P(E_1 \cap \times \cap E_n) = P(E_1) \times P(E_2 | E_1) \times \dots \times P(E_n | E_1 \cap E_2 \cap \dots \cap E_{n-1})`}</Latex>
                    </P>
                </Panel>
            </Section>
            <Section title={"Le alternative"}>
                <Panel title={"Legge delle alternative"}>
                    <P>
                        La probabilità che si verifichi un evento è pari alla somma delle probabilità
                        dell'evento stesso dati tutti gli eventi di una partizione.
                    </P>
                    <P>
                        <Latex>{r`P(F) = \sum_{i} P(F|E_i) \cdot P(E_i)`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Legge condizionata delle alternative"}>
                    <P>
                        La legge delle alternative funziona anche quando ad essere partizionato è
                        un <B>evento</B>:
                    </P>
                    <P>
                        <Latex>{r`P(F|G) = \sum_i P(F|E_i \cap G) \cdot P(E_i | G)`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Formula di Bayes"}>
                    <P>
                        Tramite la <I>formula di Bayes</I> possiamo risalire alla probabilità di un evento
                        condizionato a un altro partendo dalla probabilità di quest'ultimo condizionato al
                        primo:
                    </P>
                    <P>
                        <Latex>{r`P(E_h | F) = \frac{P(F | E_h) \cdot P(E_h)}{P(F)}`}</Latex>
                    </P>
                    <Example>
                        In pratica, invertiamo gli eventi.
                    </Example>
                </Panel>
            </Section>
            <Section title={"Eventi indipendenti"}>
                <Panel title={"Due eventi indipendenti"}>
                    <blockquote>
                        "eventi indipendenti a due a due"
                    </blockquote>
                    <P>
                        Se due eventi sono indipendenti, sapere che uno dei due si è verificato non influisce
                        sulle probabilità che si sia verificato l'altro.
                    </P>
                    <P>
                        <Latex>{r`P(E \cap F) = P(E) \cdot P(F) \Longleftrightarrow P(E|F) = P(E) \Longleftrightarrow P(F|E) = P(F)`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Più eventi indipendenti"}>
                    <blockquote>
                        "eventi indipendenti a tre a tre, a quattro a quattro, a cinque a cinque..."
                    </blockquote>
                    <P>
                        Si può verificare l'indipendenza di più eventi alla volta:
                    </P>
                    <P>
                        <Latex>{r`P(E \cap F \cap G) = P(E) \cdot P(F) \cdot P(G)`}</Latex>
                    </P>
                    <P>
                        Eventi indipendenti a due a due non sono per forza indipendenti a tre a tre, e
                        viceversa.
                    </P>
                </Panel>
                <Panel title={"Famiglia di eventi indipendenti"}>
                    <P>
                        Un insieme di <Latex>n</Latex> eventi è una <I>famiglia di eventi indipendenti</I> se,
                        preso un qualsiasi numero di eventi da essa, essi risulteranno indipendenti.
                    </P>
                    <Example>
                        Tutti gli eventi provenienti da essa saranno indipendenti sia a due a due, sia a tre a
                        tre, sia a quattro a quattro, e così via!
                    </Example>
                </Panel>
            </Section>
            <Section title={"Variabili aleatorie"}>
                <Panel title={"Variabile aleatoria"}>
                    <P>
                        Una funzione che fa corrispondere un numero reale a ogni possibile esito dello spazio
                        campionario. <Latex>{r`X(\omega) : \Omega \to \mathbb{R}`}</Latex>.
                    </P>
                </Panel>
                <Panel title={<abbr title={"Nome artigianale dato da Steffo."}>Insieme di ripartizione</abbr>}>
                    <P>
                        Ad ogni variabile aleatoria sono associati gli
                        eventi <Latex>{r`A_t = \{ \omega | X(\omega) \leq t \}`}</Latex>, che contengono tutti
                        gli esiti a cui la variabile aleatoria associa un valore minore o uguale
                        a <Latex>t</Latex>.
                    </P>
                    <P>
                        Per definizione, tutte le variabili aleatorie devono rispettare questa condizione:
                    </P>
                    <P>
                        <Latex>{r`\forall t \in \mathbb{R}, A_t \in \mathcal{F}`}</Latex>
                    </P>
                    <Example>
                        All'aumentare di t, l'insieme conterrà sempre più elementi.
                    </Example>
                </Panel>
                <Panel title={"Supporto"}>
                    <blockquote>
                        "supporto di X"
                    </blockquote>
                    <P>
                        Il <B>codominio</B> della variabile aleatoria è il suo <I>supporto</I>.
                    </P>
                    <P>
                        Per indicare che un valore <Latex>x_0</Latex> appartiene al supporto di <Latex>X</Latex>,
                        si usa la notazione <Latex>X \mapsto x_0</Latex>.
                    </P>
                </Panel>
            </Section>
            <Section title={"Densità"}>
                <Panel title={"Funzione probabilità"}>
                    <P>
                        La <I>funzione probabilità</I> <Latex>{r`p_X : X \to [0, 1]`}</Latex> di una variabile
                        aleatoria <B>discreta</B> <Latex>X</Latex> è la funzione che associa ad ogni esito la
                        sua probabilità:
                    </P>
                    <P>
                        <Latex>{r`
                        p_X (x) = \begin{cases}
                            P([X = x]) \quad se\ X \mapsto x \\
                            0 \qquad \qquad \quad se\ X \not\mapsto x
                        \end{cases}                            
                    `}</Latex>
                    </P>
                </Panel>
                <Panel title={"Funzione densità"}>
                    <P>
                        La <I>funzione densità</I> <Latex>{r`f_X : X \to [0, 1]`}</Latex> di una variabile
                        aleatoria <B>continua</B> <Latex>X</Latex> è l'equivalente continuo della funzione
                        probabilità:
                    </P>
                    <P>
                        <Latex>{r`P([a < X \leq b]) = \int_a^b f_X (x) dx`}</Latex>
                    </P>
                    <P>
                        A differenza della funzione probabilità, è possibile che la funzione densità <B>non
                                                                                                        esista</B> per una certa variabile aleatoria.
                    </P>
                    <Example>
                        Rappresenta "quanta" probabilità c'è in un'unità di x!
                    </Example>
                </Panel>
            </Section>
            <Section title={"Funzione di ripartizione"}>
                <Panel title={"Definizione"}>
                    <P>
                        Ogni variabile aleatoria ha una <I>funzione di ripartizione</I>
                        <Latex>{r`F_X : \mathbb{R} \to [0, 1]`}</Latex> associata, che rappresenta la
                        probabilità che la variabile aleatoria assuma un valore minore o uguale
                        a <Latex>t</Latex>:
                    </P>
                    <P>
                        Si può dire che essa rappresenti la probabilità dell'evento <Latex>{r`A_t`}</Latex>:
                    </P>
                    <P>
                        <Latex>{r`
                        F_X (t) = P(A_t) = \begin{cases}
                            \sum_{i = 0}^{t} p_X (x_i) \quad nel\ discreto\\
                            \\
                            \int_{-\infty}^t f_X (x) dx \quad nel\ continuo
                        \end{cases}
                    `}</Latex>
                    </P>
                </Panel>
                <Panel title={"Proprietà della funzione"}>
                    <ul>
                        <li>È sempre <B>monotona crescente</B> (non strettamente).</li>
                        <br/>
                        <li>Vale <B>0</B> a <Latex>-\infty</Latex> e <B>1</B> a <Latex>+\infty</Latex>.</li>
                        <br/>
                        <li>È <B>continua da
                                 destra</B>: <Latex>{r`\forall x_0 \in \mathbb{R}, F_X (x_0) = \lim_{t \to x^+_0} F_X (t)`}</Latex>
                        </li>
                    </ul>
                </Panel>
                <Panel title={"Probabilità di un valore"}>
                    <P>
                        Possiamo usare la funzione di ripartizione per calcolare la probabilità di un certo
                        valore reale:
                    </P>
                    <P>
                        <Latex>{r`P([X = x_0]) = \lim_{t \to x^+_0} F_X (t) - \lim_{t \to x^-_0} F_X (t)`}</Latex>
                    </P>
                </Panel>
            </Section>
            <Section title={"Trasformazioni di variabili aleatorie"}>
                <Panel title={"Nel discreto"}>
                    <P>
                        Nel discreto basta abbinare un nuovo valore a ogni valore della variabile originale.
                    </P>
                </Panel>
                <Panel title={"Nel continuo (invertibile)"}>
                    <P>
                        Nel continuo applichiamo la formula dell'integrazione per sostituzione:
                    </P>
                    <P>
                        <Latex>{r`f_Y (y) = \int_{g(a)}^{g(b)} f_X ( g^{-1} (x) ) g^{-2} (x)`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Nel... digitale"}>
                    <P>
                        Trasformare variabili aleatorie è molto utile nell'informatica per creare distribuzioni
                        partendo da una funzione <a
                        href={"https://docs.python.org/3/library/random.html#random.random"}><code>random()</code></a> che
                        restituisce numeri da 0 a 1 con una distribuzione lineare.
                    </P>
                </Panel>
            </Section>
            <Section title={"Informazioni delle variabili aleatorie"}>
                <Panel title={"Media"}>
                    <P>
                        Ogni variabile aleatoria che ha una <B>funzione di ripartizione</B> e un <B>supporto
                                                                                                    finito</B> ha anche una <I>media</I> (o <I>valore medio</I> o <I>atteso</I>):
                    </P>
                    <P>
                        <Latex>{r`E(X) = \int_0^{+infty} (1 - F_X (t)) dt - \int_{-\infty}^{0} F_X (t) dt`}</Latex>
                    </P>
                    <P>
                        Nel discreto, si può calcolare con:
                    </P>
                    <P>
                        <Latex>{r`E(X) = \sum_i P(X = x_i) \cdot x_i`}</Latex>
                    </P>
                    <P>
                        Nel continuo, si può calcolare con:
                    </P>
                    <P>
                        <Latex>{r`E(X) = \int_{-\infty}^{+\infty} f_X (x) \cdot x \cdot dx`}</Latex>
                    </P>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Moda"}>
                    <P>
                        Valore per cui la <B>funzione probabilità</B> o <B>funzione densità</B> è <B>massima</B>.
                    </P>
                </Panel>
                <Panel title={"Quantili"}>
                    <P>
                        Il <I>quantile</I> <Latex>{r`x_{\alpha}`}</Latex> di
                        ordine <Latex>{r`0 \leq \alpha \leq 1`}</Latex> della variabile
                        aleatoria <Latex>X</Latex> è il più piccolo numero tale che:
                    </P>
                    <P>
                        <Latex>{r`P([X < x_{\alpha}]) \leq \alpha \leq P([X \leq x_{\alpha}])`}</Latex>
                    </P>
                    <P>

                    </P>
                    <P>
                        Il quantile di ordine 0.5 <Latex>{r`x_{0.5}`}</Latex> è detto <I>mediana</I>.
                    </P>
                    <P>
                        I quantili di ordine 0.25 <Latex>{r`x_{0.25}`}</Latex> e
                        0.75 <Latex>{r`x_{0.75}`}</Latex> sono detti <I>quartili</I>.
                    </P>
                    <P>
                        I quantili di ordine <Latex>{r`\frac{n}{100}`}</Latex> sono detti <I><Latex>n</Latex>-esima
                                                                                                             percentile</I>.
                    </P>
                </Panel>
                <Panel title={"Varianza"}>
                    <P>
                        È un valore che indica quanto la variabile aleatoria si discosta generalmente dalla
                        media:
                    </P>
                    <P>
                        <Latex>{r`Var(X) = E( (X - E(X) )^2 ) = E ( X^2 ) - (E(X))^2`}</Latex>
                    </P>
                </Panel>
            </Section>
            <Section title={"Disuguaglianze notevoli"}>
                <Panel title={"Disuguaglianza di Markov"}>
                    <P>
                        Data una variabile aleatoria non-negativa:
                    </P>
                    <P>
                        <Latex>{r`\forall k > 0, P([X \geq k]) \leq \frac{E(X)}{k}`}</Latex>
                    </P>
                    <P>
                        Divide in due parti (<Latex>{r`P(X < k)`}</Latex> e <Latex>{r`P(X \geq k)`}</Latex>) la
                        funzione X, la cui media risulterà uguale a:
                    </P>
                    <P>
                        <Latex>{r`E(X) = \overline{k} \cdot P(X < k) + k \cdot P(X \geq k)`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Disuguaglianza di Čebyšëv"}>
                    <blockquote>
                        "disuguaglianza di cebicev"
                    </blockquote>
                    <P>
                        Se la variabile aleatoria <Latex>X</Latex> ha media e varianza, allora la probabilità
                        che essa abbia un valore a più di <Latex>{r`\epsilon`}</Latex> di distanza dal valore
                        medio è minore o uguale a <Latex>{r`\frac{Var(X)}{\epsilon^2}`}</Latex>.
                    </P>
                    <P>
                        <Latex>{r`\forall \epsilon > 0, P([ \left| X - E(X) \right| \geq \epsilon]) \leq \frac{Var(X)}{\epsilon^2}`}</Latex>
                    </P>
                    <P>
                        E anche:
                    </P>
                    <P>
                        <Latex>{r`\forall \epsilon > 0, P([ \left| X - E(X) \right| < \epsilon]) \geq 1 - \frac{Var(X)}{\epsilon^2}`}</Latex>
                    </P>
                    <Example>
                        Serve per semplificare i calcoli quando la funzione di ripartizione è difficile da
                        calcolare!
                    </Example>
                </Panel>
            </Section>
            <Section title={"Un momento...!"}>
                <Panel title={"Momento"}>
                    <P>
                        Il <I>momento</I> <Latex>k</Latex>-esimo di una variabile aleatoria è:
                    </P>
                    <P>
                        <Latex>{r`
                        \mu_k = E ( X^k ) = \begin{cases}
                            \sum_i x_i^k p_X (x_i) \qquad nel\ discreto\\
                            \\
                            \int_{-\infty}^{+\infty} x^k f_X (x) dx \qquad nel\ continuo
                        \end{cases}`
                        }</Latex>
                    </P>
                    <Example>
                        La media di una variabile aleatoria è anche il suo primo momento.
                    </Example>
                </Panel>
                <Panel title={"Funzione generatrice dei momenti"}>
                    <P>
                        La <I>funzione generatrice dei momenti</I> è:
                    </P>
                    <P>
                        <Latex>{r`m_X (t) = E( e^{t \cdot X} )`}</Latex>
                    </P>
                    <P>
                        Se due variabile aleatorie hanno la stessa funzione generatrice dei momenti, allora esse
                        hanno la <B>stessa distribuzione</B>.
                    </P>
                    <P>
                        E' la <B>trasformata di Laplace</B> della variabile aleatoria di X.
                    </P>
                </Panel>
                <Panel title={"Funzione caratteristica"}>
                    <P>
                        La <I>funzione caratteristica</I> è:
                    </P>
                    <P>
                        <Latex>{r`H_X (t) = E ( e^{i \cdot t \cdot X} )`}</Latex>
                    </P>
                    <P>
                        Se due variabile aleatorie hanno la stessa funzione caratteristica, allora esse hanno
                        la <B>stessa distribuzione</B>.
                    </P>
                    <P>
                        E' la <B>trasformata di Fourier</B> della variabile aleatoria di X.
                    </P>
                </Panel>
            </Section>
            <Section title={"Prove e schemi"}>
                <Panel title={"Variabile con distribuzione"}>
                    <P>
                        Per dire che una variabile ha una certa distribuzione, si usa la notazione:
                    </P>
                    <P>
                        <Latex>{r`X \sim Distribuzione()`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Prova di Bernoulli"}>
                    <P>
                        Una prova con solo due possibili
                        esiti: <Plus>successo</Plus> e <Minus>insuccesso</Minus>.
                    </P>
                </Panel>
                <Panel title={"Schema di Bernoulli"}>
                    <P>
                        Una sequenza di prove di Bernoulli per le quali le probabilità di successo e fallimento
                        rimangono invariate.
                    </P>
                </Panel>
            </Section>
            <Section title={"Bernoulliana"}>
                <Panel title={"Distribuzione bernoulliana"}>
                    <P>
                        Una variabile aleatoria che rappresenta una prova di Bernoulli:
                    </P>
                    <ul>
                        <li>vale <Plus>1</Plus> in caso di <Plus>successo</Plus>.</li>
                        <li>vale <Minus>0</Minus> in caso di <Minus>insuccesso</Minus>.</li>
                    </ul>
                    <P>
                        Il suo simbolo è <Latex>{r`Ber(p)`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Densità della bernoulliana"}>
                    <P>
                        La distribuzione bernoulliana ha come densità:
                    </P>
                    <P>
                        <Latex>{r`
                        f_X (k) : \{0, 1\} = \begin{cases}
                            p \quad se\ k = 1\\
                            q \quad se\ k = 0\\
                            0 \quad altrimenti
                        \end{cases} = p^x \cdot q^{1 - k}`
                        }</Latex>
                    </P>
                </Panel>
            </Section>
            <Section title={"Binomiale"}>
                <Panel title={"Distribuzione binomiale"}>
                    <P>
                        Una variabile aleatoria che conta il numero di successi di <Latex>n</Latex> prove di uno
                        schema di Bernoulli.
                    </P>
                    <P>
                        Il suo simbolo è <Latex>{r`Bin(n, p)`}</Latex>.
                    </P>
                </Panel>
                <Panel title={"Densità della binomiale"}>
                    <P>
                        La binomiale ha come densità:
                    </P>
                    <P>
                        <Latex>{r`f_X (k) : \{0..n\} = \binom{n}{k} \cdot p^k \cdot q^{n - k}`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Momenti della binomiale"}>
                    <P>
                        La <B>funzione generatrice dei momenti</B> della binomiale è:
                    </P>
                    <P>
                        <Latex>{r`m_X (t) = (q + p \cdot e^t) ^ n`}</Latex>
                    </P>
                    <P>
                        La <B>media</B> di una binomiale è:
                    </P>
                    <P>
                        <Latex>{r`E(X) = n \cdot p`}</Latex>
                    </P>
                    <P>
                        La <B>varianza</B> di una binomiale è:
                    </P>
                    <P>
                        <Latex>{r`Var(X) = n \cdot p \cdot q`}</Latex>
                    </P>
                </Panel>
            </Section>
            <Section title={"Geometrica"}>
                <Panel title={"Distribuzione geometrica"}>
                    <P>
                        Una variabile aleatoria che conta il numero di prove in uno schema di Bernoulli fino
                        alla comparsa del primo successo.
                    </P>
                    <P>
                        Il suo simbolo è <Latex>Geo(p)</Latex>.
                    </P>
                </Panel>
                <Panel title={"Densità della geometrica"}>
                    <P>
                        La geometrica ha come densità:
                    </P>
                    <P>
                        <Latex>{r`f_X (k) : \mathbb{N} = q^{k - 1} p`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Momenti della geometrica"}>
                    <P>
                        La <B>funzione generatrice dei momenti</B> della geometrica è:
                    </P>
                    <P>
                        <Latex>{r`m_X (t) = \frac{p \cdot e^t}{1 - q \cdot e^t}`}</Latex>
                    </P>
                    <P>
                        La <B>media</B> della geometrica è:
                    </P>
                    <P>
                        <Latex>{r`E(X) = \frac{1}{p}`}</Latex>
                    </P>
                    <P>
                        La <B>varianza</B> della geometrica è:
                    </P>
                    <P>
                        <Latex>{r`Var(X) = \frac{q}{p^2}`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Assenza di memoria della geometrica"}>
                    <P>
                        La geometrica non tiene conto degli eventi avvenuti in passato: ha la proprietà
                        dell'assenza di memoria:
                    </P>
                    <P>
                        <Latex>{r`P([X = i + j | X > i ]) = P([X = j])`}</Latex>
                    </P>
                    <Example>
                        Ovvero, riscalando opportunamente l'asse Y posso prendere come 0 qualsiasi punto
                        dell'asse X.
                    </Example>
                </Panel>
            </Section>
            <Section title={"Binomiale negativa"}>
                <Panel title={"Distribuzione binomiale negativa"}>
                    <P>
                        Una variabile aleatoria che conta il numero di prove in uno schema di Bernoulli
                        necessarie perchè si verifichi l'<Latex>n</Latex>-esimo successo.
                    </P>
                    <P>
                        Il suo simbolo è <Latex>{r`\overline{Bin}(n, p)`}</Latex>.
                    </P>
                </Panel>
                <Panel title={"Densità della binomiale negativa"}>
                    <P>
                        La binomiale negativa ha come densità:
                    </P>
                    <P>
                        <Latex>{r`f_X (k) : \{ n .. +\infty \} \in \mathbb{N} = \binom{k - 1}{n - 1} \cdot p^n \cdot q^{k - n} `}</Latex>
                    </P>
                </Panel>
                <Panel title={"Momenti della binomiale negativa"}>
                    <P>
                        <P>
                            La <B>funzione generatrice dei momenti</B> della binomiale negativa è:
                        </P>
                        <P>
                            <Latex>{r`m_X (t) : \{ t < ln(\frac{1}{q}) \} = \left( \frac{p \cdot e^t}{1 - q \cdot e^t} \right) ^n`}</Latex>
                        </P>
                        <P>
                            La <B>media</B> della binomiale negativa è:
                        </P>
                        <P>
                            <Latex>{r`E(X) = \frac{n}{p}`}</Latex>
                        </P>
                        <P>
                            La <B>varianza</B> della binomiale negativa è:
                        </P>
                        <P>
                            <Latex>{r`Var(X) = \frac{n \cdot q}{p^2}`}</Latex>
                        </P>
                    </P>
                </Panel>
            </Section>
            <Section title={"Geometrica traslata"}>
                <Panel title={"Distribuzione geometrica traslata"}>
                    <P>
                        Una variabile aleatoria che conta il numero <Latex>k</Latex> di insuccessi consecutivi
                        in uno schema di Bernoulli:
                    </P>
                    <P>
                        Il suo simbolo rimane <Latex>{r`Geo(p)`}</Latex>.
                    </P>
                </Panel>
                <Panel title={"Densità della geometrica tralsata"}>
                    <P>
                        La geometrica traslata ha come densità:
                    </P>
                    <P>
                        <Latex>{r`f_X (k) : \mathbb{N} = p \cdot q^k `}</Latex>
                    </P>
                </Panel>
                <Panel title={"Momenti della geometrica traslata"}>
                    <P>
                        La <B>funzione generatrice dei momenti</B> della geometrica traslata è:
                    </P>
                    <P>
                        <Latex>{r`m_X (t) : \left\{ t < ln \left( \frac{1}{q} \right) \right\} = \frac{p}{1 - q \cdot e^t}`}</Latex>
                    </P>
                    <P>
                        La <B>media</B> della geometrica traslata è:
                    </P>
                    <P>
                        <Latex>{r`E(X) = \frac{q}{p}`}</Latex>
                    </P>
                    <P>
                        La <B>varianza</B> della geometrica è:
                    </P>
                    <P>
                        <Latex>{r`Var(X) = \frac{q}{p^2}`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Assenza di memoria della geometrica traslata"}>
                    <P>
                        La geometrica traslata non tiene conto degli eventi avvenuti in passato: ha la proprietà
                        dell'assenza di memoria:
                    </P>
                    <P>
                        <Latex>{r`P([X = i + j | X > i ]) = P([X = j])`}</Latex>
                    </P>
                    <Example>
                        Ovvero, riscalando opportunamente l'asse Y posso prendere come 0 qualsiasi punto
                        dell'asse X.
                    </Example>
                </Panel>
            </Section>
            <Section title={"Binomiale negativa traslata"}>
                <Panel title={"Distribuzione binomiale negativa traslata"}>
                    <P>
                        Una variabile aleatoria che conta il numero di insuccessi in uno schema di Bernoulli
                        prima che si verifichi l'<Latex>n</Latex>-esimo successo.
                    </P>
                    <P>
                        Il suo simbolo rimane <Latex>{r`\overline{Bin}(n, p)`}</Latex>.
                    </P>
                </Panel>
                <Panel title={"Densità della binomiale negativa traslata"}>
                    <P>
                        La binomiale negativa traslata ha come densità:
                    </P>
                    <P>
                        <Latex>{r`f_X (k) : \mathbb{N} = \binom{k + n - 1}{n - 1} \cdot p^n \cdot q^k `}</Latex>
                    </P>
                </Panel>
                <Panel title={"Momenti della binomiale negativa traslata"}>
                    <P>
                        <P>
                            La <B>funzione generatrice dei momenti</B> della binomiale negativa traslata è:
                        </P>
                        <P>
                            <Latex>{r`m_X (t) : \left\{ t < ln \left( \frac{1}{q} \right) \right\} = \left( \frac{p \cdot e^t}{1 - q \cdot e^t} \right) ^n`}</Latex>
                        </P>
                        <P>
                            La <B>media</B> della binomiale negativa traslata è:
                        </P>
                        <P>
                            <Latex>{r`E(X) = \frac{n \cdot q}{p}`}</Latex>
                        </P>
                        <P>
                            La <B>varianza</B> della binomiale negativa traslata è:
                        </P>
                        <P>
                            <Latex>{r`Var(X) = \frac{n \cdot q}{p^2}`}</Latex>
                        </P>
                    </P>
                </Panel>
            </Section>
            <Section title={"Ipergeometrica"}>
                <Panel title={"Distribuzione ipergeometrica"}>
                    <P>
                        Una variabile aleatoria che, sapendo il numero di successi <Latex>K</Latex> e di
                        insuccessi <Latex>N-K</Latex>, conta quanti successi si otterrebbero se se ne
                        estraessero <Latex>n</Latex> in blocco.
                    </P>
                    <P>
                        Il suo simbolo è <Latex>Ipe(N, K, n)</Latex>.
                    </P>
                </Panel>
                <Panel title={"Densità della ipergeometrica"}>
                    <P>
                        La ipergeometrica ha come densità:
                    </P>
                    <P>
                        <Latex>{r`f_X (k) : \{0..n\} \in \mathbb{N} = \frac{\binom{K}{k} \cdot \binom{N - K}{n - k}}{\binom{N}{n}}`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Momenti della ipergeometrica"}>
                    <P>
                        <P>
                            La <B>funzione generatrice dei momenti</B> della ipergeometrica è trascurabile.
                        </P>
                        <P>
                            La <B>media</B> della ipergeometrica è:
                        </P>
                        <P>
                            <Latex>{r`E(X) = n \cdot \frac{K}{N}`}</Latex>
                        </P>
                        <P>
                            La <B>varianza</B> della ipergeometrica è:
                        </P>
                        <P>
                            <Latex>{r`Var(X) = n \cdot \frac{K}{N} \cdot \frac{N - K}{N} \cdot \frac{N - n}{N - 1}`}</Latex>
                        </P>
                    </P>
                </Panel>
            </Section>
            <Section title={"Poissoniana"}>
                <Panel title={"Distribuzione poissoniana"}>
                    <P>
                        Una variabile aleatoria che soddisfa tutte le seguenti caratteristiche:
                    </P>
                    <ul>
                        <li>Binomiale: <Latex>{r`X \sim Bin(n, p)`}</Latex></li>
                        <li>Il numero di prove tende a infinito: <Latex>{r`n \to +\infty`}</Latex></li>
                        <li>La probabilità di successo tende a 0: <Latex>{r`p \to 0`}</Latex></li>
                        <li>La media è finita: <Latex>{r`E(X) = n \cdot p \to \mu \neq 0`}</Latex></li>
                    </ul>
                    <P>
                        Il suo simbolo è <Latex>{r`Poi(\mu)`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Densità della poissoniana"}>
                    <P>
                        La poissoniana ha come densità:
                    </P>
                    <P>
                        <Latex>{r`f_X (k) : \mathbb{N} = \frac{e^{-\mu} \cdot \mu^k}{k!}`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Momenti della poissoniana"}>
                    <P>
                        <P>
                            La <B>funzione generatrice dei momenti</B> della poissoniana è:
                        </P>
                        <P>
                            <Latex>{r`m_X (t) = e^{\mu \cdot (e^t - 1)}`}</Latex>
                        </P>
                        <P>
                            La <B>media</B> della poissoniana è:
                        </P>
                        <P>
                            <Latex>{r`E(X) = \mu`}</Latex>
                        </P>
                        <P>
                            La <B>varianza</B> della poissoniana è:
                        </P>
                        <P>
                            <Latex>{r`Var(X) = \mu`}</Latex>
                        </P>
                        <P>
                            Gli altri momenti della poissoniana sono:
                        </P>
                        <ol start={2}>
                            <li><Latex>{r`E(X^2) = \mu^2 + \mu`}</Latex></li>
                        </ol>
                    </P>
                </Panel>
            </Section>
            <Section title={"Un altro schema"}>
                <Panel title={"Schema di Poisson"}>
                    <P>
                        Una successione di <B>arrivi</B> avvenuti in un certo arco temporale che:
                    </P>
                    <ul>
                        <li>non sono sovrapposti.</li>
                        <li>hanno intensità <Latex>{r`\lambda`}</Latex> costante.</li>
                        <li>avvengono indipendentemente gli uni dagli altri.</li>
                    </ul>
                </Panel>
                <Panel title={"Processo di Poisson"}>
                    <P>
                        Una variabile aleatoria <Latex>N_t</Latex> che conta il numero di arrivi di uno schema
                        di Poisson di intensità <Latex>{r`\lambda`}</Latex> in un intervallo di tempo di
                        durata <Latex>t</Latex>.
                    </P>
                    <P>
                        E' una distribuzione poissoniana
                        con <Latex>{r`\mu = t \cdot \lambda`}</Latex>: <Latex>{r`Poi(t \cdot \lambda)`}</Latex>
                    </P>
                    <Example>
                        E' paragonabile a una bernoulliana: ogni successo corrisponde a un arrivo, mentre il
                        tempo è il numero di prove effettuate (ma nel continuo).
                    </Example>
                </Panel>
            </Section>
            <Section title={"Esponenziale"}>
                <Panel title={"Distribuzione esponenziale"}>
                    <P>
                        Una variabile aleatoria che conta il tempo diwidehattesa prima del primo arrivo di un
                        processo di Poisson di intensità <Latex>{r`\lambda`}</Latex>.
                    </P>
                    <P>
                        Il suo simbolo è <Latex>{r`Esp(\lambda)`}</Latex>.
                    </P>
                </Panel>
                <Panel title={"Densità dell'esponenziale"}>
                    <P>
                        L'esponenziale ha come <B>densità</B>:
                    </P>
                    <P>
                        <Latex>{r`
                        f_X (x) = \begin{cases}
                            0 \qquad \qquad x < 0\\
                            \lambda \cdot e^{-\lambda \cdot x} \quad x > 0
                        \end{cases}`
                        }</Latex>
                    </P>
                    <P>
                        L'esponenziale ha come <B>funzione di ripartizione</B>:
                    </P>
                    <P>
                        <Latex>{r`
                        F_X (t) = \begin{cases}
                            0 \qquad \qquad t < 0\\
                            1 - e^{-\lambda \cdot t} \quad t \geq 0
                        \end{cases}`
                        }</Latex>
                    </P>
                </Panel>
                <Panel title={"Momenti dell'esponenziale"}>
                    <P>
                        La <B>funzione generatrice dei momenti</B> dell'esponenziale è:
                    </P>
                    <P>
                        <Latex>{r`m_X (t) : \{ t | t < \lambda \} \in \mathbb{R} = \frac{\lambda}{\lambda - t}`}</Latex>
                    </P>
                    <P>
                        La <B>media</B> dell'esponenziale è:
                    </P>
                    <P>
                        <Latex>{r`E(X) = \frac{1}{\lambda}`}</Latex>
                    </P>
                    <P>
                        La <B>varianza</B> dell'esponenziale è:
                    </P>
                    <P>
                        <Latex>{r`Var(X) = \frac{1}{\lambda^2}`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Assenza di memoria della esponenziale"}>
                    <P>
                        L'esponenziale non tiene conto degli eventi avvenuti in passato: ha la proprietà
                        dell'assenza di memoria:
                    </P>
                    <P>
                        <Latex>{r`P([X > s + t | X > s]) = P([X > t])`}</Latex>
                    </P>
                    <Example>
                        Ovvero, riscalando opportunamente l'asse Y posso prendere come 0 qualsiasi punto
                        dell'asse X.
                    </Example>
                </Panel>
            </Section>
            <Section title={"Legge gamma"}>
                <Panel title={"Distribuzione gamma"}>
                    <P>
                        Una variabile aleatoria che conta il tempo diwidehattesa prima dell'<Latex>n</Latex>-esimo
                        arrivo di un processo di Poisson di intensità <Latex>{r`\lambda`}</Latex>.
                    </P>
                    <P>
                        Il suo simbolo è <Latex>{r`\Gamma(n, \lambda)`}</Latex>.
                    </P>
                </Panel>
                <Panel title={"Densità della legge gamma"}>
                    <P>
                        La legge gamma ha come densità:
                    </P>
                    <P>
                        <Latex>{r`
                        f_X (x) = \begin{cases}
                            0 \qquad \qquad \qquad \qquad \qquad x < 0\\
                            \frac{1}{(n-1)!} \cdot \lambda^n \cdot x^{n-1} \cdot e^{-\lambda \cdot x} \quad k > 0
                        \end{cases}`
                        }</Latex>
                    </P>
                </Panel>
                <Panel title={"Momenti della legge gamma"}>
                    <P>
                        <P>
                            La <B>funzione generatrice dei momenti</B> della legge gamma è:
                        </P>
                        <P>
                            <Latex>{r`m_X (t) : ( t < \lambda ) \in \mathbb{R} = \left( \frac{\lambda}{\lambda - t} \right) ^\alpha`}</Latex>
                        </P>
                        <P>
                            La <B>media</B> della legge gamma è:
                        </P>
                        <P>
                            <Latex>{r`E(X) = \frac{\alpha}{\lambda}`}</Latex>
                        </P>
                        <P>
                            La <B>varianza</B> della legge gamma è:
                        </P>
                        <P>
                            <Latex>{r`Var(X) = \frac{\alpha}{\lambda^2}`}</Latex>
                        </P>
                    </P>
                </Panel>
            </Section>
            <Section title={"Uniforme"}>
                <Panel title={"Distribuzione uniforme"}>
                    <P>
                        Una variabile aleatoria che può assumere qualsiasi valore in un
                        intervallo <Latex>{r`[a, b]`}</Latex> in modo equiprobabile.
                    </P>
                    <P>
                        Il suo simbolo è <Latex>{r`Uni(a, b)`}</Latex>
                    </P>
                    <P>
                        Su di essa vale la seguente proprietà:
                    </P>
                    <P>
                        <Latex>{r`P(X \in (c, d)) = \frac{d - c}{b - a}`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Densità della distribuzione uniforme"}>
                    <P>
                        La distribuzione uniforme ha come <B>densità</B>:
                    </P>
                    <P>
                        <Latex>{r`
                        f_X (x) = \begin{cases}
                            \frac{1}{b - a} \qquad a \leq x \leq b\\
                            0 \qquad \quad altrimenti    
                        \end{cases}
                    `}</Latex>
                    </P>
                    <P>
                        La distribuzione uniforme ha come <B>funzione di ripartizione</B>:
                    </P>
                    <P>
                        <Latex>{r`
                        f_X (x) = \begin{cases}
                            0 \qquad \quad x < a  
                            \frac{1}{b - a} \qquad a \leq x \leq b\\
                            1 \qquad \quad x > b
                        \end{cases}`
                        }</Latex>
                    </P>
                </Panel>
                <Panel title={"Momenti della distribuzione uniforme"}>
                    <P>
                        <P>
                            La <B>funzione generatrice dei momenti</B> della distribuzione uniforme è:
                        </P>
                        <P>
                            <Latex>{r`m_X (t) = \frac{e^{b \cdot t} - e^{a \cdot t}}{(b - a) \cdot t}`}</Latex>
                        </P>
                        <P>
                            La <B>media</B> della distribuzione uniforme è:
                        </P>
                        <P>
                            <Latex>{r`E(X) = \frac{a + b}{2}`}</Latex>
                        </P>
                        <P>
                            La <B>varianza</B> della distribuzione uniforme è:
                        </P>
                        <P>
                            <Latex>{r`Var(X) = \frac{(b - a)^2}{12}`}</Latex>
                        </P>
                    </P>
                </Panel>
            </Section>
            <Section title={"Normale o Gaussiana"}>
                <Panel title={"Distribuzione normale"}>
                    <P>
                        Una variabile aleatoria con una specifica distribuzione.
                    </P>
                    <P>
                        Il suo simbolo è <Latex>{r`Nor(\mu, \sigma^2)`}</Latex>.
                    </P>
                    <Example>
                        <Latex>\mu</Latex> e <Latex>\sigma^2</Latex> sono rispettivamente la media e la varianza
                                           della distribuzione!
                    </Example>
                </Panel>
                <Panel title={"Densità della distribuzione normale"}>
                    <P>
                        La distribuzione normale ha come densità:
                    </P>
                    <P>
                        <Latex>{r`f_X (x) = \frac{e^{-\frac{(x - \mu)^2}{2 \sigma^2}}}{\sqrt{2 \pi \cdot \sigma^2}}`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Momenti della distribuzione normale"}>
                    <P>
                        <P>
                            La <B>funzione generatrice dei momenti</B> della distribuzione normale è:
                        </P>
                        <P>
                            <Latex>{r`m_X (t) = e^{\mu \cdot t + \frac{\sigma^2 \cdot t^2}{2}}`}</Latex>
                        </P>
                        <P>
                            La <B>media</B> della distribuzione normale è:
                        </P>
                        <P>
                            <Latex>{r`E(X) = \mu`}</Latex>
                        </P>
                        <P>
                            La <B>varianza</B> della distribuzione normale è:
                        </P>
                        <P>
                            <Latex>{r`Var(X) = \sigma^2`}</Latex>
                        </P>
                    </P>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Trasformazione della normale"}>
                    <P>
                        Qualsiasi normale può essere trasformata in qualsiasi altra normale:
                    </P>
                    <P>
                        <Latex>{r`X \sim Nor(m, v^2) \implies \alpha X + \beta \sim Nor(\alpha m + \beta, (\alpha v)^2)`}</Latex>
                    </P>
                </Panel>
                <Panel title={"Normale standard"}>
                    <P>
                        La distribuzione normale standard <Latex>Z</Latex> è:
                    </P>
                    <P>
                        <Latex>Z \sim Nor(0, 1)</Latex>
                    </P>
                    <P>
                        La sua funzione di ripartizione è detta <Latex>{r`\phi(z)`}</Latex> e vale:
                            </P>
                            <P>
                                <Latex>{r`F_Z(z) = \phi(z) = \frac{1}{\sqrt{2 \pi}} \int_{-\infty}^{z} e^{-\frac{x^2}{2}} dx`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Quantili normali"}>
                            <P>
                                Da un quantile <Latex>{r`z_\alpha`}</Latex> della normale standard è possibile risalire
                                allo stesso quantile di qualsiasi altra normale:
                            </P>
                            <P>
                                <Latex>{r`x_\alpha = \mu + z_\alpha \cdot \sqrt{\sigma^2}`}</Latex>
                            </P>
                        </Panel>
                    </Section>
                    <Section>
                        <Panel title={"Gamma e normale"}>
                            <P>
                                La distribuzione normale ha una particolare relazione con la distribuzione Gamma:
                            </P>
                            <P>
                                <Latex>{r`Z^2 \sim \chi^2 (v = 1)`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"La funzione Chi"}>
                            <blockquote>
                                "chi-quadro a un grado di libertà"
                            </blockquote>
                            <P>
                                Esiste una distribuzione Gamma particolare:
                            </P>
                            <P>
                                <Latex>{r`\Gamma \left( \frac{1}{2}, \frac{1}{2} \right) = \chi^2 (v = 1)`}</Latex>
                            </P>
                            <P>
                                Più chi-quadro possono essere sommate per aumentare i loro gradi di libertà:
                            </P>
                            <P>
                                <Latex>{r`\chi^2 (n) + \chi^2 (m) = \chi^2 (n + m)`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"T di Student"}>
                            <P>
                                Un'altra funzione particolare è la funzione T di Student:
                            </P>
                            <P>
                                <Latex>{r`T(v) = \frac{Nor(0, 1)}{\sqrt{\frac{\chi^2(v)}{v}}}`}</Latex>
                            </P>
                        </Panel>
                    </Section>
                    <Section title={"Approssimazioni notevoli"}>
                        <Panel title={"Ipergeometrica e binomiale"}>
                            <P>
                                La binomiale è come una ipergeometrica ma con ripetizioni, quindi per valori molto
                                grandi di <Latex>N</Latex> rispetto a <Latex>n</Latex>, si può dire che:
                            </P>
                            <P>
                                <Latex>{r`Ipe(N, K, n) \approx Bin(n, \frac{K}{N})`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Binomiale e poissoniana"}>
                            <P>
                                La binomiale non è altro che una poissoniana a tempo discreto, quindi,
                                se <Latex>n</Latex> è grande e <Latex>n \cdot p</Latex> è nell'ordine di grandezza delle
                                unità, allora:
                            </P>
                            <P>
                                <Latex>{r`Bin(n, p) \approx Poi(n \cdot p)`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Binomiale e normale"}>
                            <P>
                                Per il Teorema di De Moivre-Laplace, se una binomiale ha una <Latex>n</Latex> grande
                                e <Latex>p</Latex> non vicina a 0 o 1, si può approssimare con:
                            </P>
                            <P>
                                <Latex>{r`Bin(n, p) \approx Nor(n \cdot p, n \cdot p \cdot q)`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Correzione di Yates"}>
                            <P>
                                Passando da una variabile discreta <Latex>X</Latex> a una continua <Latex>Y</Latex>, per
                                ogni valore discreto <Latex>k</Latex> la probabilità viene "spalmata" su tutto
                                l'intervallo <Latex>{r`(k - \frac{1}{2}, k + \frac{1}{2})`}</Latex>:
                            </P>
                            <ul>
                                <li><Latex>{r`P(X < k) \simeq P(Y \leq k - \frac{1}{2})`}</Latex></li>
                                <li><Latex>{r`P(X \leq k) \simeq P(Y \leq k + \frac{1}{2})`}</Latex></li>
                                <li><Latex>{r`P(X \geq k) \simeq P(Y \geq k - \frac{1}{2})`}</Latex></li>
                                <li><Latex>{r`P(X > k) \simeq P(Y \geq k + \frac{1}{2})`}</Latex></li>
                            </ul>
                        </Panel>
                    </Section>
                    <Section title={"Vettori aleatori"}>
                        <Panel title={"Vettore aleatorio"}>
                            <P>
                                Un vettore <B>composto da variabili aleatorie</B>.
                            </P>
                            <P>
                                Il suo simbolo generalmente
                                è <Latex>{r`\boldsymbol{X}`}</Latex> oppure <Latex>{r`X, Y`}</Latex>.
                            </P>
                        </Panel>
                        <Panel title={"Funzioni di ripartizione"}>
                            <P>
                                I vettori aleatori hanno più funzioni di ripartizione che si differenziano in base al
                                numero di parametri.
                            </P>
                            <P>
                                Se il numero di parametri coincide con la dimensione del vettore aleatorio, allora la
                                funzione sarà una <I>funzione di ripartizione congiunta</I>:
                            </P>
                            <P>
                                <Latex>{r`F_{X, Y} (x, y) = P(X \leq x, Y \leq y)`}</Latex>
                            </P>
                            <P>
                                Se il numero di parametri è minore della dimensione del vettore aleatorio, allora la
                                funzione sarà una <I>funzione di ripartizione marginale</I>:
                            </P>
                            <P>
                                <Latex>{r`F_X (x) = P(X \leq x) = \lim_{y \to +\infty} F_{X, Y} (x, y)`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Densità discreta"}>
                            <P>
                                I vettori aleatori <B>discreti</B> hanno più densità che si differenziano in base al
                                numero di parametri.
                            </P>
                            <P>
                                Se il numero di parametri coincide con la dimensione del vettore aleatorio, allora la
                                funzione sarà una <I>densità congiunta</I>:
                            </P>
                            <P>
                                <Latex>{r`p_{X, Y} (x, y) = P(X = x, Y = y)`}</Latex>
                            </P>
                            <P>
                                Se il numero di parametri è minore della dimensione del vettore aleatorio, allora la
                                funzione sarà una <I>densità marginale</I>:
                            </P>
                            <P>
                                <Latex>{r`p_X (x) = \sum_j p_{X, Y} (x_i, y_j)`}</Latex>
                            </P>
                        </Panel>
                    </Section>
                    <Section title={"Più variabili aleatorie"}>
                        <Panel title={"Indipendenza delle variabili aleatorie"}>
                            <P>
                                Più variabili aleatorie sono indipendenti se, per qualsiasi scelta di
                                intervalli <Latex>A_i</Latex>:
                            </P>
                            <P>
                                <Latex>{r`P(X_1 \in A_1, \dots, X_n \in A_n) = P(X_1 \in A_1) \times \dots \times P(X_n \in A_n)`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Media dei vettori aleatori"}>
                            <P>
                                E' possibile calcolare la media di qualsiasi funzione <Latex>g(X, Y)</Latex> avente
                                elementi del vettore come variabili:
                            </P>
                            <P>
                                <Latex>{r`E(g(X, Y)) = \sum_{i, j} g(x_i, y_i) \cdot p_{X, Y} (x_i, y_i)`}</Latex>
                            </P>
                            <Example>
                                Solitamente si calcola la media di <Latex>x \cdot y</Latex>.
                            </Example>
                            <P>
                                Le medie di più variabili aleatorie si possono sommare:
                            </P>
                            <P>
                                <Latex>{r`E(X + Y) = E(X) + E(Y)`}</Latex>
                            </P>
                        </Panel>
                    </Section>
                    <Section>
                        <Panel title={"Covarianza"}>
                            <P>
                                Un <B>operatore</B> che misura la correlazione di due variabili aleatorie.
                            </P>
                            <P>
                                Si calcola con il valore atteso dei prodotti delle distanze dalla media:
                            </P>
                            <P>
                                <Latex>{r`Cov(X, Y) = E((X - E(X) \cdot (Y - E(Y)) = E(XY) - E(X) \cdot E(Y)`}</Latex>
                            </P>
                            <P>
                                Ha diverse proprietà:
                            </P>
                            <ul>
                                <li>Il suo <B>valore nullo</B> è 0: <Latex>{r`Cov(X, \alpha) = 0`}</Latex></li>
                                <li>E' <B>commutativa</B>: <Latex>{r`Cov(X, Y) = Cov(Y, X)`}</Latex></li>
                                <li>E' <B>semplificabile</B>: <Latex>{r`Cov(X, X) = Var(X)`}</Latex></li>
                                <li>E' <B>lineare</B>: <Latex>{r`Cov(\alpha X, \beta Y) = \alpha \cdot \beta \cdot Cov(X, Y)`}</Latex>
                                </li>
                                <li>E' <B>distributiva</B>: <Latex>{r`Cov(X + Y, V + W) = Cov(X, Y) + Cov(X, W) + Cov(Y, V) + Cov(Y, W)`}</Latex>
                                </li>
                            </ul>
                        </Panel>
                        <Panel title={"Variabili incorrelate"}>
                            <P>
                                Due variabili sono <I>variabili incorrelate</I> se:
                            </P>
                            <P>
                                <Latex>{r`Cov(X, Y) = 0`}</Latex>
                            </P>
                            <P>
                                Variabili indipendenti sono sempre incorrelate.
                            </P>
                        </Panel>
                        <Panel title={"Matrice di covarianza"}>
                            <P>
                                Una matrice <Latex>{r`\boldsymbol{C_X}`}</Latex> che contiene la covarianza tra tutte le
                                variabili di un vettore aleatorio <Latex>{r`\boldsymbol{X}`}</Latex>:
                            </P>
                            <P>
                                <Latex>{r`
                                \boldsymbol{C_X} = 
                                \begin{bmatrix}
                                    Var(X_1) & Cov(X_1, X_2) & Cov(X_1, X_3)\\
                                    Cov(X_2, X_1) & Var(X_2) & Cov(X_2, X_3)\\
                                    Cov(X_3, X_1) & Cov(X_3, X_2) & Var(X_3)
                                \end{bmatrix}
                            `}</Latex>
                            </P>
                            <P>
                                E' sempre simmetrica e semidefinita positiva (tutti gli autovalori sono <Latex>\geq
                                                                                                               0</Latex>.
                            </P>
                        </Panel>
                        <Panel title={"Coefficiente di correlazione"}>
                            <P>
                                Un valore che misura come due variabili aleatorie sono correlate:
                            </P>
                            <P>
                                <Latex>{r`\rho_{X, Y} = \frac{Cov(X, Y)}{\sqrt{Var(X)} \cdot \sqrt{Var(Y)}}`}</Latex>
                            </P>
                            <P>
                                E' sempre compreso tra -1 e 1:
                            </P>
                            <P>
                                <Latex>{r`-1 \leq \rho_{X, Y} \leq 1`}</Latex>
                            </P>
                            <P>
                                Vale esattamente -1 o 1 solo se esiste un legame lineare tra le due variaibli:
                            </P>
                            <P>
                                <Latex>{r`Y = a X + b \Longleftrightarrow | \rho_{X, Y} | = 1`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Varianza di variabili aleatorie sommate"}>
                            <P>
                                La varianza di due variabili aleatorie sommate è:
                            </P>
                            <P>
                                <Latex>{r`Var(X + Y) = Var(X) + Var(Y) + 2 \cdot Cov(X, Y)`}</Latex>
                            </P>
                            <Example>
                                Si dimostra applicando le proprietà della covarianza!
                            </Example>
                            <P>
                                Se più variabili
                                aleatorie <Latex>X_i</Latex> sono <B>indipendenti</B> (<Latex>{r`Cov(X, Y) = 0`}</Latex>),
                                allora:
                            </P>
                            <P>
                                <Latex>{r`Var \left( \sum_i X_i \right) = \sum_i Var(X_i)`}</Latex>
                            </P>
                        </Panel>
                    </Section>
                    <Section title={"Campioni"}>
                        <Panel title={"Campione casuale"}>
                            <P>
                                Una <B>n-pla</B> di variabili aleatorie con la stessa distribuzione della variabile
                                aleatoria <Latex>X</Latex> ("popolazione") ma <B>indipendenti</B> tra loro.
                            </P>
                            <Example>
                                Le variabili aleatorie sono come un lazy-load in programmazione; quando ci sarà bisogno
                                del loro valore numerico, esse si <B>realizzeranno</B> nel loro valore.
                            </Example>
                        </Panel>
                        <Panel title={"Momento campionario"}>
                            <P>
                                Il valore dato dalla media aritmetica degli <Latex>n</Latex> elementi del campione
                                elevati alla potenza <Latex>k</Latex>:
                            </P>
                            <P>
                                <Latex>{r`M^{(k)}_n = \frac{1}{n} \cdot \sum_{i = 1}^n X_i^k `}</Latex>
                            </P>
                            <P>
                                Il momento campionario di primo ordine è la <I>media campionaria</I>
                                <Latex>{r`\overline{X}_n`}</Latex>.
                            </P>
                        </Panel>
                        <Panel title={"Varianza campionaria"}>
                            <P>
                                La media aritmetica dello scarto quadratico medio degli elementi del campione.
                            </P>
                            <P>
                                Se è noto il valore medio <Latex>{r`m = E(X)`}</Latex> di X:
                            </P>
                            <P>
                                <Latex>{r`S_0^2 = \frac{1}{n} \cdot \sum_{i = 1}^n (X_i - m)^2 = M_n^(2) - 2 \cdot m \cdot \overline{X}_n + m^2`}</Latex>
                            </P>
                            <P>
                                Altrimenti:
                            </P>
                            <P>
                                <Latex>{r`S_n^2 = \frac{1}{n - 1} \cdot \sum_{i = 1}^n (X_i - \overline{X}_n)^2 = \frac{1}{n - 1} \cdot ( n \cdot M_2^{(2)} - n \cdot \overline{X}_n^2)`}</Latex>
                            </P>
                        </Panel>
                    </Section>
                    <Section title={"Media-ception"}>
                        <Panel title={"Media campionaria"}>
                            <P>
                                Se calcoliamo la media della media campionaria, risulterà vero che:
                            </P>
                            <P>
                                <Latex>{r`E(\overline{X}_n) = E(X)`}</Latex>
                            </P>
                            <Example>
                                Quindi, è possibile usare i campioni per trovare la media di una variabile aleatoria!
                            </Example>
                        </Panel>
                        <Panel title={"Varianza campionaria"}>
                            <P>
                                Se calcoliamo la varianza della media campionaria, risulterà vero che:
                            </P>
                            <P>
                                <Latex>{r`Var(\overline{X}_n) = \frac{Var(X)}{n}`}</Latex>
                            </P>
                            <Example>
                                Quindi, possiamo stimare l'errore della media calcolata tramite campioni!
                            </Example>
                        </Panel>
                        <Panel title={"Correzione campionaria"}>
                            <P>
                                Se calcoliamo la media della varianza campionaria, risulterà vero che:
                            </P>
                            <P>
                                <Latex>{r`E(S_0^2) = E(S_n^2) = Var(X)`}</Latex>
                            </P>
                            <Example>
                                Quindi, possiamo stimare l'errore della media calcolata tramite campioni!
                            </Example>
                        </Panel>
                    </Section>
                    <Section title={"Campionamento di una distribuzione normale"}>
                        <Panel title={"Campionamento di una distribuzione normale"}>
                            <P>
                                Se la popolazione <Latex>X</Latex> ha una distribuzione normale
                                (<Latex>{r`X \sim Nor(\mu, \sigma^2)`}</Latex>)...
                            </P>
                        </Panel>
                        <Panel title={"Distribuzione della media campionaria"}>
                            <P>
                                ...allora sappiamo anche la distribuzione della media campionaria!
                            </P>
                            <P>
                                <Latex>{r`\overline{X}_n \sim Nor \left( \mu, \frac{\sigma^2}{n} \right)`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Distribuzione della varianza campionaria"}>
                            <P>
                                ...e anche della varianza campionaria!
                            </P>
                            <P>
                                <Latex>{r`S_0^2 \sim \frac{\sigma^2}{n} \cdot \chi^2 (n)`}</Latex>
                            </P>
                            <P>
                                <Latex>{r`S_n^2 \sim \frac{\sigma^2}{n - 1} \cdot \chi^2 (n-1)`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Indipendenza"}>
                            <P>
                                ...e che media campionaria e varianza campionaria sono indipendenti tra loro!
                            </P>
                        </Panel>
                    </Section>
                    <Section title={"Quando i campioni hanno dimensioni infinite"}>
                        <Panel title={"Convergenza in distribuzione"}>
                            <P>
                                Se la successione di variabili aleatorie <Latex>X_n</Latex> all'infinito ha la <B>stessa
                                                                                                                  funzione di ripartizione</B> della popolazione <Latex>X</Latex>, allora essa <I>converge
                                                                                                                                                                                                  in distribuzione</I>.
                            </P>
                            <P>
                                <Latex>{`\\lim_{n \\to +\\infty} F_{X_n} (x) = F_X (x) \\implies X_n \\xrightarrow{d} X`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Convergenza in probabilità"}>
                            <P>
                                Se la successione di variabili aleatorie <Latex>X_n</Latex> all'infinito ha la <B>stessa
                                                                                                                  probabilità</B> della popolazione <Latex>X</Latex>, allora essa <I>converge in
                                                                                                                                                                                     probabilità</I>.
                            </P>
                            <P>
                                <Latex>{`\\forall \\epsilon > 0, \\lim_{n \\to +\\infty} P( | X_n - X | < \\epsilon) = 1 \\implies X_n \\xrightarrow{p} X`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Convergenza quasi certa"}>
                            <P>
                                Se la successione di variabili aleatorie <Latex>X_n</Latex> all'infinito ha la <B>stessa
                                                                                                                  probabilità a </B> della popolazione <Latex>X</Latex>, allora essa <I>converge quasi
                                                                                                                                                                                        certamente</I>.
                            </P>
                            <P>
                                <Latex>{`\\forall \\epsilon > 0, P \left( \\lim_{n \\to +\\infty} | X_n - X | < \\epsilon) \right) = 1 \\implies X_n \\xrightarrow{qc} X`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Convergenza in media quadratica"}>
                            <P>
                                Se la successione di variabili aleatorie <Latex>X_n</Latex> all'infinito ha la <B>media
                                                                                                                  del quadrato della distanza</B> tra la successione e la popolazione <Latex>X</Latex> <B>uguale
                                                                                                                                                                                                          a 0</B>, allora essa <I>converge in media quadratica</I>.
                            </P>
                            <P>
                                <Latex>{`\\lim_{n \\to +\\infty} E( | X_n - X |^2 = 0 \\implies X_n \\xrightarrow{mq} X`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Gerarchia delle convergenze"}>
                            <P>
                                <Latex>{`
                                \\begin{matrix}
                                X_n \\xrightarrow{mq} X\\\\
                                X_n \\xrightarrow{qc} X
                                \\end{matrix} \\implies X_n \\xrightarrow{p} X \\implies X_n \\xrightarrow{d} X`
                                }</Latex>
                            </P>
                            <P>
                                In più:
                            </P>
                            <P>
                                <Latex>{`X_n \\xrightarrow{p} x \\Longleftrightarrow X_n \\xrightarrow{d} x`}</Latex>
                            </P>
                        </Panel>
                    </Section>
                    <Section title={"I grandi numeri"}>
                        <Panel title={"Legge debole dei grandi numeri"}>
                            <P>
                                La successione delle medie campionarie <Latex>{r`\overline{X}_n`}</Latex> <B>converge in
                                                                                                             probabilità</B> alla media della popolazione <Latex>{r`E(X)`}</Latex>, se essa esiste.
                            </P>
                            <P>
                                <Latex>{`\\overline{X}_n \\xrightarrow{p} X`}</Latex>
                            </P>
                            <P>
                                Ovvero:
                            </P>
                            <P>
                                <Latex>{r`\forall \epsilon > 0, \lim_{n \to +\infty} P( | \overline{X}_n - E(X) | < \epsilon) = 1`}</Latex>
                            </P>
                            <P>
                                <Latex>{r`P( | \overline{X}_n - E(X) | < \epsilon) \to 1`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Legge forte dei grandi numeri"}>
                            <P>
                                La successione delle medie campionarie <Latex>{r`\overline{X}_n`}</Latex> <B>converge
                                                                                                             quasi certamente</B> alla media della popolazione <Latex>{r`E(X)`}</Latex>, se essa
                                esiste.
                            </P>
                            <P>
                                <Latex>{`\\overline{X}_n \\xrightarrow{qc} X`}</Latex>
                            </P>
                            <P>
                                Ovvero:
                            </P>
                            <P>
                                <Latex>{r`\forall \epsilon > 0, P \left( \lim_{n \to +\infty} | \overline{X}_n - E(X) | < \epsilon \right) = 1`}</Latex>
                            </P>
                            <Example>
                                Dimostra che l'interpretazione frequentista della probabilità è valida!
                            </Example>
                        </Panel>
                    </Section>
                    <Section title={"Al limite"}>
                        <Panel title={"Teorema centrale del limite"}>
                            <P>
                                La successione delle medie campionarie <Latex>{r`\overline{X}_n`}</Latex> <B>converge in
                                                                                                             distribuzione</B> a <Latex>{r`Nor(0, 1) = \Phi()`}</Latex>.
                            </P>
                            <P>
                                <Latex>{r`\overline{X}_n \approx Nor \left(E(X), \frac{Var(X)}{n} \right)`}</Latex>
                            </P>
                            <P>
                                Ovvero:
                            </P>
                            <P>
                                <Latex>{r`\forall x \in \mathbb{R}, \lim_{n \to +\infty} P \left( \frac{\overline{X}_n - E(X)}{\sqrt{\frac{Var(X)}{n}}} \leq x \right) = \Phi(x)`}</Latex>
                            </P>
                        </Panel>
                    </Section>
                    <Section title={"Altre approsimazioni"}>
                        <Panel title={"Binomiale e normale"}>
                            <P>
                                E' una somma di <B>bernoulliane</B>, e quindi si approssima a una normale:
                            </P>
                            <P>
                                <Latex>{r`Bin(n, p) \approx Nor(n \cdot p, n \cdot p \cdot q)`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Binomiale negativa e normale"}>
                            <P>
                                E' una somma di <B>geometriche</B>, e quindi si approssima a una normale:
                            </P>
                            <P>
                                <Latex>{r`\overline{Bin} (n, p) \approx Nor \left( \frac{n}{p}, \frac{n \cdot (1 - p)}{p^2} \right)`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Poissoniana e normale"}>
                            <P>
                                E' una somma di altre <B>poissoniane</B>, e quindi si approssima a una normale:
                            </P>
                            <P>
                                <Latex>{r`Poi(\lambda) \approx Nor(\lambda, \lambda)`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Gamma e normale"}>
                            <P>
                                E' una somma di <B>esponenziali</B>, e quindi si approssima a una normale:
                            </P>
                            <P>
                                <Latex>{r`\Gamma (\alpha, \lambda) \approx Nor \left( \frac{\alpha}{\lambda}, \frac{\alpha}{\lambda^2} \right)`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"In generale"}>
                            <P>
                                Se <Latex>n</Latex> è grande, allora:
                            </P>
                            <P>
                                <Latex>{r`Y = \sum_{i=1}^{n} X_i`}</Latex>
                            </P>
                        </Panel>
                    </Section>
                    <Section title={"Actually statistica"}>
                        <Panel title={"Parametri sconosciuti"}>
                            <P>
                                Per indicare parametri sconosciuti di una legge si usa <Latex>\theta</Latex>.
                            </P>
                        </Panel>
                        <Panel title={"Statistica"}>
                            <P>
                                Una variabile aleatoria funzione di un campione:
                            </P>
                            <P>
                                <Latex>{r`T(\boldsymbol{X})`}</Latex>
                            </P>
                            <Example>
                                Ad esempio, sono statistiche media e varianza campionaria, così come il campione
                                stesso <Latex>{r`T(\boldsymbol{X}) = \boldsymbol{X}`}</Latex>.
                            </Example>
                        </Panel>
                    </Section>
                    <Section title={"Stimatori"}>
                        <Panel title={"Stimatore"}>
                            <P>
                                Una statistica <Latex>T_n</Latex> ottenuta da <Latex>n</Latex> osservazioni, che stimi i
                                parametri di una legge e sia indipendente da essi.
                            </P>
                        </Panel>
                        <Panel title={"Corretto"}>
                            <P>
                                Uno stimatore è <I>corretto</I> se il suo valore atteso coincide con quello dei
                                parametri che stima:
                            </P>
                            <P>
                                <Latex>{r`E(T_n) = \theta`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Asintoticamente corretto"}>
                            <P>
                                Uno stimatore è <I>asintoticamente corretto</I> se, per infinite osservazioni, il suo
                                valore atteso coincide con quello dei parametri che stima:
                            </P>
                            <P>
                                <Latex>{r`\lim_{n \to +\infty} E(T_n) = \theta`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Consistente in media quadratica"}>
                            <P>
                                Uno stimatore è <I>consistente in media quadratica</I> se:
                            </P>
                            <P>
                                <Latex>{r`\lim_{n \to +\infty} E((T_n - \theta)^2) = 0`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Consistente in probabilità"}>
                            <P>
                                Uno stimatore è <I>consistente in probabilità</I> se:
                            </P>
                            <P>
                                <Latex>{r`\forall \epsilon > 0, \lim_{n \to +\infty} P( |T_n - \theta| < \epsilon) = 1`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Asintoticamente normale"}>
                            <P>
                                Uno stimatore è <I>asintoticamente normale</I> se:
                            </P>
                            <P>
                                <Latex>{r`\lim_{n \to +\infty} \frac{T_n - E(T_n)}{\sqrt{Var(T_n)}} \sim Nor(0, 1)`}</Latex>
                            </P>
                        </Panel>
                    </Section>
                    <Section title={"Metodo dei momenti"}>
                        <Panel title={"Metodo dei momenti"}>
                            <P>
                                Si può usare il <I>metodo dei momenti</I> per ottenere uno stimatore di una
                                popolazione <Latex>X</Latex>.
                            </P>
                            <P>
                                Lo stimatore di <Latex>{r`\theta`}</Latex> così ottenuto sarà indicato aggiungendo un
                                cappellino e
                                una <Latex>M</Latex> a <Latex>\theta</Latex>: <Latex>{r`\widehat{\theta}_M`}</Latex>
                            </P>
                            <P>
                                Visto che:
                            </P>
                            <ul>
                                <li><Latex>{r`\theta = g(E(X))`}</Latex></li>
                                <li><Latex>{r`\widehat{E(X)} = \overline{X}_n`}</Latex></li>
                            </ul>
                            <P>
                                Allora:
                            </P>
                            <P>
                                <Latex>{r`\widehat{\theta}_M = g( \overline{X}_n )`}</Latex>
                            </P>
                            <P>
                                Se <Latex>{r`\theta`}</Latex> non è esprimibile in termini di <Latex>{r`E(X)`}</Latex>,
                                si possono usare i momenti
                                successivi <Latex>{r`M_n^2`}</Latex>, <Latex>{r`M_n^3`}</Latex>, <Latex>{r`M_n^3`}</Latex>...
                            </P>
                        </Panel>
                    </Section>
                    <Section title={"Metodo della massima verosomiglianza"}>
                        <Panel title={"Metodo della massima verosomiglianza"}>
                            <P>
                                Si può usare il <I>metodo della massima verosomiglianza</I> per ottenere uno stimatore
                                di una popolazione <Latex>X</Latex>.
                            </P>
                            <P>
                                Lo stimatore di <Latex>{r`\theta`}</Latex> così ottenuto sarà indicato aggiungendo un
                                cappellino e
                                una <Latex>L</Latex> a <Latex>\theta</Latex>: <Latex>{r`\widehat{\theta}_L`}</Latex>
                            </P>
                            <P>
                                Consiste nel trovare il massimo assoluto <Latex>{r`\widehat{\theta}_L`}</Latex> della la
                                funzione di verosomiglianza <Latex>{r`L`}</Latex>:
                            </P>
                            <P>
                                <Latex>{r`L(x_1, ..., x_n; \theta) = \prod_{i=1}^n f_X(x_i; \theta)`}</Latex>
                            </P>
                            <P>
                                Gli stimatori di massima verosomiglianza sono <B>asintoticamente corretti</B>, <B>consistenti
                                                                                                                  in probabilità</B> e <B>asintoticamente normali</B>.
                            </P>
                        </Panel>
                        <Panel title={"Proprietà degli stimatori di massima verosomiglianza"}>
                            <P>
                                Gli stimatori di massima verosomiglianza godono delle seguenti proprietà:
                            </P>
                            <ul>
                                <li>Sono <B>asintoticamente corretti</B>.</li>
                                <li>Sono <B>consistenti in probabilità</B>.</li>
                                <li>Sono <B>asintoticamente normali</B>.</li>
                                <li>Sono <B>invarianti</B>: <Latex>{r`\widehat{g(\theta)}_L = g(\widehat{\theta}_L)`}</Latex>
                                </li>
                            </ul>
                        </Panel>
                    </Section>
                    <Section title={"Nuove stime notevoli"}>
                        <Panel title={"Stima di una bernoulliana"}>
                            <P>
                                Per il metodo dei momenti oppure per il metodo della massima verosomiglianza:
                            </P>
                            <P>
                                <Latex>{r`\widehat{p}_M = \widehat{p}_L = \overline{X}_n`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Stima di una poissoniana"}>
                            <P>
                                Per il metodo dei momenti oppure per il metodo della massima verosomiglianza:
                            </P>
                            <P>
                                <Latex>{r`\widehat{\mu}_M = \widehat{\mu}_L = \overline{X}_n`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Stima di una esponenziale"}>
                            <P>
                                Per il metodo dei momenti oppure per il metodo della massima verosomiglianza:
                            </P>
                            <P>
                                <Latex>{r`\widehat{\lambda}_M = \widehat{\lambda}_L = \frac{1}{\overline{X}_n}`}</Latex>
                            </P>
                        </Panel>
                        <Panel title={"Stima di una normale"}>
                            <P>
                                Per il metodo della massima verosomiglianza:
                            </P>
                            <ul>
                                <li><Latex>{r`\widehat{\mu}_L = \overline{X}_n`}</Latex></li>
                                <br/>
                                <li><Latex>{r`\widehat{\sigma^2}_L = \frac{\sum (X_i - \overline{X}_n)^2 }{n}`}</Latex>
                                </li>
                            </ul>
                        </Panel>
                    </Section>
                    <Section title={"Intervalli di confidenza"}>
                        <Panel title={"Confidenza"}>
                            <blockquote>
                                "intervallo di confidenza al 95%"
                            </blockquote>
                            <P>
                                L'intervallo di valori di <Latex>\theta</Latex> all'interno del quale siamo "più o meno
                                sicuri" si trovi il valore effettivo:
                            </P>
                            <P>
                                L'intervallo di confidenza a N della stima <Latex>{r`\widehat{W}`}</Latex> è
                                l'intervallo <Latex>]a, b[</Latex> tale che:
                            </P>
                            <P>
                                <Latex>{r`P( a < W < b ) = N`}</Latex>
                            </P>
                            <P>
                                Può anche essere <B>unilatero</B> nel caso limiti la stima in una sola direzione,
                                positiva o negativa.
                            </P>
                        </Panel>
                    </Section>
                    <Section title={"Confidenza nella media di una normale"}>
                        <Panel title={"Varianza nota"}>
                            <P>
                                Se conosciamo la varianza di una normale, allora possiamo ricavare velocemente gli
                                intervalli di confidenza all'<Latex>\alpha</Latex>% con queste formule:
                            </P>
                            <ul>
                                <li>Intervalli
                                    bilateri: <Latex>{r`\mu \in \left[ \overline{x}_n - z_{1 - \frac{\alpha}{2}} \cdot \sqrt{\frac{\sigma^2}{n}}, \overline{x}_n + z_{1 - \frac{\alpha}{2}} \cdot \sqrt{\frac{\sigma^2}{n}} \right]`}</Latex>
                                </li>
                                <li>Intervallo unilatero da
                                    sinistra: <Latex>{r`\mu \in \left( -\infty, \overline{x}_n + z_{1 - \frac{\alpha}{2}} \cdot \sqrt{\frac{\sigma^2}{n}} \right]`}</Latex>
                                </li>
                                <li>Intervallo unilatero da
                                    destra: <Latex>{r`\mu \in \left[ \overline{x}_n - z_{1 - \frac{\alpha}{2}} \cdot \sqrt{\frac{\sigma^2}{n}}, +\infty \right)`}</Latex>
                                </li>
                            </ul>
                        </Panel>
                        <Panel title={"Varianza incognita"}>
                            <P>
                                Se non conosciamo la varianza di una normale, allora possiamo ricavare velocemente gli
                                intervalli di confidenza all'<Latex>\alpha</Latex>% con queste formule:
                            </P>
                            <ul>
                                <li>Intervalli
                                    bilateri: <Latex>{r`\mu \in \left[ \overline{x}_n - t_{1 - \frac{\alpha}{2}; n-1} \cdot \sqrt{\frac{s_n^2}{n}}, \overline{x}_n + t_{1 - \frac{\alpha}{2}; n-1} \cdot \sqrt{\frac{s_n^2}{n}} \right]`}</Latex>
                                </li>
                                <li>Intervallo unilatero da
                                    sinistra: <Latex>{r`\mu \in \left( -\infty, \overline{x}_n + t_{1 - \frac{\alpha}{2}; n-1} \cdot \sqrt{\frac{s_n^2}{n}} \right]`}</Latex>
                                </li>
                                <li>Intervallo unilatero da
                                    destra: <Latex>{r`\mu \in \left[ \overline{x}_n - t_{1 - \frac{\alpha}{2}; n-1} \cdot \sqrt{\frac{s_n^2}{n}}, +\infty \right)`}</Latex>
                                </li>
                            </ul>
                            <P>
                                <Latex>{r`t_{\alpha, v}`}</Latex> è un quantile della distribuzione di Student di
                                                                  parametro <Latex>v</Latex>.
                            </P>
                        </Panel>
                    </Section>
                    <Section title={"Confidenza per la proporzione di una bernoulliana"}>
                        <Panel title={"Terzo metodo corretto"}>
                            <P>
                                L'intervallo di confidenza per la proprorzione di una bernoulliana qualsiasi si ottiene
                                da questa formula:
                            </P>
                            <P>
                                <Latex>{r`p \in \left[ \overline{p} - z_{1 - \frac{\alpha}{2}} \cdot \sqrt{\frac{\overline{p} \cdot (1 - \overline{p})}{n+4}}, \overline{p} + z_{1 - \frac{\alpha}{2}} \cdot \sqrt{\frac{\overline{p} \cdot (1 - \overline{p})}{n+4}} \right]`}</Latex>
                            </P>
                        </Panel>
                    </Section>
                    <Section title={"Confidenza per la media di qualsiasi popolazione"}>
                        <Panel title={"Approssimando con la normale"}>
                            <P>
                                L'intervallo di confidenza per la media di una qualsiasi popolazione si ottiene da
                                questa formula:
                            </P>
                            <P>
                                <Latex>{r`m \in \left[ \overline{x}_n - z_{1 - \frac{\alpha}{2}} \cdot \sqrt{\frac{s^2_n}{n}}, \overline{x}_n + z_{1 - \frac{\alpha}{2}} \cdot \sqrt{\frac{s^2_n}{n}} \right]`}</Latex>
                            </P>
                        </Panel>
                    </Section>
                </div>
    )
}
