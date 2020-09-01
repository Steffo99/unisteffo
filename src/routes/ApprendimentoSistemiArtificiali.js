import {BLatex, ILatex, Panel, PLatex, Section, TablePanel, Timer, Todo} from "bluelib";
import Example from "../components/Example";
import Tick from "../components/ApprendimentoSistemiArtificiali/Tick";
import MenuList from "../components/MenuList";
import Link from "../components/Link";

const r = String.raw;


export default function (props) {
    return (
        <div>
            <h1>Apprendimento ed evoluzione in sistemi artificiali</h1>
            <Section title={"Esame"}>
                <Panel title={"Contatti"}>
                    <ul>
                        <li><Link href={"mailto:marco.villani@unimore.it"}>Prof. Marco Villani</Link></li>
                    </ul>
                </Panel>
                <Panel title={"Scritto"}>
                    <ul>
                        <li>Scegli 2 tra 6 domande possibili</li>
                        <li>90 minuti</li>
                    </ul>
                </Panel>
            </Section>
            <Section title={"NetLogo"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        NetLogo è un software di modellazione sistemi multiagente, da noi usato per le lezioni di
                        laboratorio.
                    </p>
                    <p>
                        Si può <a href={"https://ccl.northwestern.edu/netlogo/download.shtml"}>scaricare</a> o <a
                        href={"https://www.netlogoweb.org/launch"}>usare da browser</a>.
                    </p>
                    <p>
                        Il suo codice sorgente è disponibile su <a
                        href={"https://github.com/NetLogo/NetLogo"}>GitHub</a>, e ha una pagina di <a
                        href={"https://ccl.northwestern.edu/netlogo/docs/dictionary.html"}>documentazione</a>.
                    </p>
                    <MenuList>
                        <li><Link href={"/apprendimento/netlogo"}>Appunti di NetLogo</Link></li>
                    </MenuList>
                </Panel>
            </Section>
            <Section title={"Sistemi dinamici"}>
                <Panel title={"Cosa sono?"}>
                    <p>
                        Sistemi naturali o artificiali che si basano su <b>leggi reversibili e deterministiche</b>.
                    </p>
                    <p>
                        In natura, alcuni leggi possono sembrare irreversibili a livello macroscopico, ma sono in realtà
                        reversibili a livello microscopico.
                    </p>
                    <Example>
                        <p>
                            <a href={"https://it.wikipedia.org/wiki/Modello_di_Ehrenfest"}><u>Urne di Ehrenfest</u></a>:
                            due urne con N palline; estraggo una pallina da una urna casuale ad ogni passo e la sposto
                            nell'altra; con tante palline il sistema appare irreversibile.
                        </p>
                    </Example>
                </Panel>
                <Panel title={"Fasi"}>
                    <p>
                        <b>Stati</b> in cui si può trovare un sistema dinamico.
                    </p>
                    <p>
                        Tutte insieme formano lo <i>(iper)<b>spazio delle fasi</b></i>.
                    </p>
                </Panel>
                <Panel title={"Attrattore"}>
                    <p>
                        Lo <b>stato finale</b> di un sistema dinamico.
                    </p>
                    <p>
                        Tutte le fasi tendono a uno specifico attrattore.
                    </p>
                </Panel>
                <Panel title={"Elaborazione di informazione"}>
                    <p>
                        I sistemi dinamici <b>elaborano informazione</b> attraversando fasi e raggiungendo un
                        attrattore.
                    </p>
                    <Example>
                        L'evoluzione biologica crea nuove specie partendo da quelle precedenti di maggiore successo fino
                        a quando non si raggiunge la specie perfetta.
                    </Example>
                    <Example>
                        Si può vedere l'universo come un gigantesco sistema dinamico. <a
                        href={"https://it.wikipedia.org/wiki/Ipotesi_della_simulazione"}>Che sia artificiale?</a> <a
                        href={"https://it.wikipedia.org/wiki/Morte_termica_dell%27universo"}>Qual è il suo
                        attrattore?</a>
                    </Example>
                </Panel>
            </Section>
            <Section title={"Sistemi lineari"}>
                <Panel title={"Cosa sono?"}>
                    <p>
                        Sistemi dinamici i cui cambiamenti sono descritti da <b>funzioni lineari</b>.
                    </p>
                </Panel>
                <Panel title={"Nodi"}>
                    <p>
                        <b>Situazioni iniziali</b> di un sistema lineare.
                    </p>
                    <p>
                        Possono essere:
                    </p>
                    <ul>
                        <li><u>Stabili</u>: <b>convergono</b> ad un punto fisso</li>
                        <li><u>Instabili</u>: <b>divergono</b> da un punto fisso</li>
                        <li><a href={"https://it.wikipedia.org/wiki/Punto_di_sella"}><u>Di sella</u></a></li>
                    </ul>
                    <p>
                        Nell'insieme dei <ILatex>{r`\mathbb{C}`}</ILatex> possono anche dare origine a:
                    </p>
                    <ul>
                        <li><u>Spirali stabili</u>: spirali che <b>convergono</b></li>
                        <li><u>Spirali instabili</u>: spirali che <b>divergono</b></li>
                        <li><u>Cicli</u>: il sistema forma un ciclo diverso in base alla posizione del nodo</li>
                        <li><u>Cicli limite</u>: il sistema evolve fino a formare un ciclo specifico</li>
                    </ul>
                    <p>
                        Infine, in sistemi dissipativi può anche comparire:
                    </p>
                    <ul>
                        <li><u>Caos</u>: il sistema evolve in maniera pseudo-casuale</li>
                    </ul>
                    <Example>
                        Mai sentito parlare di <a href={"https://en.wikipedia.org/wiki/Mersenne_Twister"}>Mersenne
                        Twister</a>?
                    </Example>
                </Panel>
                <Panel title={"Potenziale"}>
                    <p>
                        Funzione che rappresenta lo stato attuale del sistema.
                    </p>
                    <p>
                        Gli attrattori coincidono con i suoi <b>punti di minimo</b>, detti <i>punti fissi</i>.
                    </p>
                    <p>
                        Il suo complementare è la <b>funzione energia</b>.
                    </p>
                </Panel>
            </Section>
            <Section title={"Agenti"}>
                <Panel title={"Secondo il paradigma debole"}>
                    <p>
                        Sono <b>sistemi</b> con le seguenti caratteristiche:
                    </p>
                    <ul>
                        <li><b>Autonomia</b>: agiscono gli uni indipendentemente dagli altri</li>
                        <li><b>Reattività</b>: percepiscono ciò che sta nel loro ambiente e <i>reagiscono</i> ai
                            cambiamenti di quest'ultimo
                        </li>
                        <li><b>Proattività</b>: agiscono in maniera tale da portare a termine i loro obiettivi</li>
                        <li><b>Socialità</b>: comunicano con gli altri agenti, scambiando informazioni</li>
                    </ul>
                </Panel>
                <Panel title={"Secondo il paradigma forte"}>
                    <p>
                        Hanno anche caratteristiche di <b>livello più alto</b> derivate dalle quattro precedenti:
                    </p>
                    <ul>
                        <li>Conoscenza</li>
                        <li>Intenzioni</li>
                        <li>Emozioni</li>
                        <li>Obblighi</li>
                        <li>Obiettivi</li>
                        <li>etc...</li>
                    </ul>
                    <Example>
                        Gli umani possono benissimo essere considerati agenti del sistema universo.
                    </Example>
                </Panel>
                <Panel title={"Caratteristiche aggiuntive"}>
                    <p>
                        Gli agenti si distinguono anche in:
                    </p>
                    <ul>
                        <li><b>Mobilità</b>: quanto e come possono muoversi nell'ambiente</li>
                        <li>
                            <b>Veridicità</b>: quanto producono informazioni corrette
                            <Example>
                                È possibile effettuare un attacco a un sistema introducendovi agenti maliziosi che
                                producono intenzionalmente informazioni sbagliate!
                            </Example>
                        </li>
                        <li>
                            <b>Benevolenza</b>: quanto beneficiano gli altri delle loro azioni
                            <Example>
                                <u>Agenti malevoli</u>: ad esempio, troll in siti web<br/>
                                <u>Agenti benevoli</u>: ad esempio, filtri che bannano i troll
                            </Example>
                        </li>
                        <li>
                            <b>Razionalità</b>: quanto le loro azioni sono coerenti con i loro obiettivi e lo stato
                            dell'ambiente
                            <Example>
                                <u>Razionalità limitata</u>: gli agenti non conoscono completamente l'ambiente, e
                                compiono le azioni che suppongono essere giuste
                            </Example>
                        </li>
                    </ul>
                </Panel>
            </Section>
            <Section title={"Benefici degli agenti"}>
                <Panel title={"Emergenza"}>
                    <p>
                        Lo sviluppo negli agenti di nuove capacità per cui non erano stati programmati.
                    </p>
                    <Example>
                        Ad esempio, la Swarm Intelligence, descritta dopo!
                    </Example>
                </Panel>
            </Section>
            <Section title={"Architetture di agente"}>
                <Panel title={"Classe"}>
                    <p>
                        Classificazione in base a <b>come prende le decisioni</b> un agente:
                    </p>
                    <ul>
                        <li><b>Logic-based</b>: prende le decisioni attraverso deduzioni <i>logiche</i></li>
                        <li><b>Reactive</b>: mappa una <i>reazione</i> a ogni situazione dell'ambiente</li>
                        <li><b>Belief-desire-intention</b>: per decidere, considera le proprie <i>assunzioni sul
                            mondo</i> (<i>belief</i>), i propri <i>desideri</i> (<i>desire</i>) e le
                            sue <i>intenzioni</i> correnti (<i>intention</i>)
                        </li>
                        <li><b>Layered</b>: utilizza diversi <i>strati</i> di capacità cognitive per giungere a una
                            decisione
                        </li>
                    </ul>
                </Panel>
                <Panel title={"Comportamento"}>
                    <p>
                        Classificazione in base a <b>come sono definiti gli obiettivi</b> di un agente:
                    </p>
                    <ul>
                        <li><b>Teleonomico</b>: gli obiettivi sono predefiniti ed espliciti</li>
                        <li><b>Riflessivo</b>: l'agente è libero di scegliere il suo obiettivo in base alle proprie
                            percezioni interne
                        </li>
                    </ul>
                </Panel>
                <Panel title={"Conoscenze"}>
                    <p>
                        Classificazione in base a <b>quanto conosce dell'ambiente</b> un agente:
                    </p>
                    <ul>
                        <li><b>Cognitivo</b>: l'agente è immediatamente a conoscenza di <b>tutto l'ambiente</b></li>
                        <li><b>Reattivo</b>: l'agente deve scoprire l'ambiente con le sue capacità sensoriali</li>
                    </ul>
                </Panel>
            </Section>
            <Section title={"Sistemi multi-agente"}>
                <Panel title={"Vantaggi"}>
                    <ul>
                        <li><b>Distribuzione</b>: più agenti possono coprire aree di ambiente più vaste, o elaborare più
                            in fretta zone più dense di informazione
                        </li>
                        <li><b>Rappresentazione</b>: i sistemi multi-agente modellano più accuratamente il mondo reale
                        </li>
                    </ul>
                </Panel>
                <Panel title={"Feedback"}>
                    <p>
                        Influenza esercitata dal sistema sugli agenti per guidarli verso il loro obiettivo.
                    </p>
                    <p>
                        Può essere:
                    </p>
                    <ul>
                        <li><b class={"lime"}>Positivo</b>: incentiva gli agenti ad avere un dato comportamento</li>
                        <li><b class={"red"}>Negativo</b>: disincentiva gli agenti ad avere un dato comportamento</li>
                    </ul>
                </Panel>
                <Panel title={"Swarm intelligence"}>
                    <p>
                        Comportamento <b>emergente</b> che si manifesta nei sistemi multiagente con tantissimi agenti.
                    </p>
                    <p>
                        Indica la capacità di risoluzione di problemi complessi attraverso la collaborazione di più
                        agenti semplici.
                    </p>
                </Panel>
            </Section>
            <Section title={"Evoluzione"}>
                <Panel title={"Algoritmi genetici"}>
                    <p>
                        Meccanismi simili a quelli evolutivi umani che permettono ai tratti degli agenti
                        di <b>convergere</b> verso un valore.
                    </p>
                </Panel>
                <Panel title={"Fitness"}>
                    <p>
                        Inizialmente definita come <b>numero di discendenti fertili</b>, solitamente indica quanto è
                        probabile che i tratti di un individuo siano passati alla generazione successiva.
                    </p>
                </Panel>
                <Panel title={"Cromosoma"}>
                    <p>
                        <b>Sequenza di valori</b> che definisce uno o più tratti di un individuo.
                    </p>
                </Panel>
                <Panel title={"Popolazione"}>
                    <p>
                        Un <b>insieme di individui</b> aventi tutti gli stessi cromosomi.
                    </p>
                </Panel>
                <Panel title={"Mutazione"}>
                    <p>
                        Fenomeno che causa una <b>piccola variazione casuale nei cromosomi</b> dei figli.
                    </p>
                    <p>
                        Previene la <b>convergenza prematura</b> in un sistema.
                    </p>
                </Panel>
                <Panel title={"Crossover"}>
                    <p>
                        Meccanismo di <b>costruzione dei cromosomi</b> in un figlio: i cromosomi dei genitori vengono
                        tagliati nello stesso punto scelto a caso, e per costruire quelli del figlio viene presa una
                        parte dal padre e l'altra parte dalla madre.
                    </p>
                    <p>
                        Può portare al miglioramento di un individuo e allo sviluppo di nuovi tratti, ma solo nelle
                        parti di cromosoma che sono diverse tra i due genitori.
                    </p>
                </Panel>
                <Panel title={"Schema"}>
                    <p>
                        <b>Sequenza di valori</b> all'interno di un cromosoma, che può includere anche sezioni in cui il
                        valore è <b>irrilevante</b>.
                    </p>
                    <p>
                        Gli algoritmi genetici permettono di trovare gli schemi con la <b>fitness più alta in
                        assoluto</b> in un tempo relativamente breve: il sistema <i>generalmente</i> favorisce gli
                        schemi corti con fitness alta.
                    </p>
                </Panel>
                <Panel title={"Convergenza prematura"}>
                    <p>
                        Situazione in cui si è raggiunta una soluzione non-ottimale a causa dell'assenza di novità nel
                        sistema.
                    </p>
                    <p>
                        Si può impedire con vari metodi: con la <b>mutazione</b>, introducendo <b>requisiti di
                        località</b> per l'accoppiamento, scegliendo diversamente i genitori, etc...
                    </p>
                </Panel>
            </Section>
            <Section title={"Sistema a classificatori"}>
                <Panel title={"Cosa sono?"}>
                    <p>
                        Programmi che dati tanti esempi sono in grado di classificare un elemento in una o più
                        categorie.
                    </p>
                    <p>
                        Sono formati da <i>classificatori</i>, liste
                        di <i>messaggi</i>, <i>detettori</i> e <i>effettori</i>.
                    </p>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Classificatori"}>
                    <p>
                        Strutture logiche che <b>elaborano</b> i messaggi.
                    </p>
                    <p>
                        Valutano una espressione logica (<i>condizione</i>) sui messaggi in arrivo, e se questa risulta
                        essere vera, emettono un nuovo messaggio in risposta (<i>azione</i>).
                    </p>
                    <Example>
                        Condizione e azione possono essere considerati come due cromosomi di un algoritmo genetico!
                    </Example>
                </Panel>
                <Panel title={"Messaggi"}>
                    <p>
                        <b>Unità di informazione</b> di un sistema a classificatori:
                        sono <b>generati</b> da <i>detettori</i> e <i>classificatori</i>,
                        e <b>consumati</b> da <i>classificatori</i> ed <i>effettori</i>.
                    </p>
                </Panel>
                <Panel title={"Detettori"}>
                    <p>
                        <b>Sensori</b> che percepiscono lo stato dell'ambiente esterno e lo riportano sotto forma
                        di <i>messaggi</i>.
                    </p>
                </Panel>
                <Panel title={"Effettori"}>
                    <p>
                        <b>Motori</b> che rispondono ai <i>messaggi</i> effettuando una qualche azione nell'ambiente.
                    </p>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Forza"}>
                    <p>
                        Un <b>punteggio</b> associato ad ogni classificatore.
                    </p>
                    <p>
                        Più un classificatore viene attivato, più la sua forza crescerà.
                    </p>
                    <Example>
                        I classificatori più deboli vengono lentamente eliminati!
                    </Example>
                </Panel>
                <Panel title={"Specificità"}>
                    <p>
                        Il <b>numero di condizioni che devono essere soddisfatte</b> perchè il classificatore si attivi.
                    </p>
                    <p>

                    </p>
                </Panel>
                <Panel title={"Bid"}>
                    <p>
                        <b>Prodotto</b> di specificità e forza di un classificatore.
                    </p>
                    <p>
                        Rappresenta <b>quanto è probabile che venga utilizzato</b> un dato classificatore nel caso che
                        le condizioni di più di uno vengano soddisfatte.
                    </p>
                    <Example>
                        È la fitness degli algoritmi genetici applicata ai classificatori.
                    </Example>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Cover Detector"}>
                    <p>
                        Se l'input non soddisfa nessun classificatore esistente, se ne crea uno nuovo soddisfatto
                        dall'input attuale con una azione casuale.
                    </p>
                </Panel>
                <Panel title={"Cover Effector"}>
                    <p>
                        Se i classificatori emettono in output un messaggio non valido, si crea un nuovo classificatore
                        che trasforma quel messaggio in un output valido.
                    </p>
                </Panel>
            </Section>
            <Section title={"Reti neurali"}>
                <Panel title={"Neuroni"}>
                    <p>
                        Agenti che possono <b>collegarsi tra loro</b> tramite <i>sinapsi</i> (dirette)
                        e <b>ricevere</b> ed <b>emettere</b> <i>impulsi</i> lungo di esse.
                    </p>
                    <p>
                        Gli impulsi ricevuti vengono temporaneamente <b>memorizzati</b> dal neurone attraverso valori
                        che decadono nel tempo.
                    </p>
                    <p>
                        Se la somma dei valori di tutti gli impulsi ricevuti è <b>maggiore di una certa soglia</b>,
                        allora il neurone <b>emetterà</b> un impulso.
                    </p>
                </Panel>
            </Section>
            <Section title={"Modello booleano"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Un modello semplificato di rete neurale in cui vengono considerati <b>solo tempi
                        discreti</b> (<Tick>ticks</Tick>), e non è presente la memorizzazione degli impulsi nel tempo.
                    </p>
                    <p>
                        È stato sviluppato da <a href={"https://it.wikipedia.org/wiki/Warren_McCulloch"}>Warren
                        McCulloch</a> (un neurofisiologo) e <a href={"https://it.wikipedia.org/wiki/Walter_Pitts"}>Walter
                        Pitts</a> (un matematico).
                    </p>
                    <Example>
                        È importante perchè dimostra che le reti neurali <b>possono elaborare qualsiasi cosa</b>, ma
                        incompleto perchè non descrive nessun metodo per la loro creazione automatica.
                    </Example>
                </Panel>
                <Panel title={"Neuroni"}>
                    <p>
                        I neuroni <b>si attivano</b> in un dato <Tick/> se la <b>somma dei loro
                        impulsi</b> nel <Tick/> precedente è <b>maggiore o uguale a 1</b>.
                    </p>
                </Panel>
                <Panel title={"Intensità sinaptica"}>
                    <p>
                        Le sinapsi hanno una <i>intensità</i>: è un <b>moltiplicatore</b> che viene applicato a tutti
                        gli impulsi transitanti la sinapsi.
                    </p>
                </Panel>
            </Section>
            <Section title={"Funzioni logiche nel modello booleano"}>
                <Panel title={"NOT"}>
                    <p>
                        Un neurone con una sinapsi entrante con intensità <ILatex>{r`-1`}</ILatex>.
                    </p>
                </Panel>
                <Panel title={"OR"}>
                    <p>
                        Un neurone con due o più sinapsi entranti con intensità <ILatex>{r`1`}</ILatex>.
                    </p>
                </Panel>
                <Panel title={"AND"}>
                    <p>
                        Un neurone con due o più sinapsi entranti con
                        intensità <ILatex>{r`\frac{1}{numero\ sinapsi}`}</ILatex>.
                    </p>
                </Panel>
            </Section>
            <Section title={"Modello di Hopfield"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Un'estensione del modello booleano per permettere l'apprendimento automatico delle
                        configurazioni giuste di neuroni.
                    </p>
                    <p>
                        È stato sviluppato da <a href={"https://en.wikipedia.org/wiki/John_Hopfield"}>John
                        Hopfield</a> (uno scienziato).
                    </p>
                    <Example>
                        Non è molto avanzato, ma ha portato a ulteriori studi nel campo delle reti neurali.
                    </Example>
                </Panel>
                <TablePanel>
                    <thead>
                    <tr>
                        <th><abbr title={"Vettore / matrice"}>v</abbr></th>
                        <th><abbr title={"Elemento singolo / scalare"}>s</abbr></th>
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
                </TablePanel>
            </Section>
            <Section>
                <Panel title={"Emissione"}>
                    <p>
                        In ogni <Tick/>, i neuroni:
                    </p>
                    <ul>
                        <li>Emettono <ILatex>{r`0`}</ILatex> se gli input nel <Tick/> precedente <b>erano
                            inferiori</b> alla soglia di attivazione
                        </li>
                        <li>Emettono <ILatex>{r`1`}</ILatex> se gli input nel <Tick/> precedente <b>superavano</b> la
                            soglia di attivazione
                        </li>
                        <li>Non cambiano stato se gli input nel <Tick/> precedente <b>erano uguali</b> alla soglia di
                            attivazione
                        </li>
                    </ul>
                </Panel>
                <Panel title={"Sinapsi"}>
                    <p>
                        <b>Tutti</b> i neuroni del modello sono intercollegati tra loro da sinapsi.
                    </p>
                    <p>
                        I neuroni non possono essere collegati a loro stessi.
                    </p>
                    <p>
                        Questo porta il <b>costo computazionale</b> del modello ad essere <ILatex>{r`O(n^2)`}</ILatex>.
                    </p>
                </Panel>
                <Panel title={"Energia"}>
                    <p>
                        Una funzione dell'intero sistema che rappresenta il totale degli stati di tutti i neuroni e
                        tutte le connessioni.
                    </p>
                    <PLatex>{r`
                        E = - \frac{1}{2} \sum_{n, m} ( w_{nm} \cdot x_n \cdot x_m ) + \sum_n ( \theta_n \cdot x_n )
                    `}</PLatex>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Apprendimento hebbiano"}>
                    <p>
                        Un metodo per realizzare l'apprendimento nel modello di Hopfield.
                    </p>
                    <p>
                        Si incrementa l'intensità delle sinapsi che connettono neuroni nello stesso stato, e invece si
                        decrementa l'intensità di quelle che connettono neuroni in stati opposti.
                    </p>
                    <p>
                        Considerando i neuroni spenti e quelli accesi
                        come <ILatex>{r`0`}</ILatex> e <ILatex>{r`1`}</ILatex> rispettivamente, si ha che per ogni
                        pattern:
                    </p>
                    <PLatex>{r`
                        \Delta w_{ik} = (2 \cdot A_i - 1)(2 \cdot A_k - 1)
                    `}</PLatex>
                    <Example>
                        Così facendo, si insegna sia il pattern normale sia il suo complementare!
                    </Example>
                </Panel>
                <Panel title={"Simmetria"}>
                    <p>
                        Applicando l'apprendimento hebbiano al modello di Hopfield si ottengono sinapsi simmetriche.
                    </p>
                    <p>
                        Se è valida questa proprietà, si può dimostrare che l'<b>energia del sistema è sempre
                        decrescente</b>, e che quindi che tenderà a un punto fisso!
                    </p>
                    <p>
                        <Todo>TODO: Dopo il prof dimostra la relazione tra input netto e overlap, e che il sistema
                            converge al pattern più simile.</Todo>
                    </p>
                </Panel>
                <Panel title={"Overlap di due pattern"}>
                    <p>
                        Il numero di neuroni attivati in entrambi i pattern.
                    </p>
                    <PLatex>{r`
                        Q(A, B) = \sum_{i = 1}^n A_i B_i
                    `}</PLatex>
                </Panel>
                <Panel title={"Interferenza"}>
                    <p>
                        Più pattern vengono imparati da un modello, più è facile che essi interferiscano tra loro.
                    </p>
                    <p>
                        In caso di pattern completamente scorrelati tra loro, il limite di pattern imparabili è circa:
                    </p>
                    <PLatex>
                        {r`0.14 \cdot N`}
                    </PLatex>
                </Panel>
                <Panel title={"Archetipi"}>
                    <p>
                        Per minimizzare l'interferenza tra pattern, è possibile insegnare al modello un <i>archetipo</i>:
                        si insegna più volte il pattern originale applicandoci una minima quantità di interferenza
                        casuale.
                    </p>
                </Panel>
            </Section>
            <Section title={"Modello a percettroni"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Un modello di rete neurale che supporta l'apprendimento e che presenta <b>più strati di
                        neuroni</b>.
                    </p>
                    <p>
                        Ha costi computazionali molto più bassi del modello di Hopfield.
                    </p>
                </Panel>
                <TablePanel>
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
                </TablePanel>
            </Section>
            <Section>
                <Panel title={"Percettrone"}>
                    <p>
                        Una <b>rete neurale</b> che viene incapsulata all'interno di un singolo neurone.
                    </p>
                    <p>
                        La sua emissione è determinata dalla sua funzione di emissione <ILatex>{r`H`}</ILatex>:
                    </p>
                    <PLatex>{r`
                        x_n = H \left( \sum_1^N ( w_n \cdot x_n + b) \right)
                    `}</PLatex>
                    <p>
                        <ILatex>{r`b`}</ILatex> è una costante configurabile, detta <i>bias</i>, che rappresenta il
                        valore di partenza della somma degli input.
                    </p>
                </Panel>
                <Panel title={"Percettrone booleano"}>
                    <p>
                        Un percettrone la cui funzione di emissione è:
                    </p>
                    <PLatex>{r`
                        \begin{cases}
                            1 \qquad se\ v > 0\\
                            0 \qquad se\ v = 0\\
                            -1 \qquad se\ v < 0
                        \end{cases}
                    `}</PLatex>
                </Panel>
                <Panel title={"Apprendimento"}>
                    <p>
                        Si parte da intensità casuali delle sinapsi.
                    </p>
                    <p>
                        Si prova a classificare degli esempi pre-classificati: se un esempio viene classificato nel modo
                        sbagliato, si alterano le intensità delle sinapsi in direzione della sua classificazione
                        corretta.
                    </p>
                    <p>
                        Nel caso che vi siano più strati di neuroni, allora sarà necessario ricorrere alla <a
                        href={"https://en.wikipedia.org/wiki/Backpropagation"}>backpropagation</a>, che stima l'errore
                        di classificazione di ogni singolo neurone e li corregge di conseguenza.
                    </p>
                </Panel>
            </Section>
            <Section title={"Rete feed-forward"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Un modello a percettroni in cui <b>non si presentano cicli</b>.
                    </p>
                    <p>
                        Alcuni dei neuroni che vi sono all'interno saranno dunque dei <b>neuroni sorgente</b> e dei <b>neuroni
                        pozzo</b>.
                    </p>
                </Panel>
            </Section>
        </div>
    )
}
