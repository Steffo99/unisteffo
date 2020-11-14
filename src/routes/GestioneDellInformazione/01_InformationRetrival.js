import {Panel, Section} from "bluelib";
import {Fragment} from "preact";
import Example from "../../components/Example";
import Link from "../../components/Link";

const r = String.raw;


export default function (props) {
    return (
        <Fragment>
            <Section title={"Information Retrieval (IR)"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        <b>Processo</b> di <b>raccolta</b> e <b>recupero approssimato</b> di informazioni spesso <b>non strutturate</b>.
                    </p>
                    <p>
                        Riceve in input una <b>query</b>, elabora <b>documenti</b> e restituisce una <b>risposta</b> più rilevante possibile.
                    </p>
                    <p>
                        Un'applicazione che effettua IR si chiama <b>motore di ricerca</b>.
                    </p>
                </Panel>
            </Section>
            <Section title={"Query"}>
                <Panel title={"User Information Need (UIN)"}>
                    <p>
                        La <b>richiesta</b> di informazioni effettuata da un utente <b>in linguaggio naturale</b>.
                    </p>
                </Panel>
                <Panel title={"Query"}>
                    <p>
                        La <b>traduzione</b> dell'UIN in un linguaggio <b>specifico al motore di ricerca</b>.
                    </p>
                    <p>
                        La complessità di questo linguaggio dipende dall'utilizzatore del motore di ricerca: il suo <b>livello di esperienza</b>, il suo <b>background di conoscenze</b> e il <b>livello di approfondimento desiderato</b>.
                    </p>
                </Panel>
            </Section>
            <Section title={"Query languages"}>
                <Panel title={"Keyword-based query"}>
                    <Example>
                         <Link href={"https://it.wikipedia.org/w/index.php?search=&title=Speciale:Ricerca&go=Go"}>Wikipedia</Link> e la <Link href={"https://telegram.org/blog/shared-files#multisearch"}>ricerca di Telegram</Link> usano un linguaggio di query <i>keyword-based</i>.
                    </Example>
                    <p>
                        Definisce <b>parole chiave</b> da cercare all'interno dei documenti.
                    </p>
                    <p>
                        In essi, è possibile cercare <b>molteplici</b> parole chiave, <b>concatenarle</b> per formare una <b>frase</b> oppure cercare parole a una data <b>prossimità</b> l'una dall'altra.
                    </p>
                    <p>
                        Spesso processa il linguaggio naturale per trasformarne le parole specifiche in parole chiave più generiche.
                    </p>
                    <Example>
                        Cercando su Telegram un plurale inglese, verranno restituiti anche i messaggi che riportano la stessa parola ma al singolare.
                    </Example>
                </Panel>
                <Panel title={"Pattern-based query"}>
                    <Example>
                        Le <Link href={"https://regex101.com/"}>regex</Link> e i <Link href={"https://en.wikipedia.org/wiki/Glob_(programming)"}>glob</Link> sono due dei pattern-based query languages più comuni.
                    </Example>
                    <p>
                        Definisce <b>parti di testo</b> da cercare all'interno dei documenti.
                    </p>
                    <p>
                        Permettono dunque la ricerca di <b>prefissi</b>, <b>suffissi</b>, <b>sottostringhe</b> e <b>intervalli</b>.
                    </p>
                </Panel>
                <Panel title={"Boolean query"}>
                    <Example>
                        <Link href={"https://www.google.it/"}>Google</Link>, <Link href={"https://duckduckgo.com/"}>DuckDuckGo</Link>, <Link href={"https://www.ecosia.org/"}>Ecosia</Link> usano tutti un linguaggio di query keyword-based booleano.
                    </Example>
                    <p>
                        <b>Estendono</b> gli altri tipi di query permettendo l'inserimento di <b>operatori booleani</b> (<code>AND</code>, <code>OR</code> e <code>NOT</code>) tra le parole chiave.
                    </p>
                    <Example>
                        Per esempi sulla sintassi per effettuare ricerche booleane su Google, visita <Link href={"https://www.google.it/advanced_search"}>Google Advanced Search</Link>.
                    </Example>
                </Panel>
                <Panel title={"Structural query"}>
                    <Example>
                        <Link href={"https://books.google.com/advanced_book_search"}>Google Books</Link> permette di sfruttare la struttura fissa delle informazioni sui libri (titolo, autore, editore...) per ottenere risultati più precisi.,
                    </Example>
                    <p>
                        Permettono di effettuare i precedenti tipi di query su <b>specifiche parti della struttura</b> dei documenti.
                    </p>
                </Panel>
                <Panel title={"Concept-based query"}>
                    <Example>
                        <Link href={"https://www.ncbi.nlm.nih.gov/mesh"}>MeSH</Link> cataloga i paper di medicina caricati su PubMed organizzandoli in una gerarchia di categorie.
                    </Example>
                    <p>
                        Limitano le keyword a un <b>vocabolario predefinito</b> utilizzato anche dai documenti.
                    </p>
                </Panel>
            </Section>
        </Fragment>
    )
}
