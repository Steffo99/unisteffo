import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex, Code} from "bluelib";
import Link from "../../../components/Link";

const r = String.raw;


export default function () {
    return (
        <Fragment>
            <h1><Link href={"/ottimizzazionelineare"}>Ottimizzazione lineare intera</Link></h1>
            <h1>GLPK/MathProg/GMPL</h1>
            <Section>
                <Panel title={"Parametri"}>
                    <p>
                        Valori che sono calcolati <b>al momento della compilazione</b> del programma:
                    </p>
                    <Code>
                        param nomeparametro;
                    </Code>
                    <p>
                        Si possono assegnare valori ai parametri nel codice con:
                    </p>
                    <Code>
                        nomeparametro := 123 + 234;
                    </Code>
                </Panel>
                <Panel title={"Set"}>
                    <p>
                        Insiemi di parametri:
                    </p>
                    <Code>
                        set NOMESET;
                    </Code>
                    <p>
                        Si possono definire i contenuti dei set con:
                    </p>
                    <Code>{r`
                        set DA_UNO_A_DIECI := 1 .. 10;
                        set DA_UNO_A_PARAMETRO := 1 .. parametro;
                    `}</Code>
                    <p>
                        Si possono effettuare operazioni su set con:
                    </p>
                    <Code>{r`
                        set UNIONE := SET_A union SET_B;
                        set INTERSEZIONE := SET_A inter SET_B;
                    `}</Code>
                </Panel>
                <Panel title={"Variabili"}>
                    <p>
                        Valori che sono <b>calcolati al momento dell'esecuzione</b> del programma:
                    </p>
                    <Code>
                        var nomevariabile;
                    </Code>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Requisiti"}>
                    <p>
                        È possibile richiedere che un parametro o una variabile soddisfino certi <i>requisiti</i>.
                    </p>
                    <p>
                        Si può richiedere che <b>siano  <ILatex>{r`\geq`}</ILatex> o <ILatex>{r`\leq`}</ILatex> di un certo valore</b>:
                    </p>
                    <Code>{r`
                        param positivo, > 0;
                        var non_positiva, <= 0;
                    `}</Code>
                    <p>
                        Si può richiedere che <b>appartengano a un dato set</b>:
                    </p>
                    <Code>{r`
                        param intero_positivo, integer, > 0;
                        var zero_oppure_uno, binary;
                    `}</Code>
                </Panel>
                <Panel title={"Indici"}>
                    <p>
                        È possibile creare anche un "array" di parametri o variabili:
                    </p>
                    <Code>{r`
                        param dieci_parametri{1..10};
                        var quadrato{1..10, 1..10};
                        var cubo{1..10, 1..10, 1..10};
                    `}</Code>
                    <p>
                        Si possono usare anche set:
                    </p>
                    <Code>{r`
                        param dieci_parametri{DA_UNO_A_DIECI};
                    `}</Code>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Funzione obiettivo"}>
                    <p>
                        La funzione obiettivo <b>può comparire solo una volta</b> nel programma.
                    </p>
                    <p>
                        Si definisce con:
                    </p>
                    <Code>{r`
                        minimize valore_ottimo_min: espressione;
                        maximize valore_ottimo_max: espressione;
                    `}</Code>
                </Panel>
                <Panel title={"Vincoli"}>
                    <p>
                        I vincoli a cui sono soggette le variabili si definiscono con:
                    </p>
                    <Code>{r`
                        nome_vincolo_1: espressione <= 1;
                        nome_vincolo_2: espressione >= parametro;
                    `}</Code>
                    <p>
                        I vincoli possono essere indicizzati:
                    </p>
                    <Code language={"gmpl"}>{r`
                        // La diagonale del quadrato deve essere minore di 1
                        v_3{i in DA_UNO_A_DIECI}: quadrato[i, i] <= 1;
                        
                        // Tutti i valori del quadrato devono essere minori o uguali a 1
                        v_4{i in DA_UNO_A_DIECI, j in DA_UNO_A_DIECI}: quadrato[i, j] <= 1;
                    `}</Code>
                    <p>
                        Esistono anche operatori aggregati:
                    </p>
                    <Code language={"gmpl"}>{r`
                        // La somma degli elementi della diagonale deve essere maggiore o uguale a 0
                        v_5: sum{i in DA_UNO_A_DIECI} quadrato[i, i] >= 0;
                        
                        // Il prodotto degli elementi della diagonale deve essere maggiore o uguale a 0
                        v_6: prod{i in DA_UNO_A_DIECI} quadrato[i, i] >= 0;
                    `}</Code>
                    <p>
                        Si possono anche aggiungere requisiti agli indici:
                    </p>
                    <Code>{r`
                        v_7: sum{i in DA_UNO_A_DIECI, i <= 5} quadrato[i, i] >= 0;
                        
                        v_8: prod{i in SET, i not in ALTRO_SET} quadrato[i, i] >= 0;
                    `}</Code>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Termine del programma"}>
                    <p>
                        Perchè il programma calcoli i valori di tutte le variabili, è necessaria l'istruzione:
                    </p>
                    <Code>{r`
                        solve;
                    `}</Code>
                    <p>
                        Per stampare i valori calcolati, è possibile usare:
                    </p>
                    <Code>{r`
                        printf "%d \n", nomevar;
                    `}</Code>
                    <p>
                        Eventualmente, anche in un ciclo for:
                    </p>
                    <Code>{r`
                        for{i in DA_UNO_A_DIECI} {
                            printf "%d: %d \n", i, x[i];
                        }
                    `}</Code>
                </Panel>
                <Panel title={"Compilare ed eseguire"}>
                    <p>
                        Per compilare ed eseguire il programma, è sufficiente eseguire:
                    </p>
                    <Code language={"bash"}>
                        glpsol --math nomefile.mod
                    </Code>
                    <p>
                        È possibile specificare i dati in un file separato da quello del modello; in tal caso, si dovrà eseguire:
                    </p>
                    <Code language={"bash"}>
                        glpsol --math -m modello.mod -d dati.mod
                    </Code>
                    <p>
                        Per salvare i risultati su file e visualizzarli a schermo:
                    </p>
                    <Code language={"bash"}>
                        glpsol --math nomefile.mod | tee risultati.txt
                    </Code>
                </Panel>
            </Section>
        </Fragment>
    )
}
