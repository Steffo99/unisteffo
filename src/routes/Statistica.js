import Latex from '../components/Rendering/Latex';
import Panel from '../components/Elements/Panel';
import Section from "../components/Elements/Section";
import Example from "../components/Elements/Example";
import Plus from "../components/PageSpecific/Fisica/Plus";
import Minus from "../components/PageSpecific/Fisica/Minus";
import LatexDefaultInline from "../contexts/LatexDefaultInline";

const r = String.raw;

export default function(props) {
    return (
        <LatexDefaultInline.Provider value={false}>
            <div>
                <h1>Statistica ed Elementi di Probabilità</h1>
                <Section title={"Tipi di probabilità"}>
                    <Panel title={"Classica"}>
                        <p>
                            <Latex>{r`P(E) = \frac{casi\ favorevoli}{casi\ possibili}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Frequentista"}>
                        <p>
                            <Latex>{r`P(E) = \frac{successi}{prove\ totali}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Soggettiva"}>
                        <p>
                            Il prezzo che un individuo coerente riterrebbe equo per ricevere <b>1</b> nel caso l'evento si verificasse e <b>0</b> nel caso l'evento non si verificasse.
                        </p>
                    </Panel>
                </Section>
                <Section title={"Linguaggio matematico"}>
                    <Panel title={"Spazio campionario"}>
                        <blockquote>
                            "omegone"
                        </blockquote>
                        <p>
                            L'<b>insieme</b> di tutti gli esiti possibili di un esperimento.
                        </p>
                        <p>
                            <Latex>{r`\Omega = \left \{ 1, 2, 3, 4, 5, 6 \right \}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Esito"}>
                        <blockquote>
                            "omeghino"
                        </blockquote>
                        <p>
                            Un <b>elemento</b> dello spazio campionario.
                        </p>
                        <p>
                            <Latex>{r`\omega = 1`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Evento"}>
                        <blockquote>
                            "e"
                        </blockquote>
                        <p>
                            Un <b>sottoinsieme</b> dello spazio campionario.
                        </p>
                        <p>
                            <Latex>{r`E = \left \{ 1, 2 \right \}`}</Latex>
                        </p>
                        <p>
                            Lo spazio campionario stesso è un <b>evento certo</b>.
                        </p>
                    </Panel>
                    <Panel title={"Not"}>
                        <blockquote>
                            "not e"
                        </blockquote>
                        <p>
                            Il <b>complementare</b> di un sottoinsieme.
                        </p>
                        <p>
                            <Latex>{r`\bar{E} = \left \{ 3, 4, 5, 6 \right \}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"And"}>
                        <blockquote>
                            "e intersecato effe"
                        </blockquote>
                        <p>
                            L'<b>intersezione</b> di più sottoinsiemi.
                        </p>
                        <p>
                            <Latex>{r`E \cap F = \left \{ 1 \right \}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Or"}>
                        <blockquote>
                            "e unito a effe"
                        </blockquote>
                        <p>
                            L'<b>unione</b> di più sottoinsiemi.
                        </p>
                        <p>
                            <Latex>{r`E \cup F = \left \{ 1, 2, 3, 4 \right \}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Differenza"}>
                        <blockquote>
                            "e meno effe"
                        </blockquote>
                        <p>
                            <Latex>{r`E \setminus F = E \cap \bar{F}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Implicazione"}>
                        <blockquote>
                            "e contenuto in effe"
                        </blockquote>
                        <p>
                            L'<b>inclusione</b> del primo insieme in un altro.
                        </p>
                        <p>
                            <Latex>{r`E \subseteq F`}</Latex>
                        </p>
                        <p>
                            Se si verifica <Latex>E</Latex>, allora si verifica anche <Latex>F</Latex>.
                        </p>
                    </Panel>
                    <Panel title={"Evento impossibile"}>
                        <blockquote>
                            "e è impossibile"
                        </blockquote>
                        <p>
                            Un sottoinsieme <b>vuoto</b>.
                        </p>
                        <p>
                            <Latex>{r`E = \emptyset`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Mutua esclusione"}>
                        <blockquote>
                            "e ed effe si escludono mutualmente"
                        </blockquote>
                        <p>
                            La <b>disgiunzione</b> di due insiemi.
                        </p>
                        <p>
                            <Latex>{r`E \cap F = \emptyset`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section>
                    <Panel title={"Famiglia degli eventi"}>
                        <blockquote>
                            "famiglia effe"
                        </blockquote>
                        <p>
                            I sottoinsiemi dello spazio campionario formano una <b>famiglia</b> di sottoinsiemi detta <i>famiglia degli eventi</i>.
                        </p>
                        <p>
                            <Latex>{r`\mathcal{F}`}</Latex>
                        </p>
                        <p>
                            Qualsiasi sottoinsieme appartenente a <Latex>{r`\mathcal{F}`}</Latex> è considerato un evento.
                        </p>
                    </Panel>
                    <Panel title={<span><Latex>{r`\sigma`}</Latex>-algebra</span>}>
                        <blockquote>
                            "sigma algebra"
                        </blockquote>
                        <p>
                            Se la famiglia degli eventi soddisfa questi tre requisiti, allora viene detta <i><Latex>{r`\sigma`}</Latex>-algebra</i>:
                        </p>
                        <ol>
                            <li>
                                Lo spazio campionario è un evento: <Latex>{r`\Omega \in \mathcal{F}`}</Latex>
                            </li>
                            <li>
                                Se un sottoinsieme è un evento, allora anche il suo complementare lo è: <Latex>{r`E \in \mathcal{F} \implies \bar{E} \in \mathcal{F}`}</Latex>
                            </li>
                            <li>
                                Se due sottoinsiemi sono eventi, allora lo sono anche la loro unione e intersezione: <Latex>{r`(E, F) \in \mathcal{F} \implies (E \cup F, E \cap F) \in \mathcal{F}`}</Latex>
                            </li>
                        </ol>
                        <p>
                            Un esempio: <Latex>{r`E \in \mathcal{F} \implies \mathcal{F} = \{ \emptyset, E, \bar{E}, \Omega \}`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section>
                    <Panel title={"Partizione"}>
                        <blockquote>
                            "la partizione e composta da e uno, e due, e tre..."
                        </blockquote>
                        <p>
                            Un insieme di esiti e eventi:
                        </p>
                        <ul>
                            <li><b>Finito</b>.</li>
                            <li>In cui tutti gli eventi hanno <b>probabilità diversa da 0</b>.</li>
                            <li>In cui tutti gli eventi sono <b>mutualmente esclusivi</b>.</li>
                            <li>In cui l'unione di tutti i suoi elementi <b>copre lo spazio campionario</b>.</li>
                        </ul>
                        <p>
                            La partizione <Latex>{r`E_i`}</Latex> è composta dagli eventi <Latex>{r`E_1`}</Latex>, <Latex>{r`E_2`}</Latex>, <Latex>{r`E_3`}</Latex>, fino a <Latex>{r`E_n`}</Latex>.
                        </p>
                        <Example>
                            Se lo spazio campionario fosse una torta, una sua partizione sarebbe l'insieme delle fette di uno dei modi in cui si potrebbe tagliare.
                        </Example>
                    </Panel>
                </Section>
                <Section title={"Assiomi della probabilità"}>
                    <Panel title={"Primo assioma della probabilità"}>
                        <p>
                            La probabilità di un evento è un numero tra 0 e 1.
                        </p>
                        <p>
                            <Latex>{r`\forall E \in \mathcal{F}, 0 \leq P(E) \leq 1`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Secondo assioma della probabilità"}>
                        <p>
                            La probabilità dello spazio campionario è sempre 1.
                        </p>
                        <p>
                            <Latex>{r`P(\Omega) = 1`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Terzo assioma della probabilità"}>
                        <p>
                            La probabilità dell'unione di eventi indipendenti è uguale alla somma delle loro probabilità.
                        </p>
                        <p>
                            <Latex>{r`P \left ( \bigcup_i E_i \right ) = \sum_i P ( E_i )`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Conseguenze degli assiomi"}>
                    <Panel title={"Probabilità di un evento negato"}>
                        <p>
                            La probabilità di un evento negato è uguale a 1 meno la probabilità dell'evento non negato.
                        </p>
                        <p>
                            <Latex>{r`P(\bar{E}) = 1 - P({E})`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Probabilità di un evento incluso"}>
                        <p>
                            La probabilità di un evento incluso in un altro è sempre minore o uguale alla probabilità dell'evento in cui è incluso.
                        </p>
                        <p>
                            <Latex>{r`F \subseteq E \implies P(F) \leq P(E)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Unione"}>
                        <p>
                            La probabilità di un evento unito a un altro è uguale alla somma delle probabilità dei due eventi meno la probabilità della loro intersezione.
                        </p>
                        <p>
                            <Latex>{r`P(E \cup F) = P(E) + P(F) - P(E \cap F)`}</Latex>
                        </p>
                        <Example>
                            Sommando le probabilità dei due eventi, l'intersezione viene contata due volte, e va quindi rimossa!
                        </Example>
                    </Panel>
                </Section>
                <Section title={"Spazi equiprobabili"}>
                    <Panel title={"Cosa sono?"}>
                        <p>
                            Spazi campionari in cui ci sono un numero finito di esiti e ogni esito ha la stessa probabilità di verificarsi.
                        </p>
                        <p>
                            <Latex>{r`P(E) = \frac{len(E)}{len(\Omega)}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Spazi equiprobabili geometrici"}>
                        <p>
                            Gli spazi campionari possono avere un numero infinito di esiti: sono <i>equiprobabili geometrici</i> se nessun esito è privilegiato rispetto agli altri.
                        </p>
                    </Panel>
                </Section>
                <Section title={"Calcolo combinatorio"}>
                    <Panel title={"Disposizioni"}>
                        <p>
                            Estraggo un numero, da un sacchetto con <Latex>n</Latex> numeri, mi segno che numero ho estratto e lo <b>tengo fuori dal sacchetto</b>. Ripeto per <Latex>k</Latex> volte.
                        </p>
                        <p>
                            <b>Tengo conto</b> dell'ordine in cui ho estratto i numeri.
                        </p>
                        <p>
                            <Latex>{r`\boldsymbol{D}_{n, k} = \frac{n!}{(n - k)!}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Disposizioni con ripetizione"}>
                        <p>
                            Estraggo un numero, da un sacchetto con <Latex>n</Latex> numeri, mi segno che numero ho estratto e lo <b>rimetto nel sacchetto</b>. Ripeto per <Latex>k</Latex> volte.
                        </p>
                        <p>
                            <b>Tengo conto</b> dell'ordine in cui ho estratto i numeri.
                        </p>
                        <p>
                            <Latex>{r`\boldsymbol{D}^{r}_{n, k} = n^k`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Combinazioni"}>
                        <p>
                            Estraggo un numero, da un sacchetto con <Latex>n</Latex> numeri, mi segno che numero ho estratto e lo <b>tengo fuori dal sacchetto</b>. Ripeto per <Latex>k</Latex> volte.
                        </p>
                        <p>
                            <b>Non mi interessa</b> l'ordine in cui ho estratto i numeri.
                        </p>
                        <p>
                            <Latex>{r`\boldsymbol{C}_{n, k} = \binom{n}{k} = \frac{n!}{(k)! \cdot (n - k)!}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Combinazioni con ripetizione"}>
                        <p>
                            Estraggo un numero, da un sacchetto con <Latex>n</Latex> numeri, mi segno che numero ho estratto e lo <b>rimetto nel sacchetto</b>. Ripeto per <Latex>k</Latex> volte.
                        </p>
                        <p>
                            <b>Non mi interessa</b> l'ordine in cui ho estratto i numeri.
                        </p>
                        <p>
                            <Latex>{r`\boldsymbol{C}^{r}_{n, k} = \binom{n + k - 1}{k} = \frac{(n + k - 1)!}{(k)! \cdot (n - 1)!}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Permutazioni"}>
                        <p>
                            Estraggo <Latex>n</Latex> numeri e guardo in quanti ordini diversi li posso mettere.
                        </p>
                        <p>
                            <Latex>{r`\boldsymbol{P}_n = n!`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Probabilità condizionata"}>
                    <Panel title={"Eventi condizionati"}>
                        <blockquote>
                            "E dato F"
                        </blockquote>
                        <p>
                            La probabilità che si verifichi <Latex>E</Latex> sapendo che <b>si è già verificato</b> <Latex>F</Latex>.
                        </p>
                        <p>
                            <Latex>{r`P(E|F) = \frac{P(E \cap F)}{P(F)}`}</Latex>
                        </p>
                        <Example>
                            Ricorda vagamente le pipe di <code>bash</code>, però al contrario...
                        </Example>
                    </Panel>
                    <Panel title={"Eventi mutualmente esclusivi"}>
                        <p>
                            Se due eventi sono mutualmente esclusivi, entrambe le loro probabilità condizionate saranno uguali a 0.
                        </p>
                        <p>
                            <Latex>{r`E \cap F = \emptyset \Longleftrightarrow P(E|F) = P(F|E) = 0`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section>
                    <Panel title={"Regola della catena"}>
                        <p>
                            Si può sfruttare la formula inversa della probabilità condizionata per calcolare catene di intersezioni:
                        </p>
                        <p>
                            <Latex>{r`P(E_1 \cap \times \cap E_n) = P(E_1) \times P(E_2 | E_1) \times \dots \times P(E_n | E_1 \cap E_2 \cap \dots \cap E_{n-1})`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Le alternative"}>
                    <Panel title={"Legge delle alternative"}>
                        <p>
                            La probabilità che si verifichi un evento è pari alla somma delle probabilità dell'evento stesso dati tutti gli eventi di una partizione.
                        </p>
                        <p>
                            <Latex>{r`P(F) = \sum_{i} P(F|E_i) \cdot P(E_i)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Legge condizionata delle alternative"}>
                        <p>
                            La legge delle alternative funziona anche quando ad essere partizionato è un <b>evento</b>:
                        </p>
                        <p>
                            <Latex>{r`P(F|G) = \sum_i P(F|E_i \cap G) \cdot P(E_i | G)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Formula di Bayes"}>
                        <p>
                            Tramite la <i>formula di Bayes</i> possiamo risalire alla probabilità di un evento condizionato a un altro partendo dalla probabilità di quest'ultimo condizionato al primo:
                        </p>
                        <p>
                            <Latex>{r`P(E_h | F) = \frac{P(F | E_h) \cdot P(E_h)}{P(F)}`}</Latex>
                        </p>
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
                        <p>
                            Se due eventi sono indipendenti, sapere che uno dei due si è verificato non influisce sulle probabilità che si sia verificato l'altro.
                        </p>
                        <p>
                            <Latex>{r`P(E \cap F) = P(E) \cdot P(F) \Longleftrightarrow P(E|F) = P(E) \Longleftrightarrow P(F|E) = P(F)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Più eventi indipendenti"}>
                        <blockquote>
                            "eventi indipendenti a tre a tre, a quattro a quattro, a cinque a cinque..."
                        </blockquote>
                        <p>
                            Si può verificare l'indipendenza di più eventi alla volta:
                        </p>
                        <p>
                            <Latex>{r`P(E \cap F \cap G) = P(E) \cdot P(F) \cdot P(G)`}</Latex>
                        </p>
                        <p>
                            Eventi indipendenti a due a due non sono per forza indipendenti a tre a tre, e viceversa.
                        </p>
                    </Panel>
                    <Panel title={"Famiglia di eventi indipendenti"}>
                        <p>
                            Un insieme di <Latex>n</Latex> eventi è una <i>famiglia di eventi indipendenti</i> se, preso un qualsiasi numero di eventi da essa, essi risulteranno indipendenti.
                        </p>
                        <Example>
                            Tutti gli eventi provenienti da essa saranno indipendenti sia a due a due, sia a tre a tre, sia a quattro a quattro, e così via!
                        </Example>
                    </Panel>
                </Section>
                <Section title={"Variabili aleatorie"}>
                    <Panel title={"Variabile aleatoria"}>
                        <p>
                            Una funzione che fa corrispondere un numero reale a ogni possibile esito dello spazio campionario. <Latex>{r`X(\omega) : \Omega \to \mathbb{R}`}</Latex>.
                        </p>
                    </Panel>
                    <Panel title={<abbr title={"Nome artigianale dato da Steffo."}>Insieme di ripartizione</abbr>}>
                        <p>
                            Ad ogni variabile aleatoria sono associati gli eventi <Latex>{r`A_t = \{ \omega | X(\omega) \leq t \}`}</Latex>, che contengono tutti gli esiti a cui la variabile aleatoria associa un valore minore o uguale a <Latex>t</Latex>.
                        </p>
                        <p>
                            Per definizione, tutte le variabili aleatorie devono rispettare questa condizione:
                        </p>
                        <p>
                            <Latex>{r`\forall t \in \mathbb{R}, A_t \in \mathcal{F}`}</Latex>
                        </p>
                        <Example>
                            All'aumentare di t, l'insieme conterrà sempre più elementi.
                        </Example>
                    </Panel>
                    <Panel title={"Supporto"}>
                        <blockquote>
                            "supporto di X"
                        </blockquote>
                        <p>
                            Il <b>codominio</b> della variabile aleatoria è il suo <i>supporto</i>.
                        </p>
                        <p>
                            Per indicare che un valore <Latex>x_0</Latex> appartiene al supporto di <Latex>X</Latex>, si usa la notazione <Latex>X \mapsto x_0</Latex>.
                        </p>
                    </Panel>
                </Section>
                <Section title={"Densità"}>
                    <Panel title={"Funzione probabilità"}>
                        <p>
                            La <i>funzione probabilità</i> <Latex>{r`p_X : X \to [0, 1]`}</Latex> di una variabile aleatoria <b>discreta</b> <Latex>X</Latex> è la funzione che associa ad ogni esito la sua probabilità:
                        </p>
                        <p>
                            <Latex>{r`p_X (x) = \begin{cases}
                            P([X = x]) \quad se\ X \mapsto x \\
                            0 \qquad \qquad \quad se\ X \not\mapsto x
                            \end{cases}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Funzione densità"}>
                        <p>
                            La <i>funzione densità</i> <Latex>{r`f_X : X \to [0, 1]`}</Latex> di una variabile aleatoria <b>continua</b> <Latex>X</Latex> è l'equivalente continuo della funzione probabilità:
                        </p>
                        <p>
                            <Latex>{r`P([a < X \leq b]) = \int_a^b f_X (x) dx`}</Latex>
                        </p>
                        <p>
                            A differenza della funzione probabilità, è possibile che la funzione densità <b>non esista</b> per una certa variabile aleatoria.
                        </p>
                        <Example>
                            Rappresenta "quanta" probabilità c'è in un'unità di x!
                        </Example>
                    </Panel>
                </Section>
                <Section title={"Funzione di ripartizione"}>
                    <Panel title={"Definizione"}>
                        <p>
                            Ogni variabile aleatoria ha una <i>funzione di ripartizione</i> <Latex>{r`F_X : \mathbb{R} \to [0, 1]`}</Latex> associata, che rappresenta la probabilità che la variabile aleatoria assuma un valore minore o uguale a <Latex>t</Latex>:
                        </p>
                        <p>
                            Si può dire che essa rappresenti la probabilità dell'evento <Latex>{r`A_t`}</Latex>:
                        </p>
                        <p>
                            <Latex>{r`F_X (t) = P(A_t) = \begin{cases}
                            \sum_{i = 0}^{t} p_X (x_i) \quad nel\ discreto\\
                            \\
                            \int_{-\infty}^t f_X (x) dx \quad nel\ continuo
                            \end{cases}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Proprietà della funzione"}>
                        <ul>
                            <li>È sempre <b>monotona crescente</b> (non strettamente).</li><br/>
                            <li>Vale <b>0</b> a <Latex>-\infty</Latex> e <b>1</b> a <Latex>+\infty</Latex>.</li><br/>
                            <li>È <b>continua da destra</b>: <Latex>{r`\forall x_0 \in \mathbb{R}, F_X (x_0) = \lim_{t \to x^+_0} F_X (t)`}</Latex></li>
                        </ul>
                    </Panel>
                    <Panel title={"Probabilità di un valore"}>
                        <p>
                            Possiamo usare la funzione di ripartizione per calcolare la probabilità di un certo valore reale:
                        </p>
                        <p>
                            <Latex>{r`P([X = x_0]) = \lim_{t \to x^+_0} F_X (t) - \lim_{t \to x^-_0} F_X (t)`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Trasformazioni di variabili aleatorie"}>
                    <Panel title={"Nel discreto"}>
                        <p>
                            Nel discreto basta abbinare un nuovo valore a ogni valore della variabile originale.
                        </p>
                    </Panel>
                    <Panel title={"Nel continuo (invertibile)"}>
                        <p>
                            Nel continuo applichiamo la formula dell'integrazione per sostituzione:
                        </p>
                        <p>
                            <Latex>{r`f_Y (y) = \int_{g(a)}^{g(b)} f_X ( g^{-1} (x) ) g^{-2} (x)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Nel... digitale"}>
                        <p>
                            Trasformare variabili aleatorie è molto utile nell'informatica per creare distribuzioni partendo da una funzione <a href={"https://docs.python.org/3/library/random.html#random.random"}><code>random()</code></a> che restituisce numeri da 0 a 1 con una distribuzione lineare.
                        </p>
                    </Panel>
                </Section>
                <Section title={"Informazioni delle variabili aleatorie"}>
                    <Panel title={"Media"}>
                        <p>
                            Ogni variabile aleatoria che ha una <b>funzione di ripartizione</b> e un <b>supporto finito</b> ha anche una <i>media</i> (o <i>valore medio</i> o <i>atteso</i>):
                        </p>
                        <p>
                            <Latex>{r`E(X) = \int_0^{+infty} (1 - F_X (t)) dt - \int_{-\infty}^{0} F_X (t) dt`}</Latex>
                        </p>
                        <p>
                            Nel discreto, si può calcolare con:
                        </p>
                        <p>
                            <Latex>{r`E(X) = \sum_i P(X = x_i) \cdot x_i`}</Latex>
                        </p>
                        <p>
                            Nel continuo, si può calcolare con:
                        </p>
                        <p>
                            <Latex>{r`E(X) = \int_{-\infty}^{+\infty} f_X (x) \cdot x \cdot dx`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section>
                    <Panel title={"Moda"}>
                        <p>
                            Valore per cui la <b>funzione probabilità</b> o <b>funzione densità</b> è <b>massima</b>.
                        </p>
                    </Panel>
                    <Panel title={"Quantili"}>
                        <p>
                            Il <i>quantile</i> <Latex>{r`x_{\alpha}`}</Latex> di ordine <Latex>{r`0 \leq \alpha \leq 1`}</Latex> della variabile aleatoria <Latex>X</Latex> è il più piccolo numero tale che:
                        </p>
                        <p>
                            <Latex>
                                {r`P([X < x_{\alpha}]) \leq \alpha \leq P([X \leq x_{\alpha}])`}
                            </Latex>
                        </p>
                        <p>

                        </p>
                        <p>
                            Il quantile di ordine 0.5 <Latex>{r`x_{0.5}`}</Latex> è detto <i>mediana</i>.
                        </p>
                        <p>
                            I quantili di ordine 0.25 <Latex>{r`x_{0.25}`}</Latex> e 0.75 <Latex>{r`x_{0.75}`}</Latex> sono detti <i>quartili</i>.
                        </p>
                        <p>
                            I quantili di ordine <Latex>{r`\frac{n}{100}`}</Latex> sono detti <i><Latex>n</Latex>-esima percentile</i>.
                        </p>
                    </Panel>
                    <Panel title={"Varianza"}>
                        <p>
                            È un valore che indica quanto la variabile aleatoria si discosta generalmente dalla media:
                        </p>
                        <p>
                            <Latex>{r`Var(X) = E( (X - E(X) )^2 ) = E ( X^2 ) - (E(X))^2`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Disuguaglianze notevoli"}>
                    <Panel title={"Disuguaglianza di Markov"}>
                        <p>
                            Data una variabile aleatoria non-negativa:
                        </p>
                        <p>
                            <Latex>{r`\forall k > 0, P([X \geq k]) \leq \frac{E(X)}{k}`}</Latex>
                        </p>
                        <p>
                            Divide in due parti (<Latex>{r`P(X < k)`}</Latex> e <Latex>{r`P(X \geq k)`}</Latex>) la funzione X, la cui media risulterà uguale a:
                        </p>
                        <p>
                            <Latex>{r`E(X) = \overline{k} \cdot P(X < k) + k \cdot P(X \geq k)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Disuguaglianza di Čebyšëv"}>
                        <blockquote>
                            "disuguaglianza di cebicev"
                        </blockquote>
                        <p>
                            Se la variabile aleatoria <Latex>X</Latex> ha media e varianza, allora la probabilità che essa abbia un valore a più di <Latex>{r`\epsilon`}</Latex> di distanza dal valore medio è minore o uguale a <Latex>{r`\frac{Var(X)}{\epsilon^2}`}</Latex>.
                        </p>
                        <p>
                            <Latex>{r`\forall \epsilon > 0, P([ \left| X - E(X) \right| \geq \epsilon]) \leq \frac{Var(X)}{\epsilon^2}`}</Latex>
                        </p>
                        <p>
                            E anche:
                        </p>
                        <p>
                            <Latex>{r`\forall \epsilon > 0, P([ \left| X - E(X) \right| < \epsilon]) \geq 1 - \frac{Var(X)}{\epsilon^2}`}</Latex>
                        </p>
                        <Example>
                            Serve per semplificare i calcoli quando la funzione di ripartizione è difficile da calcolare!
                        </Example>
                    </Panel>
                </Section>
                <Section title={"Un momento...!"}>
                    <Panel title={"Momento"}>
                        <p>
                            Il <i>momento</i> <Latex>k</Latex>-esimo di una variabile aleatoria è:
                        </p>
                        <p>
                            <Latex>
                                {r`\mu_k = E ( X^k ) = \begin{cases}
                                \sum_i x_i^k p_X (x_i) \qquad nel\ discreto\\
                                \\
                                \int_{-\infty}^{+\infty} x^k f_X (x) dx \qquad nel\ continuo
                                \end{cases}`}
                            </Latex>
                        </p>
                        <Example>
                            La media di una variabile aleatoria è anche il suo primo momento.
                        </Example>
                    </Panel>
                    <Panel title={"Funzione generatrice dei momenti"}>
                        <p>
                            La <i>funzione generatrice dei momenti</i> è:
                        </p>
                        <p>
                            <Latex>{r`m_X (t) = E( e^{t \cdot X} )`}</Latex>
                        </p>
                        <p>
                            Se due variabile aleatorie hanno la stessa funzione generatrice dei momenti, allora esse hanno la <b>stessa distribuzione</b>.
                        </p>
                        <p>
                            E' la <b>trasformata di Laplace</b> della variabile aleatoria di X.
                        </p>
                    </Panel>
                    <Panel title={"Funzione caratteristica"}>
                        <p>
                            La <i>funzione caratteristica</i> è:
                        </p>
                        <p>
                            <Latex>{r`H_X (t) = E ( e^{i \cdot t \cdot X} )`}</Latex>
                        </p>
                        <p>
                            Se due variabile aleatorie hanno la stessa funzione caratteristica, allora esse hanno la <b>stessa distribuzione</b>.
                        </p>
                        <p>
                            E' la <b>trasformata di Fourier</b> della variabile aleatoria di X.
                        </p>
                    </Panel>
                </Section>
                <Section title={"Prove e schemi"}>
                    <Panel title={"Variabile con distribuzione"}>
                        <p>
                            Per dire che una variabile ha una certa distribuzione, si usa la notazione:
                        </p>
                        <p>
                            <Latex>{r`X \sim Distribuzione()`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Prova di Bernoulli"}>
                        <p>
                            Una prova con solo due possibili esiti: <Plus>successo</Plus> e <Minus>insuccesso</Minus>.
                        </p>
                    </Panel>
                    <Panel title={"Schema di Bernoulli"}>
                        <p>
                            Una sequenza di prove di Bernoulli per le quali le probabilità di successo e fallimento rimangono invariate.
                        </p>
                    </Panel>
                </Section>
                <Section title={"Bernoulliana"}>
                    <Panel title={"Distribuzione bernoulliana"}>
                        <p>
                            Una variabile aleatoria che rappresenta una prova di Bernoulli:
                        </p>
                        <ul>
                            <li>vale <Plus>1</Plus> in caso di <Plus>successo</Plus>.</li>
                            <li>vale <Minus>0</Minus> in caso di <Minus>insuccesso</Minus>.</li>
                        </ul>
                        <p>
                            Il suo simbolo è <Latex>{r`Ber(p)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Densità della bernoulliana"}>
                        <p>
                            La distribuzione bernoulliana ha come densità:
                        </p>
                        <p>
                            <Latex>{r`f_X (k) : \{0, 1\} = \begin{cases}
                            p \quad se\ k = 1\\
                            q \quad se\ k = 0\\
                            0 \quad altrimenti
                            \end{cases} = p^x \cdot q^{1 - k}`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Binomiale"}>
                    <Panel title={"Distribuzione binomiale"}>
                        <p>
                            Una variabile aleatoria che conta il numero di successi di <Latex>n</Latex> prove di uno schema di Bernoulli.
                        </p>
                        <p>
                            Il suo simbolo è <Latex>{r`Bin(n, p)`}</Latex>.
                        </p>
                    </Panel>
                    <Panel title={"Densità della binomiale"}>
                        <p>
                            La binomiale ha come densità:
                        </p>
                        <p>
                            <Latex>{r`f_X (k) : \{0..n\} = \binom{n}{k} \cdot p^k \cdot q^{n - k}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Momenti della binomiale"}>
                        <p>
                            La <b>funzione generatrice dei momenti</b> della binomiale è:
                        </p>
                        <p>
                            <Latex>{r`m_X (t) = (q + p \cdot e^t) ^ n`}</Latex>
                        </p>
                        <p>
                            La <b>media</b> di una binomiale è:
                        </p>
                        <p>
                            <Latex>{r`E(X) = n \cdot p`}</Latex>
                        </p>
                        <p>
                            La <b>varianza</b> di una binomiale è:
                        </p>
                        <p>
                            <Latex>{r`Var(X) = n \cdot p \cdot q`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Geometrica"}>
                    <Panel title={"Distribuzione geometrica"}>
                        <p>
                            Una variabile aleatoria che conta il numero di prove in uno schema di Bernoulli fino alla comparsa del primo successo.
                        </p>
                        <p>
                            Il suo simbolo è <Latex>Geo(p)</Latex>.
                        </p>
                    </Panel>
                    <Panel title={"Densità della geometrica"}>
                        <p>
                            La geometrica ha come densità:
                        </p>
                        <p>
                            <Latex>{r`f_X (k) : \mathbb{N} = q^{k - 1} p`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Momenti della geometrica"}>
                        <p>
                            La <b>funzione generatrice dei momenti</b> della geometrica è:
                        </p>
                        <p>
                            <Latex>{r`m_X (t) = \frac{p \cdot e^t}{1 - q \cdot e^t}`}</Latex>
                        </p>
                        <p>
                            La <b>media</b> della geometrica è:
                        </p>
                        <p>
                            <Latex>{r`E(X) = \frac{1}{p}`}</Latex>
                        </p>
                        <p>
                            La <b>varianza</b> della geometrica è:
                        </p>
                        <p>
                            <Latex>{r`Var(X) = \frac{q}{p^2}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Assenza di memoria della geometrica"}>
                        <p>
                            La geometrica non tiene conto degli eventi avvenuti in passato: ha la proprietà dell'assenza di memoria:
                        </p>
                        <p>
                            <Latex>{r`P([X = i + j | X > i ]) = P([X = j])`}</Latex>
                        </p>
                        <Example>
                            Ovvero, riscalando opportunamente l'asse Y posso prendere come 0 qualsiasi punto dell'asse X.
                        </Example>
                    </Panel>
                </Section>
                <Section title={"Binomiale negativa"}>
                    <Panel title={"Distribuzione binomiale negativa"}>
                        <p>
                            Una variabile aleatoria che conta il numero di prove in uno schema di Bernoulli necessarie perchè si verifichi l'<Latex>n</Latex>-esimo successo.
                        </p>
                        <p>
                            Il suo simbolo è <Latex>{r`\overline{Bin}(n, p)`}</Latex>.
                        </p>
                    </Panel>
                    <Panel title={"Densità della binomiale negativa"}>
                        <p>
                            La binomiale negativa ha come densità:
                        </p>
                        <p>
                            <Latex>{r`f_X (k) : \{ n .. +\infty \} \in \mathbb{N} = \binom{k - 1}{n - 1} \cdot p^n \cdot q^{k - n} `}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Momenti della binomiale negativa"}>
                        <p>
                            <p>
                                La <b>funzione generatrice dei momenti</b> della binomiale negativa è:
                            </p>
                            <p>
                                <Latex>{r`m_X (t) : \{ t < ln(\frac{1}{q}) \} = \left( \frac{p \cdot e^t}{1 - q \cdot e^t} \right) ^n`}</Latex>
                            </p>
                            <p>
                                La <b>media</b> della binomiale negativa è:
                            </p>
                            <p>
                                <Latex>{r`E(X) = \frac{n}{p}`}</Latex>
                            </p>
                            <p>
                                La <b>varianza</b> della binomiale negativa è:
                            </p>
                            <p>
                                <Latex>{r`Var(X) = \frac{n \cdot q}{p^2}`}</Latex>
                            </p>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Geometrica traslata"}>
                    <Panel title={"Distribuzione geometrica traslata"}>
                        <p>
                            Una variabile aleatoria che conta il numero <Latex>k</Latex> di insuccessi consecutivi in uno schema di Bernoulli:
                        </p>
                        <p>
                            Il suo simbolo rimane <Latex>{r`Geo(p)`}</Latex>.
                        </p>
                    </Panel>
                    <Panel title={"Densità della geometrica tralsata"}>
                        <p>
                            La geometrica traslata ha come densità:
                        </p>
                        <p>
                            <Latex>{r`f_X (k) : \mathbb{N} = p \cdot q^k `}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Momenti della geometrica traslata"}>
                        <p>
                            La <b>funzione generatrice dei momenti</b> della geometrica traslata è:
                        </p>
                        <p>
                            <Latex>{r`m_X (t) : \left\{ t < ln \left( \frac{1}{q} \right) \right\} = \frac{p}{1 - q \cdot e^t}`}</Latex>
                        </p>
                        <p>
                            La <b>media</b> della geometrica traslata è:
                        </p>
                        <p>
                            <Latex>{r`E(X) = \frac{q}{p}`}</Latex>
                        </p>
                        <p>
                            La <b>varianza</b> della geometrica è:
                        </p>
                        <p>
                            <Latex>{r`Var(X) = \frac{q}{p^2}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Assenza di memoria della geometrica traslata"}>
                        <p>
                            La geometrica traslata non tiene conto degli eventi avvenuti in passato: ha la proprietà dell'assenza di memoria:
                        </p>
                        <p>
                            <Latex>{r`P([X = i + j | X > i ]) = P([X = j])`}</Latex>
                        </p>
                        <Example>
                            Ovvero, riscalando opportunamente l'asse Y posso prendere come 0 qualsiasi punto dell'asse X.
                        </Example>
                    </Panel>
                </Section>
                <Section title={"Binomiale negativa traslata"}>
                    <Panel title={"Distribuzione binomiale negativa traslata"}>
                        <p>
                            Una variabile aleatoria che conta il numero di insuccessi in uno schema di Bernoulli prima che si verifichi l'<Latex>n</Latex>-esimo successo.
                        </p>
                        <p>
                            Il suo simbolo rimane <Latex>{r`\overline{Bin}(n, p)`}</Latex>.
                        </p>
                    </Panel>
                    <Panel title={"Densità della binomiale negativa traslata"}>
                        <p>
                            La binomiale negativa traslata ha come densità:
                        </p>
                        <p>
                            <Latex>{r`f_X (k) : \mathbb{N} = \binom{k + n - 1}{n - 1} \cdot p^n \cdot q^k `}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Momenti della binomiale negativa traslata"}>
                        <p>
                            <p>
                                La <b>funzione generatrice dei momenti</b> della binomiale negativa traslata è:
                            </p>
                            <p>
                                <Latex>{r`m_X (t) : \left\{ t < ln \left( \frac{1}{q} \right) \right\} = \left( \frac{p \cdot e^t}{1 - q \cdot e^t} \right) ^n`}</Latex>
                            </p>
                            <p>
                                La <b>media</b> della binomiale negativa traslata è:
                            </p>
                            <p>
                                <Latex>{r`E(X) = \frac{n \cdot q}{p}`}</Latex>
                            </p>
                            <p>
                                La <b>varianza</b> della binomiale negativa traslata è:
                            </p>
                            <p>
                                <Latex>{r`Var(X) = \frac{n \cdot q}{p^2}`}</Latex>
                            </p>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Ipergeometrica"}>
                    <Panel title={"Distribuzione ipergeometrica"}>
                        <p>
                            Una variabile aleatoria che, sapendo il numero di successi <Latex>K</Latex> e di insuccessi <Latex>N-K</Latex>, conta quanti successi si otterrebbero se se ne estraessero <Latex>n</Latex> in blocco.
                        </p>
                        <p>
                            Il suo simbolo è <Latex>Ipe(N, K, n)</Latex>.
                        </p>
                    </Panel>
                    <Panel title={"Densità della ipergeometrica"}>
                        <p>
                            La ipergeometrica ha come densità:
                        </p>
                        <p>
                            <Latex>{r`f_X (k) : \{0..n\} \in \mathbb{N} = \frac{\binom{K}{k} \cdot \binom{N - K}{n - k}}{\binom{N}{n}}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Momenti della ipergeometrica"}>
                        <p>
                            <p>
                                La <b>funzione generatrice dei momenti</b> della ipergeometrica è trascurabile.
                            </p>
                            <p>
                                La <b>media</b> della ipergeometrica è:
                            </p>
                            <p>
                                <Latex>{r`E(X) = n \cdot \frac{K}{N}`}</Latex>
                            </p>
                            <p>
                                La <b>varianza</b> della ipergeometrica è:
                            </p>
                            <p>
                                <Latex>{r`Var(X) = n \cdot \frac{K}{N} \cdot \frac{N - K}{N} \cdot \frac{N - n}{N - 1}`}</Latex>
                            </p>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Poissoniana"}>
                    <Panel title={"Distribuzione poissoniana"}>
                        <p>
                            Una variabile aleatoria che soddisfa tutte le seguenti caratteristiche:
                        </p>
                        <ul>
                            <li>Binomiale: <Latex>{r`X \sim Bin(n, p)`}</Latex></li>
                            <li>Il numero di prove tende a infinito: <Latex>{r`n \to +\infty`}</Latex></li>
                            <li>La probabilità di successo tende a 0: <Latex>{r`p \to 0`}</Latex></li>
                            <li>La media è finita: <Latex>{r`E(X) = n \cdot p \to \mu \neq 0`}</Latex></li>
                        </ul>
                        <p>
                            Il suo simbolo è <Latex>{r`Poi(\mu)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Densità della poissoniana"}>
                        <p>
                            La poissoniana ha come densità:
                        </p>
                        <p>
                            <Latex>{r`f_X (k) : \mathbb{N} = \frac{e^{-\mu} \cdot \mu^k}{k!}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Momenti della poissoniana"}>
                        <p>
                            <p>
                                La <b>funzione generatrice dei momenti</b> della poissoniana è:
                            </p>
                            <p>
                                <Latex>{r`m_X (t) = e^{\mu \cdot (e^t - 1)}`}</Latex>
                            </p>
                            <p>
                                La <b>media</b> della poissoniana è:
                            </p>
                            <p>
                                <Latex>{r`E(X) = \mu`}</Latex>
                            </p>
                            <p>
                                La <b>varianza</b> della poissoniana è:
                            </p>
                            <p>
                                <Latex>{r`Var(X) = \mu`}</Latex>
                            </p>
                            <p>
                                Gli altri momenti della poissoniana sono:
                            </p>
                            <ol start={2}>
                                <li><Latex>{r`E(X^2) = \mu^2 + \mu`}</Latex></li>
                            </ol>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Un altro schema"}>
                    <Panel title={"Schema di Poisson"}>
                        <p>
                            Una successione di <b>arrivi</b> avvenuti in un certo arco temporale che:
                        </p>
                        <ul>
                            <li>non sono sovrapposti.</li>
                            <li>hanno intensità <Latex>{r`\lambda`}</Latex> costante.</li>
                            <li>avvengono indipendentemente gli uni dagli altri.</li>
                        </ul>
                    </Panel>
                    <Panel title={"Processo di Poisson"}>
                        <p>
                            Una variabile aleatoria <Latex>N_t</Latex> che conta il numero di arrivi di uno schema di Poisson di intensità <Latex>{r`\lambda`}</Latex> in un intervallo di tempo di durata <Latex>t</Latex>.
                        </p>
                        <p>
                            E' una distribuzione poissoniana con <Latex>{r`\mu = t \cdot \lambda`}</Latex>: <Latex>{r`Poi(t \cdot \lambda)`}</Latex>
                        </p>
                        <Example>
                            E' paragonabile a una bernoulliana: ogni successo corrisponde a un arrivo, mentre il tempo è il numero di prove effettuate (ma nel continuo).
                        </Example>
                    </Panel>
                </Section>
                <Section title={"Esponenziale"}>
                    <Panel title={"Distribuzione esponenziale"}>
                        <p>
                            Una variabile aleatoria che conta il tempo diwidehattesa prima del primo arrivo di un processo di Poisson di intensità <Latex>{r`\lambda`}</Latex>.
                        </p>
                        <p>
                            Il suo simbolo è <Latex>{r`Esp(\lambda)`}</Latex>.
                        </p>
                    </Panel>
                    <Panel title={"Densità dell'esponenziale"}>
                        <p>
                            L'esponenziale ha come <b>densità</b>:
                        </p>
                        <p>
                            <Latex>{r`f_X (x) = \begin{cases}
                            0 \qquad \qquad x < 0\\
                            \lambda \cdot e^{-\lambda \cdot x} \quad x > 0
                            \end{cases}`}</Latex>
                        </p>
                        <p>
                            L'esponenziale ha come <b>funzione di ripartizione</b>:
                        </p>
                        <p>
                            <Latex>{r`F_X (t) = \begin{cases}
                            0 \qquad \qquad t < 0\\
                            1 - e^{-\lambda \cdot t} \quad t \geq 0
                            \end{cases}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Momenti dell'esponenziale"}>
                        <p>
                            La <b>funzione generatrice dei momenti</b> dell'esponenziale è:
                        </p>
                        <p>
                            <Latex>{r`m_X (t) : \{ t | t < \lambda \} \in \mathbb{R} = \frac{\lambda}{\lambda - t}`}</Latex>
                        </p>
                        <p>
                            La <b>media</b> dell'esponenziale è:
                        </p>
                        <p>
                            <Latex>{r`E(X) = \frac{1}{\lambda}`}</Latex>
                        </p>
                        <p>
                            La <b>varianza</b> dell'esponenziale è:
                        </p>
                        <p>
                            <Latex>{r`Var(X) = \frac{1}{\lambda^2}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Assenza di memoria della esponenziale"}>
                        <p>
                            L'esponenziale non tiene conto degli eventi avvenuti in passato: ha la proprietà dell'assenza di memoria:
                        </p>
                        <p>
                            <Latex>{r`P([X > s + t | X > s]) = P([X > t])`}</Latex>
                        </p>
                        <Example>
                            Ovvero, riscalando opportunamente l'asse Y posso prendere come 0 qualsiasi punto dell'asse X.
                        </Example>
                    </Panel>
                </Section>
                <Section title={"Legge gamma"}>
                    <Panel title={"Distribuzione gamma"}>
                        <p>
                            Una variabile aleatoria che conta il tempo diwidehattesa prima dell'<Latex>n</Latex>-esimo arrivo di un processo di Poisson di intensità <Latex>{r`\lambda`}</Latex>.
                        </p>
                        <p>
                            Il suo simbolo è <Latex>{r`\Gamma(n, \lambda)`}</Latex>.
                        </p>
                    </Panel>
                    <Panel title={"Densità della legge gamma"}>
                        <p>
                            La legge gamma ha come densità:
                        </p>
                        <p>
                            <Latex>{r`f_X (x) = \begin{cases}
                            0 \qquad \qquad \qquad \qquad \qquad x < 0\\
                            \frac{1}{(n-1)!} \cdot \lambda^n \cdot x^{n-1} \cdot e^{-\lambda \cdot x} \quad k > 0
                            \end{cases}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Momenti della legge gamma"}>
                        <p>
                            <p>
                                La <b>funzione generatrice dei momenti</b> della legge gamma è:
                            </p>
                            <p>
                                <Latex>{r`m_X (t) : ( t < \lambda ) \in \mathbb{R} = \left( \frac{\lambda}{\lambda - t} \right) ^\alpha`}</Latex>
                            </p>
                            <p>
                                La <b>media</b> della legge gamma è:
                            </p>
                            <p>
                                <Latex>{r`E(X) = \frac{\alpha}{\lambda}`}</Latex>
                            </p>
                            <p>
                                La <b>varianza</b> della legge gamma è:
                            </p>
                            <p>
                                <Latex>{r`Var(X) = \frac{\alpha}{\lambda^2}`}</Latex>
                            </p>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Uniforme"}>
                    <Panel title={"Distribuzione uniforme"}>
                        <p>
                            Una variabile aleatoria che può assumere qualsiasi valore in un intervallo <Latex>{r`[a, b]`}</Latex> in modo equiprobabile.
                        </p>
                        <p>
                            Il suo simbolo è <Latex>{r`Uni(a, b)`}</Latex>
                        </p>
                        <p>
                            Su di essa vale la seguente proprietà:
                        </p>
                        <p>
                            <Latex>{r`P(X \in (c, d)) = \frac{d - c}{b - a}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Densità della distribuzione uniforme"}>
                        <p>
                            La distribuzione uniforme ha come <b>densità</b>:
                        </p>
                        <p>
                            <Latex>{r`f_X (x) = \begin{cases}
                                \frac{1}{b - a} \qquad a \leq x \leq b\\
                                0 \qquad \quad altrimenti    
                            \end{cases}`}</Latex>
                        </p>
                        <p>
                            La distribuzione uniforme ha come <b>funzione di ripartizione</b>:
                        </p>
                        <p>
                            <Latex>{r`f_X (x) = \begin{cases}
                                0 \qquad \quad x < a  
                                \frac{1}{b - a} \qquad a \leq x \leq b\\
                                1 \qquad \quad x > b
                            \end{cases}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Momenti della distribuzione uniforme"}>
                        <p>
                            <p>
                                La <b>funzione generatrice dei momenti</b> della distribuzione uniforme è:
                            </p>
                            <p>
                                <Latex>{r`m_X (t) = \frac{e^{b \cdot t} - e^{a \cdot t}}{(b - a) \cdot t}`}</Latex>
                            </p>
                            <p>
                                La <b>media</b> della distribuzione uniforme è:
                            </p>
                            <p>
                                <Latex>{r`E(X) = \frac{a + b}{2}`}</Latex>
                            </p>
                            <p>
                                La <b>varianza</b> della distribuzione uniforme è:
                            </p>
                            <p>
                                <Latex>{r`Var(X) = \frac{(b - a)^2}{12}`}</Latex>
                            </p>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Normale o Gaussiana"}>
                    <Panel title={"Distribuzione normale"}>
                        <p>
                            Una variabile aleatoria con una specifica distribuzione.
                        </p>
                        <p>
                            Il suo simbolo è <Latex>{r`Nor(\mu, \sigma^2)`}</Latex>.
                        </p>
                        <Example>
                            <Latex>\mu</Latex> e <Latex>\sigma^2</Latex> sono rispettivamente la media e la varianza della distribuzione!
                        </Example>
                    </Panel>
                    <Panel title={"Densità della distribuzione normale"}>
                        <p>
                            La distribuzione normale ha come densità:
                        </p>
                        <p>
                            <Latex>{r`f_X (x) = \frac{e^{-\frac{(x - \mu)^2}{2 \sigma^2}}}{\sqrt{2 \pi \cdot \sigma^2}}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Momenti della distribuzione normale"}>
                        <p>
                            <p>
                                La <b>funzione generatrice dei momenti</b> della distribuzione normale è:
                            </p>
                            <p>
                                <Latex>{r`m_X (t) = e^{\mu \cdot t + \frac{\sigma^2 \cdot t^2}{2}}`}</Latex>
                            </p>
                            <p>
                                La <b>media</b> della distribuzione normale è:
                            </p>
                            <p>
                                <Latex>{r`E(X) = \mu`}</Latex>
                            </p>
                            <p>
                                La <b>varianza</b> della distribuzione normale è:
                            </p>
                            <p>
                                <Latex>{r`Var(X) = \sigma^2`}</Latex>
                            </p>
                        </p>
                    </Panel>
                </Section>
                <Section>
                    <Panel title={"Trasformazione della normale"}>
                        <p>
                            Qualsiasi normale può essere trasformata in qualsiasi altra normale:
                        </p>
                        <p>
                            <Latex>{r`X \sim Nor(m, v^2) \implies \alpha X + \beta \sim Nor(\alpha m + \beta, (\alpha v)^2)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Normale standard"}>
                        <p>
                            La distribuzione normale standard <Latex>Z</Latex> è:
                        </p>
                        <p>
                            <Latex>Z \sim Nor(0, 1)</Latex>
                        </p>
                        <p>
                            La sua funzione di ripartizione è detta <Latex>{r`\phi(z)`}</Latex> e vale:
                        </p>
                        <p>
                            <Latex>{r`F_Z(z) = \phi(z) = \frac{1}{\sqrt{2 \pi}} \int_{-\infty}^{z} e^{-\frac{x^2}{2}} dx`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Quantili normali"}>
                        <p>
                            Da un quantile <Latex>{r`z_\alpha`}</Latex> della normale standard è possibile risalire allo stesso quantile di qualsiasi altra normale:
                        </p>
                        <p>
                            <Latex>{r`x_\alpha = \mu + z_\alpha \cdot \sqrt{\sigma^2}`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section>
                    <Panel title={"Gamma e normale"}>
                        <p>
                            La distribuzione normale ha una particolare relazione con la distribuzione Gamma:
                        </p>
                        <p>
                            <Latex>{r`Z^2 \sim \chi^2 (v = 1)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"La funzione Chi"}>
                        <blockquote>
                            "chi-quadro a un grado di libertà"
                        </blockquote>
                        <p>
                            Esiste una distribuzione Gamma particolare:
                        </p>
                        <p>
                            <Latex>{r`\Gamma \left( \frac{1}{2}, \frac{1}{2} \right) = \chi^2 (v = 1)`}</Latex>
                        </p>
                        <p>
                            Più chi-quadro possono essere sommate per aumentare i loro gradi di libertà:
                        </p>
                        <p>
                            <Latex>{r`\chi^2 (n) + \chi^2 (m) = \chi^2 (n + m)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"T di Student"}>
                        <p>
                            Un'altra funzione particolare è la funzione T di Student:
                        </p>
                        <p>
                            <Latex>{r`T(v) = \frac{Nor(0, 1)}{\sqrt{\frac{\chi^2(v)}{v}}}`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Approssimazioni notevoli"}>
                    <Panel title={"Ipergeometrica e binomiale"}>
                        <p>
                            La binomiale è come una ipergeometrica ma con ripetizioni, quindi per valori molto grandi di <Latex>N</Latex> rispetto a <Latex>n</Latex>, si può dire che:
                        </p>
                        <p>
                            <Latex>{r`Ipe(N, K, n) \approx Bin(n, \frac{K}{N})`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Binomiale e poissoniana"}>
                        <p>
                            La binomiale non è altro che una poissoniana a tempo discreto, quindi, se <Latex>n</Latex> è grande e <Latex>n \cdot p</Latex> è nell'ordine di grandezza delle unità, allora:
                        </p>
                        <p>
                            <Latex>{r`Bin(n, p) \approx Poi(n \cdot p)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Binomiale e normale"}>
                        <p>
                            Per il Teorema di De Moivre-Laplace, se una binomiale ha una <Latex>n</Latex> grande e <Latex>p</Latex> non vicina a 0 o 1, si può approssimare con:
                        </p>
                        <p>
                            <Latex>{r`Bin(n, p) \approx Nor(n \cdot p, n \cdot p \cdot q)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Correzione di Yates"}>
                        <p>
                            Passando da una variabile discreta <Latex>X</Latex> a una continua <Latex>Y</Latex>, per ogni valore discreto <Latex>k</Latex> la probabilità viene "spalmata" su tutto l'intervallo <Latex>{r`(k - \frac{1}{2}, k + \frac{1}{2})`}</Latex>:
                        </p>
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
                        <p>
                            Un vettore <b>composto da variabili aleatorie</b>.
                        </p>
                        <p>
                            Il suo simbolo generalmente è <Latex>{r`\boldsymbol{X}`}</Latex> oppure <Latex>{r`X, Y`}</Latex>.
                        </p>
                    </Panel>
                    <Panel title={"Funzioni di ripartizione"}>
                        <p>
                            I vettori aleatori hanno più funzioni di ripartizione che si differenziano in base al numero di parametri.
                        </p>
                        <p>
                            Se il numero di parametri coincide con la dimensione del vettore aleatorio, allora la funzione sarà una <i>funzione di ripartizione congiunta</i>:
                        </p>
                        <p>
                            <Latex>{r`F_{X, Y} (x, y) = P(X \leq x, Y \leq y)`}</Latex>
                        </p>
                        <p>
                            Se il numero di parametri è minore della dimensione del vettore aleatorio, allora la funzione sarà una <i>funzione di ripartizione marginale</i>:
                        </p>
                        <p>
                            <Latex>{r`F_X (x) = P(X \leq x) = \lim_{y \to +\infty} F_{X, Y} (x, y)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Densità discreta"}>
                        <p>
                            I vettori aleatori <b>discreti</b> hanno più densità che si differenziano in base al numero di parametri.
                        </p>
                        <p>
                            Se il numero di parametri coincide con la dimensione del vettore aleatorio, allora la funzione sarà una <i>densità congiunta</i>:
                        </p>
                        <p>
                            <Latex>{r`p_{X, Y} (x, y) = P(X = x, Y = y)`}</Latex>
                        </p>
                        <p>
                            Se il numero di parametri è minore della dimensione del vettore aleatorio, allora la funzione sarà una <i>densità marginale</i>:
                        </p>
                        <p>
                            <Latex>{r`p_X (x) = \sum_j p_{X, Y} (x_i, y_j)`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Più variabili aleatorie"}>
                    <Panel title={"Indipendenza delle variabili aleatorie"}>
                        <p>
                            Più variabili aleatorie sono indipendenti se, per qualsiasi scelta di intervalli <Latex>A_i</Latex>:
                        </p>
                        <p>
                            <Latex>{r`P(X_1 \in A_1, \dots, X_n \in A_n) = P(X_1 \in A_1) \times \dots \times P(X_n \in A_n)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Media dei vettori aleatori"}>
                        <p>
                            E' possibile calcolare la media di qualsiasi funzione <Latex>g(X, Y)</Latex> avente elementi del vettore come variabili:
                        </p>
                        <p>
                            <Latex>{r`E(g(X, Y)) = \sum_{i, j} g(x_i, y_i) \cdot p_{X, Y} (x_i, y_i)`}</Latex>
                        </p>
                        <Example>
                            Solitamente si calcola la media di <Latex>x \cdot y</Latex>.
                        </Example>
                        <p>
                            Le medie di più variabili aleatorie si possono sommare:
                        </p>
                        <p>
                            <Latex>{r`E(X + Y) = E(X) + E(Y)`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section>
                    <Panel title={"Covarianza"}>
                        <p>
                            Un <b>operatore</b> che misura la correlazione di due variabili aleatorie.
                        </p>
                        <p>
                            Si calcola con il valore atteso dei prodotti delle distanze dalla media:
                        </p>
                        <p>
                            <Latex>{r`Cov(X, Y) = E((X - E(X) \cdot (Y - E(Y)) = E(XY) - E(X) \cdot E(Y)`}</Latex>
                        </p>
                        <p>
                            Ha diverse proprietà:
                        </p>
                        <ul>
                            <li>Il suo <b>valore nullo</b> è 0: <Latex>{r`Cov(X, \alpha) = 0`}</Latex></li>
                            <li>E' <b>commutativa</b>: <Latex>{r`Cov(X, Y) = Cov(Y, X)`}</Latex></li>
                            <li>E' <b>semplificabile</b>: <Latex>{r`Cov(X, X) = Var(X)`}</Latex></li>
                            <li>E' <b>lineare</b>: <Latex>{r`Cov(\alpha X, \beta Y) = \alpha \cdot \beta \cdot Cov(X, Y)`}</Latex></li>
                            <li>E' <b>distributiva</b>: <Latex>{r`Cov(X + Y, V + W) = Cov(X, Y) + Cov(X, W) + Cov(Y, V) + Cov(Y, W)`}</Latex></li>
                        </ul>
                    </Panel>
                    <Panel title={"Variabili incorrelate"}>
                        <p>
                            Due variabili sono <i>variabili incorrelate</i> se:
                        </p>
                        <p>
                            <Latex>{r`Cov(X, Y) = 0`}</Latex>
                        </p>
                        <p>
                            Variabili indipendenti sono sempre incorrelate.
                        </p>
                    </Panel>
                    <Panel title={"Matrice di covarianza"}>
                        <p>
                            Una matrice <Latex>{r`\boldsymbol{C_X}`}</Latex> che contiene la covarianza tra tutte le variabili di un vettore aleatorio <Latex>{r`\boldsymbol{X}`}</Latex>:
                        </p>
                        <p>
                            <Latex>{r`
                                \boldsymbol{C_X} = 
                                \begin{bmatrix}
                                    Var(X_1) & Cov(X_1, X_2) & Cov(X_1, X_3)\\
                                    Cov(X_2, X_1) & Var(X_2) & Cov(X_2, X_3)\\
                                    Cov(X_3, X_1) & Cov(X_3, X_2) & Var(X_3)
                                \end{bmatrix}
                            `}</Latex>
                        </p>
                        <p>
                            E' sempre simmetrica e semidefinita positiva (tutti gli autovalori sono <Latex>\geq 0</Latex>.
                        </p>
                    </Panel>
                    <Panel title={"Coefficiente di correlazione"}>
                        <p>
                            Un valore che misura come due variabili aleatorie sono correlate:
                        </p>
                        <p>
                            <Latex>{r`\rho_{X, Y} = \frac{Cov(X, Y)}{\sqrt{Var(X)} \cdot \sqrt{Var(Y)}}`}</Latex>
                        </p>
                        <p>
                            E' sempre compreso tra -1 e 1:
                        </p>
                        <p>
                            <Latex>{r`-1 \leq \rho_{X, Y} \leq 1`}</Latex>
                        </p>
                        <p>
                            Vale esattamente -1 o 1 solo se esiste un legame lineare tra le due variaibli:
                        </p>
                        <p>
                            <Latex>{r`Y = a X + b \Longleftrightarrow | \rho_{X, Y} | = 1`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Varianza di variabili aleatorie sommate"}>
                        <p>
                            La varianza di due variabili aleatorie sommate è:
                        </p>
                        <p>
                            <Latex>{r`Var(X + Y) = Var(X) + Var(Y) + 2 \cdot Cov(X, Y)`}</Latex>
                        </p>
                        <Example>
                            Si dimostra applicando le proprietà della covarianza!
                        </Example>
                        <p>
                            Se più variabili aleatorie <Latex>X_i</Latex> sono <b>indipendenti</b> (<Latex>{r`Cov(X, Y) = 0`}</Latex>), allora:
                        </p>
                        <p>
                            <Latex>{r`Var \left( \sum_i X_i \right) = \sum_i Var(X_i)`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Campioni"}>
                    <Panel title={"Campione casuale"}>
                        <p>
                            Una <b>n-pla</b> di variabili aleatorie con la stessa distribuzione della variabile aleatoria <Latex>X</Latex> ("popolazione") ma <b>indipendenti</b> tra loro.
                        </p>
                        <Example>
                            Le variabili aleatorie sono come un lazy-load in programmazione; quando ci sarà bisogno del loro valore numerico, esse si <b>realizzeranno</b> nel loro valore.
                        </Example>
                    </Panel>
                    <Panel title={"Momento campionario"}>
                        <p>
                            Il valore dato dalla media aritmetica degli <Latex>n</Latex> elementi del campione elevati alla potenza <Latex>k</Latex>:
                        </p>
                        <p>
                            <Latex>{r`M^{(k)}_n = \frac{1}{n} \cdot \sum_{i = 1}^n X_i^k `}</Latex>
                        </p>
                        <p>
                            Il momento campionario di primo ordine è la <i>media campionaria</i> <Latex>{r`\overline{X}_n`}</Latex>.
                        </p>
                    </Panel>
                    <Panel title={"Varianza campionaria"}>
                        <p>
                            La media aritmetica dello scarto quadratico medio degli elementi del campione.
                        </p>
                        <p>
                            Se è noto il valore medio <Latex>{r`m = E(X)`}</Latex> di X:
                        </p>
                        <p>
                            <Latex>{r`S_0^2 = \frac{1}{n} \cdot \sum_{i = 1}^n (X_i - m)^2 = M_n^(2) - 2 \cdot m \cdot \overline{X}_n + m^2`}</Latex>
                        </p>
                        <p>
                            Altrimenti:
                        </p>
                        <p>
                            <Latex>{r`S_n^2 = \frac{1}{n - 1} \cdot \sum_{i = 1}^n (X_i - \overline{X}_n)^2 = \frac{1}{n - 1} \cdot ( n \cdot M_2^{(2)} - n \cdot \overline{X}_n^2)`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Media-ception"}>
                    <Panel title={"Media campionaria"}>
                        <p>
                            Se calcoliamo la media della media campionaria, risulterà vero che:
                        </p>
                        <p>
                            <Latex>{r`E(\overline{X}_n) = E(X)`}</Latex>
                        </p>
                        <Example>
                            Quindi, è possibile usare i campioni per trovare la media di una variabile aleatoria!
                        </Example>
                    </Panel>
                    <Panel title={"Varianza campionaria"}>
                        <p>
                            Se calcoliamo la varianza della media campionaria, risulterà vero che:
                        </p>
                        <p>
                            <Latex>{r`Var(\overline{X}_n) = \frac{Var(X)}{n}`}</Latex>
                        </p>
                        <Example>
                            Quindi, possiamo stimare l'errore della media calcolata tramite campioni!
                        </Example>
                    </Panel>
                    <Panel title={"Correzione campionaria"}>
                        <p>
                            Se calcoliamo la media della varianza campionaria, risulterà vero che:
                        </p>
                        <p>
                            <Latex>{r`E(S_0^2) = E(S_n^2) = Var(X)`}</Latex>
                        </p>
                        <Example>
                            Quindi, possiamo stimare l'errore della media calcolata tramite campioni!
                        </Example>
                    </Panel>
                </Section>
                <Section title={"Campionamento di una distribuzione normale"}>
                    <Panel title={"Campionamento di una distribuzione normale"}>
                        <p>
                            Se la popolazione <Latex>X</Latex> ha una distribuzione normale (<Latex>{r`X \sim Nor(\mu, \sigma^2)`}</Latex>)...
                        </p>
                    </Panel>
                    <Panel title={"Distribuzione della media campionaria"}>
                        <p>
                            ...allora sappiamo anche la distribuzione della media campionaria!
                        </p>
                        <p>
                            <Latex>{r`\overline{X}_n \sim Nor \left( \mu, \frac{\sigma^2}{n} \right)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Distribuzione della varianza campionaria"}>
                        <p>
                            ...e anche della varianza campionaria!
                        </p>
                        <p>
                            <Latex>{r`S_0^2 \sim \frac{\sigma^2}{n} \cdot \chi^2 (n)`}</Latex>
                        </p>
                        <p>
                            <Latex>{r`S_n^2 \sim \frac{\sigma^2}{n - 1} \cdot \chi^2 (n-1)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Indipendenza"}>
                        <p>
                            ...e che media campionaria e varianza campionaria sono indipendenti tra loro!
                        </p>
                    </Panel>
                </Section>
                <Section title={"Quando i campioni hanno dimensioni infinite"}>
                    <Panel title={"Convergenza in distribuzione"}>
                        <p>
                            Se la successione di variabili aleatorie <Latex>X_n</Latex> all'infinito ha la <b>stessa funzione di ripartizione</b> della popolazione <Latex>X</Latex>, allora essa <i>converge in distribuzione</i>.
                        </p>
                        <p>
                            <Latex>{`\\lim_{n \\to +\\infty} F_{X_n} (x) = F_X (x) \\implies X_n \\xrightarrow{d} X`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Convergenza in probabilità"}>
                        <p>
                            Se la successione di variabili aleatorie <Latex>X_n</Latex> all'infinito ha la <b>stessa probabilità</b> della popolazione <Latex>X</Latex>, allora essa <i>converge in probabilità</i>.
                        </p>
                        <p>
                            <Latex>{`\\forall \\epsilon > 0, \\lim_{n \\to +\\infty} P( | X_n - X | < \\epsilon) = 1 \\implies X_n \\xrightarrow{p} X`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Convergenza quasi certa"}>
                        <p>
                            Se la successione di variabili aleatorie <Latex>X_n</Latex> all'infinito ha la <b>stessa probabilità a </b> della popolazione <Latex>X</Latex>, allora essa <i>converge quasi certamente</i>.
                        </p>
                        <p>
                            <Latex>{`\\forall \\epsilon > 0, P \left( \\lim_{n \\to +\\infty} | X_n - X | < \\epsilon) \right) = 1 \\implies X_n \\xrightarrow{qc} X`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Convergenza in media quadratica"}>
                        <p>
                            Se la successione di variabili aleatorie <Latex>X_n</Latex> all'infinito ha la <b>media del quadrato della distanza</b> tra la successione e la popolazione <Latex>X</Latex> <b>uguale a 0</b>, allora essa <i>converge in media quadratica</i>.
                        </p>
                        <p>
                            <Latex>{`\\lim_{n \\to +\\infty} E( | X_n - X |^2 = 0 \\implies X_n \\xrightarrow{mq} X`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Gerarchia delle convergenze"}>
                        <p>
                            <Latex>{`
                                \\begin{matrix}
                                X_n \\xrightarrow{mq} X\\\\
                                X_n \\xrightarrow{qc} X
                                \\end{matrix} \\implies X_n \\xrightarrow{p} X \\implies X_n \\xrightarrow{d} X`
                            }</Latex>
                        </p>
                        <p>
                            In più:
                        </p>
                        <p>
                            <Latex>{`X_n \\xrightarrow{p} x \\Longleftrightarrow X_n \\xrightarrow{d} x`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section title={"I grandi numeri"}>
                    <Panel title={"Legge debole dei grandi numeri"}>
                        <p>
                            La successione delle medie campionarie <Latex>{r`\overline{X}_n`}</Latex> <b>converge in probabilità</b> alla media della popolazione <Latex>{r`E(X)`}</Latex>, se essa esiste.
                        </p>
                        <p>
                            <Latex>{`\\overline{X}_n \\xrightarrow{p} X`}</Latex>
                        </p>
                        <p>
                            Ovvero:
                        </p>
                        <p>
                            <Latex>{r`\forall \epsilon > 0, \lim_{n \to +\infty} P( | \overline{X}_n - E(X) | < \epsilon) = 1`}</Latex>
                        </p>
                        <p>
                            <Latex>{r`P( | \overline{X}_n - E(X) | < \epsilon) \to 1`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Legge forte dei grandi numeri"}>
                        <p>
                            La successione delle medie campionarie <Latex>{r`\overline{X}_n`}</Latex> <b>converge quasi certamente</b> alla media della popolazione <Latex>{r`E(X)`}</Latex>, se essa esiste.
                        </p>
                        <p>
                            <Latex>{`\\overline{X}_n \\xrightarrow{qc} X`}</Latex>
                        </p>
                        <p>
                            Ovvero:
                        </p>
                        <p>
                            <Latex>{r`\forall \epsilon > 0, P \left( \lim_{n \to +\infty} | \overline{X}_n - E(X) | < \epsilon \right) = 1`}</Latex>
                        </p>
                        <Example>
                            Dimostra che l'interpretazione frequentista della probabilità è valida!
                        </Example>
                    </Panel>
                </Section>
                <Section title={"Al limite"}>
                    <Panel title={"Teorema centrale del limite"}>
                        <p>
                            La successione delle medie campionarie <Latex>{r`\overline{X}_n`}</Latex> <b>converge in distribuzione</b> a <Latex>{r`Nor(0, 1) = \Phi()`}</Latex>.
                        </p>
                        <p>
                            <Latex>{r`\overline{X}_n \approx Nor \left(E(X), \frac{Var(X)}{n} \right)`}</Latex>
                        </p>
                        <p>
                            Ovvero:
                        </p>
                        <p>
                            <Latex>{r`\forall x \in \mathbb{R}, \lim_{n \to +\infty} P \left( \frac{\overline{X}_n - E(X)}{\sqrt{\frac{Var(X)}{n}}} \leq x \right) = \Phi(x)`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Altre approsimazioni"}>
                    <Panel title={"Binomiale e normale"}>
                        <p>
                            E' una somma di <b>bernoulliane</b>, e quindi si approssima a una normale:
                        </p>
                        <p>
                            <Latex>{r`Bin(n, p) \approx Nor(n \cdot p, n \cdot p \cdot q)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Binomiale negativa e normale"}>
                        <p>
                            E' una somma di <b>geometriche</b>, e quindi si approssima a una normale:
                        </p>
                        <p>
                            <Latex>{r`\overline{Bin} (n, p) \approx Nor \left( \frac{n}{p}, \frac{n \cdot (1 - p)}{p^2} \right)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Poissoniana e normale"}>
                        <p>
                            E' una somma di altre <b>poissoniane</b>, e quindi si approssima a una normale:
                        </p>
                        <p>
                            <Latex>{r`Poi(\lambda) \approx Nor(\lambda, \lambda)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Gamma e normale"}>
                        <p>
                            E' una somma di <b>esponenziali</b>, e quindi si approssima a una normale:
                        </p>
                        <p>
                            <Latex>{r`\Gamma (\alpha, \lambda) \approx Nor \left( \frac{\alpha}{\lambda}, \frac{\alpha}{\lambda^2} \right)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"In generale"}>
                        <p>
                            Se <Latex>n</Latex> è grande, allora:
                        </p>
                        <p>
                            <Latex>{r`Y = \sum_{i=1}^{n} X_i`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Actually statistica"}>
                    <Panel title={"Parametri sconosciuti"}>
                        <p>
                            Per indicare parametri sconosciuti di una legge si usa <Latex>\theta</Latex>.
                        </p>
                    </Panel>
                    <Panel title={"Statistica"}>
                        <p>
                            Una variabile aleatoria funzione di un campione:
                        </p>
                        <p>
                            <Latex>{r`T(\boldsymbol{X})`}</Latex>
                        </p>
                        <Example>
                            Ad esempio, sono statistiche media e varianza campionaria, così come il campione stesso <Latex>{r`T(\boldsymbol{X}) = \boldsymbol{X}`}</Latex>.
                        </Example>
                    </Panel>
                </Section>
                <Section title={"Stimatori"}>
                    <Panel title={"Stimatore"}>
                        <p>
                            Una statistica <Latex>T_n</Latex> ottenuta da <Latex>n</Latex> osservazioni, che stimi i parametri di una legge e sia indipendente da essi.
                        </p>
                    </Panel>
                    <Panel title={"Corretto"}>
                        <p>
                            Uno stimatore è <i>corretto</i> se il suo valore atteso coincide con quello dei parametri che stima:
                        </p>
                        <p>
                            <Latex>{r`E(T_n) = \theta`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Asintoticamente corretto"}>
                        <p>
                            Uno stimatore è <i>asintoticamente corretto</i> se, per infinite osservazioni, il suo valore atteso coincide con quello dei parametri che stima:
                        </p>
                        <p>
                            <Latex>{r`\lim_{n \to +\infty} E(T_n) = \theta`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Consistente in media quadratica"}>
                        <p>
                            Uno stimatore è <i>consistente in media quadratica</i> se:
                        </p>
                        <p>
                            <Latex>{r`\lim_{n \to +\infty} E((T_n - \theta)^2) = 0`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Consistente in probabilità"}>
                        <p>
                            Uno stimatore è <i>consistente in probabilità</i> se:
                        </p>
                        <p>
                            <Latex>{r`\forall \epsilon > 0, \lim_{n \to +\infty} P( |T_n - \theta| < \epsilon) = 1`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Asintoticamente normale"}>
                        <p>
                            Uno stimatore è <i>asintoticamente normale</i> se:
                        </p>
                        <p>
                            <Latex>{r`\lim_{n \to +\infty} \frac{T_n - E(T_n)}{\sqrt{Var(T_n)}} \sim Nor(0, 1)`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Metodo dei momenti"}>
                    <Panel title={"Metodo dei momenti"}>
                        <p>
                            Si può usare il <i>metodo dei momenti</i> per ottenere uno stimatore di una popolazione <Latex>X</Latex>.
                        </p>
                        <p>
                            Lo stimatore di <Latex>{r`\theta`}</Latex> così ottenuto sarà indicato aggiungendo un cappellino e una <Latex>M</Latex> a <Latex>\theta</Latex>: <Latex>{r`\widehat{\theta}_M`}</Latex>
                        </p>
                        <p>
                            Visto che:
                        </p>
                        <ul>
                            <li><Latex>{r`\theta = g(E(X))`}</Latex></li>
                            <li><Latex>{r`\widehat{E(X)} = \overline{X}_n`}</Latex></li>
                        </ul>
                        <p>
                            Allora:
                        </p>
                        <p>
                            <Latex>{r`\widehat{\theta}_M = g( \overline{X}_n )`}</Latex>
                        </p>
                        <p>
                            Se <Latex>{r`\theta`}</Latex> non è esprimibile in termini di <Latex>{r`E(X)`}</Latex>, si possono usare i momenti successivi <Latex>{r`M_n^2`}</Latex>, <Latex>{r`M_n^3`}</Latex>, <Latex>{r`M_n^3`}</Latex>...
                        </p>
                    </Panel>
                </Section>
                <Section title={"Metodo della massima verosomiglianza"}>
                    <Panel title={"Metodo della massima verosomiglianza"}>
                        <p>
                            Si può usare il <i>metodo della massima verosomiglianza</i> per ottenere uno stimatore di una popolazione <Latex>X</Latex>.
                        </p>
                        <p>
                            Lo stimatore di <Latex>{r`\theta`}</Latex> così ottenuto sarà indicato aggiungendo un cappellino e una <Latex>L</Latex> a <Latex>\theta</Latex>: <Latex>{r`\widehat{\theta}_L`}</Latex>
                        </p>
                        <p>
                            Consiste nel trovare il massimo assoluto <Latex>{r`\widehat{\theta}_L`}</Latex> della la funzione di verosomiglianza <Latex>{r`L`}</Latex>:
                        </p>
                        <p>
                            <Latex>{r`L(x_1, ..., x_n; \theta) = \prod_{i=1}^n f_X(x_i; \theta)`}</Latex>
                        </p>
                        <p>
                            Gli stimatori di massima verosomiglianza sono <b>asintoticamente corretti</b>, <b>consistenti in probabilità</b> e <b>asintoticamente normali</b>.
                        </p>
                    </Panel>
                    <Panel title={"Proprietà degli stimatori di massima verosomiglianza"}>
                        <p>
                            Gli stimatori di massima verosomiglianza godono delle seguenti proprietà:
                        </p>
                        <ul>
                            <li>Sono <b>asintoticamente corretti</b>.</li>
                            <li>Sono <b>consistenti in probabilità</b>.</li>
                            <li>Sono <b>asintoticamente normali</b>.</li>
                            <li>Sono <b>invarianti</b>: <Latex>{r`\widehat{g(\theta)}_L = g(\widehat{\theta}_L)`}</Latex></li>
                        </ul>
                    </Panel>
                </Section>
                <Section title={"Nuove stime notevoli"}>
                    <Panel title={"Stima di una bernoulliana"}>
                        <p>
                            Per il metodo dei momenti oppure per il metodo della massima verosomiglianza:
                        </p>
                        <p>
                            <Latex>{r`\widehat{p}_M = \widehat{p}_L = \overline{X}_n`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Stima di una poissoniana"}>
                        <p>
                            Per il metodo dei momenti oppure per il metodo della massima verosomiglianza:
                        </p>
                        <p>
                            <Latex>{r`\widehat{\mu}_M = \widehat{\mu}_L = \overline{X}_n`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Stima di una esponenziale"}>
                        <p>
                            Per il metodo dei momenti oppure per il metodo della massima verosomiglianza:
                        </p>
                        <p>
                            <Latex>{r`\widehat{\lambda}_M = \widehat{\lambda}_L = \frac{1}{\overline{X}_n}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Stima di una normale"}>
                        <p>
                            Per il metodo della massima verosomiglianza:
                        </p>
                        <ul>
                            <li><Latex>{r`\widehat{\mu}_L = \overline{X}_n`}</Latex></li><br/>
                            <li><Latex>{r`\widehat{\sigma^2}_L = \frac{\sum (X_i - \overline{X}_n)^2 }{n}`}</Latex></li>
                        </ul>
                    </Panel>
                </Section>
                <Section title={"Intervalli di confidenza"}>
                    <Panel title={"Confidenza"}>
                        <blockquote>
                            "intervallo di confidenza al 95%"
                        </blockquote>
                        <p>
                            L'intervallo di valori di <Latex>\theta</Latex> all'interno del quale siamo "più o meno sicuri" si trovi il valore effettivo:
                        </p>
                        <p>
                            L'intervallo di confidenza a N della stima <Latex>{r`\widehat{W}`}</Latex> è l'intervallo <Latex>]a, b[</Latex> tale che:
                        </p>
                        <p>
                            <Latex>{r`P( a < W < b ) = N`}</Latex>
                        </p>
                        <p>
                            Può anche essere <b>unilatero</b> nel caso limiti la stima in una sola direzione, positiva o negativa.
                        </p>
                    </Panel>
                </Section>
                <Section title={"Confidenza nella media di una normale"}>
                    <Panel title={"Varianza nota"}>
                        <p>
                            Se conosciamo la varianza di una normale, allora possiamo ricavare velocemente gli intervalli di confidenza all'<Latex>\alpha</Latex>% con queste formule:
                        </p>
                        <ul>
                            <li>Intervalli bilateri: <Latex>{r`\mu \in \left[ \overline{x}_n - z_{1 - \frac{\alpha}{2}} \cdot \sqrt{\frac{\sigma^2}{n}}, \overline{x}_n + z_{1 - \frac{\alpha}{2}} \cdot \sqrt{\frac{\sigma^2}{n}} \right]`}</Latex></li>
                            <li>Intervallo unilatero da sinistra: <Latex>{r`\mu \in \left( -\infty, \overline{x}_n + z_{1 - \frac{\alpha}{2}} \cdot \sqrt{\frac{\sigma^2}{n}} \right]`}</Latex></li>
                            <li>Intervallo unilatero da destra: <Latex>{r`\mu \in \left[ \overline{x}_n - z_{1 - \frac{\alpha}{2}} \cdot \sqrt{\frac{\sigma^2}{n}}, +\infty \right)`}</Latex></li>
                        </ul>
                    </Panel>
                    <Panel title={"Varianza incognita"}>
                        <p>
                            Se non conosciamo la varianza di una normale, allora possiamo ricavare velocemente gli intervalli di confidenza all'<Latex>\alpha</Latex>% con queste formule:
                        </p>
                        <ul>
                            <li>Intervalli bilateri: <Latex>{r`\mu \in \left[ \overline{x}_n - t_{1 - \frac{\alpha}{2}; n-1} \cdot \sqrt{\frac{s_n^2}{n}}, \overline{x}_n + t_{1 - \frac{\alpha}{2}; n-1} \cdot \sqrt{\frac{s_n^2}{n}} \right]`}</Latex></li>
                            <li>Intervallo unilatero da sinistra: <Latex>{r`\mu \in \left( -\infty, \overline{x}_n + t_{1 - \frac{\alpha}{2}; n-1} \cdot \sqrt{\frac{s_n^2}{n}} \right]`}</Latex></li>
                            <li>Intervallo unilatero da destra: <Latex>{r`\mu \in \left[ \overline{x}_n - t_{1 - \frac{\alpha}{2}; n-1} \cdot \sqrt{\frac{s_n^2}{n}}, +\infty \right)`}</Latex></li>
                        </ul>
                        <p>
                            <Latex>{r`t_{\alpha, v}`}</Latex> è un quantile della distribuzione di Student di parametro <Latex>v</Latex>.
                        </p>
                    </Panel>
                </Section>
                <Section title={"Confidenza per la proporzione di una bernoulliana"}>
                    <Panel title={"Terzo metodo corretto"}>
                        <p>
                            L'intervallo di confidenza per la proprorzione di una bernoulliana qualsiasi si ottiene da questa formula:
                        </p>
                        <p>
                            <Latex>{r`p \in \left[ \overline{p} - z_{1 - \frac{\alpha}{2}} \cdot \sqrt{\frac{\overline{p} \cdot (1 - \overline{p})}{n+4}}, \overline{p} + z_{1 - \frac{\alpha}{2}} \cdot \sqrt{\frac{\overline{p} \cdot (1 - \overline{p})}{n+4}} \right]`}</Latex>
                        </p>
                    </Panel>
                </Section>
                <Section title={"Confidenza per la media di qualsiasi popolazione"}>
                    <Panel title={"Approssimando con la normale"}>
                        <p>
                            L'intervallo di confidenza per la media di una qualsiasi popolazione si ottiene da questa formula:
                        </p>
                        <p>
                            <Latex>{r`m \in \left[ \overline{x}_n - z_{1 - \frac{\alpha}{2}} \cdot \sqrt{\frac{s^2_n}{n}}, \overline{x}_n + z_{1 - \frac{\alpha}{2}} \cdot \sqrt{\frac{s^2_n}{n}} \right]`}</Latex>
                        </p>
                    </Panel>
                </Section>
            </div>
        </LatexDefaultInline.Provider>
    )
}
