import Section from "../components/Elements/Section";
import Panel from "../components/Elements/Panel";
import Example from "../components/Elements/Example";
import Timer from "../components/Elements/Timer";
import Todo from "../components/Elements/Todo";
import ILatex from "../components/Rendering/ILatex";
import TablePanel from "../components/Elements/TablePanel";
import BLatex from "../components/Rendering/BLatex";
import PLatex from "../components/Rendering/PLatex";

const r = String.raw;


export default function(props) {
    return (
        <div>
            <h1>Apprendimento ed evoluzione in sistemi artificiali</h1>
            <Section title={"Informazioni"}>
                <Panel title={"Contatti"}>
                    <ul>
                        <li><a href={"mailto:marco.villani@unimore.it"}>Prof. Marco Villani</a></li>
                    </ul>
                </Panel>
                <Panel title={"Archivio"}>
                    <p>
                        Se sei uno <b>studente dell'Unimore</b>, puoi accedere all'<b><a href={"https://drive.google.com/drive/folders/1GcjP1Z5UtRjyAag7qjFQ-kx3s06G8ZoP"}>archivio del corso su Google Drive</a></b>.
                    </p>
                </Panel>
            </Section>
            <Section title={"Esame"}>
                <Panel title={"Scritto"}>
                    <ul>
                        <li>Scegli 2 tra 6 domande possibili</li>
                        <li>90 minuti</li>
                    </ul>
                </Panel>
                <Panel title={"Appelli"}>
                    <ol>
                        <li><Timer to={"2020-06-23"}/></li>
                        <li><Timer to={"2020-07-08"}/></li>
                        <li><Timer to={"2020-07-22"}/></li>
                    </ol>
                </Panel>
            </Section>
            <Section title={"NetLogo"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        NetLogo è un software di modellazione sistemi multiagente, da noi usato per le lezioni di laboratorio.
                    </p>
                    <p>
                        Si può <a href={"https://ccl.northwestern.edu/netlogo/download.shtml"}>scaricare</a> o <a href={"https://www.netlogoweb.org/launch"}>usare da browser</a>.
                    </p>
                    <p>
                        Il suo codice sorgente è disponibile su <a href={"https://github.com/NetLogo/NetLogo"}>GitHub</a>, e ha una pagina di <a href={"https://ccl.northwestern.edu/netlogo/docs/dictionary.html"}>documentazione</a>.
                    </p>
                    <p>
                        <b style={"font-size: x-large;"}><a href={"/apprendimento/netlogo"}>Consulta i miei appunti su NetLogo qui!</a></b>
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
                        <li><b>Reattività</b>: percepiscono ciò che sta nel loro ambiente e <i>reagiscono</i> ai cambiamenti di quest'ultimo</li>
                        <li><b>Proattività</b>: agiscono in maniera tale da portare a termine i loro obiettivi</li>
                        <li><b>Socialità</b>: comunicano con gli altri agenti, scambiando informazioni</li>
                    </ul>
                </Panel>
                <Panel title={"Secondo il paradigma forte"}>
                    <p>
                        Hanno anche caratteristiche di livello più alto derivate dalle quattro precedenti:
                    </p>
                    <ul>
                        <li>Conoscenza</li>
                        <li>Intenzioni</li>
                        <li>Emozioni</li>
                        <li>Obblighi</li>
                        <li>Obiettivi</li>
                        <li>etc...</li>
                    </ul>
                </Panel>
                <Panel title={"Caratteristiche aggiuntive"}>
                    <p>
                        Gli agenti solitamente hanno anche:
                    </p>
                    <ul>
                        <li><b>Mobilità</b>: possono muoversi nell'ambiente</li>
                        <li><b>Veridicità</b>: producono informazioni corrette</li>
                        <li><b>Benevolenza</b>: agiscono nel modo corretto</li>
                        <li><b>Razionalità</b>: compiono le azioni necessarie per raggiungere i loro obiettivi, e non altre che glielo impedirebbero</li>
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
                        <li><b>Belief-desire-intention</b>: per decidere, considera le proprie <i>assunzioni sul mondo</i> (<i>belief</i>), i propri <i>desideri</i> (<i>desire</i>) e le sue <i>intenzioni</i> correnti (<i>intention</i>)</li>
                        <li><b>Layered</b>: utilizza diversi <i>strati</i> di capacità cognitive per giungere a una decisione</li>
                    </ul>
                </Panel>
                <Panel title={"Comportamento"}>
                    <p>
                        Classificazione in base a <b>come sono definiti gli obiettivi</b> di un agente:
                    </p>
                    <ul>
                        <li><b>Teleonomico</b>: gli obiettivi sono predefiniti ed espliciti</li>
                        <li><b>Riflessivo</b>: l'agente è libero di scegliere il suo obiettivo in base alle proprie percezioni interne</li>
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
                        <li><b>Distribuzione</b>: più agenti possono coprire aree di ambiente più vaste, o elaborare più in fretta zone più dense di informazione</li>
                        <li><b>Rappresentazione</b>: i sistemi multi-agente modellano più accuratamente il mondo reale</li>
                    </ul>
                </Panel>
                <Panel title={"Swarm intelligence"}>
                    <p>
                        Comportamento <b>emergente</b> che si manifesta nei sistemi multiagente con tantissimi agenti.
                    </p>
                    <p>
                        Indica la capacità di risoluzione di problemi complessi attraverso la collaborazione di più agenti semplici.
                    </p>
                </Panel>
            </Section>
            <Section title={"Evoluzione"}>
                <Panel title={"Algoritmi genetici"}>
                    <p>
                        Meccanismi simili a quelli evolutivi umani che permettono ai tratti degli agenti di <b>convergere</b> verso un valore.
                    </p>
                </Panel>
                <Panel title={"Fitness"}>
                    <p>
                        Inizialmente definita come <b>numero di discendenti fertili</b>, solitamente indica quanto è probabile che i tratti di un individuo siano passati alla generazione successiva.
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
                        Meccanismo di <b>costruzione dei cromosomi</b> in un figlio: i cromosomi dei genitori vengono tagliati nello stesso punto scelto a caso, e per costruire quelli del figlio viene presa una parte dal padre e l'altra parte dalla madre.
                    </p>
                    <p>
                        Può portare al miglioramento di un individuo e allo sviluppo di nuovi tratti, ma solo nelle parti di cromosoma che sono diverse tra i due genitori.
                    </p>
                </Panel>
                <Panel title={"Schema"}>
                    <p>
                        <b>Sequenza di valori</b> all'interno di un cromosoma, che può includere anche sezioni in cui il valore è <b>irrilevante</b>.
                    </p>
                    <p>
                        Gli algoritmi genetici permettono di trovare gli schemi con la <b>fitness più alta in assoluto</b> in un tempo relativamente breve: il sistema <i>generalmente</i> favorisce gli schemi corti con fitness alta.
                    </p>
                </Panel>
                <Panel title={"Convergenza prematura"}>
                    <p>
                        Situazione in cui si è raggiunta una soluzione non-ottimale a causa dell'assenza di novità nel sistema.
                    </p>
                    <p>
                        Si può impedire con vari metodi: con la <b>mutazione</b>, introducendo <b>requisiti di località</b> per l'accoppiamento, scegliendo diversamente i genitori, etc...
                    </p>
                </Panel>
            </Section>
            <Section title={"Sistema a classificatori"}>
                <Panel title={"Cosa sono?"}>
                    <p>
                        Programmi che dati tanti esempi sono in grado di classificare un elemento in una o più categorie.
                    </p>
                    <p>
                        Sono formati da <i>classificatori</i>, liste di <i>messaggi</i>, <i>detettori</i> e <i>effettori</i>.
                    </p>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Classificatori"}>
                    <p>
                        Strutture logiche che <b>elaborano</b> i messaggi.
                    </p>
                    <p>
                        Valutano una espressione logica (<i>condizione</i>) sui messaggi in arrivo, e se questa risulta essere vera, emettono un nuovo messaggio in risposta (<i>azione</i>).
                    </p>
                    <Example>
                        Condizione e azione possono essere considerati come due cromosomi di un algoritmo genetico!
                    </Example>
                </Panel>
                <Panel title={"Messaggi"}>
                    <p>
                        <b>Unità di informazione</b> di un sistema a classificatori: sono <b>generati</b> da <i>detettori</i> e <i>classificatori</i>, e <b>consumati</b> da <i>classificatori</i> ed <i>effettori</i>.
                    </p>
                </Panel>
                <Panel title={"Detettori"}>
                    <p>
                        <b>Sensori</b> che percepiscono lo stato dell'ambiente esterno e lo riportano sotto forma di <i>messaggi</i>.
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
                </Panel>
                <Panel title={"Bid"}>
                    <p>
                        <b>Prodotto</b> di specificità e forza di un classificatore.
                    </p>
                    <p>
                        Rappresenta <b>quanto è probabile che venga utilizzato</b> un dato classificatore nel caso che le condizioni di più di uno vengano soddisfatte.
                    </p>
                    <Example>
                        La fitness degli algoritmi genetici.
                    </Example>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Cover Detector"}>
                    <p>
                        Se l'input non soddisfa nessun classificatore esistente, se ne crea uno nuovo con una azione casuale.
                    </p>
                </Panel>
                <Panel title={"Cover Effector"}>
                    <p>
                        Se i classificatori emettono in output un messaggio
                    </p>
                </Panel>
            </Section>
            <Section title={"Reti neurali"}>
                <Panel title={"Cognitivismo"}>
                    <p>
                        Non è importante l'architettura fisica di un intelligenza, ma solo la sua <b>capacità di elaborare simboli</b>.
                    </p>
                    <Todo>
                        TODO: è una teoria, una filosofia o cosa? Come si collega alla <a href={"https://it.wikipedia.org/wiki/Stanza_cinese"}>Stanza Cinese</a>?
                    </Todo>
                </Panel>
                <Panel title={"Neuroni"}>
                    <p>
                        Agenti che possono <b>collegarsi tra loro</b> tramite <i>sinapsi</i> (dirette) e <b>ricevere</b> ed <b>emettere</b> <i>impulsi</i> lungo di esse.
                    </p>
                    <p>
                        Gli impulsi ricevuti vengono temporaneamente <b>memorizzati</b> dal neurone attraverso valori che decadono nel tempo.
                    </p>
                    <p>
                        Se la somma dei valori di tutti gli impulsi ricevuti è <b>maggiore di una certa soglia</b>, allora il neurone <b>emetterà</b> un impulso.
                    </p>
                </Panel>
            </Section>
            <Section title={"Modello booleano"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Un modello semplificato di rete neurale in cui vengono considerati <b>solo tempi discreti</b>, e non è presente la memorizzazione degli impulsi nel tempo.
                    </p>
                    <Example>
                        È importante perchè dimostra che le reti neurali <b>possono elaborare qualsiasi cosa</b>, ma incompleto perchè non descrive nessun metodo per la loro creazione automatica.
                    </Example>
                </Panel>
                <Panel title={"Neuroni"}>
                    <p>
                        I neuroni emettono in un dato istante se la <b>somma dei loro impulsi nell'istante precedente è maggiore o uguale a 1</b>.
                    </p>
                </Panel>
                <Panel title={"Intensità sinaptica"}>
                    <p>
                        Le sinapsi hanno una <i>intensità</i>: è un <b>moltiplicatore</b> che viene applicato a tutti gli impulsi transitanti la sinapsi.
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
                        Un neurone con due o più sinapsi entranti con intensità <ILatex>{r`\frac{1}{numero\ sinapsi}`}</ILatex>.
                    </p>
                </Panel>
            </Section>
            <Section title={"Modello di Hopfield"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Un'estensione del modello booleano per permettere l'apprendimento automatico delle configurazioni giuste di neuroni.
                    </p>
                    <p>
                        Tra le altre cose, <b>proibisce sinapsi entranti e uscenti dallo stesso neurone</b>.
                    </p>
                    <p>
                        Non è molto avanzato e funzionale, ma incentiva ulteriori studi nel campo.
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
                            <td>Intensità della sinapsi diretta da <ILatex>{r`n`}</ILatex> verso <ILatex>{r`m`}</ILatex></td>
                        </tr>
                        <tr>
                            <td><BLatex>{r`\theta_n`}</BLatex></td>
                            <td>Soglia di attivazione del neurone <ILatex>{r`n`}</ILatex></td>
                        </tr>
                        <tr>
                            <td><BLatex>{r`x_n(t)`}</BLatex></td>
                            <td>Emissione del neurone <ILatex>{r`n`}</ILatex> nel momento <ILatex>{r`t`}</ILatex></td>
                        </tr>
                        <tr>
                            <td><BLatex>{r`X(t)`}</BLatex></td>
                            <td>Vettore contenente tutte le emissioni dei neuroni nel momento <ILatex>{r`t`}</ILatex></td>
                        </tr>
                        <tr>
                            <td><BLatex>{r`I_n(X(t))`}</BLatex></td>
                            <td>Somma degli ingressi del neurone <ILatex>{r`n`}</ILatex> nel momento <ILatex>{r`t`}</ILatex></td>
                        </tr>
                        <tr>
                            <td><BLatex>{r`A`}</BLatex></td>
                            <td>Un pattern di neuroni</td>
                        </tr>
                        <tr>
                            <td><BLatex>{r`a_i`}</BLatex></td>
                            <td>Un neurone appartenente a un pattern</td>
                        </tr>
                        <tr>
                            <td><BLatex>{r`Q(A, B)`}</BLatex></td>
                            <td>Sovrapposizione tra il pattern <ILatex>{r`A`}</ILatex> e il pattern <ILatex>{r`B`}</ILatex></td>
                        </tr>
                    </tbody>
                </TablePanel>
                <Panel title={"Evoluzione del sistema"}>
                    <p>
                        In ogni istante, i neuroni emettono:
                    </p>
                    <ul>
                        <li><ILatex>{r`0`}</ILatex> se gli input <b>sono inferiori alla soglia</b></li>
                        <li><ILatex>{r`1`}</ILatex> se gli input <b>superano la soglia</b></li>
                        <li><b>il valore precedente</b> se gli input <b>sono uguali alla soglia</b></li>
                    </ul>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Simmetria"}>
                    <p>
                        Se le connessioni sono simmetriche, la rete neurale tenderà a un punto fisso: il sistema evolve fino a raggiungere un attrattore.
                    </p>
                    <p>
                        <Todo>TODO: E quindi...?</Todo>
                    </p>
                </Panel>
                <Panel title={"Apprendimento hebbiano"}>
                    <p>
                        Un metodo per realizzare l'apprendimento nel modello di Hopfield.
                    </p>
                    <p>
                        Si incrementa l'intensità delle sinapsi che connettono neuroni nello stesso stato, e invece si decrementa l'intensità di quelle che connettono neuroni in stati opposti.
                    </p>
                    <p>
                        Considerando i neuroni spenti e quelli accesi come <ILatex>{r`0`}</ILatex> e <ILatex>{r`1`}</ILatex> rispettivamente, si ha che per ogni pattern:
                    </p>
                    <PLatex>{r`
                        \Delta w_{ik} = (2 \cdot A_i - 1)(2 \cdot A_k - 1)
                    `}</PLatex>
                    <Example>
                        Così facendo, si insegna sia il pattern normale sia il suo complementare!
                    </Example>
                    <p>
                        <Todo>TODO: Dopo ci sono tante dimostrazioni...</Todo>
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
            </Section>
            <Section title={"Modello a percettroni"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Un modello di rete neurale che supporta l'apprendimento e che presenta <b>più strati di neuroni</b>.
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
                            <td>Intensità della sinapsi diretta da <ILatex>{r`n`}</ILatex> verso <ILatex>{r`m`}</ILatex></td>
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
                            <td><BLatex>{r`x_0`}</BLatex></td>
                            <td>Neurone di offset</td>
                        </tr>
                    </tbody>
                </TablePanel>
            </Section>
            <Section>
                <Panel title={"Percettrone"}>
                    <p>
                        <b>Neurone terminale</b> di una rete di percettroni.
                    </p>
                    <p>
                        Utilizza un <b>semipiano di attivazione</b> invece che una soglia.
                    </p>
                    <p>
                        Ai neuroni in input si aggiunge un neurone speciale <ILatex>{r`x_0`}</ILatex> detto <b>neurone di offset</b> che permette di semplificare la formula.
                    </p>
                    <p>
                        <Todo>TODO: scrivere e imparare le formule</Todo>
                    </p>
                </Panel>
                <Panel title={"Apprendimento"}>
                    <p>
                        Si parte da intensità casuali delle sinapsi.
                    </p>
                    <p>
                        Si prova a classificare degli esempi pre-classificati: se un esempio viene classificato nel modo sbagliato, si alterano le intensità delle sinapsi in direzione della sua classificazione corretta.
                    </p>
                </Panel>
            </Section>
        </div>
    )
}
