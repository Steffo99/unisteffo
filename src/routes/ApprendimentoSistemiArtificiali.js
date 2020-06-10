import {Component} from 'preact'
import Section from "../components/Elements/Section";
import Panel from "../components/Elements/Panel";
import Example from "../components/Elements/Example";
import Code from "../components/Rendering/Code";
import Timer from "../components/Elements/Timer";
import Todo from "../components/Elements/Todo";


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
                        Più un classificatore viene attivato, più la sua forza crescerà. <Todo>TODO: siamo sicuri?</Todo>
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
                        Se l'input non soddisfa nessun classificatore esistenze, se ne crea uno nuovo con azione casuale.
                    </p>
                </Panel>
                <Panel title={"Cover Effector"}>
                    <p>
                        Se non viene prodotto nessun messaggio valido di output, si genera un nuovo classificatore che ne produce uno casuale a partire dall'input.
                    </p>
                    <Todo>TODO: che differenza c'è con un detector?</Todo>
                </Panel>
            </Section>
        </div>
    )
}
