import {
    Anchor as Link,
    Color,
    Help,
    Paragraph as P,
    Bold as B,
    Italic as I,
    Title,
    Anchor, ListItem as LI, BaseLink,
} from "bluelib/lib/components"
import LatexMath from "bluelib/lib/components/LatexMath"

import Box from "../../components/Box"
import Split from "../../components/Split"
import Todo from "../../components/Todo"


const r = String.raw
const BLatex = ({ children, ...props }) => <LatexMath {...props} block={true}>{children}</LatexMath>
const ILatex = ({ children, ...props }) => <LatexMath {...props} block={false}>{children}</LatexMath>
const PLatex = ({ children, ...props }) => <BLatex style={{marginTop: "8px", marginBottom: "8px"}} {...props}>{children}</BLatex>
const Example = ({ children, ...props }) => <Color builtin={"magenta"}><Box {...props}>{children}</Box></Color>
const Tick = ({children}) => <Help text={"Un quanto di tempo del sistema."}>{children ?? "tick"}</Help>


export default function Apprendimento() {
    return (
        <div>
            <Split title={"Apprendimento ed evoluzione in sistemi artificiali"}>
                <Box title={"Di cosa si tratta?"}>
                    <P>
                        <Todo>Questa parte non è ancora stata scritta.</Todo>
                    </P>
                </Box>
                <Box title={"Il corso all'Unimore"}>
                    <P>
                        🎓 Il corso è stato tenuto dal <Anchor href={"mailto:marco.villani@unimore.it"}>Prof. Marco Villani</Anchor>.
                    </P>
                    <P>
                        📘 Le dispense <Color builtin={"red"}>non sono più disponibili</Color>.
                    </P>
                    <P>
                        🎥 Le videolezioni <Color builtin={"red"}>non sono più disponibili</Color>.
                    </P>
                </Box>
                <Box title={"Materiale utilizzato"}>
                    <ul>
                        <LI><BaseLink disabled={true}>📄 Dispense</BaseLink></LI>
                        <LI><Anchor href={"https://www.wikipedia.org/"}>📰 Wikipedia</Anchor></LI>
                    </ul>
                </Box>
            </Split>
            <Split title={"NetLogo"}>
                <Box title={"Cos'è?"}>
                    <P>
                        NetLogo è un software di modellazione sistemi multiagente, da noi usato per le lezioni di
                        laboratorio.
                    </P>
                    <P>
                        Si può <Anchor href={"https://ccl.northwestern.edu/netlogo/download.shtml"}>scaricare</Anchor> o <Anchor
                        href={"https://www.netlogoweb.org/launch"}
                    >usare da browser</Anchor>.
                    </P>
                    <P>
                        Il suo codice sorgente è disponibile su <Anchor
                        href={"https://github.com/NetLogo/NetLogo"}
                    >GitHub</Anchor>, e ha una pagina di <Anchor
                        href={"https://ccl.northwestern.edu/netlogo/docs/dictionary.html"}
                    >documentazione</Anchor>.
                    </P>
                </Box>
            </Split>
            <Split title={"Sistemi dinamici"}>
                <Box title={"Cosa sono?"}>
                    <P>
                        Sistemi naturali o artificiali che si basano su <B>leggi reversibili e deterministiche</B>.
                    </P>
                    <P>
                        In natura, alcuni leggi possono sembrare irreversibili a livello macroscopico, ma sono in realtà
                        reversibili a livello microscopico.
                    </P>
                    <Example>
                        <Anchor href={"https://it.wikipedia.org/wiki/Modello_di_Ehrenfest"}><u>Urne di Ehrenfest</u></Anchor>:
                        due urne con N palline; estraggo una pallina da una urna casuale ad ogni passo e la sposto
                        nell'altra; con tante palline il sistema appare irreversibile.
                    </Example>
                </Box>
                <Box title={"Fasi"}>
                    <P>
                        <B>Stati</B> in cui si può trovare un sistema dinamico.
                    </P>
                    <P>
                        Tutte insieme formano lo <I>(iper)<B>spazio delle fasi</B></I>.
                    </P>
                </Box>
                <Box title={"Attrattore"}>
                    <P>
                        Lo <B>stato finale</B> di un sistema dinamico.
                    </P>
                    <P>
                        Tutte le fasi tendono a uno specifico attrattore.
                    </P>
                </Box>
                <Box title={"Elaborazione di informazione"}>
                    <P>
                        I sistemi dinamici <B>elaborano informazione</B> attraversando fasi e raggiungendo un
                        attrattore.
                    </P>
                    <Example>
                        L'evoluzione biologica crea nuove specie partendo da quelle precedenti di maggiore successo fino
                        a quando non si raggiunge la specie perfetta.
                    </Example>
                    <Example>
                        Si può vedere l'universo come un gigantesco sistema dinamico. <Anchor
                        href={"https://it.wikipedia.org/wiki/Ipotesi_della_simulazione"}
                    >Che sia artificiale?</Anchor> <Anchor
                        href={"https://it.wikipedia.org/wiki/Morte_termica_dell%27universo"}
                    >Qual è il suo
                     attrattore?</Anchor>
                    </Example>
                </Box>
            </Split>
            <Split title={"Sistemi lineari"}>
                <Box title={"Cosa sono?"}>
                    <P>
                        Sistemi dinamici i cui cambiamenti sono descritti da <B>funzioni lineari</B>.
                    </P>
                </Box>
                <Box title={"Nodi"}>
                    <P>
                        <B>Situazioni iniziali</B> di un sistema lineare.
                    </P>
                    <P>
                        Possono essere:
                    </P>
                    <ul>
                        <LI><u>Stabili</u>: <B>convergono</B> ad un punto fisso</LI>
                        <LI><u>Instabili</u>: <B>divergono</B> da un punto fisso</LI>
                        <LI><Anchor href={"https://it.wikipedia.org/wiki/Punto_di_sella"}><u>Di sella</u></Anchor></LI>
                    </ul>
                    <P>
                        Nell'insieme dei <ILatex>{r`\mathbb{C}`}</ILatex> possono anche dare origine a:
                    </P>
                    <ul>
                        <LI><u>Spirali stabili</u>: spirali che <B>convergono</B></LI>
                        <LI><u>Spirali instabili</u>: spirali che <B>divergono</B></LI>
                        <LI><u>Cicli</u>: il sistema forma un ciclo diverso in base alla posizione del nodo</LI>
                        <LI><u>Cicli limite</u>: il sistema evolve fino a formare un ciclo specifico</LI>
                    </ul>
                    <P>
                        Infine, in sistemi dissipativi può anche comparire:
                    </P>
                    <ul>
                        <LI><u>Caos</u>: il sistema evolve in maniera pseudo-casuale</LI>
                    </ul>
                    <Example>
                        Mai sentito parlare di <Anchor href={"https://en.wikipedia.org/wiki/Mersenne_Twister"}>Mersenne
                                                                                                          Twister</Anchor>?
                    </Example>
                </Box>
                <Box title={"Potenziale"}>
                    <P>
                        Funzione che rappresenta lo stato attuale del sistema.
                    </P>
                    <P>
                        Gli attrattori coincidono con i suoi <B>punti di minimo</B>, detti <I>punti fissi</I>.
                    </P>
                    <P>
                        Il suo complementare è la <B>funzione energia</B>.
                    </P>
                </Box>
            </Split>
            <Split title={"Agenti"}>
                <Box title={"Secondo il paradigma debole"}>
                    <P>
                        Sono <B>sistemi</B> con le seguenti caratteristiche:
                    </P>
                    <ul>
                        <LI><B>Autonomia</B>: agiscono gli uni indipendentemente dagli altri</LI>
                        <LI><B>Reattività</B>: percepiscono ciò che sta nel loro ambiente e <I>reagiscono</I> ai
                                             cambiamenti di quest'ultimo
                        </LI>
                        <LI><B>Proattività</B>: agiscono in maniera tale da portare a termine i loro obiettivi</LI>
                        <LI><B>Socialità</B>: comunicano con gli altri agenti, scambiando informazioni</LI>
                    </ul>
                </Box>
                <Box title={"Secondo il paradigma forte"}>
                    <P>
                        Hanno anche caratteristiche di <B>livello più alto</B> derivate dalle quattro precedenti:
                    </P>
                    <ul>
                        <LI>Conoscenza</LI>
                        <LI>Intenzioni</LI>
                        <LI>Emozioni</LI>
                        <LI>Obblighi</LI>
                        <LI>Obiettivi</LI>
                        <LI>etc...</LI>
                    </ul>
                    <Example>
                        Gli umani possono benissimo essere considerati agenti del sistema universo.
                    </Example>
                </Box>
                <Box title={"Caratteristiche aggiuntive"}>
                    <P>
                        Gli agenti si distinguono anche in:
                    </P>
                    <ul>
                        <LI><B>Mobilità</B>: quanto e come possono muoversi nell'ambiente</LI>
                        <LI>
                            <B>Veridicità</B>: quanto producono informazioni corrette
                            <Example>
                                È possibile effettuare un attacco a un sistema introducendovi agenti maliziosi che
                                producono intenzionalmente informazioni sbagliate!
                            </Example>
                        </LI>
                        <LI>
                            <B>Benevolenza</B>: quanto beneficiano gli altri delle loro azioni
                            <Example>
                                <u>Agenti malevoli</u>: ad esempio, troll in siti web<br/>
                                <u>Agenti benevoli</u>: ad esempio, filtri che bannano i troll
                            </Example>
                        </LI>
                        <LI>
                            <B>Razionalità</B>: quanto le loro azioni sono coerenti con i loro obiettivi e lo stato
                                              dell'ambiente
                            <Example>
                                <u>Razionalità limitata</u>: gli agenti non conoscono completamente l'ambiente, e
                                                           compiono le azioni che suppongono essere giuste
                            </Example>
                        </LI>
                    </ul>
                </Box>
            </Split>
            <Split title={"Benefici degli agenti"}>
                <Box title={"Emergenza"}>
                    <P>
                        Lo sviluppo negli agenti di nuove capacità per cui non erano stati programmati.
                    </P>
                    <Example>
                        Ad esempio, la Swarm Intelligence, descritta dopo!
                    </Example>
                </Box>
            </Split>
            <Split title={"Architetture di agente"}>
                <Box title={"Classe"}>
                    <P>
                        Classificazione in base a <B>come prende le decisioni</B> un agente:
                    </P>
                    <ul>
                        <LI><B>Logic-based</B>: prende le decisioni attraverso deduzioni <I>logiche</I></LI>
                        <LI><B>Reactive</B>: mappa una <I>reazione</I> a ogni situazione dell'ambiente</LI>
                        <LI><B>Belief-desire-intention</B>: per decidere, considera le proprie <I>assunzioni sul
                                                                                                  mondo</I> (<I>belief</I>), i propri <I>desideri</I> (<I>desire</I>) e le
                                                          sue <I>intenzioni</I> correnti (<I>intention</I>)
                        </LI>
                        <LI><B>Layered</B>: utilizza diversi <I>strati</I> di capacità cognitive per giungere a una
                                          decisione
                        </LI>
                    </ul>
                </Box>
                <Box title={"Comportamento"}>
                    <P>
                        Classificazione in base a <B>come sono definiti gli obiettivi</B> di un agente:
                    </P>
                    <ul>
                        <LI><B>Teleonomico</B>: gli obiettivi sono predefiniti ed espliciti</LI>
                        <LI><B>Riflessivo</B>: l'agente è libero di scegliere il suo obiettivo in base alle proprie
                                             percezioni interne
                        </LI>
                    </ul>
                </Box>
                <Box title={"Conoscenze"}>
                    <P>
                        Classificazione in base a <B>quanto conosce dell'ambiente</B> un agente:
                    </P>
                    <ul>
                        <LI><B>Cognitivo</B>: l'agente è immediatamente a conoscenza di <B>tutto l'ambiente</B></LI>
                        <LI><B>Reattivo</B>: l'agente deve scoprire l'ambiente con le sue capacità sensoriali</LI>
                    </ul>
                </Box>
            </Split>
            <Split title={"Sistemi multi-agente"}>
                <Box title={"Vantaggi"}>
                    <ul>
                        <LI><B>Distribuzione</B>: più agenti possono coprire aree di ambiente più vaste, o elaborare più
                                                in fretta zone più dense di informazione
                        </LI>
                        <LI><B>Rappresentazione</B>: i sistemi multi-agente modellano più accuratamente il mondo reale
                        </LI>
                    </ul>
                </Box>
                <Box title={"Feedback"}>
                    <P>
                        Influenza esercitata dal sistema sugli agenti per guidarli verso il loro obiettivo.
                    </P>
                    <P>
                        Può essere:
                    </P>
                    <ul>
                        <LI><B className={"lime"}>Positivo</B>: incentiva gli agenti ad avere un dato comportamento</LI>
                        <LI><B className={"red"}>Negativo</B>: disincentiva gli agenti ad avere un dato comportamento</LI>
                    </ul>
                </Box>
                <Box title={"Swarm intelligence"}>
                    <P>
                        Comportamento <B>emergente</B> che si manifesta nei sistemi multiagente con tantissimi agenti.
                    </P>
                    <P>
                        Indica la capacità di risoluzione di problemi complessi attraverso la collaborazione di più
                        agenti semplici.
                    </P>
                </Box>
            </Split>
            <Split title={"Evoluzione"}>
                <Box title={"Algoritmi genetici"}>
                    <P>
                        Meccanismi simili a quelli evolutivi umani che permettono ai tratti degli agenti
                        di <B>convergere</B> verso un valore.
                    </P>
                </Box>
                <Box title={"Fitness"}>
                    <P>
                        Inizialmente definita come <B>numero di discendenti fertili</B>, solitamente indica quanto è
                        probabile che i tratti di un individuo siano passati alla generazione successiva.
                    </P>
                </Box>
                <Box title={"Cromosoma"}>
                    <P>
                        <B>Sequenza di valori</B> che definisce uno o più tratti di un individuo.
                    </P>
                </Box>
                <Box title={"Popolazione"}>
                    <P>
                        Un <B>insieme di individui</B> aventi tutti gli stessi cromosomi.
                    </P>
                </Box>
                <Box title={"Mutazione"}>
                    <P>
                        Fenomeno che causa una <B>piccola variazione casuale nei cromosomi</B> dei figli.
                    </P>
                    <P>
                        Previene la <B>convergenza prematura</B> in un sistema.
                    </P>
                </Box>
                <Box title={"Crossover"}>
                    <P>
                        Meccanismo di <B>costruzione dei cromosomi</B> in un figlio: i cromosomi dei genitori vengono
                        tagliati nello stesso punto scelto a caso, e per costruire quelli del figlio viene presa una
                        parte dal padre e l'altra parte dalla madre.
                    </P>
                    <P>
                        Può portare al miglioramento di un individuo e allo sviluppo di nuovi tratti, ma solo nelle
                        parti di cromosoma che sono diverse tra i due genitori.
                    </P>
                </Box>
                <Box title={"Schema"}>
                    <P>
                        <B>Sequenza di valori</B> all'interno di un cromosoma, che può includere anche sezioni in cui il
                                                  valore è <B>irrilevante</B>.
                    </P>
                    <P>
                        Gli algoritmi genetici permettono di trovare gli schemi con la <B>fitness più alta in
                                                                                          assoluto</B> in un tempo relativamente breve: il sistema <I>generalmente</I> favorisce gli
                        schemi corti con fitness alta.
                    </P>
                </Box>
                <Box title={"Convergenza prematura"}>
                    <P>
                        Situazione in cui si è raggiunta una soluzione non-ottimale a causa dell'assenza di novità nel
                        sistema.
                    </P>
                    <P>
                        Si può impedire con vari metodi: con la <B>mutazione</B>, introducendo <B>requisiti di
                                                                                                  località</B> per l'accoppiamento, scegliendo diversamente i genitori, etc...
                    </P>
                </Box>
            </Split>
            <Split title={"Sistema a classificatori"}>
                <Box title={"Cosa sono?"}>
                    <P>
                        Programmi che dati tanti esempi sono in grado di classificare un elemento in una o più
                        categorie.
                    </P>
                    <P>
                        Sono formati da <I>classificatori</I>, liste
                        di <I>messaggi</I>, <I>detettori</I> e <I>effettori</I>.
                    </P>
                </Box>
            </Split>
            <Split>
                <Box title={"Classificatori"}>
                    <P>
                        Strutture logiche che <B>elaborano</B> i messaggi.
                    </P>
                    <P>
                        Valutano una espressione logica (<I>condizione</I>) sui messaggi in arrivo, e se questa risulta
                        essere vera, emettono un nuovo messaggio in risposta (<I>azione</I>).
                    </P>
                    <Example>
                        Condizione e azione possono essere considerati come due cromosomi di un algoritmo genetico!
                    </Example>
                </Box>
                <Box title={"Messaggi"}>
                    <P>
                        <B>Unità di informazione</B> di un sistema a classificatori:
                                                     sono <B>generati</B> da <I>detettori</I> e <I>classificatori</I>,
                                                     e <B>consumati</B> da <I>classificatori</I> ed <I>effettori</I>.
                    </P>
                </Box>
                <Box title={"Detettori"}>
                    <P>
                        <B>Sensori</B> che percepiscono lo stato dell'ambiente esterno e lo riportano sotto forma
                                       di <I>messaggi</I>.
                    </P>
                </Box>
                <Box title={"Effettori"}>
                    <P>
                        <B>Motori</B> che rispondono ai <I>messaggi</I> effettuando una qualche azione nell'ambiente.
                    </P>
                </Box>
            </Split>
            <Split>
                <Box title={"Forza"}>
                    <P>
                        Un <B>punteggio</B> associato ad ogni classificatore.
                    </P>
                    <P>
                        Più un classificatore viene attivato, più la sua forza crescerà.
                    </P>
                    <Example>
                        I classificatori più deboli vengono lentamente eliminati!
                    </Example>
                </Box>
                <Box title={"Specificità"}>
                    <P>
                        Il <B>numero di condizioni che devono essere soddisfatte</B> perchè il classificatore si attivi.
                    </P>
                    <P>

                    </P>
                </Box>
                <Box title={"Bid"}>
                    <P>
                        <B>Prodotto</B> di specificità e forza di un classificatore.
                    </P>
                    <P>
                        Rappresenta <B>quanto è probabile che venga utilizzato</B> un dato classificatore nel caso che
                        le condizioni di più di uno vengano soddisfatte.
                    </P>
                    <Example>
                        È la fitness degli algoritmi genetici applicata ai classificatori.
                    </Example>
                </Box>
            </Split>
            <Split>
                <Box title={"Cover Detector"}>
                    <P>
                        Se l'input non soddisfa nessun classificatore esistente, se ne crea uno nuovo soddisfatto
                        dall'input attuale con una azione casuale.
                    </P>
                </Box>
                <Box title={"Cover Effector"}>
                    <P>
                        Se i classificatori emettono in output un messaggio non valido, si crea un nuovo classificatore
                        che trasforma quel messaggio in un output valido.
                    </P>
                </Box>
            </Split>
            <Split title={"Reti neurali"}>
                <Box title={"Neuroni"}>
                    <P>
                        Agenti che possono <B>collegarsi tra loro</B> tramite <I>sinapsi</I> (dirette)
                        e <B>ricevere</B> ed <B>emettere</B> <I>impulsi</I> lungo di esse.
                    </P>
                    <P>
                        Gli impulsi ricevuti vengono temporaneamente <B>memorizzati</B> dal neurone attraverso valori
                        che decadono nel tempo.
                    </P>
                    <P>
                        Se la somma dei valori di tutti gli impulsi ricevuti è <B>maggiore di una certa soglia</B>,
                        allora il neurone <B>emetterà</B> un impulso.
                    </P>
                </Box>
            </Split>
            <Split title={"Modello booleano"}>
                <Box title={"Cos'è?"}>
                    <P>
                        Un modello semplificato di rete neurale in cui vengono considerati <B>solo tempi
                                                                                              discreti</B> (<Tick>ticks</Tick>), e non è presente la memorizzazione degli impulsi nel tempo.
                    </P>
                    <P>
                        È stato sviluppato da <Anchor href={"https://it.wikipedia.org/wiki/Warren_McCulloch"}>Warren
                                                                                                         McCulloch</Anchor> (un neurofisiologo) e <Anchor
                        href={"https://it.wikipedia.org/wiki/Walter_Pitts"}
                    >Walter
                     Pitts</Anchor> (un matematico).
                    </P>
                    <Example>
                        È importante perchè dimostra che le reti neurali <B>possono elaborare qualsiasi cosa</B>, ma
                        incompleto perchè non descrive nessun metodo per la loro creazione automatica.
                    </Example>
                </Box>
                <Box title={"Neuroni"}>
                    <P>
                        I neuroni <B>si attivano</B> in un dato <Tick/> se la <B>somma dei loro
                                                                                 impulsi</B> nel <Tick/> precedente è <B>maggiore o uguale a 1</B>.
                    </P>
                </Box>
                <Box title={"Intensità sinaptica"}>
                    <P>
                        Le sinapsi hanno una <I>intensità</I>: è un <B>moltiplicatore</B> che viene applicato a tutti
                        gli impulsi transitanti la sinapsi.
                    </P>
                </Box>
            </Split>
            <Split title={"Funzioni logiche nel modello booleano"}>
                <Box title={"NOT"}>
                    <P>
                        Un neurone con una sinapsi entrante con intensità <ILatex>{r`-1`}</ILatex>.
                    </P>
                </Box>
                <Box title={"OR"}>
                    <P>
                        Un neurone con due o più sinapsi entranti con intensità <ILatex>{r`1`}</ILatex>.
                    </P>
                </Box>
                <Box title={"AND"}>
                    <P>
                        Un neurone con due o più sinapsi entranti con
                        intensità <ILatex>{r`\frac{1}{numero\ sinapsi}`}</ILatex>.
                    </P>
                </Box>
            </Split>
            <Split title={"Modello di Hopfield"}>
                <Box title={"Cos'è?"}>
                    <P>
                        Un'estensione del modello booleano per permettere l'apprendimento automatico delle
                        configurazioni giuste di neuroni.
                    </P>
                    <P>
                        È stato sviluppato da <Anchor href={"https://en.wikipedia.org/wiki/John_Hopfield"}>John
                                                                                                      Hopfield</Anchor> (uno scienziato).
                    </P>
                    <Example>
                        Non è molto avanzato, ma ha portato a ulteriori studi nel campo delle reti neurali.
                    </Example>
                </Box>
                <Box>
                    <table>
                        <thead>
                            <tr>
                                <th><Help text={"Vettore / matrice"}>v</Help></th>
                                <th><Help text={"Elemento singolo / scalare"}>s</Help></th>
                                <th>Glossario</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td/>
                                <td><BLatex>{r`t`}</BLatex></td>
                                <td><Tick>Tick</Tick> attuale</td>
                            </tr>
                            <tr>
                                <td/>
                                <td><ILatex>{r`n`}</ILatex>, <ILatex>{r`m`}</ILatex></td>
                                <td>Identificatore di un neurone specifico</td>
                            </tr>
                            <tr>
                                <td><BLatex>{r`\mathbf{W}`}</BLatex></td>
                                <td><BLatex>{r`w_{nm}`}</BLatex></td>
                                <td>Intensità della sinapsi diretta da <ILatex>{r`n`}</ILatex> verso <ILatex>{r`m`}</ILatex>
                                </td>
                            </tr>
                            <tr>
                                <td><BLatex>{r`\mathbf{\Theta}`}</BLatex></td>
                                <td><BLatex>{r`\theta_n`}</BLatex></td>
                                <td>Soglia di attivazione di un neurone</td>
                            </tr>
                            <tr>
                                <td><BLatex>{r`\mathbf{X}(t)`}</BLatex></td>
                                <td><BLatex>{r`x_n(t)`}</BLatex></td>
                                <td>Emissione di un neurone</td>
                            </tr>
                            <tr>
                                <td><BLatex>{r`\mathbf{I}(t)`}</BLatex></td>
                                <td><BLatex>{r`i_n(t)`}</BLatex></td>
                                <td>Somma degli ingressi di un neurone</td>
                            </tr>
                            <tr>
                                <td/>
                                <td><BLatex>{r`E`}</BLatex></td>
                                <td>Energia del sistema</td>
                            </tr>
                            <tr>
                                <td><BLatex>{r`\mathbf{A}`}</BLatex></td>
                                <td><BLatex>{r`a_i`}</BLatex></td>
                                <td>Stato di un neurone in un pattern</td>
                            </tr>
                            <tr>
                                <td/>
                                <td><BLatex>{r`Q(\mathbf{A}, \mathbf{B})`}</BLatex></td>
                                <td>Sovrapposizione tra due pattern</td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
            </Split>
            <Split>
                <Box title={"Emissione"}>
                    <P>
                        In ogni <Tick/>, i neuroni:
                    </P>
                    <ul>
                        <LI>Emettono <ILatex>{r`0`}</ILatex> se gli input nel <Tick/> precedente <B>erano
                                                                                                    inferiori</B> alla soglia di attivazione
                        </LI>
                        <LI>Emettono <ILatex>{r`1`}</ILatex> se gli input nel <Tick/> precedente <B>superavano</B> la
                            soglia di attivazione
                        </LI>
                        <LI>Non cambiano stato se gli input nel <Tick/> precedente <B>erano uguali</B> alla soglia di
                            attivazione
                        </LI>
                    </ul>
                </Box>
                <Box title={"Sinapsi"}>
                    <P>
                        <B>Tutti</B> i neuroni del modello sono intercollegati tra loro da sinapsi.
                    </P>
                    <P>
                        I neuroni non possono essere collegati a loro stessi.
                    </P>
                    <P>
                        Questo porta il <B>costo computazionale</B> del modello ad essere <ILatex>{r`O(n^2)`}</ILatex>.
                    </P>
                </Box>
                <Box title={"Energia"}>
                    <P>
                        Una funzione dell'intero sistema che rappresenta il totale degli stati di tutti i neuroni e
                        tutte le connessioni.
                    </P>
                    <PLatex>{r`
                        E = - \frac{1}{2} \sum_{n, m} ( w_{nm} \cdot x_n \cdot x_m ) + \sum_n ( \theta_n \cdot x_n )
                    `}</PLatex>
                </Box>
            </Split>
            <Split>
                <Box title={"Apprendimento hebbiano"}>
                    <P>
                        Un metodo per realizzare l'apprendimento nel modello di Hopfield.
                    </P>
                    <P>
                        Si incrementa l'intensità delle sinapsi che connettono neuroni nello stesso stato, e invece si
                        decrementa l'intensità di quelle che connettono neuroni in stati opposti.
                    </P>
                    <P>
                        Considerando i neuroni spenti e quelli accesi
                        come <ILatex>{r`0`}</ILatex> e <ILatex>{r`1`}</ILatex> rispettivamente, si ha che per ogni
                        pattern:
                    </P>
                    <PLatex>{r`
                        \Delta w_{ik} = (2 \cdot A_i - 1)(2 \cdot A_k - 1)
                    `}</PLatex>
                    <Example>
                        Così facendo, si insegna sia il pattern normale sia il suo complementare!
                    </Example>
                </Box>
                <Box title={"Simmetria"}>
                    <P>
                        Applicando l'apprendimento hebbiano al modello di Hopfield si ottengono sinapsi simmetriche.
                    </P>
                    <P>
                        Se è valida questa proprietà, si può dimostrare che l'<B>energia del sistema è sempre
                                                                                 decrescente</B>, e che quindi che tenderà a un punto fisso!
                    </P>
                </Box>
                <Box title={"Overlap di due pattern"}>
                    <P>
                        Il numero di neuroni attivati in entrambi i pattern.
                    </P>
                    <PLatex>{r`
                        Q(A, B) = \sum_{i = 1}^n A_i B_i
                    `}</PLatex>
                </Box>
                <Box title={"Interferenza"}>
                    <P>
                        Più pattern vengono imparati da un modello, più è facile che essi interferiscano tra loro.
                    </P>
                    <P>
                        In caso di pattern completamente scorrelati tra loro, il limite di pattern imparabili è circa:
                    </P>
                    <PLatex>
                        {r`0.14 \cdot N`}
                    </PLatex>
                </Box>
                <Box title={"Archetipi"}>
                    <P>
                        Per minimizzare l'interferenza tra pattern, è possibile insegnare al modello un <I>archetipo</I>:
                        si insegna più volte il pattern originale applicandoci una minima quantità di interferenza
                        casuale.
                    </P>
                </Box>
            </Split>
            <Split title={"Modello a percettroni"}>
                <Box title={"Cos'è?"}>
                    <P>
                        Un modello di rete neurale che supporta l'apprendimento e che presenta <B>più strati di
                                                                                                  neuroni</B>.
                    </P>
                    <P>
                        Ha costi computazionali molto più bassi del modello di Hopfield.
                    </P>
                </Box>
                <Box>
                    <table>
                        <thead>
                            <tr>
                                <th>Simbolo</th>
                                <th>Descrizione</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><BLatex>{r`N`}</BLatex></td>
                                <td>Numero totale di neuroni nel sistema</td>
                            </tr>
                            <tr>
                                <td><BLatex>{r`n`}</BLatex></td>
                                <td>Numero di un neurone specifico</td>
                            </tr>
                            <tr>
                                <td><BLatex>{r`w_{nm}`}</BLatex></td>
                                <td>Intensità della sinapsi diretta da <ILatex>{r`n`}</ILatex> verso <ILatex>{r`m`}</ILatex>
                                </td>
                            </tr>
                            <tr>
                                <td><BLatex>{r`x_n`}</BLatex></td>
                                <td>Emissione del neurone <ILatex>{r`n`}</ILatex></td>
                            </tr>
                            <tr>
                                <td><BLatex>{r`H(v)`}</BLatex></td>
                                <td>Funzione che restituisce lo stato di un neurone dato un valore di input</td>
                            </tr>
                            <tr>
                                <td><BLatex>{r`\sum_1^N ( w_n \cdot x_n )`}</BLatex></td>
                                <td>Somma degli input di un neurone</td>
                            </tr>
                            <tr>
                                <td><BLatex>{r`b`}</BLatex></td>
                                <td>Bias di un neurone</td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
            </Split>
            <Split>
                <Box title={"Percettrone"}>
                    <P>
                        Una <B>rete neurale</B> che viene incapsulata all'interno di un singolo neurone.
                    </P>
                    <P>
                        La sua emissione è determinata dalla sua funzione di emissione <ILatex>{r`H`}</ILatex>:
                    </P>
                    <PLatex>{r`
                        x_n = H \left( \sum_1^N ( w_n \cdot x_n + b) \right)
                    `}</PLatex>
                    <P>
                        <ILatex>{r`b`}</ILatex> è una costante configurabile, detta <I>bias</I>, che rappresenta il
                                                valore di partenza della somma degli input.
                    </P>
                </Box>
                <Box title={"Percettrone booleano"}>
                    <P>
                        Un percettrone la cui funzione di emissione è:
                    </P>
                    <PLatex>{r`
                        \begin{cases}
                            1 \qquad se\ v > 0\\
                            0 \qquad se\ v = 0\\
                            -1 \qquad se\ v < 0
                        \end{cases}
                    `}</PLatex>
                </Box>
                <Box title={"Apprendimento"}>
                    <P>
                        Si parte da intensità casuali delle sinapsi.
                    </P>
                    <P>
                        Si prova a classificare degli esempi pre-classificati: se un esempio viene classificato nel modo
                        sbagliato, si alterano le intensità delle sinapsi in direzione della sua classificazione
                        corretta.
                    </P>
                    <P>
                        Nel caso che vi siano più strati di neuroni, allora sarà necessario ricorrere alla <Anchor
                        href={"https://en.wikipedia.org/wiki/Backpropagation"}
                    >backpropagation</Anchor>, che stima l'errore
                        di classificazione di ogni singolo neurone e li corregge di conseguenza.
                    </P>
                </Box>
            </Split>
            <Split title={"Rete feed-forward"}>
                <Box title={"Cos'è?"}>
                    <P>
                        Un modello a percettroni in cui <B>non si presentano cicli</B>.
                    </P>
                    <P>
                        Alcuni dei neuroni che vi sono all'interno saranno dunque dei <B>neuroni sorgente</B> e dei <B>neuroni
                                                                                                                       pozzo</B>.
                    </P>
                </Box>
            </Split>
        </div>
    )
}
